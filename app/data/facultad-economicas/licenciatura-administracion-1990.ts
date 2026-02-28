import { Carrera } from "../../types";

const materiasPlan1990: Carrera["materias"] = [
    // --- PRIMER AÑO ---
    { codigo: "1", nombre: "Contabilidad I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 }, // A (Anual) - Asumo 120, o 0 para anual por defecto según la app
    { codigo: "2", nombre: "Economía I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 60 },
    { codigo: "3", nombre: "Matemática I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 }, // A (Anual)
    { codigo: "4", nombre: "Derecho Civil", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 60 },
    { codigo: "5", nombre: "Procesamiento de Datos", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 60 },
    { codigo: "6", nombre: "Introducción a la Filosofía", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 60 },

    // --- SEGUNDO AÑO ---
    { codigo: "7", nombre: "Contabilidad II", año: 2, cuatrimestre: 0, correlativas: ["1", "4", "5"], cargaHoraria: 120 }, // A (Anual)
    { codigo: "8", nombre: "Administración General", año: 2, cuatrimestre: 1, correlativas: ["5"], cargaHoraria: 60 },
    { codigo: "9", nombre: "Economía II", año: 2, cuatrimestre: 1, correlativas: ["2"], cargaHoraria: 60 },
    { codigo: "10", nombre: "Derecho Comercial I", año: 2, cuatrimestre: 2, correlativas: ["4"], cargaHoraria: 60 },
    { codigo: "11", nombre: "Matemática II", año: 2, cuatrimestre: 2, correlativas: ["3"], cargaHoraria: 60 },
    { codigo: "12", nombre: "Lógica y Metodología de las Ciencias", año: 2, cuatrimestre: 2, correlativas: ["6"], cargaHoraria: 60 },

    // --- TERCER AÑO ---
    { codigo: "13", nombre: "Contabilidad III", año: 3, cuatrimestre: 0, correlativas: ["1", "7", "10"], cargaHoraria: 120, condicion: "Requiere final de Contabilidad I" }, // A (Anual) - 1*
    { codigo: "14", nombre: "Contabilidad de Costos", año: 3, cuatrimestre: 0, correlativas: ["1", "7", "8", "9"], cargaHoraria: 120, condicion: "Requiere final de Contabilidad I" }, // A (Anual) - 1*
    { codigo: "15", nombre: "Derecho Comercial II", año: 3, cuatrimestre: 1, correlativas: ["4", "10"], cargaHoraria: 60, condicion: "Requiere final de Derecho Civil" }, // 4*
    { codigo: "16", nombre: "Estadística", año: 3, cuatrimestre: 1, correlativas: ["3", "11"], cargaHoraria: 60, condicion: "Requiere final de Matemática I" }, // 3*
    { codigo: "17", nombre: "Análisis de Sistema I", año: 3, cuatrimestre: 2, correlativas: ["5", "8", "11"], cargaHoraria: 60, condicion: "Requiere final de Procesamiento de Datos" }, // 5*
    { codigo: "18", nombre: "Finanzas Públicas", año: 3, cuatrimestre: 2, correlativas: ["4", "9"], cargaHoraria: 60 },
    { codigo: "19", nombre: "Sociología", año: 3, cuatrimestre: 2, correlativas: ["8", "12"], cargaHoraria: 60 },

    // --- CUARTO AÑO ---
    { codigo: "20", nombre: "Análisis de Sistema II", año: 4, cuatrimestre: 1, correlativas: ["8", "17"], cargaHoraria: 60, condicion: "Requiere final de Adm. General" }, // 8*
    { codigo: "21", nombre: "Planeamiento y Control", año: 4, cuatrimestre: 1, correlativas: ["8", "17"], cargaHoraria: 60, condicion: "Requiere final de Adm. General" }, // 8*
    { codigo: "22", nombre: "Administración de la Producción", año: 4, cuatrimestre: 1, correlativas: ["8", "14", "16", "17"], cargaHoraria: 60, condicion: "Requiere final de Adm. General" }, // 8*
    { codigo: "23", nombre: "Matemática Financiera", año: 4, cuatrimestre: 1, correlativas: ["3", "11"], cargaHoraria: 60, condicion: "Requiere final de Matemática I" }, // 3*
    { codigo: "24", nombre: "Derecho Constitucional y Administrativo", año: 4, cuatrimestre: 2, correlativas: ["4"], cargaHoraria: 60, condicion: "Requiere final de Derecho Civil" }, // 4*
    { codigo: "25", nombre: "Administración de Personal", año: 4, cuatrimestre: 2, correlativas: ["8", "17", "19"], cargaHoraria: 60, condicion: "Requiere final de Adm. General" }, // 8*
    { codigo: "26", nombre: "Administración de la Comercialización", año: 4, cuatrimestre: 2, correlativas: ["8", "14", "16", "17"], cargaHoraria: 60, condicion: "Requiere final de Adm. General" }, // 8*

    // --- QUINTO AÑO ---
    { codigo: "27", nombre: "Política y Adminitración Tributaria", año: 5, cuatrimestre: 1, correlativas: ["18", "24"], cargaHoraria: 60, condicion: "Requiere final de Finanzas Públicas" }, // 18*
    { codigo: "28", nombre: "Práctica Profesional Judicial", año: 5, cuatrimestre: 1, correlativas: ["15", "21"], cargaHoraria: 60, condicion: "Requiere final de Derecho Comercial II" }, // 15*
    { codigo: "29", nombre: "Derecho del Trabajo y Seguridad Social", año: 5, cuatrimestre: 2, correlativas: ["4"], cargaHoraria: 60, condicion: "Requiere final de Derecho Civil" }, // 4*
    { codigo: "30", nombre: "Dirección General", año: 5, cuatrimestre: 2, correlativas: ["20", "22", "23", "25", "26"], cargaHoraria: 60 },
    { codigo: "31", nombre: "Administración Financiera", año: 5, cuatrimestre: 2, correlativas: ["17", "23"], cargaHoraria: 60, condicion: "Requiere final de Análisis de Sist. I" }, // 17*
    { codigo: "32", nombre: "Seminario Aplicado en Administración", año: 5, cuatrimestre: 2, correlativas: ["1"], cargaHoraria: 60 }, // "1"
];

const licenciaturaAdministracion1990: Carrera = {
    nombre: "Licenciatura en Administración - 1990",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Comodoro Rivadavia",
    plan: "Plan 1990",
    materias: materiasPlan1990,
    requisitos: [],
};

export default licenciaturaAdministracion1990;
