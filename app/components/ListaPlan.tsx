"use client";

import { useMemo, useState } from "react";
import ModalSeleccionOptativa from "./ModalSeleccionOptativa";
import { Materia, EstadoMateria } from "../types";
import {
    obtenerMateriasVisibles,
    obtenerMateriasOptativas,
} from "../lib/diagrama";
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export interface ListaPlanProps {
    materias: Materia[];
    getEstado: (codigo: string) => EstadoMateria;
    handleCicloEstado: (codigo: string) => void;
    estaDesbloqueada: (codigo: string) => boolean;
    getOptativaElegida: (grupo: string) => string | undefined;
    setOptativaElegida: (grupo: string, codigo: string) => void;
}

const ETIQUETAS_ESTADO: Record<EstadoMateria, string> = {
    pendiente: "Pendiente",
    en_curso: "En curso",
    regular: "Regular",
    aprobada: "Aprobada",
};

const COLORES_ESTADO_TEXTO: Record<EstadoMateria, string> = {
    pendiente: "text-slate-500 dark:text-slate-400",
    en_curso: "text-cyan-700 dark:text-cyan-400 font-bold",
    regular: "text-amber-600 dark:text-amber-400",
    aprobada: "text-emerald-600 dark:text-emerald-400",
};

const SIGUIENTE_ESTADO: Record<EstadoMateria, EstadoMateria> = {
    pendiente: "en_curso",
    en_curso: "regular",
    regular: "aprobada",
    aprobada: "pendiente",
};

export default function ListaPlan({
    materias,
    getEstado,
    handleCicloEstado,
    estaDesbloqueada,
    getOptativaElegida,
    setOptativaElegida,
}: ListaPlanProps) {
    const [modalOptativa, setModalOptativa] = useState<{ slotCodigo: string; grupo: string; optativasPosibles: any[] } | null>(null);

    const materiasVisibles = useMemo(() => {
        const visibles = obtenerMateriasVisibles(materias);
        return visibles.map(m => {
            if (m.esOptativa && m.grupoOptativa && getOptativaElegida) {
                const optCodigo = getOptativaElegida(m.codigo);
                if (optCodigo) {
                    const optDetalles = materias.find(opt => opt.codigo === optCodigo);
                    if (optDetalles) {
                        return { ...m, correlativas: optDetalles.correlativas };
                    }
                }
            }
            return m;
        });
    }, [materias, getOptativaElegida]);

    const materiasOptativas = useMemo(() => obtenerMateriasOptativas(materias), [materias]);

    const agrupadasPorAnio = useMemo(() => {
        const grupos: Record<number, Record<number, Materia[]>> = {};
        for (const m of materiasVisibles) {
            if (!grupos[m.año]) grupos[m.año] = { 0: [], 1: [], 2: [] };
            grupos[m.año][m.cuatrimestre].push(m);
        }
        return grupos;
    }, [materiasVisibles]);

    const aniosOrdenados = Object.keys(agrupadasPorAnio).map(Number).sort((a, b) => a - b);

    const getLabelPeriodo = (cuatri: number) => {
        if (cuatri === 0) return "A";
        if (cuatri === 1) return "1C";
        return "2C";
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-0 md:px-4 pb-24 md:pb-32 pt-6">
            <div className="flex flex-col gap-12">
                {aniosOrdenados.map((anio) => {
                    const cuatris = agrupadasPorAnio[anio];
                    const periodosAMostrar = [0, 1, 2].filter(c => cuatris[c].length > 0);

                    return (
                        <div key={anio} className="flex flex-col md:border-l-4 md:border-cyan-500/30 md:pl-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-cyan-700 dark:text-cyan-400 mb-4 md:mb-6 px-4 md:px-0">
                                {anio}° AÑO
                            </h2>
                            <div className="overflow-x-auto md:rounded-lg border-y md:border-x border-slate-200 dark:border-slate-800 shadow-sm">
                                <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                    <thead className="bg-slate-50 text-xs uppercase text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                                        <tr>
                                            <th scope="col" className="px-4 py-3 font-semibold w-16 text-center">Período</th>
                                            <th scope="col" className="px-4 py-3 font-semibold">Código</th>
                                            <th scope="col" className="px-4 py-3 font-semibold">Materia</th>
                                            <th scope="col" className="px-4 py-3 font-semibold hidden md:table-cell">Correlativas</th>
                                            <th scope="col" className="px-4 py-3 font-semibold">Estado</th>
                                            <th scope="col" className="px-4 py-3 font-semibold text-right">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-[#0f1520]">
                                        {periodosAMostrar.map(cuatri => {
                                            const lblCuatri = getLabelPeriodo(cuatri);
                                            return cuatris[cuatri].map((materia) => {
                                                const isOptativa = materia.esOptativa && materia.grupoOptativa;
                                                const codigoOptElegida = isOptativa && getOptativaElegida ? getOptativaElegida(materia.codigo) : undefined;
                                                const optativasPosibles = isOptativa ? materiasOptativas.filter(m => m.grupoOptativa === materia.grupoOptativa) : [];
                                                const optativaDetalles = codigoOptElegida && optativasPosibles.length > 0
                                                    ? optativasPosibles.find(omp => omp.codigo === codigoOptElegida)
                                                    : null;

                                                const nombreAMostrar = optativaDetalles ? optativaDetalles.nombre : materia.nombre;
                                                const codigoAMostrar = optativaDetalles ? optativaDetalles.codigo : materia.codigo;
                                                const condicionAMostrar = optativaDetalles && optativaDetalles.correlativas.length > 0
                                                    ? optativaDetalles.correlativas.join(", ")
                                                    : materia.condicion || (materia.correlativas && materia.correlativas.length > 0 ? materia.correlativas.join(", ") : undefined);

                                                const estadoMostrar = optativaDetalles ? getEstado(optativaDetalles.codigo) : getEstado(materia.codigo);
                                                const isBloqueada = !estaDesbloqueada(materia.codigo);

                                                const getRowStyles = () => {
                                                    if (isBloqueada) return "bg-slate-50/50 dark:bg-[#0a0f18]/50 opacity-70 grayscale";
                                                    if (estadoMostrar === "aprobada") return "bg-emerald-50/30 dark:bg-emerald-950/20";
                                                    if (estadoMostrar === "regular") return "bg-amber-50/30 dark:bg-amber-950/20";
                                                    if (estadoMostrar === "en_curso") return "bg-cyan-50/50 dark:bg-cyan-950/20 border-l-4 border-cyan-600";
                                                    return "hover:bg-slate-50 dark:hover:bg-slate-800/50";
                                                };

                                                return (
                                                    <tr key={materia.codigo} className={`transition-colors ${getRowStyles()}`}>
                                                        <td className="px-4 py-3 font-bold text-center text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/30 border-r border-slate-100 dark:border-slate-800/50">
                                                            {lblCuatri}
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap font-mono text-xs">
                                                            {codigoAMostrar}
                                                        </td>
                                                        <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                                                            {(!isOptativa || optativaDetalles) ? (
                                                                <div className="flex items-center">
                                                                    {nombreAMostrar}
                                                                    {isBloqueada && <LockOutlinedIcon fontSize="inherit" className="ml-1.5 text-slate-400" />}
                                                                </div>
                                                            ) : (
                                                                <div className="flex items-center text-slate-500 italic">
                                                                    {nombreAMostrar}
                                                                    {isBloqueada && <LockOutlinedIcon fontSize="inherit" className="ml-1.5 text-slate-400" />}
                                                                </div>
                                                            )}
                                                            <div className="md:hidden mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                                {condicionAMostrar ? `Req: ${condicionAMostrar}` : ""}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 hidden md:table-cell text-xs max-w-xs truncate" title={condicionAMostrar}>
                                                            {condicionAMostrar || "-"}
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap">
                                                            <span className={`text-xs font-semibold uppercase tracking-wider ${COLORES_ESTADO_TEXTO[estadoMostrar]}`}>
                                                                {ETIQUETAS_ESTADO[estadoMostrar]}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3 whitespace-nowrap text-right">
                                                            <div className="flex items-center justify-end gap-2">
                                                                {isOptativa ? (
                                                                    <button
                                                                        onClick={() => {
                                                                            if (materia.grupoOptativa) {
                                                                                setModalOptativa({
                                                                                    slotCodigo: materia.codigo,
                                                                                    grupo: materia.grupoOptativa,
                                                                                    optativasPosibles: optativasPosibles
                                                                                });
                                                                            }
                                                                        }}
                                                                        className="inline-flex cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-white p-1.5 text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100 transition-colors"
                                                                        title={optativaDetalles ? "Cambiar optativa" : "Elegir optativa"}
                                                                    >
                                                                        <SettingsOutlinedIcon fontSize="small" />
                                                                    </button>
                                                                ) : null}

                                                                <button
                                                                    onClick={() => {
                                                                        if (!isBloqueada) {
                                                                            handleCicloEstado(optativaDetalles ? optativaDetalles.codigo : materia.codigo);
                                                                        }
                                                                    }}
                                                                    disabled={Boolean(isBloqueada || (isOptativa && !optativaDetalles))}
                                                                    className={`inline-flex cursor-pointer items-center justify-center rounded-md border p-1.5 transition-colors shadow-sm
                                                                        ${(isBloqueada || (isOptativa && !optativaDetalles))
                                                                            ? "cursor-not-allowed border-slate-200 text-slate-400 bg-slate-50 dark:border-slate-800 dark:text-slate-600 dark:bg-transparent opacity-50"
                                                                            : estadoMostrar === "pendiente"
                                                                                ? "border-slate-300 text-slate-500 bg-white hover:bg-slate-50 hover:text-slate-700 dark:border-slate-600 dark:text-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                                                                                : estadoMostrar === "en_curso"
                                                                                    ? "border-cyan-300 text-cyan-700 bg-cyan-50 hover:bg-cyan-100 dark:border-cyan-600/50 dark:text-cyan-500 dark:bg-cyan-950/30 dark:hover:bg-cyan-900/40"
                                                                                    : estadoMostrar === "regular"
                                                                                        ? "border-amber-300 text-amber-600 bg-amber-50 hover:bg-amber-100 dark:border-amber-600/50 dark:text-amber-500 dark:bg-amber-950/30 dark:hover:bg-amber-900/40"
                                                                                        : "border-emerald-300 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 dark:border-emerald-600/50 dark:text-emerald-500 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40"
                                                                        }
                                                                    `}
                                                                    title={isBloqueada ? "Materia bloqueada por correlativas" : `Cambiar a ${ETIQUETAS_ESTADO[SIGUIENTE_ESTADO[estadoMostrar]]}`}
                                                                >
                                                                    <SyncOutlinedIcon fontSize="small" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            });
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>

            {modalOptativa && (
                <ModalSeleccionOptativa
                    grupo={modalOptativa.grupo}
                    optativas={modalOptativa.optativasPosibles}
                    estaDesbloqueada={estaDesbloqueada}
                    onClose={() => setModalOptativa(null)}
                    onSelect={(codigo) => {
                        setOptativaElegida(modalOptativa.slotCodigo, codigo);
                        setModalOptativa(null);
                    }}
                />
            )}
        </div>
    );
}
