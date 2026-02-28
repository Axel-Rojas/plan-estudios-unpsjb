import { Carrera } from "../../types";

const licenciaturaSistemas: Carrera = {
    nombre: "Licenciatura en Sistemas",
    facultad: "Facultad de Ingeniería",
    sede: "Sede Trelew",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre
        { codigo: "IF001", nombre: "Elementos de Informática", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 105 },
        { codigo: "MA045", nombre: "Álgebra", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 135 },
        { codigo: "IF002", nombre: "Expresión de Problemas y Algoritmos", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        // 1° Año - 2° Cuatrimestre
        { codigo: "IF003", nombre: "Algorítmica y Programación I", año: 1, cuatrimestre: 2, correlativas: ["IF002"], cargaHoraria: 120 },
        { codigo: "MA048", nombre: "Análisis Matemático - S", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 165 },
        { codigo: "MA008", nombre: "Elementos de Lógica y Matemática Discreta", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 120 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "IF004", nombre: "Sistemas y Organizaciones", año: 2, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "IF005", nombre: "Arquitectura de Computadoras", año: 2, cuatrimestre: 1, correlativas: ["IF001"], cargaHoraria: 120 },
        { codigo: "IF006", nombre: "Algorítmica y Programación II", año: 2, cuatrimestre: 1, correlativas: ["IF003", "MA008"], cargaHoraria: 120 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "IF007", nombre: "Bases de Datos I", año: 2, cuatrimestre: 2, correlativas: ["IF006"], cargaHoraria: 135 },
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA045", "MA048"], cargaHoraria: 90 },
        { codigo: "IF008", nombre: "Programación Orientada a Objetos", año: 2, cuatrimestre: 2, correlativas: ["IF006"], cargaHoraria: 120 },
        { codigo: "IF038", nombre: "Introducción a la Concurrencia", año: 2, cuatrimestre: 2, correlativas: ["IF006"], cargaHoraria: 60 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "IF009", nombre: "Laboratorio de Programación y Lenguajes", año: 3, cuatrimestre: 1, correlativas: ["IF008", "IF038"], cargaHoraria: 90 },
        { codigo: "IF040", nombre: "Ingeniería de Software I - T", año: 3, cuatrimestre: 1, correlativas: ["IF004", "IF007"], cargaHoraria: 135 },
        { codigo: "IF037", nombre: "Sistemas Operativos - S", año: 3, cuatrimestre: 1, correlativas: ["IF005", "IF038"], cargaHoraria: 120 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "IF012", nombre: "Desarrollo de Software", año: 3, cuatrimestre: 2, correlativas: ["IF008", "IF040"], cargaHoraria: 135 },
        { codigo: "IF013", nombre: "Fundamentos Teóricos de Informática", año: 3, cuatrimestre: 2, correlativas: ["IF006", "MA008"], cargaHoraria: 120 },
        { codigo: "IF043", nombre: "Ingeniería de Software II - T", año: 3, cuatrimestre: 2, correlativas: ["IF008", "IF040"], cargaHoraria: 120 },

        // 4° Año - 1° Cuatrimestre
        { codigo: "IF019", nombre: "Redes y Transmisión de Datos", año: 4, cuatrimestre: 1, correlativas: ["IF037"], cargaHoraria: 135 },
        { codigo: "IF044", nombre: "Base de Datos II - S", año: 4, cuatrimestre: 1, correlativas: ["IF007", "IF008"], cargaHoraria: 120 },
        { codigo: "IF020", nombre: "Paradigmas y Lenguajes de Programación - T", año: 4, cuatrimestre: 1, correlativas: ["IF009", "IF013"], cargaHoraria: 120 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "IF046", nombre: "Administración de Redes y Seguridad", año: 4, cuatrimestre: 2, correlativas: ["IF019"], cargaHoraria: 90 },
        { codigo: "IF047", nombre: "Ingeniería de Software III - T", año: 4, cuatrimestre: 2, correlativas: ["MA006", "IF043"], cargaHoraria: 105 },
        { codigo: "IF016", nombre: "Aspectos Legales y Profesionales", año: 4, cuatrimestre: 2, correlativas: [], condicion: "15 asignaturas aprobadas", cargaHoraria: 60 },
        { codigo: "IF022", nombre: "Sistemas Distribuidos", año: 4, cuatrimestre: 2, correlativas: ["IF019"], cargaHoraria: 120 },

        // 5° Año - 1° Cuatrimestre
        { codigo: "IF049", nombre: "Administración de Proyectos", año: 5, cuatrimestre: 1, correlativas: ["IF012", "IF047"], cargaHoraria: 90 },
        { codigo: "IF050", nombre: "Aplicaciones Web", año: 5, cuatrimestre: 1, correlativas: ["IF022", "IF044"], cargaHoraria: 105 },
        { codigo: "IF017", nombre: "Taller de Nuevas Tecnologías", año: 5, cuatrimestre: 1, correlativas: ["IF047", "IF019"], cargaHoraria: 90 },
        { codigo: "IF027", nombre: "Modelos y Simulación", año: 5, cuatrimestre: 1, correlativas: ["MA006", "IF020"], cargaHoraria: 90 },
        // 5° Año - 2° Cuatrimestre
        { codigo: "IF053", nombre: "Planificación y Gestión de Sistemas de Información", año: 5, cuatrimestre: 2, correlativas: ["IF049"], cargaHoraria: 90 },
        { codigo: "IF054", nombre: "Sistemas de Soporte para la Toma de Decisiones", año: 5, cuatrimestre: 2, correlativas: ["IF027"], cargaHoraria: 105 },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma" },
        { codigo: "FA104", nombre: "(Curso) Introducción a la Metodología de la Investigación Científica y Técnicas Comunicacionales", condicion: "10 asignaturas aprobadas" },
        { codigo: "IF026", nombre: "Tesina" },
    ],
} satisfies Carrera;

export default licenciaturaSistemas;
