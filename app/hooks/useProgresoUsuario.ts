"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { EstadoMateria, Materia, Carrera } from "../types";

interface ProgresoUsuario {
    carreraId: string | null;
    facultad: string | null;
    materias: Record<string, EstadoMateria>;
    optativas: Record<string, string>;
}

const STORAGE_KEY = "plan-estudios-progress";

/**
 * Migra el formato antiguo (keys sin namespace) al nuevo formato (carrera:codigo).
 * Se mantiene permanentemente para soportar usuarios que vuelvan después de mucho tiempo.
 */
function migrarProgresoV1(progreso: ProgresoUsuario): ProgresoUsuario {
    const carrera = progreso.carreraId;
    if (!carrera) return progreso;

    const nuevasMaterias: Record<string, EstadoMateria> = {};
    let necesitaMigracion = false;

    for (const [key, estado] of Object.entries(progreso.materias)) {
        if (key.includes(":")) {
            nuevasMaterias[key] = estado;
        } else {
            nuevasMaterias[`${carrera}:${key}`] = estado;
            necesitaMigracion = true;
        }
    }

    if (!necesitaMigracion) return progreso;

    const nuevasOptativas: Record<string, string> = {};
    for (const [key, codigo] of Object.entries(progreso.optativas || {})) {
        if (key.includes(":")) {
            nuevasOptativas[key] = codigo;
        } else {
            nuevasOptativas[`${carrera}:${key}`] = codigo;
        }
    }

    return { ...progreso, materias: nuevasMaterias, optativas: nuevasOptativas };
}

function cargarProgreso(): ProgresoUsuario {
    if (typeof window === "undefined") {
        return { carreraId: null, facultad: null, materias: {}, optativas: {} };
    }
    try {
        const guardado = localStorage.getItem(STORAGE_KEY);
        if (guardado) {
            const parsed = JSON.parse(guardado);
            let progreso: ProgresoUsuario = {
                ...parsed,
                optativas: parsed.optativas || {},
            };
            progreso = migrarProgresoV1(progreso);
            return progreso;
        }
    } catch { }
    return { carreraId: null, facultad: null, materias: {}, optativas: {} };
}

function guardarProgreso(progreso: ProgresoUsuario) {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progreso));
}

export function useProgresoUsuario(
    carreraEnVista?: string | null,
    todasLasCarreras: Carrera[] = []
) {
    const [progreso, setProgreso] = useState<ProgresoUsuario>({
        carreraId: null,
        facultad: null,
        materias: {},
        optativas: {},
    });

    const isFirstRender = useRef(true);

    useEffect(() => {
        const guardado = cargarProgreso();
        if (guardado.carreraId || Object.keys(guardado.materias).length > 0) {
            setProgreso(guardado);
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        guardarProgreso(progreso);
    }, [progreso]);

    // La carrera sobre la cual operamos: la que se está viendo, o la guardada.
    const carreraActual = carreraEnVista !== undefined
        ? carreraEnVista
        : progreso.carreraId;

    const actualizarProgreso = useCallback((updater: (prev: ProgresoUsuario) => ProgresoUsuario) => {
        setProgreso((prev) => updater(prev));
    }, []);

    const getEstado = useCallback(
        (codigo: string): EstadoMateria => {
            if (!carreraActual) return "pendiente";
            return progreso.materias[`${carreraActual}:${codigo}`] || "pendiente";
        },
        [progreso.materias, carreraActual]
    );

    const handleCicloEstado = useCallback((codigo: string, esRequisito: boolean = false) => {
        if (!carreraActual) return;

        actualizarProgreso((prev) => {
            const key = `${carreraActual}:${codigo}`;
            const actual = prev.materias[key] || "pendiente";
            let siguiente: EstadoMateria = "pendiente";

            if (esRequisito) {
                siguiente = actual === "pendiente" ? "aprobada" : "pendiente";
            } else {
                siguiente =
                    actual === "pendiente"
                        ? "en_curso"
                        : actual === "en_curso"
                            ? "regular"
                            : actual === "regular"
                                ? "aprobada"
                                : "pendiente";
            }

            const nuevasMaterias = { ...prev.materias, [key]: siguiente };

            // Sincronizar materias compartidas: si otra carrera tiene un código
            // con el mismo nombre, es la misma materia → sincronizar estado.
            const carreraObj = todasLasCarreras.find(c => c.nombre === carreraActual);
            const materiaActual = carreraObj?.materias.find(m => m.codigo === codigo);

            if (materiaActual) {
                for (const otraCarrera of todasLasCarreras) {
                    if (otraCarrera.nombre === carreraActual) continue;
                    const materiaCompartida = otraCarrera.materias.find(m =>
                        m.codigo === codigo && m.nombre === materiaActual.nombre
                    );
                    if (materiaCompartida) {
                        nuevasMaterias[`${otraCarrera.nombre}:${codigo}`] = siguiente;
                    }
                }
            }

            return {
                ...prev,
                materias: nuevasMaterias,
            };
        });
    }, [actualizarProgreso, carreraActual, todasLasCarreras]);

    const setCarrera = useCallback((carreraId: string | null, facultad: string | null) => {
        actualizarProgreso((prev) => ({ ...prev, carreraId, facultad }));
    }, [actualizarProgreso]);

    const getOptativaElegida = useCallback(
        (slotCodigo: string): string | undefined => {
            if (!carreraActual) return undefined;
            return progreso.optativas[`${carreraActual}:${slotCodigo}`];
        },
        [progreso.optativas, carreraActual]
    );

    const setOptativaElegida = useCallback(
        (slotCodigo: string, codigoMateria: string) => {
            if (!carreraActual) return;
            actualizarProgreso((prev) => ({
                ...prev,
                optativas: { ...prev.optativas, [`${carreraActual}:${slotCodigo}`]: codigoMateria },
            }));
        },
        [actualizarProgreso, carreraActual]
    );

    const puedeCursar = useCallback(
        (
            correlativas: string[],
            todasLasMaterias: { codigo: string; correlativas: string[] }[]
        ): boolean => {
            if (!carreraActual) return false;
            if (correlativas.length === 0) return true;
            return correlativas.every((cod) => {
                const estado = progreso.materias[`${carreraActual}:${cod}`];
                return estado === "aprobada" || estado === "regular";
            });
        },
        [progreso.materias, carreraActual]
    );

    const estaDesbloqueada = useCallback(
        (codigo: string, materias: Materia[]): boolean => {
            if (!carreraActual) return true;
            const materia = materias.find((m) => m.codigo === codigo);
            if (!materia) return true;

            let correlativasAevaluar = materia.correlativas || [];

            const esSlot = /^(optativa|electiva|actividades|asignatura)/i.test(materia.nombre);
            if (materia.esOptativa && esSlot && materia.grupoOptativa) {
                const optCodigoElegida = progreso.optativas[`${carreraActual}:${materia.codigo}`];
                if (!optCodigoElegida) return true;
                const optDetalles = materias.find(m => m.codigo === optCodigoElegida);
                if (optDetalles) {
                    correlativasAevaluar = optDetalles.correlativas || [];
                }
            }

            if (correlativasAevaluar.length === 0) return true;

            return correlativasAevaluar.every((cod) => {
                const estado = progreso.materias[`${carreraActual}:${cod}`] || "pendiente";
                return estado === "aprobada" || estado === "regular";
            });
        },
        [progreso.materias, progreso.optativas, carreraActual]
    );

    const isPrimeraVez = progreso.carreraId === null;

    return {
        progreso,
        getEstado,
        handleCicloEstado,
        setCarrera,
        puedeCursar,
        estaDesbloqueada,
        isPrimeraVez,
        getOptativaElegida,
        setOptativaElegida,
    };
}
