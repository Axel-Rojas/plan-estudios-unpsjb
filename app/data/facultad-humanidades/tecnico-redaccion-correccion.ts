import { Carrera } from "../../types";

const tecnicoRedaccionCorreccion: Carrera = {
    nombre: "Técnico Universitario en Redacción y Corrección de Textos",
    facultad: "Facultad de Humanidades",
    sede: "Sede Comodoro Rivadavia",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "001", nombre: "Introducción a los estudios literarios", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "002", nombre: "Sociología", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "003", nombre: "Taller de comprensión y producción de textos", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "004", nombre: "Gramática española I", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "005", nombre: "Literatura Optativa I", año: 1, cuatrimestre: 2, correlativas: ["001"] },
        { codigo: "006", nombre: "Inglés", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "007", nombre: "Taller de redacción y Corrección I", año: 2, cuatrimestre: 1, correlativas: ["003"] },
        { codigo: "008", nombre: "Literatura Optativa II", año: 2, cuatrimestre: 1, correlativas: ["005"] },
        { codigo: "009", nombre: "Filosofía", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "010", nombre: "Gramática española II", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "011", nombre: "Taller de nuevas tecnologías de la información y la comunicación", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "012", nombre: "Taller de redacción y Corrección II", año: 2, cuatrimestre: 2, correlativas: ["007"] },

        // TERCER AÑO
        { codigo: "013", nombre: "Lingüística general", año: 3, cuatrimestre: 1, correlativas: ["010"] },
        { codigo: "014", nombre: "Sociolingüística", año: 3, cuatrimestre: 1, correlativas: ["010"] },
        { codigo: "015", nombre: "Taller de redacción y corrección III", año: 3, cuatrimestre: 1, correlativas: ["012"] },
        { codigo: "016", nombre: "Pragmática y análisis del discurso", año: 3, cuatrimestre: 2, correlativas: ["013"] },
        { codigo: "017", nombre: "Taller de edición y publicación", año: 3, cuatrimestre: 2, correlativas: ["011"] },
        { codigo: "018", nombre: "Seminario-Taller de práctica e intervención profesional", año: 3, cuatrimestre: 2, correlativas: ["015"] },
    ],
    requisitos: [
        { codigo: "LITERATURAS_OPTATIVAS", nombre: "Literaturas Optativas: Optar por 2 (dos) entre: Literatura Latinoamericana I, Literatura Latinoamericana II, Literatura Patagónica, Literatura Argentina I, Literatura Argentina II, Literatura Española I, Literatura Española II." }
    ]
}

export default tecnicoRedaccionCorreccion;
