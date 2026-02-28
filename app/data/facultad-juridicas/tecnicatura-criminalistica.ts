import { Carrera } from "../../types";

const tecnicaturaCriminalistica: Carrera = {
    nombre: "Tecnicatura Universitaria en Criminalística",
    facultad: "Facultad de Ciencias Jurídicas y Sociales",
    sede: "Sede Puerto Madryn",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre
        { codigo: "TC1", nombre: "Introducción a la Criminalística", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 0 },
        { codigo: "TC2", nombre: "Contenidos de Biología General", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 0 },
        { codigo: "TC3", nombre: "Introducción al Derecho", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 0 },
        // 1° Año - 2° Cuatrimestre
        { codigo: "TC4", nombre: "Derechos Humanos y Garantías", año: 1, cuatrimestre: 2, correlativas: ["TC3"], cargaHoraria: 0 },
        { codigo: "TC5", nombre: "Sociología", año: 1, cuatrimestre: 2, correlativas: ["TC3"], cargaHoraria: 0 },
        { codigo: "TC6", nombre: "Antropología Forense", año: 1, cuatrimestre: 2, correlativas: ["TC3"], cargaHoraria: 0 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "TC7", nombre: "Práctica Pericial I (Balística)", año: 2, cuatrimestre: 1, correlativas: ["TC1", "TC4", "TC6"], cargaHoraria: 0 },
        { codigo: "TC8", nombre: "Documentología y Archivo", año: 2, cuatrimestre: 1, correlativas: ["TC1"], cargaHoraria: 0 },
        { codigo: "TC9", nombre: "Elementos de Derecho Penal", año: 2, cuatrimestre: 1, correlativas: ["TC3", "TC4"], cargaHoraria: 0 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "TC10", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["TC5"], cargaHoraria: 0 },
        { codigo: "TC11", nombre: "Físico Química", año: 2, cuatrimestre: 2, correlativas: ["TC2"], cargaHoraria: 0 },
        { codigo: "TC12", nombre: "Práctica Profesional (Integración)", año: 2, cuatrimestre: 2, correlativas: ["TC5", "TC6", "TC7", "TC8"], cargaHoraria: 0 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "TC13", nombre: "Derecho Procesal Penal", año: 3, cuatrimestre: 1, correlativas: ["TC3", "TC4", "TC9"], cargaHoraria: 0 },
        { codigo: "TC14", nombre: "Metodología de la Investigación", año: 3, cuatrimestre: 1, correlativas: ["TC10"], cargaHoraria: 0 },
        { codigo: "TC15", nombre: "Psicología", año: 3, cuatrimestre: 1, correlativas: ["TC4", "TC5", "TC6"], cargaHoraria: 0 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "TC16", nombre: "Siniestralidad Vial", año: 3, cuatrimestre: 2, correlativas: ["TC1", "TC7"], cargaHoraria: 0 },
        { codigo: "TC17", nombre: "Práctica Pericial II (Papiloscopía)", año: 3, cuatrimestre: 2, correlativas: ["TC1", "TC7"], cargaHoraria: 0 },
        { codigo: "TC18", nombre: "Metodología de la Investigación Criminalística", año: 3, cuatrimestre: 2, correlativas: ["TC1", "TC7", "TC14"], cargaHoraria: 0 },
    ],
    requisitos: [],
} satisfies Carrera;

export default tecnicaturaCriminalistica;
