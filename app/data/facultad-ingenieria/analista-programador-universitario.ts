import { Carrera } from "../../types";

const analistaProgramadorUniversitario: Carrera = {
    nombre: "Analista Programador Universitario",
    facultad: "Facultad de Ingeniería",
    sede: "Sede Comodoro Rivadavia",
    plan: "Plan 2019",
    materias: [
        { codigo: "IF001", nombre: "Elementos de Informática", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 105 },
        { codigo: "MA045", nombre: "Álgebra", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 135 },
        { codigo: "IF002", nombre: "Expresión de Problemas y Algoritmos", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "IF003", nombre: "Algorítmica y Programación I", año: 1, cuatrimestre: 2, correlativas: ["IF002"], cargaHoraria: 120 },
        { codigo: "MA046", nombre: "Análisis Matemático", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 150 },
        { codigo: "MA008", nombre: "Elementos de Lógica y Matemática Discreta", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 120 },

        { codigo: "IF004", nombre: "Sistemas y Organizaciones", año: 2, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "IF005", nombre: "Arquitectura de Computadoras", año: 2, cuatrimestre: 1, correlativas: ["IF001"], cargaHoraria: 120 },
        { codigo: "IF006", nombre: "Algorítmica y Programación II", año: 2, cuatrimestre: 1, correlativas: ["IF003", "MA008"], cargaHoraria: 120 },
        { codigo: "IF007", nombre: "Bases de Datos I", año: 2, cuatrimestre: 2, correlativas: ["IF006"], cargaHoraria: 135 },
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA045", "MA046"], cargaHoraria: 90 },
        { codigo: "IF008", nombre: "Programación Orientada a Objetos", año: 2, cuatrimestre: 2, correlativas: ["IF006"], cargaHoraria: 120 },

        { codigo: "IF009", nombre: "Laboratorio de Programación y Lenguajes", año: 3, cuatrimestre: 1, correlativas: ["IF008"], cargaHoraria: 90 },
        { codigo: "IF010", nombre: "Análisis y Diseño de Sistemas", año: 3, cuatrimestre: 1, correlativas: ["IF004", "IF007"], cargaHoraria: 135 },
        { codigo: "IF011", nombre: "Sistemas Operativos", año: 3, cuatrimestre: 1, correlativas: ["IF005", "IF006"], cargaHoraria: 150 },
        { codigo: "IF012", nombre: "Desarrollo de Software", año: 3, cuatrimestre: 2, correlativas: ["IF008", "IF010"], cargaHoraria: 135 },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma Inglés", condicion: "(*) Prueba de competencia de idioma inglés, aprobada antes de comenzar el segundo año" },
        { codigo: "FA102", nombre: "(Curso) Estrategias Comunicacionales", condicion: "10 asignaturas aprobadas" },
    ],
} satisfies Carrera;

export default analistaProgramadorUniversitario;
