"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getContributors } from "../actions";

interface ModalInfoProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ModalInfoProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleClose = () => {
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <dialog
            ref={dialogRef}
            onCancel={handleClose}
            onClick={handleBackdropClick}
            className="backdrop:bg-black/60 backdrop:backdrop-blur-sm m-auto max-w-[90vw] w-full md:max-w-md rounded-xl md:rounded-2xl border border-slate-200 bg-white shadow-2xl open:animate-in open:zoom-in-95 open:fade-in-0 dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="flex flex-col gap-6 p-6 text-slate-700 dark:text-slate-200">
                <div className="flex flex-col items-center border-b border-slate-200 pb-4 dark:border-slate-700/50">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        Contacto
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-5 text-sm text-center">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">¿Encontraste un error o tenés sugerencias?</h3>
                    <p className="text-slate-600 dark:text-slate-400">Podés reportar problemas o sugerir mejoras enviando un mail.</p>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText("axelkevinagustinrojas@gmail.com");
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                        }}
                        className="mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-md bg-cyan-100 px-4 py-2 font-medium text-cyan-700 transition-colors hover:bg-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20"
                    >
                        {copied ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                ¡Copiado al portapapeles!
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                                axelkevinagustinrojas@gmail.com
                            </>
                        )}
                    </button>
                </div>
            </div>
        </dialog>
    );
}

export function CodeModal({ isOpen, onClose }: ModalInfoProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [contributors, setContributors] = useState<{ login: string; avatar_url: string; html_url: string }[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
            setIsLoading(true);
            getContributors()
                .then(data => {
                    if (Array.isArray(data)) {
                        setContributors(data);
                    }
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleClose = () => {
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <dialog
            ref={dialogRef}
            onCancel={handleClose}
            onClick={handleBackdropClick}
            className="backdrop:bg-black/60 backdrop:backdrop-blur-sm m-auto max-w-[90vw] w-full md:max-w-md rounded-xl md:rounded-2xl border border-slate-200 bg-white shadow-2xl open:animate-in open:zoom-in-95 open:fade-in-0 dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="flex flex-col gap-2 p-6 text-slate-800 dark:text-slate-200">
                <h2 className="text-lg font-bold text-slate-900 flex justify-center items-center dark:text-slate-100">
                    Código Abierto
                </h2>


                <div className="flex flex-col gap-5 text-sm">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-slate-600 dark:text-slate-400">El proyecto es open-source. Si querés contribuir o adaptar el sistema a tu institución, el código está disponible en GitHub.</p>
                        <a
                            href="https://github.com/AxelRojas-hub/plan-estudios-unpsjb"
                            className="mt-2 flex w-fit items-center gap-2 rounded-md bg-slate-200 px-4 py-2 font-medium text-slate-700 transition-colors hover:bg-slate-300 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            Ver Repositorio
                        </a>
                    </div>
                    <div className="flex flex-col items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800/50">
                        <p className="font-semibold text-slate-700 dark:text-slate-300">Colaboradores</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {isLoading ? (
                                <div className="text-sm font-medium text-slate-500 animate-pulse">Cargando colaboradores...</div>
                            ) : contributors.length > 0 ? (
                                contributors.map((contributor) => (
                                    <a
                                        key={contributor.login}
                                        href={contributor.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <Image
                                            src={contributor.avatar_url}
                                            alt={contributor.login}
                                            width={56}
                                            height={56}
                                            className="h-14 w-14 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200 transition-all group-hover:ring-blue-400 dark:border-slate-900 dark:ring-slate-700 object-cover"
                                        />
                                        <span className="text-xs font-medium text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-200">
                                            {contributor.login}
                                        </span>
                                    </a>
                                ))
                            ) : (
                                <div className="text-sm font-medium text-red-500 dark:text-red-400">No se pudieron cargar los colaboradores.</div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </dialog>
    );
}

export function InstructionsModal({ isOpen, onClose }: ModalInfoProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Estados de las materias",
            description: "Podés llevar un seguimiento de tu avance cambiando el estado de cada materia (Pendiente, En curso, Regular o Aprobada) simplemente presionando el botón correspondiente en la tarjeta.",
            image: "/materias.png",
        },
        {
            title: "Correlativas",
            description: "Al presionar la tarjeta de una materia, verás resaltado el camino de sus correlativas. Para volver al modo normal, simplemente presioná fuera del camino resaltado.",
            image: "/correlativas.png",
        },
        {
            title: "Vistas",
            description: "Contás con una vista de diagrama y una de lista para visualizar el plan. Elegí la que te resulte más fácil de entender para organizar tus estudios.",
            image: "/vistas.jpg",
        },
        {
            title: "Privacidad y más",
            description: "La aplicación no almacena información en servidores; todo se guarda en tu dispositivo. En el encabezado también tenés acceso al código fuente y al contacto para sugerencias o reportar problemas.",
            image: "/privacidad.png",
        },
    ];

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
            setActiveStep(0);
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleClose = () => {
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <dialog
            ref={dialogRef}
            onCancel={handleClose}
            onClick={handleBackdropClick}
            className="backdrop:bg-black/80 backdrop:backdrop-blur-sm m-auto max-w-[95vw] w-full md:max-w-[720px] max-h-[90vh] md:max-h-none rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.65)] open:animate-in open:zoom-in-95 open:fade-in-0 flex flex-col"
        >
            <div className="flex flex-col md:aspect-[5/4] md:min-h-[450px] overflow-hidden rounded-[1.25rem] md:rounded-[1.75rem] bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800">
                <div className="relative h-48 sm:h-64 md:h-[55%] shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                    <Image
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        fill
                        className="object-cover opacity-90 dark:opacity-100"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between overflow-y-auto bg-white dark:bg-slate-900 px-5 py-4 md:px-7 md:py-5">
                    <div className="space-y-1 md:space-y-3">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{steps[activeStep].title}</h3>
                        <p className="max-w-2xl text-sm md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {steps[activeStep].description}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-800/50 pt-4 md:pt-0 md:border-none">
                        <div className="flex gap-1">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all ${i === activeStep ? 'w-6 bg-cyan-500' : 'w-1.5 bg-slate-700'}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                                disabled={activeStep === 0}
                                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold text-slate-300 transition hover:bg-slate-800 disabled:opacity-30"
                            >
                                Anterior
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    if (activeStep < steps.length - 1) {
                                        setActiveStep((prev) => prev + 1);
                                    } else {
                                        onClose();
                                    }
                                }}
                                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 md:px-8 py-2 md:py-3 text-xs md:text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {activeStep === steps.length - 1 ? '¡Listo!' : 'Siguiente'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
