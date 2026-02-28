import { Carrera } from "../../types";

const licHigieneYSeguridadEnElTrabajo: Carrera = {
    nombre: "Lic. en Higiene y Seguridad en el Trabajo",
    facultad: "Facultad de Ingeniería",
    sede: "Sede Comodoro Rivadavia",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre
        { codigo: "MA001", nombre: "Álgebra y Geometría", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 165 },
        { codigo: "MA002", nombre: "Análisis Matemático I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 165 },
        // 1° Año - 2° Cuatrimestre
        { codigo: "MA003", nombre: "Análisis Matemático II", año: 1, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 150 },
        { codigo: "FI001", nombre: "Física I", año: 1, cuatrimestre: 2, correlativas: ["MA002"], cargaHoraria: 150 },
        // 1° Año - Anual
        { codigo: "QU001", nombre: "Química", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 135 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "FI002", nombre: "Física II", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 135 },
        { codigo: "FI004", nombre: "Termodinámica Básica", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 75 },
        { codigo: "SI018", nombre: "Operación de Computadoras", año: 2, cuatrimestre: 1, correlativas: ["MA001"], cargaHoraria: 120 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 90 },
        { codigo: "QU003", nombre: "Termodinámica Aplicada", año: 2, cuatrimestre: 2, correlativas: ["FI004", "QU001"], cargaHoraria: 75 },
        // 2° Año - Anual
        { codigo: "ES010", nombre: "Mecánica y Tecnología de los Materiales", año: 2, cuatrimestre: 0, correlativas: ["QU001", "FI001"], cargaHoraria: 150 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "FA009", nombre: "Seguridad en Obras", año: 3, cuatrimestre: 1, correlativas: ["ES010"], cargaHoraria: 90 },
        { codigo: "FA010", nombre: "Prevención de Incendios", año: 3, cuatrimestre: 1, correlativas: ["QU001", "FI004"], cargaHoraria: 120 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "FA023", nombre: "Legislación Laboral", año: 3, cuatrimestre: 2, correlativas: [], condicion: "6 asignaturas aprobadas", cargaHoraria: 105 },
        { codigo: "EE008", nombre: "Fundamentos de Electrotecnia", año: 3, cuatrimestre: 2, correlativas: ["FI002", "MA003"], cargaHoraria: 75 },
        // 3° Año - Anual
        { codigo: "FA002", nombre: "Ingeniería Económica", año: 3, cuatrimestre: 0, correlativas: [], condicion: "6 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "FA011", nombre: "Seguridad en el Trabajo", año: 3, cuatrimestre: 0, correlativas: ["FI002", "ES010"], cargaHoraria: 150 },
        { codigo: "QU007", nombre: "Servicios Industriales", año: 3, cuatrimestre: 0, correlativas: ["QU003"], cargaHoraria: 150 },

        // 4° Año - 1° Cuatrimestre
        { codigo: "FA012", nombre: "Organización Empresarial", año: 4, cuatrimestre: 1, correlativas: ["FA002"], cargaHoraria: 105 },
        { codigo: "FA013", nombre: "Toxicología Laboral", año: 4, cuatrimestre: 1, correlativas: ["QU001"], cargaHoraria: 105 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "FA014", nombre: "Psicología y Sociología del Trabajo", año: 4, cuatrimestre: 2, correlativas: [], condicion: "10 asignaturas aprobadas", cargaHoraria: 90 },
        { codigo: "FA015", nombre: "Salud Ocupacional", año: 4, cuatrimestre: 2, correlativas: ["FA013"], cargaHoraria: 120 },
        // 4° Año - Anual
        { codigo: "FA016", nombre: "Higiene en el Trabajo", año: 4, cuatrimestre: 0, correlativas: ["FA011", "EE008"], cargaHoraria: 150 },
        { codigo: "FA017", nombre: "Práctica Profesional", año: 4, cuatrimestre: 0, correlativas: ["FA009", "FA010", "FA011"], cargaHoraria: 150 },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma Inglés", condicion: "Prueba de competencia aprobada antes de comenzar el tercer año de la carrera" },
    ],
} satisfies Carrera;

export default licHigieneYSeguridadEnElTrabajo;
