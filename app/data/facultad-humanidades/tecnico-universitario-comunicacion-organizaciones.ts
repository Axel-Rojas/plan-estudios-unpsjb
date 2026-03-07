import { Carrera } from "../../types";

const tecnicoUniversitarioComunicacionOrganizaciones: Carrera = {
    nombre: "Técnico Universitario en Comunicación de las Organizaciones",
    facultad: "Facultad de Humanidades",
    sede: "Sede Comodoro Rivadavia",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "201", nombre: "Introducción a los estudios de la comunicación", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "202", nombre: "Lenguaje escrito", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "203", nombre: "Producción sonora", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "204", nombre: "Diseño y producción visual", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "205", nombre: "Historia contemporánea", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "206", nombre: "Sociología", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "207", nombre: "Comunicación de las organizaciones", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "208", nombre: "Comunicación audiovisual I", año: 2, cuatrimestre: 1, correlativas: ["204"] },
        { codigo: "209", nombre: "Teorías de la comunicación I", año: 2, cuatrimestre: 1, correlativas: ["201"] },
        { codigo: "210", nombre: "Taller de radio", año: 2, cuatrimestre: 2, correlativas: ["203"] },
        { codigo: "211", nombre: "Diseño y producción multimedial", año: 2, cuatrimestre: 2, correlativas: ["203", "204"] },
        { codigo: "212", nombre: "Análisis del discurso", año: 2, cuatrimestre: 1, correlativas: ["202"] },
        { codigo: "213", nombre: "Psicología social de la comunicación", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "214", nombre: "Diseño y gestión de proyectos", año: 2, cuatrimestre: 1, correlativas: ["207"] },

        // TERCER AÑO
        { codigo: "215", nombre: "Comunicación audiovisual II", año: 3, cuatrimestre: 2, correlativas: ["208"] },
        { codigo: "216", nombre: "Taller producción de contenidos", año: 3, cuatrimestre: 2, correlativas: ["202"] },
        { codigo: "217", nombre: "Derecho de la información y ética profesional", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "218", nombre: "Teorías de la comunicación II", año: 3, cuatrimestre: 1, correlativas: ["209"] },
        { codigo: "219", nombre: "Comunicación publicitaria", año: 3, cuatrimestre: 1, correlativas: ["211", "212"] },
        { codigo: "220", nombre: "Historia regional y argentina", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "221", nombre: "Comunicaciones integradas", año: 3, cuatrimestre: 2, correlativas: ["213"] },
    ]
}

export default tecnicoUniversitarioComunicacionOrganizaciones;
