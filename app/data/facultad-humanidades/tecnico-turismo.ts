import { Carrera } from "../../types";

const tecnicoTurismo: Carrera = {
    nombre: "Técnico en Turismo",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Puerto Madryn",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Introducción al Turismo", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "2", nombre: "Geografía Física", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "3", nombre: "Sociología", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "4", nombre: "Epistemología", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "5", nombre: "Seminario Introducción a las Prácticas Profesionales", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual

        // SEGUNDO AÑO
        { codigo: "6", nombre: "Servicios Turísticos. Transporte", año: 2, cuatrimestre: 0, correlativas: ["1"] }, // Anual
        { codigo: "7", nombre: "Servicios Turísticos. Alojamiento", año: 2, cuatrimestre: 0, correlativas: ["1"] }, // Anual
        { codigo: "8", nombre: "Ecología y Conservación", año: 2, cuatrimestre: 1, correlativas: ["2"] }, // 1er C
        { codigo: "9", nombre: "Psicología Social", año: 2, cuatrimestre: 1, correlativas: ["3"] }, // 1er C
        { codigo: "10", nombre: "Parques Nacionales", año: 2, cuatrimestre: 2, correlativas: ["2", "8"] }, // 2do C
        { codigo: "11", nombre: "Geografía Humana", año: 2, cuatrimestre: 2, correlativas: ["2"] }, // 2do C
        { codigo: "12", nombre: "Historia Social Argentina", año: 2, cuatrimestre: 0, correlativas: ["3"] }, // Anual
        { codigo: "13", nombre: "Práctica Profesional I", año: 2, cuatrimestre: 0, correlativas: ["1", "5"] }, // Anual

        // TERCER AÑO
        { codigo: "14", nombre: "Servicios Turísticos. Agencias de Viajes", año: 3, cuatrimestre: 0, correlativas: ["1"] }, // Anual
        { codigo: "15", nombre: "Psicosociología de los Grupos y de las Instituciones", año: 3, cuatrimestre: 0, correlativas: ["9"] }, // Anual
        { codigo: "16", nombre: "Patrimonio Cultural", año: 3, cuatrimestre: 1, correlativas: ["12"] }, // 1er C
        { codigo: "17", nombre: "Metodología de la Investigación Social", año: 3, cuatrimestre: 0, correlativas: ["4"] }, // Anual
        { codigo: "18", nombre: "Recursos Jurídicos", año: 3, cuatrimestre: 1, correlativas: [] }, // 1er C
        { codigo: "19", nombre: "Teoría de la Administración", año: 3, cuatrimestre: 2, correlativas: [] }, // 2do C
        { codigo: "20", nombre: "Práctica Profesional II", año: 3, cuatrimestre: 0, correlativas: ["6", "7", "13"] }, // Anual
    ],
    requisitos: [
        { codigo: "IDIOMA", nombre: "Idioma: Prueba de idioma, consistente en un nivel de traducción y conversación en idioma inglés." }
    ]
}

export default tecnicoTurismo;
