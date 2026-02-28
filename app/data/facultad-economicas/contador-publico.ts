import { Carrera } from "../../types";

// Las materias marcadas con "A" en el plan son anuales (cuatrimestre: 0).
// Las correlativas aquí son los códigos oficiales del plan.
// "Aprobada para cursar" y "Cursada para cursar" se representan como correlativas sin distinción.

const materias: Carrera["materias"] = [
    // Año 1 - Cuatrimestre 1
    { codigo: "111", nombre: "Contabilidad I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 }, // Anual
    { codigo: "141", nombre: "Economía I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "151", nombre: "Matemática I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 }, // Anual
    // Año 1 - Cuatrimestre 2
    { codigo: "121", nombre: "Derecho Civil", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "131", nombre: "Procesamiento de Datos", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "161", nombre: "Introducción a la Filosofía", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 64 },

    // Año 2 - Cuatrimestre 1
    { codigo: "212", nombre: "Contabilidad II", año: 2, cuatrimestre: 0, correlativas: ["111", "121", "131"], cargaHoraria: 128 }, // Anual
    { codigo: "232", nombre: "Administración General", año: 2, cuatrimestre: 1, correlativas: ["131"], cargaHoraria: 96 },
    { codigo: "242", nombre: "Economía II", año: 2, cuatrimestre: 1, correlativas: ["141"], cargaHoraria: 96 },
    // Año 2 - Cuatrimestre 2
    { codigo: "222", nombre: "Derecho Comercial I", año: 2, cuatrimestre: 2, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "252", nombre: "Matemática II", año: 2, cuatrimestre: 2, correlativas: ["151"], cargaHoraria: 128 },
    { codigo: "262", nombre: "Lógica y Metodología de las Ciencias", año: 2, cuatrimestre: 2, correlativas: ["161"], cargaHoraria: 64 },

    // Año 3 - Cuatrimestre 1
    { codigo: "313", nombre: "Contabilidad III", año: 3, cuatrimestre: 0, correlativas: ["111", "212", "222"], cargaHoraria: 128 }, // Anual
    { codigo: "314", nombre: "Contabilidad de Costos", año: 3, cuatrimestre: 0, correlativas: ["111", "212", "232"], cargaHoraria: 128 }, // Anual
    { codigo: "323", nombre: "Derecho Comercial II", año: 3, cuatrimestre: 1, correlativas: ["121", "222", "242"], cargaHoraria: 96 },
    { codigo: "353", nombre: "Estadística", año: 3, cuatrimestre: 1, correlativas: ["151", "252"], cargaHoraria: 128 },
    // Año 3 - Cuatrimestre 2
    { codigo: "333", nombre: "Análisis de Sistemas I", año: 3, cuatrimestre: 2, correlativas: ["131", "232", "252"], cargaHoraria: 96 },
    { codigo: "343", nombre: "Finanzas Públicas", año: 3, cuatrimestre: 2, correlativas: ["121", "242"], cargaHoraria: 96 },
    { codigo: "363", nombre: "Sociología", año: 3, cuatrimestre: 2, correlativas: ["232", "262"], cargaHoraria: 96 },

    // Año 4 - Cuatrimestre 1
    { codigo: "415", nombre: "Contabilidad IV", año: 4, cuatrimestre: 0, correlativas: ["212", "222", "232", "313", "323", "333", "353"], cargaHoraria: 128 }, // Anual
    { codigo: "416", nombre: "Impuestos I", año: 4, cuatrimestre: 1, correlativas: ["323", "343"], cargaHoraria: 96 },
    { codigo: "434", nombre: "Administración Aplicada", año: 4, cuatrimestre: 1, correlativas: ["232", "333", "353"], cargaHoraria: 128 },
    { codigo: "454", nombre: "Matemática Financiera", año: 4, cuatrimestre: 1, correlativas: ["151", "252"], cargaHoraria: 96 },
    // Año 4 - Cuatrimestre 2
    { codigo: "424", nombre: "Derecho Constitucional y Administrativo", año: 4, cuatrimestre: 2, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "444", nombre: "Microeconomía", año: 4, cuatrimestre: 2, correlativas: ["242", "252", "343"], cargaHoraria: 96 },
    { codigo: "464", nombre: "Perspectiva Espacio Temporal de la Economía Argentina", año: 4, cuatrimestre: 2, correlativas: ["363"], cargaHoraria: 96 },

    // Año 5 - Cuatrimestre 1
    { codigo: "519", nombre: "Contabilidad Pública", año: 5, cuatrimestre: 1, correlativas: ["343", "415", "424"], cargaHoraria: 128 },
    { codigo: "517", nombre: "Impuestos II", año: 5, cuatrimestre: 1, correlativas: ["416"], cargaHoraria: 96 },
    { codigo: "518", nombre: "Práctica Profesional", año: 5, cuatrimestre: 1, correlativas: ["323", "415"], cargaHoraria: 96 },
    { codigo: "565", nombre: "Epistemología", año: 5, cuatrimestre: 1, correlativas: ["464"], cargaHoraria: 64 },
    // Año 5 - Cuatrimestre 2
    { codigo: "525", nombre: "Derecho del Trabajo y Seguridad Social", año: 5, cuatrimestre: 2, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "535", nombre: "Administración Financiera", año: 5, cuatrimestre: 2, correlativas: ["333", "454"], cargaHoraria: 96 },
    { codigo: "545", nombre: "Política Macroeconómica", año: 5, cuatrimestre: 2, correlativas: ["444"], cargaHoraria: 96 },
    { codigo: "5110", nombre: "Seminario Taller Contable", año: 5, cuatrimestre: 2, correlativas: ["314", "415", "416", "424", "454", "464"], cargaHoraria: 100 },
];

const contadorPublico: Carrera = {
    nombre: "Contador Público",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Comodoro Rivadavia, Trelew y Esquel",
    plan: "Plan 2020",
    materias,
    requisitos: [],
};

export default contadorPublico;
