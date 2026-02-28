import { Carrera } from "../../types";

// Materias compartidas para todas las sedes (Plan 2018)
const materias: Carrera["materias"] = [
    // 1° Año - 1° Cuatrimestre
    { codigo: "JU001", nombre: "Introducción al Derecho", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "JU002", nombre: "Historia del Derecho", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "JU003", nombre: "Derechos Político y Económico", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    // 1° Año - 2° Cuatrimestre
    { codigo: "JU004", nombre: "Filosofía del Derecho", año: 1, cuatrimestre: 2, correlativas: ["JU001", "JU002"], cargaHoraria: 96 },
    { codigo: "JU005", nombre: "Derecho Constitucional", año: 1, cuatrimestre: 2, correlativas: ["JU001", "JU003"], cargaHoraria: 96 },
    { codigo: "JU006", nombre: "Nociones Elementales del Derecho Civil", año: 1, cuatrimestre: 2, correlativas: ["JU001", "JU002"], cargaHoraria: 96 },

    // 2° Año - 1° Cuatrimestre
    { codigo: "JU007", nombre: "Derecho Penal I", año: 2, cuatrimestre: 1, correlativas: ["JU001", "JU002", "JU005"], cargaHoraria: 96 },
    { codigo: "JU008", nombre: "Derechos Humanos y Garantías Constitucionales", año: 2, cuatrimestre: 1, correlativas: ["JU003", "JU005"], cargaHoraria: 64 },
    { codigo: "JU009", nombre: "Derecho Internacional Público", año: 2, cuatrimestre: 1, correlativas: ["JU001", "JU002", "JU005", "JU006"], cargaHoraria: 64 },
    // 2° Año - 2° Cuatrimestre
    { codigo: "JU010", nombre: "Derecho Penal II", año: 2, cuatrimestre: 2, correlativas: ["JU007", "JU008"], cargaHoraria: 96 },
    { codigo: "JU011", nombre: "Sociología", año: 2, cuatrimestre: 2, correlativas: ["JU004"], cargaHoraria: 64 },
    { codigo: "JU012", nombre: "Derecho de las Obligaciones", año: 2, cuatrimestre: 2, correlativas: ["JU001", "JU002", "JU006"], cargaHoraria: 96 },

    // 3° Año - 1° Cuatrimestre
    { codigo: "JU013", nombre: "Personas Jurídicas Civiles y Comerciales", año: 3, cuatrimestre: 1, correlativas: ["JU008", "JU012"], cargaHoraria: 96 },
    { codigo: "JU014", nombre: "Contratos Civiles y Comerciales", año: 3, cuatrimestre: 1, correlativas: ["JU012"], cargaHoraria: 96 },
    { codigo: "JU015", nombre: "Derecho del Consumidor y del Usuario", año: 3, cuatrimestre: 1, correlativas: ["JU008", "JU012"], cargaHoraria: 96 },
    // 3° Año - 2° Cuatrimestre
    { codigo: "JU016", nombre: "Derecho Laboral y de la Seguridad Social", año: 3, cuatrimestre: 2, correlativas: ["JU008", "JU012"], cargaHoraria: 96 },
    { codigo: "JU017", nombre: "Derechos Reales", año: 3, cuatrimestre: 2, correlativas: ["JU014"], cargaHoraria: 96 },
    { codigo: "JU018", nombre: "Derecho Procesal Civil y Comercial", año: 3, cuatrimestre: 2, correlativas: ["JU013", "JU014"], cargaHoraria: 96 },
    { codigo: "JU019", nombre: "Derecho de la Integración", año: 3, cuatrimestre: 2, correlativas: ["JU009", "JU014"], cargaHoraria: 64 },

    // 4° Año - 1° Cuatrimestre
    { codigo: "JU020", nombre: "Derecho Procesal Penal", año: 4, cuatrimestre: 1, correlativas: ["JU010", "JU013"], cargaHoraria: 96 },
    { codigo: "JU021", nombre: "Derecho Digital", año: 4, cuatrimestre: 1, correlativas: ["JU010", "JU013", "JU014"], cargaHoraria: 64 },
    { codigo: "JU022", nombre: "Derecho Administrativo", año: 4, cuatrimestre: 1, correlativas: ["JU008", "JU017"], cargaHoraria: 112 },
    { codigo: "JU023", nombre: "Formación Práctica Profesional I", año: 4, cuatrimestre: 1, correlativas: ["JU015", "JU018"], cargaHoraria: 96 },
    // 4° Año - 2° Cuatrimestre
    { codigo: "JU024", nombre: "Derecho del Transporte, Navegación, y Aeronáutico", año: 4, cuatrimestre: 2, correlativas: ["JU017", "JU018"], cargaHoraria: 64 },
    { codigo: "JU025", nombre: "Formación Práctica Profesional II", año: 4, cuatrimestre: 2, correlativas: ["JU016", "JU022", "JU023"], cargaHoraria: 96 },
    { codigo: "JU026", nombre: "Derecho Público Provincial y Municipal", año: 4, cuatrimestre: 2, correlativas: ["JU008", "JU022"], cargaHoraria: 64 },
    { codigo: "JU027", nombre: "Finanzas Públicas y Derecho Tributario", año: 4, cuatrimestre: 2, correlativas: ["JU022"], cargaHoraria: 96 },

    // 5° Año - 1° Cuatrimestre
    { codigo: "JU028", nombre: "Derecho de Familia", año: 5, cuatrimestre: 1, correlativas: ["JU017", "JU018"], cargaHoraria: 96 },
    { codigo: "JU029", nombre: "Derecho de los Recursos Naturales y Protección del Medio Ambiente", año: 5, cuatrimestre: 1, correlativas: ["JU008", "JU022"], cargaHoraria: 64 },
    { codigo: "JU030", nombre: "Formación Práctica Profesional III", año: 5, cuatrimestre: 1, correlativas: ["JU020", "JU025"], cargaHoraria: 96 },
    // 5° Año - 2° Cuatrimestre
    { codigo: "JU031", nombre: "Derecho Sucesorio", año: 5, cuatrimestre: 2, correlativas: ["JU028"], cargaHoraria: 64 },
    { codigo: "JU032", nombre: "Formación Práctica Profesional IV", año: 5, cuatrimestre: 2, correlativas: ["JU018", "JU030"], cargaHoraria: 96 },
    { codigo: "JU033", nombre: "Derecho Comercial y Procedimiento Concursal", año: 5, cuatrimestre: 2, correlativas: ["JU013", "JU027"], cargaHoraria: 96 },
    { codigo: "JU034", nombre: "Derecho Internacional Privado", año: 5, cuatrimestre: 2, correlativas: ["JU016", "JU024", "JU028"], cargaHoraria: 96 },
];

export const abogaciaComodoro: Carrera = {
    nombre: "Abogacía",
    facultad: "Facultad de Ciencias Jurídicas y Sociales",
    sede: "Sede Comodoro Rivadavia, Trelew y Esquel",
    plan: "Plan 2018",
    materias,
    requisitos: [],
};

const abogacia = abogaciaComodoro;

export default abogacia;
