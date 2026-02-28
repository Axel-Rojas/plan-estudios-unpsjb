"use client";

import { useState } from "react";
import type { Carrera } from "../types";

export interface ModalBienvenidaProps {
    carreras: Carrera[];
    onSeleccionar: (carrera: Carrera) => void;
}

export default function ModalBienvenida({
    carreras,
    onSeleccionar,
}: ModalBienvenidaProps) {
    const facultades = [...new Set(carreras.map((c) => c.facultad))];
    const [facultadSeleccionada, setFacultadSeleccionada] = useState("");
    const [nombreCarreraSeleccionada, setNombreCarreraSeleccionada] = useState("");

    const carrerasPorFacultad = carreras.filter(
        (c) => c.facultad === facultadSeleccionada
    );

    const handleContinuar = () => {
        const carrera = carreras.find((c) => c.nombre === nombreCarreraSeleccionada);
        if (carrera) onSeleccionar(carrera);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl border border-slate-600/50 bg-[#0d1424] p-8 shadow-2xl">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                        <svg
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-slate-100">
                        Plan de Estudios UNPSJB
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Seleccioná tu facultad y carrera para comenzar
                    </p>
                </div>

                <div className="mb-4">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
                        Facultad
                    </label>
                    <select
                        value={facultadSeleccionada}
                        onChange={(e) => {
                            setFacultadSeleccionada(e.target.value);
                            setNombreCarreraSeleccionada("");
                        }}
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-slate-200 
              outline-none transition-colors hover:border-slate-500 focus:border-cyan-500"
                    >
                        <option value="">Seleccionar facultad...</option>
                        {facultades.map((f) => (
                            <option key={f} value={f}>
                                {f}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
                        Carrera
                    </label>
                    <select
                        value={nombreCarreraSeleccionada}
                        onChange={(e) => setNombreCarreraSeleccionada(e.target.value)}
                        disabled={!facultadSeleccionada}
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-slate-200 
              outline-none transition-colors hover:border-slate-500 focus:border-cyan-500
              disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="" disabled>Seleccionar carrera...</option>
                        {carrerasPorFacultad.map((c) => (
                            <option key={c.nombre} value={c.nombre}>
                                {c.nombre} - {c.plan}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleContinuar}
                    disabled={!nombreCarreraSeleccionada}
                    className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold 
            text-white transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25
            disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Comenzar
                </button>
            </div>
        </div>
    );
}
