import { Carrera } from "../../types";

const materias: Carrera["materias"] = [
    // --- CICLO INICIAL (Año 1) ---
    // 1° Cuatrimestre
    { codigo: "111", nombre: "Introducción a la Administración", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "112", nombre: "Introducción a las Ciencias Sociales", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 48 },
    { codigo: "113", nombre: "Introducción a la Contabilidad", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "114", nombre: "Área Propedéutica", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 64 },
    // 2° Cuatrimestre
    { codigo: "121", nombre: "Introducción a la Economía", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "122", nombre: "Matemática I", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "123", nombre: "Tecnología de la Información", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 64 },
    { codigo: "124", nombre: "Introducción al Derecho", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 48 },

    // --- CICLO TÉCNICO (Año 2 y mitad de Año 3) ---
    // 3° Cuatrimestre de la carrera (Año 2, Cuatrimestre 1)
    { codigo: "211", nombre: "Contabilidad Básica", año: 2, cuatrimestre: 1, correlativas: ["111", "113", "122"], cargaHoraria: 48 },
    { codigo: "212", nombre: "Derecho Constitucional", año: 2, cuatrimestre: 1, correlativas: ["112", "123", "124"], cargaHoraria: 32 },
    { codigo: "213", nombre: "Lógica", año: 2, cuatrimestre: 1, correlativas: ["112", "113", "122"], cargaHoraria: 32 },
    { codigo: "214", nombre: "Los Procesos de la Administración", año: 2, cuatrimestre: 1, correlativas: ["111", "121", "123"], cargaHoraria: 64 },
    { codigo: "215", nombre: "Ofimática", año: 2, cuatrimestre: 1, correlativas: ["111", "112", "113"], cargaHoraria: 64 },
    { codigo: "216", nombre: "Administración de la Producción y Servucción I", año: 2, cuatrimestre: 1, correlativas: ["114", "123", "124"], cargaHoraria: 64 },
    // 4° Cuatrimestre de la carrera (Año 2, Cuatrimestre 2)
    { codigo: "221", nombre: "Contabilidad Pública Nivel Técnico", año: 2, cuatrimestre: 2, correlativas: ["114", "123", "211", "214", "216"], cargaHoraria: 48 },
    { codigo: "222", nombre: "Microeconomía", año: 2, cuatrimestre: 2, correlativas: ["112", "121", "211", "213", "214"], cargaHoraria: 48 },
    { codigo: "223", nombre: "Derecho Privado I", año: 2, cuatrimestre: 2, correlativas: ["111", "124", "212", "214", "215"], cargaHoraria: 32 },
    { codigo: "224", nombre: "Administración de lo Público I", año: 2, cuatrimestre: 2, correlativas: ["114", "124", "211", "214", "216"], cargaHoraria: 32 },
    { codigo: "225", nombre: "Estadística I", año: 2, cuatrimestre: 2, correlativas: ["122", "123", "214", "215", "216"], cargaHoraria: 64 },
    { codigo: "226", nombre: "Organización y Métodos", año: 2, cuatrimestre: 2, correlativas: ["112", "123", "213", "215", "216"], cargaHoraria: 48 },
    { codigo: "227", nombre: "Matemática II", año: 2, cuatrimestre: 2, correlativas: ["121", "122", "213", "214", "216"], cargaHoraria: 48 },
    // 5° Cuatrimestre de la carrera (Año 3, Cuatrimestre 1)
    { codigo: "231", nombre: "Contabilidad de Costos", año: 3, cuatrimestre: 1, correlativas: ["211", "212", "221", "222", "225"], cargaHoraria: 48 },
    { codigo: "232", nombre: "Gestión Administrativa del Esfuerzo Humano", año: 3, cuatrimestre: 1, correlativas: ["213", "214", "222", "224", "227"], cargaHoraria: 64 },
    { codigo: "233", nombre: "Administración de la Actividad en los Mercados I", año: 3, cuatrimestre: 1, correlativas: ["213", "216", "221", "223", "227"], cargaHoraria: 64 },
    { codigo: "234", nombre: "Administración de la Información I", año: 3, cuatrimestre: 1, correlativas: ["213", "214", "221", "224", "226"], cargaHoraria: 32 },
    { codigo: "235", nombre: "Derecho Administrativo I", año: 3, cuatrimestre: 1, correlativas: ["211", "212", "221", "222", "223"], cargaHoraria: 32 },
    { codigo: "236", nombre: "Administración Financiera I", año: 3, cuatrimestre: 1, correlativas: ["211", "216", "225", "226", "227"], cargaHoraria: 64 },
    { codigo: "237", nombre: "Seminario Práctica Técnica Supervisada", año: 3, cuatrimestre: 1, correlativas: ["217", "228"], cargaHoraria: 32 },
];

const tecnicaturaAdministracion: Carrera = {
    nombre: "Tecnicatura Universitaria en Administración",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Comodoro Rivadavia y Trelew",
    plan: "Plan 2025",
    materias,
    requisitos: [],
};

export default tecnicaturaAdministracion;
