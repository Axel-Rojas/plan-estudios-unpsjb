import { Carrera } from "../../types";

const tecnicoUniversitarioPeriodismo: Carrera = {
    nombre: "Técnicatura en Periodismo",
    facultad: "Facultad de Humanidades",
    sede: "Sede Comodoro Rivadavia",
    plan: "-",
    materias: [
        // Primer año
        { codigo: "102", nombre: "Lenguaje escrito", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "103", nombre: "Producción sonora", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "107", nombre: "Taller de periodismo", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "101", nombre: "Introducción a los estudios de comunicación", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "106", nombre: "Sociología", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "104", nombre: "Diseño y producción visual", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "105", nombre: "Historia contemporánea", año: 1, cuatrimestre: 2, correlativas: [] },

        // Segundo año
        { codigo: "108", nombre: "Comunicación audiovisual I", año: 2, cuatrimestre: 1, correlativas: ["104"] },
        { codigo: "109", nombre: "Teorías de la comunicación I", año: 2, cuatrimestre: 1, correlativas: ["101"] },
        { codigo: "112", nombre: "Análisis del discurso", año: 2, cuatrimestre: 1, correlativas: ["102"] },
        { codigo: "114", nombre: "Análisis de la información", año: 2, cuatrimestre: 1, correlativas: ["102", "107"] },
        { codigo: "110", nombre: "Taller de radio", año: 2, cuatrimestre: 2, correlativas: ["103"] },
        { codigo: "111", nombre: "Diseño y producción multimedial", año: 2, cuatrimestre: 2, correlativas: ["103", "104"] },
        { codigo: "113", nombre: "Psicología social de la comunicación", año: 2, cuatrimestre: 2, correlativas: [] },

        // Tercer año
        { codigo: "118", nombre: "Teorías de la comunicación II", año: 3, cuatrimestre: 1, correlativas: ["109"] },
        { codigo: "119", nombre: "Comunicación publicitaria", año: 3, cuatrimestre: 1, correlativas: ["111", "112"] },
        { codigo: "120", nombre: "Historia regional y argentina", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "115", nombre: "Comunicación audiovisual II", año: 3, cuatrimestre: 2, correlativas: ["108"] },
        { codigo: "116", nombre: "Taller producción de contenidos", año: 3, cuatrimestre: 2, correlativas: ["114"] },
        { codigo: "117", nombre: "Derecho de la información y ética profesional", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "121", nombre: "Periodismo digital", año: 3, cuatrimestre: 2, correlativas: ["114"] },
    ]
} satisfies Carrera;

export default tecnicoUniversitarioPeriodismo;
