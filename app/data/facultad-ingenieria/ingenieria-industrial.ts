import { Carrera } from "../../types";

const ingenieriaIndustrial: Carrera = {
    nombre: "Ingeniería Industrial",
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
        { codigo: "MA042", nombre: "Análisis Matemático III", año: 2, cuatrimestre: 1, correlativas: ["MA003"], cargaHoraria: 105 },
        { codigo: "FI002", nombre: "Física II", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 135 },
        { codigo: "FI004", nombre: "Termodinámica Básica", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 75 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 90 },
        { codigo: "MA007", nombre: "Programación Básica y Métodos Numéricos", año: 2, cuatrimestre: 2, correlativas: ["MA003"], cargaHoraria: 90 },
        { codigo: "QU003", nombre: "Termodinámica Aplicada", año: 2, cuatrimestre: 2, correlativas: ["QU001", "FI004"], cargaHoraria: 75 },
        { codigo: "FA004", nombre: "Sistemas de Representación", año: 2, cuatrimestre: 2, correlativas: [], condicion: "4 asignaturas aprobadas", cargaHoraria: 75 },
        // 2° Año - Anual
        { codigo: "ES008", nombre: "Estabilidad", año: 2, cuatrimestre: 0, correlativas: ["FI001"], cargaHoraria: 150 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "II002", nombre: "Costos Industriales", año: 3, cuatrimestre: 1, correlativas: ["MA006", "MA007"], cargaHoraria: 75 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "II001", nombre: "Administración de Empresas", año: 3, cuatrimestre: 2, correlativas: ["MA006", "MA007"], cargaHoraria: 90 },
        // 3° Año - Anual
        { codigo: "ME014", nombre: "Mecánica y Mecanismos", año: 3, cuatrimestre: 0, correlativas: ["ES008"], cargaHoraria: 90 },
        { codigo: "ES009", nombre: "Tecnología de los Materiales", año: 3, cuatrimestre: 0, correlativas: ["FI002", "QU003"], cargaHoraria: 90 },
        { codigo: "QU006", nombre: "Fenómenos de Transporte", año: 3, cuatrimestre: 0, correlativas: ["MA003", "FI004"], cargaHoraria: 150 },
        { codigo: "QU007", nombre: "Servicios Industriales", año: 3, cuatrimestre: 0, correlativas: ["QU003"], cargaHoraria: 150 },
        { codigo: "II003", nombre: "Investigación Operativa", año: 3, cuatrimestre: 0, correlativas: ["MA006", "MA007"], cargaHoraria: 150 },

        // 4° Año - 1° Cuatrimestre
        { codigo: "II004", nombre: "Gestión de la Calidad", año: 4, cuatrimestre: 1, correlativas: ["II003", "II002"], cargaHoraria: 90 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "EE008", nombre: "Fundamentos de Electrotecnia", año: 4, cuatrimestre: 2, correlativas: ["FI002"], cargaHoraria: 75 },
        // 4° Año - Anual
        { codigo: "II005", nombre: "Operaciones Industriales", año: 4, cuatrimestre: 0, correlativas: ["MA007", "FA004", "QU003", "QU006"], cargaHoraria: 150 },
        { codigo: "II006", nombre: "Organización Industrial", año: 4, cuatrimestre: 0, correlativas: ["II002", "II003", "II001"], cargaHoraria: 150 },
        { codigo: "II007", nombre: "Sistemas de Información", año: 4, cuatrimestre: 0, correlativas: ["II001"], cargaHoraria: 90 },
        { codigo: "QU011", nombre: "Química Industrial", año: 4, cuatrimestre: 0, correlativas: ["ES009"], cargaHoraria: 150 },
        { codigo: "FA002", nombre: "Ingeniería Económica", año: 4, cuatrimestre: 0, correlativas: [], condicion: "14 asignaturas aprobadas", cargaHoraria: 75 },

        // 5° Año - 1° Cuatrimestre
        { codigo: "II_OP1", nombre: "Optativa I", año: 5, cuatrimestre: 1, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        // 5° Año - 2° Cuatrimestre
        { codigo: "II_OP2", nombre: "Optativa II", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        // 5° Año - Anual
        { codigo: "II008", nombre: "Gestión de la Producción", año: 5, cuatrimestre: 0, correlativas: ["II006"], cargaHoraria: 180 },
        { codigo: "QU012", nombre: "Instrumentación y Control", año: 5, cuatrimestre: 0, correlativas: ["MA042", "II005"], cargaHoraria: 150 },
        { codigo: "II009", nombre: "Proyecto de Ingeniería Industrial", año: 5, cuatrimestre: 0, correlativas: ["FA002", "QU007", "QU011", "II005"], cargaHoraria: 150 },
        { codigo: "FA001", nombre: "Gestión Ambiental", año: 5, cuatrimestre: 0, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "FA003", nombre: "Ingeniería Legal", año: 5, cuatrimestre: 0, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 75 },

        // Optativas - pool compartido para Optativa I y II
        { codigo: "II010", nombre: "Dirección de Negocios", año: 5, cuatrimestre: 1, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "II011", nombre: "Logística", año: 5, cuatrimestre: 2, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "QU018", nombre: "Fundamentos de Contaminación Ambiental", año: 5, cuatrimestre: 1, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "FA025", nombre: "Seguridad Industrial", año: 5, cuatrimestre: 1, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "QU017", nombre: "Biotecnología Básica", año: 5, cuatrimestre: 1, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "II013", nombre: "Seminario de Gestión de Proyectos", año: 5, cuatrimestre: 1, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma", condicion: "Aprobada antes de comenzar el cuarto año de la carrera" },
        { codigo: "II014", nombre: "Práctica Profesional Supervisada II", condicion: "24 asignaturas aprobadas" },
        { codigo: "FA102", nombre: "(Curso) Estrategias Comunicacionales", condicion: "5 asignaturas aprobadas" },
        { codigo: "FA103", nombre: "(Curso) Relaciones Humanas", condicion: "10 asignaturas aprobadas" },
    ],
} satisfies Carrera;

export default ingenieriaIndustrial;
