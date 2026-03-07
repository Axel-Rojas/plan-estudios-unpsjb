import { Carrera } from "../../types";

const licenciaturaComunicacionSocial: Carrera = {
    nombre: "Licenciatura en Comunicación Social",
    facultad: "Facultad de Humanidades",
    sede: "Sede Comodoro Rivadavia",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "501", nombre: "Introducción a los estudios de comunicación", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "502", nombre: "Lenguaje escrito", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "503", nombre: "Producción sonora", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "504", nombre: "Diseño y producción visual", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "505", nombre: "Historia contemporánea", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "506", nombre: "Sociología", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "Electiva 1", nombre: "Electiva 1", año: 1, cuatrimestre: 1, correlativas: [] }, // Cuatrimestral - no especifica cual

        // SEGUNDO AÑO
        { codigo: "507", nombre: "Comunicación audiovisual I", año: 2, cuatrimestre: 1, correlativas: ["504"] },
        { codigo: "508", nombre: "Teorías de la comunicación I", año: 2, cuatrimestre: 1, correlativas: ["501"] },
        { codigo: "509", nombre: "Taller de radio", año: 2, cuatrimestre: 2, correlativas: ["503"] },
        { codigo: "510", nombre: "Diseño y producción multimedial", año: 2, cuatrimestre: 2, correlativas: ["503", "504"] },
        { codigo: "511", nombre: "Análisis del discurso", año: 2, cuatrimestre: 1, correlativas: ["502"] },
        { codigo: "512", nombre: "Psicología social de la comunicación", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "Electiva 2", nombre: "Electiva 2", año: 2, cuatrimestre: 1, correlativas: [] }, // Cuatrimestral - no especifica cual

        // TERCER AÑO
        { codigo: "513", nombre: "Comunicación audiovisual II", año: 3, cuatrimestre: 2, correlativas: ["507"] },
        { codigo: "514", nombre: "Taller producción de contenidos", año: 3, cuatrimestre: 2, correlativas: ["502"] },
        { codigo: "515", nombre: "Derecho de la información y ética profesional", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "516", nombre: "Teorías de la comunicación II", año: 3, cuatrimestre: 1, correlativas: ["508"] },
        { codigo: "517", nombre: "Comunicación publicitaria", año: 3, cuatrimestre: 1, correlativas: ["510", "511"] },
        { codigo: "518", nombre: "Historia regional y argentina", año: 3, cuatrimestre: 1, correlativas: ["506"] },
        { codigo: "Electiva 3", nombre: "Electiva 3", año: 3, cuatrimestre: 1, correlativas: [] }, // Cuatrimestral - no especifica cual

        // CUARTO AÑO
        { codigo: "519", nombre: "Imagen y estética contemporáneas", año: 4, cuatrimestre: 2, correlativas: ["513"] },
        { codigo: "520", nombre: "Comunicación, tecnología y cultura", año: 4, cuatrimestre: 1, correlativas: ["516"] },
        { codigo: "521", nombre: "Metodología de la investigación I", año: 4, cuatrimestre: 1, correlativas: [] },
        { codigo: "522", nombre: "Metodología de la investigación II", año: 4, cuatrimestre: 2, correlativas: [] },
        { codigo: "523", nombre: "Antropología", año: 4, cuatrimestre: 1, correlativas: [] },
        { codigo: "524", nombre: "Economía", año: 4, cuatrimestre: 2, correlativas: [] },

        // QUINTO AÑO
        { codigo: "525", nombre: "Comunicación política", año: 5, cuatrimestre: 1, correlativas: [] },
        { codigo: "526", nombre: "Política de medios, comunicación y cultura", año: 5, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "527", nombre: "Taller de tesis", año: 5, cuatrimestre: 1, correlativas: ["521", "522"] },

        // MATERIAS ELECTIVAS (Las pueden cursar en cualquier momento, pero son parte del plan)
        { codigo: "528", nombre: "Taller de periodismo (Electiva)", año: 0, cuatrimestre: 1, correlativas: [] },
        { codigo: "529", nombre: "Análisis de la Información (Electiva)", año: 0, cuatrimestre: 1, correlativas: [] },
        { codigo: "530", nombre: "Periodismo Digital (Electiva)", año: 0, cuatrimestre: 2, correlativas: [] },
        { codigo: "531", nombre: "Comunicación de las organizaciones (Electiva)", año: 0, cuatrimestre: 1, correlativas: [] },
        { codigo: "532", nombre: "Diseño y gestión de proyectos (Electiva)", año: 0, cuatrimestre: 1, correlativas: [] },
        { codigo: "533", nombre: "Comunicaciones integradas (Electiva)", año: 0, cuatrimestre: 2, correlativas: [] },
    ],
    requisitos: [
        { codigo: "IDIOMA", nombre: "Taller de idioma: Aprobar un examen de idioma extranjero (inglés o portugués)." },
        { codigo: "TESIS", nombre: "Tesis: Presentar un trabajo de tesis de grado conforme a la Resolución CDFHCS N°214/2013 o normativa sustituta." }
    ]
}

export default licenciaturaComunicacionSocial;
