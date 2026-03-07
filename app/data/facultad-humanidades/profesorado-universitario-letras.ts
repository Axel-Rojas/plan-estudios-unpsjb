import { Carrera } from "../../types";

const profesoradoUniversitarioLetras: Carrera = {
    nombre: "Profesor Universitario en Letras",
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
        { codigo: "8", nombre: "Literatura Patagónica", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "9", nombre: "Filosofía", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "10", nombre: "Psicología Evolutiva", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "11", nombre: "Literatura Latinoamericana I", año: 2, cuatrimestre: 1, correlativas: ["1"] },
        { codigo: "12", nombre: "Didáctica General", año: 2, cuatrimestre: 1, correlativas: ["3"] },
        { codigo: "13", nombre: "Literatura Latinoamericana II", año: 2, cuatrimestre: 2, correlativas: ["11"] },
        { codigo: "14", nombre: "Gramática Española II", año: 2, cuatrimestre: 2, correlativas: ["5"] },
        { codigo: "15", nombre: "Teoría y Crítica Literaria I", año: 2, cuatrimestre: 2, correlativas: ["1"] },
        { codigo: "16", nombre: "Tecnología Educativa", año: 2, cuatrimestre: 2, correlativas: ["12"] },

        // TERCER AÑO
        { codigo: "17", nombre: "Literatura Argentina I", año: 3, cuatrimestre: 1, correlativas: ["15"] },
        { codigo: "18", nombre: "Lingüística General", año: 3, cuatrimestre: 1, correlativas: ["14"] },
        { codigo: "19", nombre: "Seminario de Formación Docente (*)", año: 3, cuatrimestre: 1, correlativas: ["12"] },
        { codigo: "20", nombre: "Teoría y Crítica Literaria II", año: 3, cuatrimestre: 1, correlativas: ["15"] },
        { codigo: "21", nombre: "Literatura Argentina II", año: 3, cuatrimestre: 2, correlativas: ["15", "17"] },
        { codigo: "22", nombre: "Pragmática y Análisis del Discurso", año: 3, cuatrimestre: 2, correlativas: ["18"] },
        { codigo: "23", nombre: "Problemáticas de la enseñanza de la Lengua y la Literatura", año: 3, cuatrimestre: 2, correlativas: ["12", "13", "15", "18"] },
        { codigo: "24", nombre: "Didáctica Específica de las Letras", año: 3, cuatrimestre: 0, correlativas: ["4", "12", "13", "14", "15"] }, // A

        // CUARTO AÑO
        { codigo: "25", nombre: "Literatura Española I", año: 4, cuatrimestre: 1, correlativas: ["20"] },
        { codigo: "26", nombre: "Lengua y Cultura Latina I", año: 4, cuatrimestre: 1, correlativas: ["6", "14"] },
        { codigo: "27", nombre: "Sociolingüística", año: 4, cuatrimestre: 1, correlativas: ["18"] },
        { codigo: "28", nombre: "Teoría y Crítica Literaria III", año: 4, cuatrimestre: 1, correlativas: ["20"] },
        { codigo: "29", nombre: "Historia de la Lengua", año: 4, cuatrimestre: 1, correlativas: ["18"] },
        { codigo: "30", nombre: "Estéticas Contemporáneas", año: 4, cuatrimestre: 2, correlativas: ["9"] },
        { codigo: "31", nombre: "Literatura Europea I", año: 4, cuatrimestre: 2, correlativas: ["7", "20"] },
        { codigo: "32", nombre: "Práctica Profesional Docente y Residencia", año: 4, cuatrimestre: 0, correlativas: ["12", "16", "20", "21", "22", "24"] }, // A

        // QUINTO AÑO
        { codigo: "33", nombre: "Literatura Española II", año: 5, cuatrimestre: 1, correlativas: ["25", "28"] },
        { codigo: "34", nombre: "Lengua y Cultura Griega", año: 5, cuatrimestre: 1, correlativas: ["6", "14"] },
        { codigo: "35", nombre: "Metodología de la Investigación Literaria", año: 5, cuatrimestre: 1, correlativas: ["28"] },
        { codigo: "36", nombre: "Problemáticas de la Educación Secundaria y Superior", año: 5, cuatrimestre: 1, correlativas: ["24"] },
        { codigo: "37", nombre: "Literatura Europea II", año: 5, cuatrimestre: 2, correlativas: ["28", "31"] },
        { codigo: "38", nombre: "Lengua y Cultura Latina II", año: 5, cuatrimestre: 2, correlativas: ["26"] },
        { codigo: "39", nombre: "Metodología de la Investigación Lingüística", año: 5, cuatrimestre: 2, correlativas: ["22", "27"] },
        { codigo: "40", nombre: "Epistemología de los Estudios Lingüísticos", año: 5, cuatrimestre: 2, correlativas: ["22", "27"] }
    ],
    requisitos: [
        { codigo: "SEMINARIOS", nombre: "Seminario de Formación Docente (*): Optar por 1 (uno) entre Sistema Educativo e Instituciones, o Investigación Educativa." },
        { codigo: "IDIOMA", nombre: "Idioma: Aprobar un nivel de Lengua Moderna (Inglés, Portugués o Francés)." }
    ]
}

export default profesoradoUniversitarioLetras;
