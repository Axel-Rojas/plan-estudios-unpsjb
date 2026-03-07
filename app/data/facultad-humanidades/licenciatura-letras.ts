import { Carrera } from "../../types";

const licenciaturaLetras: Carrera = {
    nombre: "Licenciatura en Letras",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Literatura Argentina I", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "2", nombre: "Principales Corrientes del Pensamiento Contemporáneo", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Gramática Española I", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "4", nombre: "Teoría y Práctica Crítica", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "5", nombre: "Taller de Lectura y Producción de Textos", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual

        // SEGUNDO AÑO
        { codigo: "6", nombre: "Literatura Clásica", año: 2, cuatrimestre: 1, correlativas: ["4"] },
        { codigo: "7", nombre: "Literatura Europea I", año: 2, cuatrimestre: 2, correlativas: ["4"] },
        { codigo: "8", nombre: "Gramática Española II", año: 2, cuatrimestre: 2, correlativas: ["3"] },
        { codigo: "9", nombre: "Literatura Española I", año: 2, cuatrimestre: 0, correlativas: ["4"] }, // Anual
        { codigo: "10", nombre: "Filosofía", año: 2, cuatrimestre: 0, correlativas: [] }, // Anual

        // TERCER AÑO
        { codigo: "11", nombre: "Literatura Latinoamericana I", año: 3, cuatrimestre: 1, correlativas: ["9"] },
        { codigo: "12", nombre: "Lingüística I", año: 3, cuatrimestre: 1, correlativas: ["3"] },
        { codigo: "13", nombre: "Lengua y Cultura Griega", año: 3, cuatrimestre: 1, correlativas: ["3"] },
        { codigo: "14", nombre: "Literatura Argentina II", año: 3, cuatrimestre: 2, correlativas: ["1"] },
        { codigo: "15", nombre: "Lengua y Cultura Latina I", año: 3, cuatrimestre: 2, correlativas: ["3"] },
        { codigo: "16", nombre: "Seminario de Teoría y Práctica Discursiva", año: 3, cuatrimestre: 0, correlativas: ["5"] }, // Anual

        // CUARTO AÑO
        { codigo: "17", nombre: "Historia de la Lengua", año: 4, cuatrimestre: 1, correlativas: ["15"] },
        { codigo: "18", nombre: "Seminario: Literatura Patagónica", año: 4, cuatrimestre: 1, correlativas: ["14"] },
        { codigo: "19", nombre: "El Arte y el Hombre", año: 4, cuatrimestre: 2, correlativas: ["10"] },
        { codigo: "20", nombre: "Literatura Española II", año: 4, cuatrimestre: 0, correlativas: ["9"] }, // Anual
        { codigo: "21", nombre: "Literatura Latinoamericana II", año: 4, cuatrimestre: 0, correlativas: ["11"] }, // Anual
        { codigo: "22", nombre: "Literatura Europea II", año: 4, cuatrimestre: 2, correlativas: ["7"] },

        // QUINTO AÑO
        { codigo: "23", nombre: "Lengua y Cultura Latina II", año: 5, cuatrimestre: 1, correlativas: ["15"] },
        { codigo: "24", nombre: "Metodología de la Investigación Literaria", año: 5, cuatrimestre: 1, correlativas: ["21"] },
        { codigo: "25", nombre: "Lingüística II", año: 5, cuatrimestre: 2, correlativas: ["12"] },
        { codigo: "26", nombre: "Metodología de la Investigación Lingüística", año: 5, cuatrimestre: 2, correlativas: ["12"] },
        { codigo: "27", nombre: "Epistemología de los Estudios Literarios", año: 5, cuatrimestre: 0, correlativas: ["21"] }, // Anual
        { codigo: "28", nombre: "Tesis de Grado", año: 5, cuatrimestre: 0, correlativas: ["17", "18", "19", "20", "21", "22"] }, // Anual
    ]
}

export default licenciaturaLetras;
