"use client";

import { useState, useEffect } from "react";
import type { Carrera } from "../types";
import { ContactModal, CodeModal } from "./ModalInfo";

export interface HeaderProps {
    carreras: Carrera[];
    carreraSeleccionada: Carrera | null;
    onSeleccionarCarrera: (carrera: Carrera) => void;
    onLimpiarCarrera?: () => void;
}

export default function Header({
    carreras,
    carreraSeleccionada,
    onSeleccionarCarrera,
    onLimpiarCarrera,
}: HeaderProps) {
    const facultades = [...new Set(carreras.map((c) => c.facultad))].sort((a, b) => a.localeCompare(b, "es"));
    const [facultadSeleccionada, setFacultadSeleccionada] = useState<string>(
        carreraSeleccionada?.facultad || facultades.includes("Facultad de Ciencias Naturales y Ciencias de la Salud") ? "Facultad de Ciencias Naturales y Ciencias de la Salud" : facultades[0] || ""
    );
    const [showContact, setShowContact] = useState(false);
    const [showCode, setShowCode] = useState(false);

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
        <header className="z-50 border-b border-slate-700/50 bg-black/95">
            <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-3 px-3 py-3 md:px-6 md:py-4">

                <div className="text-center">
                    <h1 className="text-base font-bold tracking-wide text-slate-100 md:text-2xl">
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
                        <label className="hidden text-xs font-medium uppercase tracking-wider text-slate-400 md:inline">
                            Facultad
                        </label>
                        <select
                            value={facultadSeleccionada}
                            onChange={(e) => {
                                setFacultadSeleccionada(e.target.value);
                                if (onLimpiarCarrera) onLimpiarCarrera();
                            }}
                            className="rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-xs text-slate-200 
                outline-none transition-colors hover:border-slate-500 focus:border-cyan-500 md:rounded-lg md:px-3 md:py-1.5 md:text-sm"
                        >
                            {facultades.map((f) => (
                                <option key={f} value={f}>
                                    {f}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <label className="hidden text-xs font-medium uppercase tracking-wider text-slate-400 md:inline">
                            Carrera
                        </label>
                        <select
                            value={carreraSeleccionada?.nombre || ""}
                            onChange={(e) => {
                                const c = carreras.find((c) => c.nombre === e.target.value);
                                if (c) onSeleccionarCarrera(c);
                            }}
                            className="rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-xs text-slate-200 
                outline-none transition-colors hover:border-slate-500 focus:border-cyan-500 md:rounded-lg md:px-3 md:py-1.5 md:text-sm"
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
                        onClick={() => setShowCode(true)}
                        className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                        title="Ver código fuente en GitHub"
                    >
                        <svg className="h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span className="text-xs font-semibold md:text-sm">Código</span>
                    </button>
                    <button
                        onClick={() => setShowContact(true)}
                        className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                        title="Informar problema o sugerencia"
                    >
                        <svg className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="16" x="2" y="4" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xs font-semibold md:text-sm">Contacto</span>
                    </button>
                    <CodeModal isOpen={showCode} onClose={() => setShowCode(false)} />
                    <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
                </div>
            </div>
        </header>
    );
}
