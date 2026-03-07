import { Carrera } from "../../types";

const tecnicoGestionMediacionCultural: Carrera = {
    nombre: "Técnico en Gestión y Mediación Cultural",
    facultad: "Facultad de Humanidades",
    sede: "Sede Comodoro Rivadavia",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Metodología de la Investigación Sociocultural", año: 1, cuatrimestre: 0, correlativas: [] }, // Anual
        { codigo: "2", nombre: "Introducción a la Gestión y Mediación Cultural", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Historia Sociocultural de Argentina Contemporánea", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "4", nombre: "Antropología Sociocultural", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "5", nombre: "Historia Sociocultural de la Región Patagónica", año: 1, cuatrimestre: 2, correlativas: ["3"] },
        { codigo: "6", nombre: "Sociología General", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "7", nombre: "Seminario de Créditos I", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "8", nombre: "Globalización y Territorio de la Patagonia", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "9", nombre: "Patrimonio y Turismo Cultural", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "10", nombre: "Sociología de la Cultura", año: 2, cuatrimestre: 1, correlativas: ["6"] },
        { codigo: "11", nombre: "Análisis de la legislación cultural", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "12", nombre: "Economía y Cultura", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "13", nombre: "Seminario de Créditos II", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "14", nombre: "Práctica de campo en intervención sociocultural", año: 2, cuatrimestre: 0, correlativas: ["1"] }, // Anual
        { codigo: "15", nombre: "Planeamiento y Programación Sociocultural", año: 2, cuatrimestre: 0, correlativas: [] }, // Anual

        // TERCER AÑO
        { codigo: "16", nombre: "Culturas organizacionales", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "17", nombre: "Cultura y Desarrollo/Desarrollo Cultural", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "18", nombre: "Políticas Culturales y campo educativo formal", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "19", nombre: "Animación y promoción sociocultural", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "20", nombre: "Comunicación, Cultura y TICs", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "21", nombre: "Políticas culturales y campo educativo No formal", año: 3, cuatrimestre: 2, correlativas: ["18"] },
        { codigo: "22", nombre: "Seminario de Créditos III", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "23", nombre: "Práctica de campo en Gestión y Mediación sociocultural", año: 3, cuatrimestre: 0, correlativas: ["14", "15"] }, // Anual
    ]
}

export default tecnicoGestionMediacionCultural;
