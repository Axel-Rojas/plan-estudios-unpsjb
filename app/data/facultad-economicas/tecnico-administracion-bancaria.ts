import { Carrera } from "../../types";

const materias: Carrera["materias"] = [
    // --- Año 1 ---
    // 1° Cuatrimestre
    { codigo: "111", nombre: "Introducción a la Administración", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 260 },
    { codigo: "112", nombre: "Introducción a las Ciencias Sociales", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 128 },
    { codigo: "113", nombre: "Introducción a la Contabilidad", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 260 },
    { codigo: "114", nombre: "Área Propedéutica", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 173 },
    // 2° Cuatrimestre
    { codigo: "121", nombre: "Introducción a la Economía", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 256 },
    { codigo: "122", nombre: "Matemática I", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 260 },
    { codigo: "123", nombre: "Tecnología de la Información", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 173 },
    { codigo: "124", nombre: "Introducción al Derecho", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 130 },

    // --- Año 2 ---
    // 1° Cuatrimestre
    { codigo: "211", nombre: "Contabilidad Básica", año: 2, cuatrimestre: 1, correlativas: ["111", "113", "122"], cargaHoraria: 131 },
    { codigo: "TB212", nombre: "Introducción al Sistema Financiero", año: 2, cuatrimestre: 1, correlativas: ["114", "121", "124"], cargaHoraria: 88 },
    { codigo: "TB213", nombre: "Prevención de Lavado de Dinero", año: 2, cuatrimestre: 1, correlativas: ["113", "121", "123"], cargaHoraria: 89 },
    { codigo: "214", nombre: "Los Procesos de la Administración", año: 2, cuatrimestre: 1, correlativas: ["111", "121", "123"], cargaHoraria: 174 },
    { codigo: "TB215", nombre: "Marco Normativo Financiero", año: 2, cuatrimestre: 1, correlativas: ["112", "114", "124"], cargaHoraria: 70 },
    { codigo: "TB216", nombre: "Ciberseguridad", año: 2, cuatrimestre: 1, correlativas: ["114", "122", "123"], cargaHoraria: 86 },
    // 2° Cuatrimestre
    { codigo: "TB221", nombre: "Interpretación de información contable y proyectos de inversión", año: 2, cuatrimestre: 2, correlativas: ["113", "211"], cargaHoraria: 131 },
    { codigo: "TB222", nombre: "Gestión Integral de Riesgos en Entidades Financieras", año: 2, cuatrimestre: 2, correlativas: ["111", "TB212"], cargaHoraria: 89 },
    { codigo: "TB223", nombre: "Procesos y procedimientos financieros", año: 2, cuatrimestre: 2, correlativas: ["111", "112", "214"], cargaHoraria: 89 },
    { codigo: "TB224", nombre: "Administración de Servicios", año: 2, cuatrimestre: 2, correlativas: ["111", "112", "214"], cargaHoraria: 138 },
    { codigo: "253", nombre: "Matemática financiera", año: 2, cuatrimestre: 2, correlativas: ["114", "121", "122"], cargaHoraria: 169 },
    { codigo: "TB225", nombre: "Seminario de Prácticas Técnicas Bancarias Supervisadas", año: 2, cuatrimestre: 2, correlativas: ["211", "TB212", "TB213", "214", "TB215", "TB216"], cargaHoraria: 106 },
];

const tecnicaturaAdministracionBancaria: Carrera = {
    nombre: "Técnico Universitario en Administración Bancaria",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Comodoro Rivadavia y Trelew",
    plan: "Plan 2025",
    materias,
    requisitos: [],
};

export default tecnicaturaAdministracionBancaria;
