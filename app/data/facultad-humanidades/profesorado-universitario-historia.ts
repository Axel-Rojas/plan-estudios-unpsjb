import { Carrera } from "../../types";

const profesoradoUniversitarioHistoria: Carrera = {
    nombre: "Profesor Universitario en historia para la Educación Secundaria",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Historia Social de América Latina y Argentina Contemporánea", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "2", nombre: "Sociología", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Historia del Antiguo Oriente", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "4", nombre: "Pedagogía", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "5", nombre: "Historia de la Antigüedad Clásica", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "6", nombre: "Introducción a la Historia", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "7", nombre: "Antropología y Etnografía General", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "8", nombre: "Espacios Geográficos y su Problemática", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "9", nombre: "Filosofía", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "10", nombre: "Psicología Evolutiva", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "11", nombre: "Historia Medieval", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "12", nombre: "Didáctica General", año: 2, cuatrimestre: 1, correlativas: ["4"] },
        { codigo: "13", nombre: "Tecnología Educativa", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "14", nombre: "Métodos y Técnicas de Investigación I", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "15", nombre: "Historia de América I", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "16", nombre: "Historia Moderna", año: 2, cuatrimestre: 2, correlativas: ["5"] },

        // TERCER AÑO
        { codigo: "17", nombre: "Historia Contemporánea I (1789-1914)", año: 3, cuatrimestre: 1, correlativas: ["16"] },
        { codigo: "18", nombre: "Historia de América II (Colonial)", año: 3, cuatrimestre: 1, correlativas: ["15"] },
        { codigo: "19", nombre: "Formación Docente (*)", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "20", nombre: "Corrientes Historiográficas", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "21", nombre: "Economía y Sociedad", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "22", nombre: "Problemáticas de Enseñanza de la Historia", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "23", nombre: "Didáctica Específica de la Historia", año: 3, cuatrimestre: 2, correlativas: ["12"] },
        { codigo: "24", nombre: "Historia Argentina I (1776 - 1852)", año: 3, cuatrimestre: 2, correlativas: ["18"] },

        // CUARTO AÑO
        { codigo: "25", nombre: "Historia Argentina II (1852-1930)", año: 4, cuatrimestre: 1, correlativas: ["24"] },
        { codigo: "26", nombre: "Historia de América III (Siglos XIX y XX)", año: 4, cuatrimestre: 1, correlativas: ["18"] },
        { codigo: "27", nombre: "Formación Específica (**)", año: 4, cuatrimestre: 1, correlativas: [] },
        { codigo: "28", nombre: "Historia Argentina III (1930 a la actualidad)", año: 4, cuatrimestre: 2, correlativas: ["25"] },
        { codigo: "29", nombre: "Procesos y Problemas de la Historia de Patagonia", año: 4, cuatrimestre: 2, correlativas: [] },
        { codigo: "30", nombre: "Historia Contemporánea II (1914 a la actualidad)", año: 4, cuatrimestre: 2, correlativas: ["17"] },
        { codigo: "31", nombre: "Práctica y Residencia Profesional", año: 4, cuatrimestre: 0, correlativas: ["22", "23"] }, // A
    ]
}

export default profesoradoUniversitarioHistoria;
