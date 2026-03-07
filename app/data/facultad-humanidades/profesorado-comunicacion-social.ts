import { Carrera } from "../../types";

const profesoradoComunicacionSocial: Carrera = {
    nombre: "Profesor/a en Comunicación Social",
    facultad: "Facultad de Humanidades",
    sede: "Sede Comodoro Rivadavia",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "401", nombre: "Introducción a los estudios de comunicación", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "402", nombre: "Lenguaje escrito", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "403", nombre: "Producción sonora", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "404", nombre: "Diseño y producción visual", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "405", nombre: "Historia contemporánea", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "406", nombre: "Sociología", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "407", nombre: "Pedagogía", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "Electiva 1", nombre: "Electiva 1", año: 1, cuatrimestre: 1, correlativas: [] }, // Cuatrimestral - no especifica cual

        // SEGUNDO AÑO
        { codigo: "408", nombre: "Teorías de la comunicación I", año: 2, cuatrimestre: 1, correlativas: ["401"] },
        { codigo: "409", nombre: "Taller de radio", año: 2, cuatrimestre: 2, correlativas: ["403"] },
        { codigo: "410", nombre: "Diseño y producción multimedial", año: 2, cuatrimestre: 2, correlativas: ["403", "404"] },
        { codigo: "411", nombre: "Análisis del discurso", año: 2, cuatrimestre: 1, correlativas: ["402"] },
        { codigo: "412", nombre: "Didáctica General", año: 2, cuatrimestre: 1, correlativas: ["407"] },
        { codigo: "413", nombre: "Psicología evolutiva", año: 2, cuatrimestre: 1, correlativas: ["407"] },
        { codigo: "414", nombre: "Tecnología Educativa", año: 2, cuatrimestre: 2, correlativas: ["412"] },
        { codigo: "Electiva 2", nombre: "Electiva 2", año: 2, cuatrimestre: 1, correlativas: [] }, // Cuatrimestral - no especifica cual

        // TERCER AÑO
        { codigo: "415", nombre: "Comunicación de las organizaciones", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "416", nombre: "Comunicación audiovisual I", año: 3, cuatrimestre: 1, correlativas: ["410"] },
        { codigo: "417", nombre: "Taller producción de contenidos", año: 3, cuatrimestre: 2, correlativas: ["402"] },
        { codigo: "418", nombre: "Derecho de la información y ética profesional", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "419", nombre: "Taller de periodismo", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "420", nombre: "Historia regional y argentina", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "421", nombre: "Formación docente (*)", año: 3, cuatrimestre: 1, correlativas: ["412"] },
        { codigo: "422", nombre: "Didáctica Específica de la Comunicación", año: 3, cuatrimestre: 2, correlativas: ["408", "412", "414"] },

        // CUARTO AÑO
        { codigo: "423", nombre: "Comunicación audiovisual II", año: 4, cuatrimestre: 2, correlativas: ["416"] },
        { codigo: "424", nombre: "Análisis de la información", año: 4, cuatrimestre: 1, correlativas: ["402", "419"] },
        { codigo: "425", nombre: "Imagen y estética contemporáneas", año: 4, cuatrimestre: 2, correlativas: ["416"] },
        { codigo: "426", nombre: "Comunicación, tecnología y cultura", año: 4, cuatrimestre: 1, correlativas: ["408"] },
        { codigo: "427", nombre: "Comunicación publicitaria", año: 4, cuatrimestre: 1, correlativas: ["410", "411"] },
        { codigo: "428", nombre: "Práctica profesional docente", año: 4, cuatrimestre: 0, correlativas: ["422"] }, // Anual
        { codigo: "Electiva 3", nombre: "Electiva 3", año: 4, cuatrimestre: 1, correlativas: [] }, // Cuatrimestral - no especifica cual

        // MATERIAS ELECTIVAS (Las pueden cursar en cualquier momento, pero son parte del plan)
        { codigo: "429", nombre: "Periodismo digital (Electiva)", año: 0, cuatrimestre: 2, correlativas: [] },
        { codigo: "430", nombre: "Diseño y gestión de proyectos (Electiva)", año: 0, cuatrimestre: 1, correlativas: [] },
        { codigo: "431", nombre: "Comunicaciones integradas (Electiva)", año: 0, cuatrimestre: 2, correlativas: [] },
        { codigo: "432", nombre: "Psicología Social de las Comunicaciones (Electiva)", año: 0, cuatrimestre: 2, correlativas: [] },
        { codigo: "433", nombre: "Teorías de la comunicación II (Electiva)", año: 0, cuatrimestre: 1, correlativas: [] },
    ],
    requisitos: [
        { codigo: "IDIOMA", nombre: "Taller de idioma: Aprobar un examen de idioma extranjero (inglés o portugués)." },
        { codigo: "FORMACION_DOCENTE", nombre: "Formación docente (*): Optar por uno de los dos espacios: Sistema Educativo e Instituciones o Investigación Educativa." },
        { codigo: "PRACTICA_DOCENTE", nombre: "Práctica profesional docente (**): 300 horas totales divididas en cursado, residencias y 3 experiencias." }
    ]
}

export default profesoradoComunicacionSocial;
