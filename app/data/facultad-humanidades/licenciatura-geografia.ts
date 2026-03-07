import { Carrera } from "../../types";

const licenciaturaGeografia: Carrera = {
    nombre: "Licenciatura en Geografía",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Introducción a la Geografía", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "2", nombre: "Ambiente Natural I", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "3", nombre: "Sociología", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "4", nombre: "Introducción a la Historia", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "5", nombre: "Sistema de Información Territorial", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "6", nombre: "Cartografía", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "7", nombre: "Ambiente Natural II", año: 2, cuatrimestre: 1, correlativas: ["1"] },
        { codigo: "8", nombre: "Geografía Humana", año: 2, cuatrimestre: 1, correlativas: ["1"] },
        { codigo: "9", nombre: "Fotointerpretación y Teledetección", año: 2, cuatrimestre: 1, correlativas: ["1"] },
        { codigo: "10", nombre: "Ambiente Natural III", año: 2, cuatrimestre: 2, correlativas: ["1", "2"] },
        { codigo: "11", nombre: "Geografía Urbana y Rural", año: 2, cuatrimestre: 2, correlativas: ["8"] },
        { codigo: "12", nombre: "Geografía Económica General", año: 2, cuatrimestre: 2, correlativas: ["8"] },

        // TERCER AÑO
        { codigo: "13", nombre: "Geografía Física Argentina", año: 3, cuatrimestre: 1, correlativas: ["10"] },
        { codigo: "14", nombre: "Metodología de la Investigación Geográfica I", año: 3, cuatrimestre: 1, correlativas: ["8", "10"] },
        { codigo: "15", nombre: "Geografía Política", año: 3, cuatrimestre: 1, correlativas: ["8"] },
        { codigo: "16", nombre: "Geografía Del Espacio Mundial", año: 3, cuatrimestre: 2, correlativas: ["10", "11", "12"] },
        { codigo: "17", nombre: "Geografía del Espacio Americano", año: 3, cuatrimestre: 2, correlativas: ["10", "11", "12"] },
        { codigo: "18", nombre: "Estadística", año: 3, cuatrimestre: 2, correlativas: [] },

        // CUARTO AÑO
        { codigo: "19", nombre: "Geografía Económica Argentina", año: 4, cuatrimestre: 1, correlativas: ["11", "12", "13"] },
        { codigo: "20", nombre: "Historia Americana y Argentina", año: 4, cuatrimestre: 1, correlativas: ["4"] },
        { codigo: "21", nombre: "Epistemología", año: 4, cuatrimestre: 1, correlativas: [] },
        { codigo: "22", nombre: "Geografía Regional Argentina", año: 4, cuatrimestre: 2, correlativas: ["12", "17"] },
        { codigo: "23", nombre: "Seminario: Geografía de la Patagonia", año: 4, cuatrimestre: 2, correlativas: ["14"] },
        { codigo: "24", nombre: "Metodología de la Investigación Geográfica II", año: 4, cuatrimestre: 2, correlativas: ["14"] },

        // QUINTO AÑO
        { codigo: "25", nombre: "Seminario I", año: 5, cuatrimestre: 1, correlativas: ["14", "22"] },
        { codigo: "26", nombre: "Seminario II", año: 5, cuatrimestre: 2, correlativas: ["14", "22"] },
        { codigo: "27", nombre: "Tesis de Grado", año: 5, cuatrimestre: 2, correlativas: ["18", "22"] }
    ]
}

export default licenciaturaGeografia;
