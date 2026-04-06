"use client";

import { useState, useEffect } from "react";
import type { Carrera } from "../types";
import { ContactModal, CodeModal, InstructionsModal } from "./ModalInfo";
import { FACULTAD_NOMBRES } from "../data";
import { ThemeToggle } from "./ThemeToggle";
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export interface HeaderProps {
    carreras: Carrera[];
    carreraSeleccionada: Carrera | null;
    onSeleccionarCarrera: (carrera: Carrera) => void;
    onLimpiarCarrera?: () => void;
    vistaModo?: "diagrama" | "lista";
    onCambiarVista?: (vista: "diagrama" | "lista") => void;
    onShowCode?: () => void;
    onShowContact?: () => void;
    onShowInstructions?: () => void;
}

export default function Header({
    carreras,
    carreraSeleccionada,
    onSeleccionarCarrera,
    onLimpiarCarrera,
    vistaModo = "diagrama",
    onCambiarVista,
    onShowCode,
    onShowContact,
    onShowInstructions,
}: HeaderProps) {
    const facultades = [...new Set(carreras.map((c) => c.facultad))].sort((a, b) =>
        (FACULTAD_NOMBRES[a] || a).localeCompare(FACULTAD_NOMBRES[b] || b, "es")
    );
    const [facultadSeleccionada, setFacultadSeleccionada] = useState<string>(
        carreraSeleccionada?.facultad || facultades.includes("Facultad de Ciencias Naturales y Ciencias de la Salud") ? "Facultad de Ciencias Naturales y Ciencias de la Salud" : facultades[0] || ""
    );

    useEffect(() => {
        if (carreraSeleccionada) {
            setFacultadSeleccionada(carreraSeleccionada.facultad);
        } else if (!facultadSeleccionada) {
            setFacultadSeleccionada(facultades[0] || "");
        }
    }, [carreraSeleccionada, facultadSeleccionada, facultades]);

    const carrerasPorFacultad = carreras
        .filter((c) => c.facultad === facultadSeleccionada)
        .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

    return (
        <header className="z-50 border-b border-slate-200 bg-white/95 dark:border-slate-700/50 dark:bg-black/95">
            <div className="relative mx-auto flex max-w-[1600px] flex-col items-center gap-3 px-3 py-3 md:px-6 md:py-4">
                <div className="absolute right-3 top-3 md:right-6 md:top-4">
                    <ThemeToggle />
                </div>

                <div className="text-center">
                    <h1 className="text-base font-bold tracking-wide text-slate-800 dark:text-slate-100 md:text-2xl">
                        {carreraSeleccionada
                            ? carreraSeleccionada.nombre.toUpperCase()
                            : "PLAN DE ESTUDIOS"}
                    </h1>
                    {carreraSeleccionada && (
                        <p className="text-[11px] text-slate-400 md:mt-1 md:text-sm">{carreraSeleccionada.sede}</p>
                    )}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                    <div className="flex items-center gap-1.5">
                        <label className="hidden text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 md:inline">
                            Facultad
                        </label>
                        <select
                            value={facultadSeleccionada}
                            onChange={(e) => {
                                setFacultadSeleccionada(e.target.value);
                                if (onLimpiarCarrera) onLimpiarCarrera();
                            }}
                            className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 
                outline-none transition-colors hover:border-slate-400 focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500 md:rounded-lg md:px-3 md:py-1.5 md:text-sm"
                        >
                            {facultades.map((f) => (
                                <option key={f} value={f}>
                                    {FACULTAD_NOMBRES[f] || f}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <label className="hidden text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 md:inline">
                            Carrera
                        </label>
                        <select
                            value={carreraSeleccionada?.nombre || ""}
                            onChange={(e) => {
                                const c = carreras.find((c) => c.nombre === e.target.value);
                                if (c) onSeleccionarCarrera(c);
                            }}
                            className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 
                outline-none transition-colors hover:border-slate-400 focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500 md:rounded-lg md:px-3 md:py-1.5 md:text-sm"
                        >
                            <option value="" disabled>Seleccionar carrera...</option>
                            {carrerasPorFacultad.map((c) => (
                                <option key={c.nombre} value={c.nombre}>
                                    {c.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center gap-2">
                    <button
                        onClick={onShowCode}
                        className="flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:bg-slate-800 dark:focus:text-white"
                        title="Ver código fuente en GitHub"
                    >
                        <GitHubIcon className="!h-4 !w-4 md:!h-5 md:!w-5" />
                        <span className="text-xs font-semibold md:text-sm">Código</span>
                    </button>
                    <button
                        onClick={onShowInstructions}
                        className="flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:bg-slate-800 dark:focus:text-white"
                        title="Ver instrucciones"
                    >
                        <HelpOutlineOutlinedIcon fontSize="small" />
                        <span className="text-xs font-semibold md:text-sm">Instrucciones</span>
                    </button>
                    <button
                        onClick={onShowContact}
                        className="flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:bg-slate-800 dark:focus:text-white"
                        title="Informar problema o sugerencia"
                    >
                        <MailOutlineIcon className="!h-4 !w-4 md:!h-5 md:!w-5" />
                        <span className="text-xs font-semibold md:text-sm">Contacto</span>
                    </button>
                </div>
            </div>

            {carreraSeleccionada && onCambiarVista && (
                <div className="flex w-full border-t border-slate-200 dark:border-slate-700/50">
                    <button
                        onClick={() => onCambiarVista('diagrama')}
                        className={`flex-1 flex cursor-pointer items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${vistaModo === 'diagrama'
                            ? 'border-b-2 border-cyan-500 text-cyan-700 dark:text-cyan-400 bg-slate-50 dark:bg-slate-800/40'
                            : 'border-b-2 border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/30 dark:hover:text-slate-200'
                            }`}
                    >
                        <AccountTreeOutlinedIcon fontSize="small" />
                        Diagrama
                    </button>
                    <button
                        onClick={() => onCambiarVista('lista')}
                        className={`flex-1 flex cursor-pointer items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${vistaModo === 'lista'
                            ? 'border-b-2 border-cyan-500 text-cyan-700 dark:text-cyan-400 bg-slate-50 dark:bg-slate-800/40'
                            : 'border-b-2 border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/30 dark:hover:text-slate-200'
                            }`}
                    >
                        <FormatListBulletedOutlinedIcon fontSize="small" />
                        Lista
                    </button>
                </div>
            )}
        </header>
    );
}
