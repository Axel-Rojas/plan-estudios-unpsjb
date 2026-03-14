"use client";

import { useEffect, useRef, useState } from "react";

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
            className="backdrop:bg-black/60 backdrop:backdrop-blur-sm m-auto max-w-[90vw] w-full md:max-w-md rounded-xl md:rounded-2xl border border-slate-700/50 bg-slate-900 shadow-2xl open:animate-in open:zoom-in-95 open:fade-in-0"
        >
            <div className="flex flex-col gap-6 p-6 text-slate-200">
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
                    <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                        <svg className="h-5 w-5 text-cyan-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="16" x="2" y="4" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Contacto
                    </h2>
                </div>

                <div className="flex flex-col gap-5 text-sm">
                    <div className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/50 p-4 text-center">
                        <h3 className="font-semibold text-slate-200">¿Encontraste un error o tenés sugerencias?</h3>
                        <p className="text-slate-400">Podés reportar problemas o sugerir mejoras enviando un mail.</p>
                        <button 
                            onClick={() => {
                                navigator.clipboard.writeText("axelkevinagustinrojas@gmail.com");
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}
                            className="mt-2 flex w-fit items-center gap-2 rounded-md bg-cyan-500/10 px-4 py-2 font-medium text-cyan-400 transition-colors hover:bg-cyan-500/20"
                        >
                            {copied ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    ¡Copiado al portapapeles!
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                                    axelkevinagustinrojas@gmail.com
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}

export function CodeModal({ isOpen, onClose }: ModalInfoProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

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
            className="backdrop:bg-black/60 backdrop:backdrop-blur-sm m-auto max-w-[90vw] w-full md:max-w-md rounded-xl md:rounded-2xl border border-slate-700/50 bg-slate-900 shadow-2xl open:animate-in open:zoom-in-95 open:fade-in-0"
        >
            <div className="flex flex-col gap-6 p-6 text-slate-200">
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
                    <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                        <svg className="h-5 w-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                        Código Abierto
                    </h2>
                </div>

                <div className="flex flex-col gap-5 text-sm">
                    <div className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/50 p-4 text-center">
                        <h3 className="font-semibold text-slate-200">Código Abierto y Contribuciones</h3>
                        <p className="text-slate-400">El proyecto es open-source. Si querés contribuir o adaptar el sistema a tu institución, el código está disponible en GitHub.</p>
                        <a 
                            href="https://github.com/AxelRojas-hub/plan-estudios-unpsjb" 
                            className="mt-2 flex w-fit items-center gap-2 rounded-md bg-slate-800 px-4 py-2 font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            Ver Repositorio
                        </a>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
