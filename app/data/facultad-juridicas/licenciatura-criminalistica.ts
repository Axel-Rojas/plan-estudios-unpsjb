import { Carrera } from "../../types";

const licenciaturaCriminalistica: Carrera = {
    nombre: "Licenciatura en Criminalística",
    facultad: "Facultad de Ciencias Jurídicas y Sociales",
    sede: "Sede Puerto Madryn",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre (sin prereqs)
        { codigo: "CR001", nombre: "Toxicología Forense", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
        { codigo: "CR002", nombre: "Accidentología y Emergentología", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
        { codigo: "CR003", nombre: "Psicopatología Forense", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
        // 1° Año - 2° Cuatrimestre (requieren CR003)
        { codigo: "CR004", nombre: "Seminario de Informática Forense", año: 1, cuatrimestre: 2, correlativas: ["CR003"], cargaHoraria: 96 },
        { codigo: "CR005", nombre: "Metodología de la Investigación Criminal", año: 1, cuatrimestre: 2, correlativas: ["CR003"], cargaHoraria: 96 },
        { codigo: "CR006", nombre: "Victimología", año: 1, cuatrimestre: 2, correlativas: ["CR003"], cargaHoraria: 96 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "CR007", nombre: "Seminario de Investigación de Delitos Complejos", año: 2, cuatrimestre: 1, correlativas: ["CR005"], cargaHoraria: 96 },
        { codigo: "CR008", nombre: "Formación Práctica Profesional en Derecho Procesal Penal, Civil y Comercial", año: 2, cuatrimestre: 1, correlativas: ["CR002"], cargaHoraria: 96 },
        { codigo: "CR009", nombre: "Seminario de Criminología", año: 2, cuatrimestre: 1, correlativas: ["CR003"], cargaHoraria: 96 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "CR010", nombre: "Gestión de Procesos", año: 2, cuatrimestre: 2, correlativas: ["CR007"], cargaHoraria: 96 },
        { codigo: "CR011", nombre: "Seminario de Investigación de Delitos Informáticos", año: 2, cuatrimestre: 2, correlativas: ["CR004"], cargaHoraria: 96 },
        { codigo: "CR012", nombre: "Trabajo de Investigación Final", año: 2, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    ],
    requisitos: [],
} satisfies Carrera;

export default licenciaturaCriminalistica;
