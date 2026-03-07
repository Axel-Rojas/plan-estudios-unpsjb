import { Carrera } from "../../types";

const profesoradoUniversitarioGeografia: Carrera = {
    nombre: "Profesor Universitario en Geografía",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Introducción a la Geografía", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "2", nombre: "Geografía Física I", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Sociología", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "4", nombre: "Pedagogía", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "5", nombre: "Cartografía", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "6", nombre: "Historia Latinoamericana", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "7", nombre: "Geografía Humana", año: 1, cuatrimestre: 2, correlativas: ["1"] },
        { codigo: "8", nombre: "Epistemología", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "9", nombre: "Psicología Evolutiva", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "10", nombre: "Geografía Física II", año: 2, cuatrimestre: 1, correlativas: ["2"] },
        { codigo: "11", nombre: "Teledetección", año: 2, cuatrimestre: 1, correlativas: ["2", "5"] },
        { codigo: "12", nombre: "Tecnología Educativa", año: 2, cuatrimestre: 1, correlativas: ["4"] },
        { codigo: "13", nombre: "Geografía Económica General", año: 2, cuatrimestre: 2, correlativas: ["7"] },
        { codigo: "14", nombre: "Geografía Física III", año: 2, cuatrimestre: 2, correlativas: ["2", "10"] },
        { codigo: "15", nombre: "Geografía Urbana y Rural", año: 2, cuatrimestre: 2, correlativas: ["7"] },
        { codigo: "16", nombre: "Didáctica General", año: 2, cuatrimestre: 2, correlativas: ["4"] },

        // TERCER AÑO
        { codigo: "17", nombre: "Geografía Física Argentina", año: 3, cuatrimestre: 1, correlativas: ["5", "14"] },
        { codigo: "18", nombre: "Metodología de la Invest. Geográfica", año: 3, cuatrimestre: 1, correlativas: ["7", "8"] },
        { codigo: "19", nombre: "Tecnologías de la Información Geoespacial", año: 3, cuatrimestre: 1, correlativas: ["5", "11"] },
        { codigo: "20", nombre: "Historia Argentina", año: 3, cuatrimestre: 1, correlativas: ["6"] },
        { codigo: "21", nombre: "Formación Docente", año: 3, cuatrimestre: 2, correlativas: ["4"] },
        { codigo: "22", nombre: "Geografía del Espacio Mundial", año: 3, cuatrimestre: 2, correlativas: ["13", "15"] },
        { codigo: "23", nombre: "Didáctica Específica de la Geografía", año: 3, cuatrimestre: 2, correlativas: ["16"] },
        { codigo: "24", nombre: "Geografía del Espacio Americano", año: 3, cuatrimestre: 2, correlativas: ["13", "15"] },

        // CUARTO AÑO
        { codigo: "25", nombre: "Geografía Económica Argentina", año: 4, cuatrimestre: 1, correlativas: ["13"] },
        { codigo: "26", nombre: "Geografía Política", año: 4, cuatrimestre: 1, correlativas: ["20", "22"] },
        { codigo: "27", nombre: "Seminario: Ordenamiento Territorial", año: 4, cuatrimestre: 1, correlativas: ["15", "22"] },
        { codigo: "28", nombre: "Geografía Regional Argentina", año: 4, cuatrimestre: 2, correlativas: ["13", "17", "26"] },
        { codigo: "29", nombre: "Seminario: Geografía de la Patagonia", año: 4, cuatrimestre: 2, correlativas: ["17", "25", "26"] },
        { codigo: "30", nombre: "Seminarios Optativos", año: 4, cuatrimestre: 2, correlativas: [] },
        { codigo: "31", nombre: "Práctica y Residencia Profesional (**)", año: 4, cuatrimestre: 0, correlativas: ["20", "23", "24"] }, // A
    ],
    requisitos: [
        { codigo: "INFORMATICA", nombre: "Taller de Informática: Aprobar examen antes de cursar Teledetección." },
        { codigo: "IDIOMA", nombre: "Taller de Idioma: Aprobar examen de inglés o portugués antes de cuarto año." },
        { codigo: "OPTATIVAS", nombre: "Seminarios Optativos: Uso y conservación de los recursos, Geografía de los riesgos ambientales." }
    ]
}

export default profesoradoUniversitarioGeografia;
