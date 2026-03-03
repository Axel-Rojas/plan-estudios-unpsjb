"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import type { Materia, EstadoMateria, RequisitoComplementario } from "../types";

export interface WidgetProgresoProps {
    materias: Materia[];
    requisitos?: RequisitoComplementario[];
    getEstado: (codigo: string) => EstadoMateria;
}

function useNumeroAnimado(objetivo: number, duracion = 800) {
    const [mostrado, setMostrado] = useState(objetivo);
    const refAnterior = useRef(objetivo);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const from = refAnterior.current;
        const to = objetivo;
        if (from === to) return;

        const startTime = performance.now();

        const animar = (now: number) => {
            const elapsed = now - startTime;
            const progreso = Math.min(elapsed / duracion, 1);
            const eased = 1 - Math.pow(1 - progreso, 3);
            setMostrado(Math.round(from + (to - from) * eased));

            if (progreso < 1) {
                rafRef.current = requestAnimationFrame(animar);
            } else {
                refAnterior.current = to;
            }
        };

        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(animar);

        return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
    }, [objetivo, duracion]);

    return mostrado;
}

export default function WidgetProgreso({ materias, requisitos = [], getEstado }: WidgetProgresoProps) {
    const { aprobadas, total, pct } = useMemo(() => {
        const regulares = materias.filter((m) => !m.esOptativa);

        const grupos = [
            ...new Set(
                materias
                    .filter((m) => m.esOptativa && m.codigo !== "OP1" && m.codigo !== "OP2")
                    .map((m) => m.grupoOptativa)
                    .filter((g): g is string => Boolean(g))
            ),
        ];

        const totalItems = regulares.length + grupos.length + requisitos.length;

        const aprobRegulares = regulares.filter(
            (m) => getEstado(m.codigo) === "aprobada"
        ).length;

        const aprobOptativas = grupos.filter((grupo) =>
            materias
                .filter(
                    (m) =>
                        m.esOptativa &&
                        m.grupoOptativa === grupo &&
                        m.codigo !== "OP1" &&
                        m.codigo !== "OP2"
                )
                .some((m) => getEstado(m.codigo) === "aprobada")
        ).length;

        const aprobRequisitos = requisitos.filter(
            (r) => getEstado(r.codigo) === "aprobada"
        ).length;

        const cursadasAprobadas = aprobRegulares + aprobOptativas + aprobRequisitos;
        const porcentaje = totalItems === 0 ? 0 : Math.round((cursadasAprobadas / totalItems) * 100);
        return { aprobadas: cursadasAprobadas, total: totalItems, pct: porcentaje };
    }, [materias, requisitos, getEstado]);

    const pctAnimado = useNumeroAnimado(pct);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700/60 bg-black/95 px-4 py-4 backdrop-blur-md
            md:flex md:h-[80px] md:items-center md:justify-between md:px-8">
            <div className="flex items-center gap-3 md:hidden">
                <div className="flex items-baseline gap-0.5">
                    <span className="text-4xl font-bold tabular-nums leading-none text-emerald-400">
                        {pctAnimado}
                    </span>
                    <span className="text-lg font-semibold text-emerald-500/70">%</span>
                </div>
                <div className="flex flex-1 flex-col gap-1">
                    <p className="text-xs text-slate-500">
                        {aprobadas}/{total} aprobadas
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-700 ease-out"
                            style={{ width: `${pct}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="hidden md:flex md:w-full md:items-center md:gap-8">
                <div className="flex shrink-0 items-center gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Avance
                    </p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold tabular-nums leading-none text-emerald-400">
                            {pctAnimado}
                        </span>
                        <span className="text-lg font-semibold text-emerald-500/70">%</span>
                    </div>
                </div>

                <div className="flex flex-1 flex-col justify-center gap-1.5">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-700 ease-out"
                            style={{ width: `${pct}%` }}
                        />
                    </div>
                </div>

                <div className="shrink-0 text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">{aprobadas}</span> de {total} materias aprobadas
                </div>
            </div>
        </div>
    );
}
