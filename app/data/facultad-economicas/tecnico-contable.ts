import { Carrera } from "../../types";

const materias: Carrera["materias"] = [
    // --- Año 1 ---
    // Cuatrimestre 1
    { codigo: "111", nombre: "Contabilidad I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 }, // Anual
    { codigo: "151", nombre: "Matemática I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 }, // Anual
    { codigo: "141", nombre: "Economía I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    // Cuatrimestre 2
    { codigo: "121", nombre: "Derecho Civil", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "131", nombre: "Procesamiento de Datos", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "161", nombre: "Introducción a la Filosofía", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 64 },

    // --- Año 2 ---
    // Cuatrimestre 1
    { codigo: "212", nombre: "Contabilidad II", año: 2, cuatrimestre: 0, correlativas: ["111", "121", "131"], cargaHoraria: 128 }, // Anual
    { codigo: "232", nombre: "Administración General", año: 2, cuatrimestre: 1, correlativas: ["131"], cargaHoraria: 96 },
    { codigo: "242", nombre: "Economía II", año: 2, cuatrimestre: 1, correlativas: ["141"], cargaHoraria: 96 },
    { codigo: "2315", nombre: "Introducción a las Ciencias Agropecuarias y Forestales", año: 2, cuatrimestre: 0, correlativas: ["111", "131"], cargaHoraria: 128 }, // Anual
    // Cuatrimestre 2
    { codigo: "262", nombre: "Lógica y Metodología de las Ciencias", año: 2, cuatrimestre: 2, correlativas: ["161"], cargaHoraria: 64 },
    { codigo: "222", nombre: "Derecho Comercial I", año: 2, cuatrimestre: 2, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "252", nombre: "Matemática II", año: 2, cuatrimestre: 2, correlativas: ["151"], cargaHoraria: 128 },

    // --- Año 3 ---
    // Cuatrimestre 1
    { codigo: "3112", nombre: "Contabilidad de Costos Aplicados", año: 3, cuatrimestre: 1, correlativas: ["111", "212"], cargaHoraria: 96 },
    { codigo: "3316", nombre: "Organización de la Producción y Comercialización", año: 3, cuatrimestre: 1, correlativas: ["2315", "232"], cargaHoraria: 96 },
    { codigo: "354", nombre: "Matemática Financiera", año: 3, cuatrimestre: 1, correlativas: ["151", "252"], cargaHoraria: 96 },
    // Cuatrimestre 2
    { codigo: "327", nombre: "Derecho Individual del Trabajo", año: 3, cuatrimestre: 2, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "326", nombre: "Derecho Agrario y Forestal", año: 3, cuatrimestre: 2, correlativas: ["121", "222"], cargaHoraria: 96 },
    { codigo: "3111", nombre: "Técnica y Práctica Impositiva", año: 3, cuatrimestre: 2, correlativas: ["212", "222"], cargaHoraria: 96 },
    { codigo: "3113", nombre: "Seminario Taller Aplicado", año: 3, cuatrimestre: 2, correlativas: ["111", "121", "131", "141", "151", "161", "212", "222", "232", "242", "252", "262", "3112", "3316"], cargaHoraria: 96 },
];

const tecnicoContable: Carrera = {
    nombre: "Técnico Universitario Contable",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Esquel",
    plan: "Plan vigente",
    materias,
    requisitos: [],
};

export default tecnicoContable;
