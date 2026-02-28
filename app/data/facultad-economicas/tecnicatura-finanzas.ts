import { Carrera } from "../../types";

const materias: Carrera["materias"] = [
    // --- 1° Año ---
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

    // --- 2° Año ---
    // 1° Cuatrimestre
    { codigo: "221", nombre: "Derecho Privado", año: 2, cuatrimestre: 1, correlativas: ["114", "124"], cargaHoraria: 64 },
    { codigo: "242", nombre: "Realidad Económica Regional", año: 2, cuatrimestre: 1, correlativas: ["114", "121"], cargaHoraria: 64 },
    { codigo: "243", nombre: "Microeconomía", año: 2, cuatrimestre: 1, correlativas: ["114", "121", "122"], cargaHoraria: 64 },
    { codigo: "252", nombre: "Matemática II", año: 2, cuatrimestre: 1, correlativas: ["114", "122"], cargaHoraria: 64 },
    { codigo: "263", nombre: "Epistemología de la Economía", año: 2, cuatrimestre: 1, correlativas: ["114", "112", "121"], cargaHoraria: 32 },
    { codigo: "264", nombre: "Historia De La Economía", año: 2, cuatrimestre: 1, correlativas: ["114", "112", "121"], cargaHoraria: 32 },
    // 2° Cuatrimestre
    { codigo: "253", nombre: "Matemática Financiera", año: 2, cuatrimestre: 2, correlativas: ["114", "122", "121"], cargaHoraria: 64 },
    { codigo: "254", nombre: "Estadística I", año: 2, cuatrimestre: 2, correlativas: ["114", "122", "121", "123"], cargaHoraria: 64 },
    { codigo: "244", nombre: "Macroeconomía", año: 2, cuatrimestre: 2, correlativas: ["114", "121", "122"], cargaHoraria: 64 },
    { codigo: "265", nombre: "Historia Económica Argentina", año: 2, cuatrimestre: 2, correlativas: ["264"], cargaHoraria: 32 },
    { codigo: "245", nombre: "Análisis Económico de Empresas", año: 2, cuatrimestre: 2, correlativas: ["114", "121", "113"], cargaHoraria: 64 },
    { codigo: "246", nombre: "Taller de Vinculación con el Medio I", año: 2, cuatrimestre: 2, correlativas: ["114", "121"], cargaHoraria: 32 },

    // --- 3° Año ---
    // 1° Cuatrimestre
    { codigo: "347", nombre: "Finanzas Corporativas", año: 3, cuatrimestre: 1, correlativas: ["122", "253", "245"], cargaHoraria: 96 },
    { codigo: "355", nombre: "Estadística II", año: 3, cuatrimestre: 1, correlativas: ["122", "254"], cargaHoraria: 64 },
    { codigo: "333", nombre: "Análisis de Sistemas de Información", año: 3, cuatrimestre: 1, correlativas: ["113", "121", "244"], cargaHoraria: 64 },
    { codigo: "348", nombre: "Evaluación de Proyectos", año: 3, cuatrimestre: 1, correlativas: ["121", "245", "253"], cargaHoraria: 64 },
    { codigo: "349", nombre: "Taller de Vinculación con el Medio II", año: 3, cuatrimestre: 1, correlativas: ["114", "121"], cargaHoraria: 32 },
];

const tecnicaturaFinanzasEmpresariales: Carrera = {
    nombre: "Tecnicatura Universitaria en Finanzas Empresariales",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Trelew",
    plan: "Plan 2025",
    materias,
    requisitos: [],
};

export default tecnicaturaFinanzasEmpresariales;
