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
    { codigo: "TD210", nombre: "Introducción a las Finanzas Descentralizadas", año: 2, cuatrimestre: 1, correlativas: ["114", "121"], cargaHoraria: 86 },
    { codigo: "211", nombre: "Contabilidad Básica", año: 2, cuatrimestre: 1, correlativas: ["111", "113", "122"], cargaHoraria: 131 },
    { codigo: "245", nombre: "Análisis Económico de Empresas", año: 2, cuatrimestre: 1, correlativas: ["113", "114", "121"], cargaHoraria: 173 },
    { codigo: "TB216", nombre: "Ciberseguridad", año: 2, cuatrimestre: 1, correlativas: ["112", "114", "123"], cargaHoraria: 86 },
    { codigo: "TB215", nombre: "Marco Normativo Financiero", año: 2, cuatrimestre: 1, correlativas: ["112", "114", "124"], cargaHoraria: 86 },
    // 2° Cuatrimestre
    { codigo: "253", nombre: "Matemática Financiera", año: 2, cuatrimestre: 2, correlativas: ["114", "121", "122"], cargaHoraria: 169 },
    { codigo: "254", nombre: "Estadística I", año: 2, cuatrimestre: 2, correlativas: ["114", "121", "122", "123"], cargaHoraria: 173 },
    { codigo: "TD217", nombre: "Criptoeconomía", año: 2, cuatrimestre: 2, correlativas: ["121", "123", "TB216"], cargaHoraria: 144 },
    { codigo: "TD218", nombre: "Pagos digitales y Billeteras electrónicas", año: 2, cuatrimestre: 2, correlativas: ["121", "TD210"], cargaHoraria: 144 },
    { codigo: "TD219", nombre: "Inteligencia Artificial aplicada a las Finanzas", año: 2, cuatrimestre: 2, correlativas: ["123", "TB216", "TD210"], cargaHoraria: 72 },
    { codigo: "TD220", nombre: "Seminario de Prácticas Técnicas Supervisadas en Finanzas Digitales", año: 2, cuatrimestre: 2, correlativas: ["211", "245", "TB215", "TB216", "TD210"], cargaHoraria: 96 },
];

const tecnicaturaFinanzasDigitales: Carrera = {
    nombre: "Tecnicatura Universitaria en Finanzas Digitales",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Comodoro Rivadavia y Trelew",
    plan: "Plan 2025",
    materias,
    requisitos: [],
};

export default tecnicaturaFinanzasDigitales;
