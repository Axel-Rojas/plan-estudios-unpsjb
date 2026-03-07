import { Carrera } from "../../types";

const profesoradoSecundariaLetras: Carrera = {
    nombre: "Profesor Universitario en Letras para educación secundaria",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Introducción a los Estudios Literarios", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "2", nombre: "Sociología", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Pedagogía", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "4", nombre: "Taller de Comprensión y Producción de Textos", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "5", nombre: "Gramática Española I", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "6", nombre: "Literatura Clásica", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "7", nombre: "Lengua Moderna", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "8", nombre: "Filosofía", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "9", nombre: "Psicología Evolutiva", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "10", nombre: "Literatura Latinoamericana I", año: 2, cuatrimestre: 1, correlativas: ["1"] },
        { codigo: "11", nombre: "Didáctica General", año: 2, cuatrimestre: 1, correlativas: ["3"] },
        { codigo: "12", nombre: "Literatura Latinoamericana II", año: 2, cuatrimestre: 2, correlativas: ["10"] },
        { codigo: "13", nombre: "Gramática Española II", año: 2, cuatrimestre: 2, correlativas: ["5"] },
        { codigo: "14", nombre: "Teoría y Crítica Literaria", año: 2, cuatrimestre: 2, correlativas: ["1"] },
        { codigo: "15", nombre: "Tecnología Educativa", año: 2, cuatrimestre: 2, correlativas: ["11"] },

        // TERCER AÑO
        { codigo: "16", nombre: "Literatura Argentina I", año: 3, cuatrimestre: 1, correlativas: ["14"] },
        { codigo: "17", nombre: "Lingüística General", año: 3, cuatrimestre: 1, correlativas: ["13"] },
        { codigo: "18", nombre: "Seminario de Formación Docente (*)", año: 3, cuatrimestre: 1, correlativas: ["11"] },
        { codigo: "20", nombre: "Literatura Argentina II", año: 3, cuatrimestre: 2, correlativas: ["14", "16"] },
        { codigo: "19", nombre: "Pragmática y Análisis del Discurso", año: 3, cuatrimestre: 2, correlativas: ["17"] },
        { codigo: "21", nombre: "Problemáticas de la enseñanza de la Lengua y la Literatura", año: 3, cuatrimestre: 2, correlativas: ["11", "12", "14", "17"] },
        { codigo: "22", nombre: "Didáctica Específica de las Letras", año: 3, cuatrimestre: 0, correlativas: ["4", "11", "12", "13", "14"] }, // A

        // CUARTO AÑO
        { codigo: "23", nombre: "Literatura Española", año: 4, cuatrimestre: 1, correlativas: ["14"] },
        { codigo: "24", nombre: "Lengua y Cultura Latina", año: 4, cuatrimestre: 1, correlativas: ["6", "13"] },
        { codigo: "25", nombre: "Sociolingüística", año: 4, cuatrimestre: 1, correlativas: ["17"] },
        { codigo: "28", nombre: "Estéticas Contemporáneas", año: 4, cuatrimestre: 2, correlativas: ["8"] },
        { codigo: "26", nombre: "Historia de la Lengua", año: 4, cuatrimestre: 2, correlativas: ["17"] },
        { codigo: "27", nombre: "Literatura Europea", año: 4, cuatrimestre: 2, correlativas: ["7", "14"] },
        { codigo: "28_alt", nombre: "Práctica y Residencia Profesional", año: 4, cuatrimestre: 0, correlativas: ["11", "14", "15", "19", "20", "22"] }, // A
    ],
    requisitos: [
        { codigo: "SEMINARIOS", nombre: "Seminario de Formación Docente (*): Optar por 1 (uno) entre Sistema Educativo e Instituciones, o Investigación Educativa." },
        { codigo: "IDIOMA", nombre: "Idioma: Aprobar un nivel de Lengua Moderna (Inglés, Portugués o Francés)." }
    ]
}

export default profesoradoSecundariaLetras;
