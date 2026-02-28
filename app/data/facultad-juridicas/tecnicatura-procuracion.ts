import { Carrera } from "../../types";

// Plan sin cuatrimestre especificado en el plan vigente (materias anuales)
const tecnicaturaProcuracion: Carrera = {
    nombre: "Tecnicatura Universitaria en Procuración y Asistencia Jurídica",
    facultad: "Facultad de Ciencias Jurídicas y Sociales",
    sede: "Sede Esquel",
    plan: "Plan vigente",
    materias: [
        // 1° Año
        { codigo: "PAJ001", nombre: "Introducción al Derecho", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 112 },
        { codigo: "PAJ002", nombre: "Derecho Romano", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 112 },
        { codigo: "PAJ003", nombre: "Derecho Penal I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 112 },
        { codigo: "PAJ004", nombre: "Derecho Civil I", año: 1, cuatrimestre: 0, correlativas: ["PAJ001", "PAJ002"], cargaHoraria: 112 },
        { codigo: "PAJ005", nombre: "Filosofía del Derecho", año: 1, cuatrimestre: 0, correlativas: ["PAJ001"], cargaHoraria: 112 },

        // 2° Año
        { codigo: "PAJ006", nombre: "Derecho Constitucional", año: 2, cuatrimestre: 0, correlativas: ["PAJ005"], cargaHoraria: 112 },
        { codigo: "PAJ007", nombre: "Derecho Laboral y de Seguridad Social", año: 2, cuatrimestre: 0, correlativas: ["PAJ004"], cargaHoraria: 112 },
        { codigo: "PAJ008", nombre: "Derecho Penal II", año: 2, cuatrimestre: 0, correlativas: ["PAJ003", "PAJ004"], cargaHoraria: 112 },
        { codigo: "PAJ009", nombre: "Derecho Comercial I", año: 2, cuatrimestre: 0, correlativas: ["PAJ004"], cargaHoraria: 112 },
        { codigo: "PAJ010", nombre: "Derecho Civil II", año: 2, cuatrimestre: 0, correlativas: ["PAJ004"], cargaHoraria: 112 },
        { codigo: "PAJ011", nombre: "Derecho Administrativo", año: 2, cuatrimestre: 0, correlativas: ["PAJ003", "PAJ004", "PAJ006"], cargaHoraria: 112 },

        // 3° Año
        { codigo: "PAJ012", nombre: "Derecho Civil III", año: 3, cuatrimestre: 0, correlativas: ["PAJ010"], cargaHoraria: 112 },
        { codigo: "PAJ013", nombre: "Derecho Procesal Penal", año: 3, cuatrimestre: 0, correlativas: ["PAJ006", "PAJ008"], cargaHoraria: 112 },
        { codigo: "PAJ014", nombre: "Derecho Procesal Civil y Comercial", año: 3, cuatrimestre: 0, correlativas: ["PAJ008", "PAJ011", "PAJ013"], cargaHoraria: 112 },
        { codigo: "PAJ015", nombre: "Práctica Profesional I", año: 3, cuatrimestre: 0, correlativas: ["PAJ007", "PAJ013"], cargaHoraria: 64 },
        { codigo: "PAJ016", nombre: "Práctica Profesional II", año: 3, cuatrimestre: 0, correlativas: ["PAJ013", "PAJ014"], cargaHoraria: 112 },
    ],
    requisitos: [],
} satisfies Carrera;

export default tecnicaturaProcuracion;
