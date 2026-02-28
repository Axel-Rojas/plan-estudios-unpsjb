export type EstadoMateria = "pendiente" | "regular" | "aprobada";

export interface Materia {
    codigo: string;
    nombre: string;
    año: number;
    cuatrimestre: 0 | 1 | 2; // 0 = anual, 1 = 1er cuatrimestre, 2 = 2do cuatrimestre
    correlativas: string[];
    condicion?: string; // condición general de correlatividad (ej. "6 asignaturas aprobadas")
    cargaHoraria?: number;
    esOptativa?: boolean;
    grupoOptativa?: string;
}

export interface RequisitoComplementario {
    codigo: string;
    nombre: string;
    condicion?: string;
}

export interface Carrera {
    nombre: string;
    facultad: string;
    sede: string;
    plan: string;
    materias: Materia[];
    requisitos?: RequisitoComplementario[];
}
