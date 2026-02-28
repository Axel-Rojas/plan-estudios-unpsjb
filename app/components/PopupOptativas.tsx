"use client";

export interface MateriaOptativa {
    codigo: string;
    nombre: string;
    correlativas: string[];
    cargaHoraria?: number;
}

export interface PopupOptativasProps {
    grupo: string;
    optativas: MateriaOptativa[];
    posicion: { x: number; y: number };
    onCerrar: () => void;
    onSeleccionar: (codigo: string) => void;
    getEstado: (codigo: string) => string;
}

export default function PopupOptativas({
    grupo,
    optativas,
    posicion,
    onCerrar,
    onSeleccionar,
    getEstado,
}: PopupOptativasProps) {
    const titulo = grupo === "optativa1" ? "Optativa I" : "Optativa II";

    return (
        <>
            <div className="fixed inset-0 z-[60]" onClick={onCerrar} />

            <div
                className="optativas-popup fixed z-[70] w-80 rounded-xl border border-slate-600/50 bg-slate-800/95 p-4 shadow-2xl backdrop-blur-sm"
                style={{
                    left: Math.min(posicion.x, window.innerWidth - 340),
                    bottom: window.innerHeight - posicion.y + 10,
                }}
            >
                <h3 className="mb-3 text-sm font-bold text-slate-200">
                    Opciones de {titulo}
                </h3>
                <div className="flex flex-col gap-2">
                    {optativas.map((opt) => {
                        const estado = getEstado(opt.codigo);
                        return (
                            <button
                                key={opt.codigo}
                                onClick={() => {
                                    onSeleccionar(opt.codigo);
                                    onCerrar();
                                }}
                                className="flex flex-col gap-0.5 rounded-lg border border-slate-600/30 p-2.5 text-left 
                  transition-colors hover:border-cyan-500/50 hover:bg-slate-700/50"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[10px] text-slate-400">
                                        {opt.codigo}
                                    </span>
                                    {estado !== "pendiente" && (
                                        <span
                                            className={`text-[10px] font-semibold uppercase ${estado === "aprobada"
                                                ? "text-emerald-400"
                                                : "text-amber-400"
                                                }`}
                                        >
                                            {estado}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs text-slate-200">{opt.nombre}</span>
                                {opt.correlativas.length > 0 && (
                                    <span className="text-[10px] text-slate-500">
                                        Correlativas: {opt.correlativas.join(", ")}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
