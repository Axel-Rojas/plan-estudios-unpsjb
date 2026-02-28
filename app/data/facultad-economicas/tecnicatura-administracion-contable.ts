import { Carrera } from "../../types";

const materias: Carrera["materias"] = [
    // --- Año 1 ---
    { codigo: "111", nombre: "Contabilidad I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 },
    { codigo: "151", nombre: "Matemática I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 },
    { codigo: "141", nombre: "Economía I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "121", nombre: "Derecho Civil", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "131", nombre: "Procesamiento de Datos", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "161", nombre: "Introducción a la Filosofía", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 64 },

    // --- Año 2 ---
    { codigo: "212", nombre: "Contabilidad II", año: 2, cuatrimestre: 0, correlativas: ["111", "121", "131"], cargaHoraria: 128 },
    { codigo: "232", nombre: "Administración General", año: 2, cuatrimestre: 1, correlativas: ["131"], cargaHoraria: 96 },
    { codigo: "242", nombre: "Economía II", año: 2, cuatrimestre: 1, correlativas: ["141"], cargaHoraria: 96 },
    { codigo: "222", nombre: "Derecho Comercial I", año: 2, cuatrimestre: 2, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "252", nombre: "Matemática II", año: 2, cuatrimestre: 2, correlativas: ["151"], cargaHoraria: 128 },
    { codigo: "262", nombre: "Lógica y Metodología de las Ciencias", año: 2, cuatrimestre: 2, correlativas: ["161"], cargaHoraria: 64 },

    // --- Año 3 ---
    { codigo: "325", nombre: "Derecho del Trabajo y Seguridad Social", año: 3, cuatrimestre: 1, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "333", nombre: "Análisis de Sistemas I", año: 3, cuatrimestre: 2, correlativas: ["131", "232", "252"], cargaHoraria: 96 },
    { codigo: "343", nombre: "Finanzas Públicas", año: 3, cuatrimestre: 2, correlativas: ["121", "242"], cargaHoraria: 96 },
    { codigo: "3005", nombre: "Seminario de Aplicación", año: 3, cuatrimestre: 2, correlativas: [], cargaHoraria: 64 },

    // --- Electivas TUACON (Año 3, Anuales) ---
    // El estudiante debe elegir una para completar la materia 3000
    { codigo: "313", nombre: "Contabilidad III", año: 3, cuatrimestre: 0, correlativas: ["111", "212", "222"], cargaHoraria: 128, esOptativa: true, grupoOptativa: "TUACON" },
    { codigo: "314", nombre: "Contabilidad de Costos", año: 3, cuatrimestre: 0, correlativas: ["111", "212", "232", "242"], cargaHoraria: 128, esOptativa: true, grupoOptativa: "TUACON" },
    { codigo: "E-ADMIN", nombre: "Administración Específica", año: 3, cuatrimestre: 0, correlativas: ["232", "333"], cargaHoraria: 128, esOptativa: true, grupoOptativa: "TUACON" },
    { codigo: "E-MATFIN", nombre: "Matemática Financiera TUACON", año: 3, cuatrimestre: 0, correlativas: ["151", "252"], cargaHoraria: 128, esOptativa: true, grupoOptativa: "TUACON" },
];

const tecnicaturaAdministracionContable: Carrera = {
    nombre: "Tecnicatura Universitaria en Administración Contable",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Comodoro Rivadavia, Trelew y Esquel",
    plan: "Plan 2024",
    materias,
    requisitos: [],
};

export default tecnicaturaAdministracionContable;
