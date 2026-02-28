import { Carrera } from "../../types";

const materias: Carrera["materias"] = [
    // --- Año 1 ---
    // Cuatrimestre 1
    { codigo: "111", nombre: "Contabilidad I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 }, // Anual
    { codigo: "141", nombre: "Economía I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "151", nombre: "Matemática I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 }, // Anual
    // Cuatrimestre 2
    { codigo: "121", nombre: "Derecho Civil", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "131", nombre: "Procesamiento de Datos", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "161", nombre: "Introducción a la Filosofía", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 64 },

    // --- Año 2 ---
    // Cuatrimestre 1
    { codigo: "212", nombre: "Contabilidad II", año: 2, cuatrimestre: 0, correlativas: ["111", "121", "131"], cargaHoraria: 128 }, // Anual
    { codigo: "232", nombre: "Administración General", año: 2, cuatrimestre: 1, correlativas: ["131"], cargaHoraria: 96 },
    { codigo: "242", nombre: "Economía II", año: 2, cuatrimestre: 1, correlativas: ["141"], cargaHoraria: 96 },
    // Cuatrimestre 2
    { codigo: "222", nombre: "Derecho Comercial I", año: 2, cuatrimestre: 2, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "252", nombre: "Matemática II", año: 2, cuatrimestre: 2, correlativas: ["151"], cargaHoraria: 128 },
    { codigo: "262", nombre: "Lógica y Metodología de las Ciencias", año: 2, cuatrimestre: 2, correlativas: ["161"], cargaHoraria: 64 },

    // --- Año 3 ---
    // Cuatrimestre 1
    { codigo: "328", nombre: "Marco Legal de los Procedimientos Administrativos", año: 3, cuatrimestre: 1, correlativas: ["222", "232"], cargaHoraria: 128 },
    { codigo: "3115", nombre: "Régimen Económico Financiero del Estado", año: 3, cuatrimestre: 1, correlativas: ["212", "222"], cargaHoraria: 128 },
    { codigo: "3318", nombre: "Planeamiento y Control del Estado", año: 3, cuatrimestre: 1, correlativas: ["232", "242"], cargaHoraria: 96 },
    // Cuatrimestre 2
    { codigo: "333", nombre: "Análisis de Sistemas I", año: 3, cuatrimestre: 2, correlativas: ["131", "232", "252"], cargaHoraria: 96 },
    { codigo: "343", nombre: "Finanzas Públicas", año: 3, cuatrimestre: 2, correlativas: ["121", "242"], cargaHoraria: 96 },
    { codigo: "363", nombre: "Sociología", año: 3, cuatrimestre: 2, correlativas: ["232", "262"], cargaHoraria: 96 },
];

const tecnicaturaAdministracionPublica: Carrera = {
    nombre: "Técnico Universitario en Administración Pública",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Comodoro Rivadavia y Trelew",
    plan: "Plan vigente",
    materias,
    requisitos: [],
};

export default tecnicaturaAdministracionPublica;
