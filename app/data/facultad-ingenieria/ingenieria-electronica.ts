import { Carrera } from "../../types";

const ingenieriaElectronica: Carrera = {
    nombre: "Ingeniería Electrónica",
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
        { codigo: "FI003", nombre: "Física III", año: 2, cuatrimestre: 2, correlativas: ["FI002", "MA042"], cargaHoraria: 120 },
        { codigo: "EE016", nombre: "Teoría de Circuitos I", año: 2, cuatrimestre: 2, correlativas: ["FI002"], cargaHoraria: 135 },
        { codigo: "FA004", nombre: "Sistemas de Representación", año: 2, cuatrimestre: 2, correlativas: [], condicion: "4 asignaturas aprobadas", cargaHoraria: 75 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "EE009", nombre: "Instrumentos y Mediciones I", año: 3, cuatrimestre: 1, correlativas: ["EE016"], cargaHoraria: 135 },
        { codigo: "EE013", nombre: "Señales y Sistemas", año: 3, cuatrimestre: 1, correlativas: ["EE016", "MA042"], cargaHoraria: 135 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "MA007", nombre: "Programación Básica y Métodos Numéricos", año: 3, cuatrimestre: 2, correlativas: ["MA003"], cargaHoraria: 90 },
        { codigo: "EE017", nombre: "Teoría de Circuitos II", año: 3, cuatrimestre: 2, correlativas: ["EE013"], cargaHoraria: 135 },
        // 3° Año - Anual
        { codigo: "EE001", nombre: "Circuitos Electrónicos I", año: 3, cuatrimestre: 0, correlativas: ["EE016"], cargaHoraria: 135 },
        { codigo: "EE014", nombre: "Sistemas Digitales I", año: 3, cuatrimestre: 0, correlativas: ["EE016"], cargaHoraria: 135 },

        // 4° Año - Anual
        { codigo: "EE002", nombre: "Circuitos Electrónicos II", año: 4, cuatrimestre: 0, correlativas: ["EE001", "EE017"], cargaHoraria: 135 },
        { codigo: "EE003", nombre: "Comunicaciones I", año: 4, cuatrimestre: 0, correlativas: ["MA006", "EE013"], cargaHoraria: 135 },
        { codigo: "EE005", nombre: "Control I", año: 4, cuatrimestre: 0, correlativas: ["EE017"], cargaHoraria: 135 },
        { codigo: "FA005", nombre: "Economía y Organización Industrial", año: 4, cuatrimestre: 0, correlativas: [], condicion: "9 asignaturas aprobadas", cargaHoraria: 105 },
        { codigo: "EE011", nombre: "Máquinas e Instalaciones Eléctricas", año: 4, cuatrimestre: 0, correlativas: ["EE016"], cargaHoraria: 135 },
        { codigo: "EE015", nombre: "Sistemas Digitales II", año: 4, cuatrimestre: 0, correlativas: ["EE014", "MA007"], cargaHoraria: 135 },

        // 5° Año - 1° Cuatrimestre
        { codigo: "FA024", nombre: "Gestión Empresarial", año: 5, cuatrimestre: 1, correlativas: [], condicion: "12 asignaturas aprobadas", cargaHoraria: 45 },
        // 5° Año - Anual
        { codigo: "EE023", nombre: "Optativa I", año: 5, cuatrimestre: 0, correlativas: [], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "EE024", nombre: "Optativa II", año: 5, cuatrimestre: 0, correlativas: [], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "EE007", nombre: "Electrónica Industrial", año: 5, cuatrimestre: 0, correlativas: ["EE002", "EE005", "EE011"], cargaHoraria: 135 },
        { codigo: "FA003", nombre: "Ingeniería Legal", año: 5, cuatrimestre: 0, correlativas: [], condicion: "12 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "EE010", nombre: "Instrumentos y Mediciones II", año: 5, cuatrimestre: 0, correlativas: ["EE009", "EE002", "EE015"], cargaHoraria: 135 },
        { codigo: "EE019", nombre: "Proyecto de Ingeniería Electrónica", año: 5, cuatrimestre: 0, correlativas: ["EE002", "EE003", "EE005", "EE015"], cargaHoraria: 135 },

        // Optativas (*) - pool compartido para Optativa I y II
        { codigo: "EE004", nombre: "Comunicaciones II", año: 5, cuatrimestre: 0, correlativas: ["EE003", "EE014"], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "EE006", nombre: "Control II", año: 5, cuatrimestre: 0, correlativas: ["EE005"], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "EE020", nombre: "Comunicaciones Móviles", año: 5, cuatrimestre: 0, correlativas: ["EE003", "EE005", "EE015"], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "EE021", nombre: "Automatización Industrial", año: 5, cuatrimestre: 0, correlativas: ["EE003", "EE005", "EE015"], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "EE022", nombre: "Sistemas Digitales III", año: 5, cuatrimestre: 0, correlativas: ["EE003", "EE005", "EE015"], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa1" },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma", condicion: "Aprobada antes de comenzar el cuarto año de la carrera" },
        { codigo: "EE026", nombre: "Práctica Profesional Supervisada IE", condicion: "22 asignaturas aprobadas" },
        { codigo: "FA102", nombre: "(Curso) Estrategias Comunicacionales", condicion: "5 asignaturas aprobadas" },
        { codigo: "FA103", nombre: "(Curso) Relaciones Humanas", condicion: "10 asignaturas aprobadas" },
    ],
} satisfies Carrera;

export default ingenieriaElectronica;
