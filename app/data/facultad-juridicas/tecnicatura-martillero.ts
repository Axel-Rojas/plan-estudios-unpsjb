import { Carrera } from "../../types";

const tecnicaturaMartillero: Carrera = {
    nombre: "Tecnicatura Universitaria en Martillero Público y Corredor",
    facultad: "Facultad de Ciencias Jurídicas y Sociales",
    sede: "Sede Puerto Madryn",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre
        { codigo: "TMC1", nombre: "Derecho Civil", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 0 },
        { codigo: "TMC2", nombre: "Economía", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 0 },
        { codigo: "TMC3", nombre: "Relaciones Humanas y Comunicación", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 0 },
        // 1° Año - 2° Cuatrimestre
        { codigo: "TMC4", nombre: "Derecho Comercial", año: 1, cuatrimestre: 2, correlativas: ["TMC1"], cargaHoraria: 0 },
        { codigo: "TMC5", nombre: "Derechos Reales", año: 1, cuatrimestre: 2, correlativas: ["TMC1"], cargaHoraria: 0 },
        { codigo: "TMC6", nombre: "Mercadotecnia y Marketing", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 0 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "TMC7", nombre: "Tasación I", año: 2, cuatrimestre: 1, correlativas: [], cargaHoraria: 0 },
        { codigo: "TMC8", nombre: "Derecho Notarial y Registral", año: 2, cuatrimestre: 1, correlativas: ["TMC1", "TMC4", "TMC5"], cargaHoraria: 0 },
        { codigo: "TMC9", nombre: "Derecho Procesal Civil y Comercial", año: 2, cuatrimestre: 1, correlativas: ["TMC1", "TMC4", "TMC5"], cargaHoraria: 0 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "TMC10", nombre: "Técnicas de Subasta, Remates y Corretajes", año: 2, cuatrimestre: 2, correlativas: ["TMC6"], cargaHoraria: 0 },
        { codigo: "TMC11", nombre: "Tasación II", año: 2, cuatrimestre: 2, correlativas: ["TMC7"], cargaHoraria: 0 },
        { codigo: "TMC12", nombre: "Administración de Consorcios", año: 2, cuatrimestre: 2, correlativas: ["TMC1", "TMC5", "TMC8", "TMC9"], cargaHoraria: 0 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "TMC13", nombre: "Ética y Deontología Profesional", año: 3, cuatrimestre: 1, correlativas: ["TMC3"], cargaHoraria: 0 },
        { codigo: "TMC14", nombre: "Tasación III", año: 3, cuatrimestre: 1, correlativas: ["TMC7", "TMC11"], cargaHoraria: 0 },
        { codigo: "TMC15", nombre: "Seminario de Integración – Práctica Profesional", año: 3, cuatrimestre: 1, correlativas: ["TMC6", "TMC7", "TMC8", "TMC11"], cargaHoraria: 0 },
    ],
    requisitos: [],
} satisfies Carrera;

export default tecnicaturaMartillero;
