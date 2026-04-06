"use client";
import React, { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { EstadoMateria } from "../types";

export interface DatosMateria {
    codigo: string;
    nombre: string;
    condicion?: string;
    esOptativa?: boolean;
    grupoOptativa?: string;
}

export interface OptativaPosible {
    codigo: string;
    nombre: string;
    correlativas: string[];
}


export interface MateriaCardProps {
    materia: DatosMateria;
    estado: EstadoMateria;
    isDestacada: boolean;
    isSeleccionada: boolean;
    isAtenuada: boolean;
    isBloqueada: boolean;
    onSeleccionar: (codigo: string) => void;
    onCiclarEstado: (codigo: string) => void;
    refTarjeta: (el: HTMLDivElement | null) => void;
    optativasPosibles?: OptativaPosible[];
    getEstadoInfo?: (codigo: string) => EstadoMateria;
    getOptativaElegida?: (slotCodigo: string) => string | undefined;
    onAbrirModalOptativa?: (slotCodigo: string, grupo: string, optativas: OptativaPosible[]) => void;
}

const ETIQUETAS_ESTADO: Record<EstadoMateria, string> = {
    pendiente: "Pendiente",
    en_curso: "En curso",
    regular: "Regular",
    aprobada: "Aprobada",
};

const COLORES_ESTADO: Record<EstadoMateria, string> = {
    pendiente: "text-slate-500 dark:text-slate-500",
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

export default function MateriaCard({
    materia,
    estado,
    isDestacada,
    isSeleccionada,
    isAtenuada,
    isBloqueada,
    onSeleccionar,
    onCiclarEstado,
    refTarjeta,
    optativasPosibles,
    getEstadoInfo,
    getOptativaElegida,
    onAbrirModalOptativa,
}: MateriaCardProps) {
    const isOptativa = materia.esOptativa && materia.grupoOptativa;
    const codigoOptElegida = isOptativa && getOptativaElegida ? getOptativaElegida(materia.codigo) : undefined;

    const optativaDetalles = codigoOptElegida && optativasPosibles
        ? optativasPosibles.find(omp => omp.codigo === codigoOptElegida)
        : null;

    const nombreAMostrar = optativaDetalles ? optativaDetalles.nombre : materia.nombre;
    const codigoAMostrar = optativaDetalles ? optativaDetalles.codigo : materia.codigo;
    const condicionAMostrar = optativaDetalles && optativaDetalles.correlativas.length > 0
        ? optativaDetalles.correlativas.join(", ")
        : materia.condicion;

    const getRealEstado = () => {
        if (!optativaDetalles) return estado;
        if (getEstadoInfo) return getEstadoInfo(optativaDetalles.codigo);
        return estado;
    }

    const estadoMostrar = getRealEstado();

    const getEstilosEstado = () => {
        if (isSeleccionada || isDestacada) {
            switch (estado) {
                case "aprobada":
                    return "border-emerald-500 bg-emerald-50 dark:bg-[#0a1a14] shadow-[0_0_12px_rgba(52,211,153,0.3)]";
                case "regular":
                    return "border-amber-500 bg-amber-50 dark:bg-[#1a1508] shadow-[0_0_12px_rgba(251,191,36,0.3)]";
                case "en_curso":
                    return "border-cyan-700 bg-cyan-50 dark:bg-[#0a1a1f] shadow-[0_0_14px_rgba(14,116,144,0.4)]";
                default:
                    return "border-cyan-500/70 bg-cyan-50 dark:bg-[#0d1a2a] shadow-[0_0_14px_rgba(34,211,238,0.3)]";
            }
        }

        switch (estado) {
            case "aprobada":
                return "border-emerald-300 bg-emerald-50/80 backdrop-blur-sm dark:border-emerald-500 dark:bg-[#0a1a14]";
            case "regular":
                return "border-amber-300 bg-amber-50/80 backdrop-blur-sm dark:border-amber-500 dark:bg-[#1a1508]";
            case "en_curso":
                return "border-cyan-600 bg-cyan-50/90 backdrop-blur-sm dark:border-cyan-700 dark:bg-[#0a1a1f]";
            default:
                if (isBloqueada) {
                    return "border-slate-200 bg-slate-200/60 dark:border-slate-600/40 dark:bg-[#0f1520]/80";
                }
                return "border-blue-300 bg-slate-50/80 backdrop-blur-sm dark:border-slate-600/40 dark:bg-[#0f1520]";
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onSeleccionar(materia.codigo);
    };

    return (
        <div
            ref={refTarjeta}
            data-codigo={materia.codigo}
            onClick={handleClick}
            className={`
        relative cursor-pointer select-none rounded-md border px-1.5 py-1
        transition-all duration-300 ease-out
        hover:scale-[1.03] hover:shadow-lg hover:z-50
        w-full md:rounded-lg md:border-2 md:min-w-[140px] md:max-w-[400px] md:mx-auto md:px-3 md:py-2
        ${getEstilosEstado()}
        ${isAtenuada ? "opacity-20 blur-[2px]" : "opacity-100"}
        ${isBloqueada ? "opacity-60 grayscale backdrop-blur-sm" : ""}
        ${isDestacada || isSeleccionada ? "z-20 shadow-xl" : "z-0"}
      `}
        >
            <div className="flex flex-col gap-0 h-full">
                <span className="text-[8px] font-mono text-slate-500 dark:text-slate-400 md:text-[10px]">
                    {codigoAMostrar}
                </span>

                {(!isOptativa || optativaDetalles) ? (
                    <>
                        <span className="text-[10px] font-medium leading-tight text-slate-800 dark:text-slate-100 md:text-xs">
                            {nombreAMostrar} {isBloqueada && (<LockOutlinedIcon fontSize="inherit" className="ml-1 text-slate-400 align-middle" />)}
                        </span>
                        {condicionAMostrar && (
                            <span className="mt-0.5 text-[9px] text-slate-500 dark:text-slate-400 md:text-[10px]">
                                Req: {condicionAMostrar}
                            </span>
                        )}
                    </>
                ) : (
                    <div className="flex flex-1 items-center justify-center py-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onAbrirModalOptativa && materia.grupoOptativa && optativasPosibles) {
                                    onAbrirModalOptativa(materia.codigo, materia.grupoOptativa, optativasPosibles);
                                }
                            }}
                            className="cursor-pointer rounded-lg border border-cyan-500/50 bg-cyan-50 px-3 py-1.5 text-xs font-medium normal-case tracking-normal text-cyan-700 shadow-sm transition-colors hover:bg-cyan-100 active:scale-95 dark:bg-cyan-950/30 dark:text-cyan-400 dark:hover:bg-cyan-900/40 dark:hover:text-cyan-300"
                        >
                            Elegir Optativa
                        </button>
                    </div>
                )}

                <div className="mt-auto pt-0.5 flex items-center justify-between md:pt-1">
                    <span
                        className={`text-[8px] font-semibold uppercase tracking-wider md:text-[10px] ${COLORES_ESTADO[estadoMostrar]}`}
                    >
                        {ETIQUETAS_ESTADO[estadoMostrar]}
                    </span>
                    <div className="flex items-center gap-1.5 md:gap-2 relative">
                        {isOptativa && optativaDetalles && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onAbrirModalOptativa && materia.grupoOptativa && optativasPosibles) {
                                        onAbrirModalOptativa(materia.codigo, materia.grupoOptativa, optativasPosibles);
                                    }
                                }}
                                className={`flex cursor-pointer items-center justify-center rounded px-1.5 py-0.5 text-[10px] font-serif font-bold italic
                  transition-colors border min-w-[24px] text-center md:rounded-md md:px-2.5 md:py-1 md:text-xs md:min-w-[36px]
                  border-slate-300 text-slate-500 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200
                `}
                                title="Cambiar optativa"
                            >
                                <SettingsOutlinedIcon fontSize="inherit" />
                            </button>
                        )}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isBloqueada) {
                                    onCiclarEstado(optativaDetalles ? optativaDetalles.codigo : materia.codigo);
                                }
                            }}
                            disabled={Boolean(isBloqueada || (isOptativa && !optativaDetalles))}
                            className={`flex cursor-pointer items-center justify-center rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide 
                  transition-colors border min-w-[24px] text-center md:rounded-md md:px-2.5 md:py-1 md:text-xs md:min-w-[36px]
                  ${(isBloqueada || (isOptativa && !optativaDetalles))
                                    ? "cursor-not-allowed border-slate-200 text-slate-400 bg-slate-50 dark:border-slate-800 dark:text-slate-600 dark:bg-transparent opacity-50"
                                    : estadoMostrar === "pendiente"
                                        ? "border-slate-300 text-slate-500 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                                        : estadoMostrar === "en_curso"
                                            ? "border-cyan-600 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-500/50 dark:text-cyan-400 dark:hover:bg-cyan-900/30"
                                            : estadoMostrar === "regular"
                                                ? "border-amber-300 text-amber-600 hover:bg-amber-50 dark:border-amber-600/50 dark:text-amber-400 dark:hover:bg-amber-900/30"
                                                : "border-emerald-300 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-600/50 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
                                }
                `}
                            title={isBloqueada ? "Materia bloqueada por correlativas" : `Cambiar a ${ETIQUETAS_ESTADO[SIGUIENTE_ESTADO[estadoMostrar]]}`}
                        >
                            <SyncOutlinedIcon fontSize="inherit" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
