import { Carrera } from "../../types";

// Observaciones del plan: Las materias marcadas con "A" son anuales (cuatrimestre 0).
// En 5to año, los alumnos deben elegir materias optativas según los grupos (a), (b), etc.
// En este caso, todas esas opciones se marcan como optativas (esOptativa: true) y se
// les asigna su grupo ("a", "b", etc.) en grupoOptativa, para que el sistema las reconozca.

const materias: Carrera["materias"] = [
    // --- Año 1 ---
    // Cuatrimestre 1
    { codigo: "111", nombre: "Contabilidad I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 }, // Anual
    { codigo: "151", nombre: "Matemática I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 128 }, // Anual
    { codigo: "161", nombre: "Introducción a la Filosofía", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 64 },
    // Cuatrimestre 2
    { codigo: "121", nombre: "Derecho Civil", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "131", nombre: "Procesamiento de Datos", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "141", nombre: "Economía I", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },

    // --- Año 2 ---
    // Cuatrimestre 1
    { codigo: "212", nombre: "Contabilidad II", año: 2, cuatrimestre: 0, correlativas: ["111", "121", "131"], cargaHoraria: 128 }, // Anual
    { codigo: "222", nombre: "Derecho Comercial I", año: 2, cuatrimestre: 1, correlativas: ["121"], cargaHoraria: 96 },
    { codigo: "232", nombre: "Administración General", año: 2, cuatrimestre: 1, correlativas: ["131"], cargaHoraria: 96 },
    { codigo: "242", nombre: "Economía II", año: 2, cuatrimestre: 1, correlativas: ["141"], cargaHoraria: 96 },
    { codigo: "262", nombre: "Lógica y Metodología de las Ciencias", año: 2, cuatrimestre: 1, correlativas: ["161"], cargaHoraria: 64 },
    // Cuatrimestre 2
    { codigo: "252", nombre: "Matemática II", año: 2, cuatrimestre: 2, correlativas: ["151"], cargaHoraria: 128 }, // Cuatrimestral en el plan a pesar de la carga

    // --- Año 3 ---
    // Cuatrimestre 1
    { codigo: "371", nombre: "Introducción al Turismo", año: 3, cuatrimestre: 1, correlativas: ["141"], cargaHoraria: 128 },
    { codigo: "3610", nombre: "Historia de la Cultura", año: 3, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "8000", nombre: "Idioma Extranjero", año: 3, cuatrimestre: 1, correlativas: [], cargaHoraria: 0 }, // Observación (d): nivel requerido
    // Cuatrimestre 2
    { codigo: "372", nombre: "Geografía Económica del Turismo", año: 3, cuatrimestre: 2, correlativas: ["371"], cargaHoraria: 96 },
    { codigo: "373", nombre: "Patrimonio Turístico I", año: 3, cuatrimestre: 2, correlativas: ["3610", "371"], cargaHoraria: 96 },
    { codigo: "3322", nombre: "Gestión de Empresas de Turismo I", año: 3, cuatrimestre: 2, correlativas: ["232", "242"], cargaHoraria: 96 },
    { codigo: "3323", nombre: "Sociología de las Organizaciones", año: 3, cuatrimestre: 2, correlativas: ["161", "232", "262"], cargaHoraria: 96 },

    // --- Año 4 ---
    // Cuatrimestre 1
    { codigo: "453", nombre: "Estadística", año: 4, cuatrimestre: 1, correlativas: ["151", "252", "8000"], cargaHoraria: 128 },
    { codigo: "474", nombre: "Patrimonio Turístico II", año: 4, cuatrimestre: 1, correlativas: ["373", "8000"], cargaHoraria: 96 },
    { codigo: "4415", nombre: "Economía de Empresas", año: 4, cuatrimestre: 1, correlativas: ["242", "3322", "3323", "371", "8000"], cargaHoraria: 96 },
    // Cuatrimestre 2
    { codigo: "4324", nombre: "Sistemas de Información Aplicados", año: 4, cuatrimestre: 2, correlativas: ["232", "8000"], cargaHoraria: 96 },
    { codigo: "4325", nombre: "Gestión de Empresas de Turismo II", año: 4, cuatrimestre: 2, correlativas: ["232", "3322", "8000"], cargaHoraria: 96 },
    { codigo: "4416", nombre: "Planeamiento y Evaluación de Proyectos", año: 4, cuatrimestre: 2, correlativas: ["252", "353", "4415", "8000"], cargaHoraria: 96 }, // Nota: 353 no existe en la rama principal pero figura como correlativa. Lo listamos tal cual.

    // --- Año 5 ---
    // Cuatrimestre 1
    { codigo: "5212", nombre: "Legislación Turística", año: 5, cuatrimestre: 1, correlativas: ["222", "474"], cargaHoraria: 96 },
    { codigo: "5417", nombre: "Turismo y Desarrollo Sustentable", año: 5, cuatrimestre: 1, correlativas: ["373", "4416", "474"], cargaHoraria: 96 },
    // Cuatrimestre 2
    { codigo: "5326", nombre: "Seminario de Aplicación", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 0 }, // Carga horaria no en tabla principal sino en asterisco
    // Optativas del grupo (a)
    { codigo: "5390", nombre: "Marketing de Servicios Turísticos", año: 5, cuatrimestre: 2, correlativas: ["212", "3322", "4325"], cargaHoraria: 96, esOptativa: true, grupoOptativa: "a" },
    { codigo: "5391", nombre: "Administración de Recursos Humanos", año: 5, cuatrimestre: 2, correlativas: ["212", "3322", "3323", "4325"], cargaHoraria: 96, esOptativa: true, grupoOptativa: "a" },
    { codigo: "5392", nombre: "Administración Financiera", año: 5, cuatrimestre: 2, correlativas: ["212", "4325", "4415"], cargaHoraria: 96, esOptativa: true, grupoOptativa: "a" },
    // Optativas del grupo (b)
    { codigo: "5490", nombre: "Gestión de Proyectos", año: 5, cuatrimestre: 2, correlativas: ["212", "4325", "4416"], cargaHoraria: 96, esOptativa: true, grupoOptativa: "b" },
    { codigo: "5491", nombre: "Medios de Comunicación", año: 5, cuatrimestre: 2, correlativas: ["212", "4324", "4325"], cargaHoraria: 96, esOptativa: true, grupoOptativa: "b" },
    // Tesis (grupo c) o materia final 
    { codigo: "6000", nombre: "Tesis", año: 5, cuatrimestre: 2, correlativas: ["262", "353", "4324", "4325", "4415", "4416", "474"], cargaHoraria: 96 },
];

const licenciaturaAdministracionTurismo: Carrera = {
    nombre: "Licenciatura en Administración de Empresas Turísticas",
    facultad: "Facultad de Ciencias Económicas",
    sede: "A definir", // Las sedes no figuran explícitamente en las cabeceras provistas, asumo genérica y se podrá actualizar desde el index.
    plan: "Plan vigente", // Basado en resoluciones 2021
    materias,
    requisitos: [],
};

export default licenciaturaAdministracionTurismo;
