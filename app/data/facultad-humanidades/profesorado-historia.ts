import { Carrera } from "../../types";

const profesoradoHistoria: Carrera = {
    nombre: "Profesorado en Historia",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Historia Social de América Lat. y Argentina Contemporánea", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "2", nombre: "Sociología", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Historia del Antiguo Oriente", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "4", nombre: "Antropología y Etnografía General", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "5", nombre: "Historia de la Antigüedad Clásica", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "6", nombre: "Introducción a la Historia", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "7", nombre: "Pedagogía", año: 1, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "8", nombre: "Psicología Evolutiva", año: 1, cuatrimestre: 0, correlativas: [] }, // A

        // SEGUNDO AÑO
        { codigo: "9", nombre: "Filosofía", año: 2, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "10", nombre: "Introducción a la Geografía", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "11", nombre: "Historia Medieval", año: 2, cuatrimestre: 1, correlativas: ["3"] },
        { codigo: "12", nombre: "Corrientes Historiográficas", año: 2, cuatrimestre: 2, correlativas: ["6"] },
        { codigo: "13", nombre: "Historia Moderna", año: 2, cuatrimestre: 2, correlativas: ["6"] },
        { codigo: "14", nombre: "Métodos y Técnicas de Investigación I", año: 2, cuatrimestre: 2, correlativas: ["6"] },
        { codigo: "15", nombre: "Didáctica General", año: 2, cuatrimestre: 0, correlativas: ["7"] }, // A

        // TERCER AÑO
        { codigo: "16", nombre: "Historia Contemporánea I (1789-1914)", año: 3, cuatrimestre: 1, correlativas: ["11"] },
        { codigo: "17", nombre: "Historia de América I", año: 3, cuatrimestre: 1, correlativas: ["4"] },
        { codigo: "18", nombre: "Historia Argentina I (1776-1852)", año: 3, cuatrimestre: 1, correlativas: ["1", "13"] },
        { codigo: "19", nombre: "Seminario de Formación Docente I (*)", año: 3, cuatrimestre: 2, correlativas: ["7"] },
        { codigo: "20", nombre: "Historia Contemporánea II (1914 a la actualidad)", año: 3, cuatrimestre: 2, correlativas: ["13"] },
        { codigo: "21", nombre: "Historia de América II (Colonial)", año: 3, cuatrimestre: 2, correlativas: ["13"] },
        { codigo: "22", nombre: "Didáctica Específica de la Historia", año: 3, cuatrimestre: 0, correlativas: ["8", "15"] }, // A

        // CUARTO AÑO
        { codigo: "23", nombre: "Historia Argentina II (1852-1930)", año: 4, cuatrimestre: 1, correlativas: ["18"] },
        { codigo: "24", nombre: "Historia de América III (Siglos XIX y XX)", año: 4, cuatrimestre: 1, correlativas: ["21"] },
        { codigo: "25", nombre: "Seminario de Formación Docente II (**)", año: 4, cuatrimestre: 1, correlativas: ["7"] },
        { codigo: "26", nombre: "Historia Argentina III (1930 a la actualidad)", año: 4, cuatrimestre: 2, correlativas: ["18"] },
        { codigo: "27", nombre: "Seminario: Economía y Sociedad", año: 4, cuatrimestre: 2, correlativas: [] },
        { codigo: "28", nombre: "Seminario: Historia de Patagonia", año: 4, cuatrimestre: 2, correlativas: [] },
        { codigo: "29", nombre: "Metodología y Práctica de la Enseñanza", año: 4, cuatrimestre: 0, correlativas: ["19", "22"] }, // A

        // QUINTO AÑO
        { codigo: "30", nombre: "Problemáticas del Mundo Actual I", año: 5, cuatrimestre: 1, correlativas: ["20"] },
        { codigo: "31", nombre: "Filosofía e Historia", año: 5, cuatrimestre: 1, correlativas: ["6", "9"] },
        { codigo: "32", nombre: "Problemáticas del Mundo Actual II", año: 5, cuatrimestre: 2, correlativas: ["30"] },
        { codigo: "33", nombre: "Métodos y Técnicas de Investigación II", año: 5, cuatrimestre: 2, correlativas: ["14"] },
        { codigo: "34", nombre: "Seminario Formador de Formadores: Problemática de la Ed. Superior", año: 5, cuatrimestre: 0, correlativas: ["19", "25", "29"] }, // A
    ],
    requisitos: [
        { codigo: "IDIOMA", nombre: "Aprobar un examen escrito de suficiencia en idioma (inglés o francés)." },
        { codigo: "SEMINARIOS", nombre: "Optar alternativamente por 2 (dos) de los siguientes seminarios para Formación Docente I y II: Sistema Educativo e Instituciones, Investigación Educativa, Tecnología Educativa." }
    ]
}

export default profesoradoHistoria;
