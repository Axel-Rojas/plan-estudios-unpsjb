import { Carrera } from "../../types";

// Asumimos las materias sin código en la imagen (electivas) con un id interno (ej: E1, E2, E3).
// Las correlativas mapean al código cuando existe, o por el nombre para mayor claridad. Asumimos las aprobadas/cursadas juntas.

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
    { codigo: "264", nombre: "Historia de la Economía", año: 2, cuatrimestre: 1, correlativas: ["114", "112", "121"], cargaHoraria: 32 },
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
    // 2° Cuatrimestre
    { codigo: "3410", nombre: "Economía del Sector Público", año: 3, cuatrimestre: 2, correlativas: ["113", "121", "111", "244"], cargaHoraria: 64 },
    { codigo: "3411", nombre: "Economía Matemática", año: 3, cuatrimestre: 2, correlativas: ["252", "243", "244"], cargaHoraria: 96 },
    { codigo: "3412", nombre: "Macroeconomía Superior", año: 3, cuatrimestre: 2, correlativas: ["252", "244", "264"], cargaHoraria: 64 },
    { codigo: "334", nombre: "Investigación Operativa", año: 3, cuatrimestre: 2, correlativas: ["252", "254"], cargaHoraria: 64 },
    { codigo: "E1", nombre: "Electiva I", año: 3, cuatrimestre: 2, correlativas: ["244", "243"], cargaHoraria: 32, esOptativa: true },

    // --- 4° Año ---
    // 1° Cuatrimestre
    { codigo: "4413", nombre: "Microeconomía Superior", año: 4, cuatrimestre: 1, correlativas: ["243", "3411"], cargaHoraria: 64 },
    { codigo: "4414", nombre: "Dinero, Crédito y Bancos", año: 4, cuatrimestre: 1, correlativas: ["3412", "3411", "347"], cargaHoraria: 64 },
    { codigo: "456", nombre: "Econometría", año: 4, cuatrimestre: 1, correlativas: ["254", "244", "243", "355"], cargaHoraria: 96 },
    { codigo: "4415", nombre: "Estructura de la Producción", año: 4, cuatrimestre: 1, correlativas: ["347", "3410", "3412"], cargaHoraria: 32 },
    { codigo: "E2", nombre: "Electiva II", año: 4, cuatrimestre: 1, correlativas: ["243", "244"], cargaHoraria: 32, esOptativa: true },
    { codigo: "466", nombre: "Metodología de la Investigación Económica", año: 4, cuatrimestre: 1, correlativas: ["263", "264", "E1"], cargaHoraria: 48 },
    // 2° Cuatrimestre
    { codigo: "4416", nombre: "Política Económica", año: 4, cuatrimestre: 2, correlativas: ["3412", "4414", "3410"], cargaHoraria: 64 },
    { codigo: "4417", nombre: "Desarrollo y Crecimiento Económico", año: 4, cuatrimestre: 2, correlativas: ["3412", "4413", "264", "3411"], cargaHoraria: 64 },
    { codigo: "4418", nombre: "Economía Internacional", año: 4, cuatrimestre: 2, correlativas: ["325", "3412", "244"], cargaHoraria: 64 }, // Nota: "325" (Economía Regional) no existe en este plan. Asumo "242" (Realidad Económica Regional) por similitud de nombre. Cambiado manualmente:
    { codigo: "E3", nombre: "Electiva III", año: 4, cuatrimestre: 2, correlativas: ["3412", "244"], cargaHoraria: 32, esOptativa: true },
    { codigo: "4419", nombre: "Taller de Vinculación con el Medio III", año: 4, cuatrimestre: 2, correlativas: ["246", "349"], cargaHoraria: 64 },
    { codigo: "467", nombre: "Seminario de Trabajo Final", año: 4, cuatrimestre: 2, correlativas: ["263", "466", "3411", "E1", "E2"], cargaHoraria: 96 },
];

// Corrección manual sobre Economía Internacional (la correlativa "Economía Regional" en texto es "242" Realidad Económica Regional en el plan)
const index4418 = materias.findIndex(m => m.codigo === "4418");
if (index4418 !== -1) {
    materias[index4418].correlativas = ["242", "3412", "244"];
}

const licenciaturaEconomia: Carrera = {
    nombre: "Licenciatura en Economía",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Trelew",
    plan: "Plan vigente", // No figura en la imagen el año exacto, asumimos vigente
    materias,
    requisitos: [],
};

export default licenciaturaEconomia;
