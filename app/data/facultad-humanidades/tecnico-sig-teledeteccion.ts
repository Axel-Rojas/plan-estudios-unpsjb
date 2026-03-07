import { Carrera } from "../../types";

const tecnicoSigTeledeteccion: Carrera = {
    nombre: "Técnico en sistemas de información geográfica y teledetección",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Introducción a la Geografía", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "2", nombre: "Ambiente Natural I", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Ambiente Natural II", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "4", nombre: "Elementos de matemáticas y estadística", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "5", nombre: "Cartografía", año: 1, cuatrimestre: 2, correlativas: ["1"] },
        { codigo: "6", nombre: "Sistemas de Información Territorial", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "7", nombre: "Teledetección I", año: 2, cuatrimestre: 1, correlativas: ["4"] },
        { codigo: "8", nombre: "Geografía Humana", año: 2, cuatrimestre: 1, correlativas: ["1"] },
        { codigo: "9", nombre: "Sistemas de Información Geográfica I", año: 2, cuatrimestre: 1, correlativas: ["1", "6"] },
        { codigo: "10", nombre: "Ambiente Natural III", año: 2, cuatrimestre: 2, correlativas: ["2", "3"] },
        { codigo: "11", nombre: "Geografía Económica General", año: 2, cuatrimestre: 2, correlativas: ["8"] },
        { codigo: "12", nombre: "Teledetección II", año: 2, cuatrimestre: 2, correlativas: ["7"] },

        // TERCER AÑO
        { codigo: "13", nombre: "Sistemas de Información Geográfica II", año: 3, cuatrimestre: 1, correlativas: ["9"] },
        { codigo: "14", nombre: "Uso y Conservación de los Recursos Naturales", año: 3, cuatrimestre: 1, correlativas: ["1"] },
        { codigo: "15", nombre: "Geografía Urbana y Rural", año: 3, cuatrimestre: 2, correlativas: ["8"] },
        { codigo: "16", nombre: "Metodología de la investigación geográfica", año: 3, cuatrimestre: 0, correlativas: ["10", "11"] }, // Anual
        { codigo: "17", nombre: "Práctica Profesional", año: 3, cuatrimestre: 2, correlativas: ["1"] },
    ],
    requisitos: [
        { codigo: "IDIOMA", nombre: "Idioma" },
        { codigo: "INFORMATICA", nombre: "Taller de Informática (Servicio brindado por el IGEOPAT)" }
    ]
}

export default tecnicoSigTeledeteccion;
