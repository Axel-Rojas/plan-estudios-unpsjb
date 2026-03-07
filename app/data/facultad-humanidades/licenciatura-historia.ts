import { Carrera } from "../../types";

const licenciaturaHistoria: Carrera = {
    nombre: "Licenciatura en Historia",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Historia Social de América Latina y Argentina Contemporánea", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "2", nombre: "Sociología", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Historia del Antiguo Oriente", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "4", nombre: "Antropología y Etnografía General", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "5", nombre: "Historia de la Antigüedad Clásica", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "6", nombre: "Introducción a la Historia", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "7", nombre: "Filosofía", año: 2, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "8", nombre: "Introducción a la Geografía", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "9", nombre: "Historia Medieval", año: 2, cuatrimestre: 1, correlativas: ["3"] },
        { codigo: "10", nombre: "Corrientes Historiográficas", año: 2, cuatrimestre: 2, correlativas: ["6"] },
        { codigo: "11", nombre: "Historia Moderna", año: 2, cuatrimestre: 2, correlativas: ["6"] },
        { codigo: "12", nombre: "Métodos y Técnicas de Investigación I", año: 2, cuatrimestre: 2, correlativas: ["6"] },

        // TERCER AÑO
        { codigo: "13", nombre: "Historia Contemporánea I (1789-1914)", año: 3, cuatrimestre: 1, correlativas: ["9"] },
        { codigo: "14", nombre: "Historia de América I", año: 3, cuatrimestre: 1, correlativas: ["4"] },
        { codigo: "15", nombre: "Historia Argentina I (1776-1852)", año: 3, cuatrimestre: 1, correlativas: ["1", "11"] },
        { codigo: "16", nombre: "Historia Contemporánea II (1914 a la actualidad)", año: 3, cuatrimestre: 2, correlativas: ["11"] },
        { codigo: "17", nombre: "Historia de América II (Colonial)", año: 3, cuatrimestre: 2, correlativas: ["11"] },

        // CUARTO AÑO
        { codigo: "18", nombre: "Historia Argentina II (1852-1930)", año: 4, cuatrimestre: 1, correlativas: ["15"] },
        { codigo: "19", nombre: "Historia de América III (Siglos XIX y XX)", año: 4, cuatrimestre: 1, correlativas: ["17"] },
        { codigo: "20", nombre: "Historia Argentina III (1930 a la actualidad)", año: 4, cuatrimestre: 2, correlativas: ["15"] },
        { codigo: "21", nombre: "Seminario: Economía y Sociedad", año: 4, cuatrimestre: 2, correlativas: [] },
        { codigo: "22", nombre: "Seminario: Historia de Patagonia", año: 4, cuatrimestre: 2, correlativas: [] },

        // QUINTO AÑO
        { codigo: "23", nombre: "Problemáticas del Mundo Actual I", año: 5, cuatrimestre: 1, correlativas: ["16"] },
        { codigo: "24", nombre: "Ciencias Sociales Contemporáneas", año: 5, cuatrimestre: 1, correlativas: [] },
        { codigo: "25", nombre: "Filosofía e Historia", año: 5, cuatrimestre: 1, correlativas: ["6", "7"] },
        { codigo: "26", nombre: "Métodos y Técnicas de Investigación II", año: 5, cuatrimestre: 2, correlativas: ["12"] },
        { codigo: "27", nombre: "Problemáticas del Mundo Actual II", año: 5, cuatrimestre: 2, correlativas: ["23"] },
        { codigo: "28", nombre: "Tesis de Grado", año: 5, cuatrimestre: 2, correlativas: ["12", "20", "22"] }
    ]
}

export default licenciaturaHistoria;
