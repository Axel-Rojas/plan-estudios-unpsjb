"use client";

import type { RequisitoComplementario, EstadoMateria, EstadoRequisito } from "../types";
import { parsearCantidadRequerida } from "../lib/diagrama";
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
const ETIQUETAS_ESTADO: Record<EstadoRequisito, string> = {
    pendiente: "Pendiente",
    aprobada: "Cumplido",
};

const COLORES_ESTADO: Record<EstadoRequisito, string> = {
    pendiente: "border-slate-300 bg-white text-slate-500 dark:border-slate-600/40 dark:bg-[#0f1520] dark:text-slate-500",
    aprobada: "border-emerald-300 bg-emerald-50/50 text-emerald-600 dark:border-emerald-500 dark:bg-[#0a1a14] dark:text-emerald-400",
};

const SIGUIENTE_ESTADO: Record<EstadoRequisito, EstadoRequisito> = {
    pendiente: "aprobada",
    aprobada: "pendiente",
};

export interface SeccionRequisitosProps {
    requisitos: RequisitoComplementario[];
    getEstado: (codigo: string) => EstadoMateria;
    handleCicloEstado: (codigo: string) => void;
    conteoAprobadas?: number;
}

export default function SeccionRequisitos({
    requisitos,
    getEstado,
    handleCicloEstado,
    conteoAprobadas,
}: SeccionRequisitosProps) {
    return (
        <div className="mx-auto max-w-[1600px] px-6 pb-32 pt-4">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700/50" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    Otros Requisitos para el Título
                </span>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700/50" />
            </div>
            <p className="mb-4 text-center text-xs text-slate-600 dark:text-slate-400">
                Para acceder al título de grado, el alumno debe cumplimentar las actividades complementarias indicadas a continuación.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {requisitos.map((req) => {
                    const requeridas = parsearCantidadRequerida(req.condicion);
                    const esBloqueado = requeridas !== null && conteoAprobadas !== undefined && conteoAprobadas < requeridas;

                    const estadoCrudo = getEstado(req.codigo);
                    const estado: EstadoRequisito = (estadoCrudo === "regular" || estadoCrudo === "aprobada") ? "aprobada" : "pendiente";

                    return (
                        <div
                            key={req.codigo}
                            className={`relative rounded-lg border-2 px-3 py-2.5 transition-all duration-300 ${esBloqueado ? "border-slate-200 bg-slate-200/60 opacity-60 grayscale dark:border-slate-600/40 dark:bg-[#0f1520]/80" : COLORES_ESTADO[estado]}`}
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                                    {req.codigo}
                                </span>
                                <span className="text-xs font-medium leading-tight text-slate-800 dark:text-slate-100">
                                    {req.nombre}
                                </span>
                                {requeridas !== null && conteoAprobadas !== undefined ? (
                                    <span className={`text-[10px] ${esBloqueado ? "text-slate-500" : "text-emerald-600 dark:text-emerald-400"}`}>
                                        {conteoAprobadas}/{requeridas} aprobadas
                                    </span>
                                ) : req.condicion ? (
                                    <span className="text-[10px] text-slate-500">
                                        Req: {req.condicion}
                                    </span>
                                ) : null}
                                <div className="mt-1 flex items-center justify-between">
                                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${estado === "aprobada" && !esBloqueado ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500"}`}>
                                        {esBloqueado ? "Bloqueado" : ETIQUETAS_ESTADO[estado]}
                                    </span>
                                    <button
                                        onClick={() => handleCicloEstado(req.codigo)}
                                        disabled={esBloqueado}
                                        className={`flex cursor-pointer items-center justify-center rounded-md px-2.5 py-1 text-xs font-semibold border min-w-[36px] text-center transition-colors ${esBloqueado
                                            ? "cursor-not-allowed border-slate-200 text-slate-400 bg-slate-50 opacity-50 dark:border-slate-800 dark:text-slate-600 dark:bg-transparent"
                                            : estado === "pendiente"
                                                ? "border-slate-300 text-slate-500 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                                                : "border-emerald-300 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-600/50 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
                                            }`}
                                        title={esBloqueado ? "Requisito bloqueado" : `Cambiar a ${ETIQUETAS_ESTADO[SIGUIENTE_ESTADO[estado]]}`}
                                    >
                                        <SyncOutlinedIcon fontSize="inherit" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
