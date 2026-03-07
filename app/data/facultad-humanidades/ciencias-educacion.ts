import { Carrera } from "../../types";

const cienciasEducacion: Carrera = {
    nombre: "Profesor y Licenciado en Ciencias de la Educación",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Esquel",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "1", nombre: "Módulo en Ciencias Sociales", año: 1, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "2", nombre: "Historia Social de la Educación", año: 1, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "3", nombre: "Psicología", año: 1, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "4", nombre: "Pedagogía", año: 1, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "5", nombre: "Práctica Profesional", año: 1, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "6", nombre: "Eje de Investigación I", año: 1, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "7", nombre: "Neurofisiología", año: 1, cuatrimestre: 0, correlativas: [] }, // A

        // SEGUNDO AÑO
        { codigo: "8", nombre: "Filosofía", año: 2, cuatrimestre: 0, correlativas: [] }, // A
        { codigo: "9", nombre: "Sociología de la Educación", año: 2, cuatrimestre: 0, correlativas: ["1"] }, // A
        { codigo: "10", nombre: "Psicología Evolutiva I", año: 2, cuatrimestre: 0, correlativas: ["3", "7"] }, // A
        { codigo: "11", nombre: "Psicología Cognitiva", año: 2, cuatrimestre: 0, correlativas: ["3", "7"] }, // A
        { codigo: "12", nombre: "Didáctica General", año: 2, cuatrimestre: 0, correlativas: ["4"] }, // A
        { codigo: "13", nombre: "Eje de Investigación II", año: 2, cuatrimestre: 0, correlativas: ["6"] }, // A

        // TERCER AÑO
        { codigo: "14", nombre: "Teorías del Conocimiento y Epistemología", año: 3, cuatrimestre: 0, correlativas: ["8", "11"] }, // A
        { codigo: "15", nombre: "Historia de la Educación Argentina y Latinoamericana", año: 3, cuatrimestre: 0, correlativas: ["2"] }, // A
        { codigo: "16", nombre: "Psicología Evolutiva II", año: 3, cuatrimestre: 0, correlativas: ["10"] }, // A
        { codigo: "17", nombre: "Didáctica I", año: 3, cuatrimestre: 0, correlativas: ["12"] }, // A
        { codigo: "18", nombre: "Práctica Profesional I", año: 3, cuatrimestre: 0, correlativas: ["5"] }, // A
        { codigo: "19", nombre: "Eje de Investigación III", año: 3, cuatrimestre: 0, correlativas: ["13"] }, // A

        // CUARTO AÑO
        { codigo: "20", nombre: "Política y Administración Educativa", año: 4, cuatrimestre: 0, correlativas: ["15"] }, // A
        { codigo: "21", nombre: "Psicosociología de los Grupos y de las Instituciones Educativas", año: 4, cuatrimestre: 0, correlativas: ["3", "4"] }, // A
        { codigo: "22", nombre: "Psicopedagogía", año: 4, cuatrimestre: 0, correlativas: ["11", "16"] }, // A
        { codigo: "23", nombre: "Didáctica II", año: 4, cuatrimestre: 0, correlativas: ["17"] }, // A
        { codigo: "24", nombre: "Diseño y Evaluación Curricular", año: 4, cuatrimestre: 0, correlativas: ["12"] }, // A
        { codigo: "25", nombre: "Eje de Investigación IV", año: 4, cuatrimestre: 0, correlativas: ["19"] }, // A

        // QUINTO AÑO
        { codigo: "26", nombre: "Economía y Política Educativa", año: 5, cuatrimestre: 0, correlativas: ["20"] }, // A
        { codigo: "27", nombre: "Educación Especial", año: 5, cuatrimestre: 0, correlativas: ["22"] }, // A
        { codigo: "28", nombre: "Planeamiento Educacional", año: 5, cuatrimestre: 0, correlativas: ["20"] }, // A
        { codigo: "29", nombre: "Teorías Educativas y Pedagógicas Contemporáneas", año: 5, cuatrimestre: 0, correlativas: ["4", "14"] }, // A
        { codigo: "30", nombre: "Práctica Profesional II", año: 5, cuatrimestre: 0, correlativas: ["18", "23"] }, // A
        { codigo: "31", nombre: "Eje de Investigación V – Tesis", año: 5, cuatrimestre: 0, correlativas: [] }, // A
    ]
}

export default cienciasEducacion;
