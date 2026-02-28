import { Carrera } from "../../types";

const ingenieriaMecanica: Carrera = {
    nombre: "Ingeniería Mecánica",
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
        { codigo: "ES003", nombre: "Estabilidad I", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 135 },
        { codigo: "FI002", nombre: "Física II", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 135 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "ES004", nombre: "Estabilidad II", año: 2, cuatrimestre: 2, correlativas: ["ES003"], cargaHoraria: 120 },
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 90 },
        { codigo: "MA007", nombre: "Programación Básica y Métodos Numéricos", año: 2, cuatrimestre: 2, correlativas: ["MA003"], cargaHoraria: 90 },
        { codigo: "FA004", nombre: "Sistemas de Representación", año: 2, cuatrimestre: 2, correlativas: [], condicion: "4 asignaturas aprobadas", cargaHoraria: 75 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "FI004", nombre: "Termodinámica Básica", año: 3, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 75 },
        { codigo: "ES006", nombre: "Materiales I", año: 3, cuatrimestre: 1, correlativas: ["QU001", "ES004"], cargaHoraria: 150 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "ME020", nombre: "Termodinámica Aplicada (M)", año: 3, cuatrimestre: 2, correlativas: ["QU001", "FI004"], cargaHoraria: 75 },
        { codigo: "ES007", nombre: "Materiales II", año: 3, cuatrimestre: 2, correlativas: ["ES006"], cargaHoraria: 105 },
        // 3° Año - Anual
        { codigo: "FA005", nombre: "Economía y Organización Industrial", año: 3, cuatrimestre: 0, correlativas: [], condicion: "6 asignaturas aprobadas", cargaHoraria: 105 },
        { codigo: "FA003", nombre: "Ingeniería Legal", año: 3, cuatrimestre: 0, correlativas: [], condicion: "6 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "FI005", nombre: "Mecánica Teórica", año: 3, cuatrimestre: 0, correlativas: ["ES003", "MA003"], cargaHoraria: 150 },

        // 4° Año - 1° Cuatrimestre
        { codigo: "ME008", nombre: "Metrología y Control de Calidad", año: 4, cuatrimestre: 1, correlativas: ["MA006", "ES004"], cargaHoraria: 105 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "EE025", nombre: "Electrotecnia y Electrónica Básica", año: 4, cuatrimestre: 2, correlativas: ["FI002"], cargaHoraria: 90 },
        // 4° Año - Anual
        { codigo: "ME001", nombre: "Mecánica de Fabricación", año: 4, cuatrimestre: 0, correlativas: ["ES007"], cargaHoraria: 135 },
        { codigo: "ME005", nombre: "Mecánica de los Fluidos", año: 4, cuatrimestre: 0, correlativas: ["MA042", "FI004"], cargaHoraria: 120 },
        { codigo: "ME024", nombre: "Sistemas de Control", año: 4, cuatrimestre: 0, correlativas: ["MA007"], cargaHoraria: 90 },
        { codigo: "ME007", nombre: "Mecanismos y Elementos de Máquina", año: 4, cuatrimestre: 0, correlativas: ["ES004", "ES007", "FI005"], cargaHoraria: 150 },
        { codigo: "ME022", nombre: "Optativa I", año: 4, cuatrimestre: 0, correlativas: [], cargaHoraria: 75, esOptativa: true, grupoOptativa: "optativa1" },

        // 5° Año - Anual
        { codigo: "ME004", nombre: "Máquinas Alternativas", año: 5, cuatrimestre: 0, correlativas: ["ME005", "ME020", "ME007"], cargaHoraria: 120 },
        { codigo: "FA001", nombre: "Gestión Ambiental", año: 5, cuatrimestre: 0, correlativas: [], condicion: "13 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "ME012", nombre: "Turbomáquinas", año: 5, cuatrimestre: 0, correlativas: ["ME005", "ME020", "ME007"], cargaHoraria: 150 },
        { codigo: "ME002", nombre: "Ingeniería en Transporte de Fluidos", año: 5, cuatrimestre: 0, correlativas: ["ME005", "ME020", "ME007"], cargaHoraria: 120 },
        { codigo: "ME003", nombre: "Mantenimiento", año: 5, cuatrimestre: 0, correlativas: ["ME007", "ME008"], cargaHoraria: 75 },
        { codigo: "ME013", nombre: "Proyecto de Ingeniería Mecánica", año: 5, cuatrimestre: 0, correlativas: [], condicion: "Todas las materias de 4° año aprobadas", cargaHoraria: 135 },
        { codigo: "ME023", nombre: "Optativa II", año: 5, cuatrimestre: 0, correlativas: [], cargaHoraria: 75, esOptativa: true, grupoOptativa: "optativa2" },

        // Optativa I - opciones
        { codigo: "ME016", nombre: "Mecánica del Sólido y Elementos Finitos", año: 4, cuatrimestre: 0, correlativas: ["ES004", "MA042"], cargaHoraria: 75, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "ME021", nombre: "Transmisión de Calor", año: 4, cuatrimestre: 0, correlativas: ["MA042", "ME020"], cargaHoraria: 75, esOptativa: true, grupoOptativa: "optativa1" },

        // Optativa II - opciones
        { codigo: "ME017", nombre: "Perforación (M)", año: 5, cuatrimestre: 0, correlativas: ["ME007", "ME005"], cargaHoraria: 75, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "ME018", nombre: "Producción (M)", año: 5, cuatrimestre: 0, correlativas: ["ME007", "ME005"], cargaHoraria: 75, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "ME015", nombre: "Construcciones Metálicas", año: 5, cuatrimestre: 0, correlativas: ["ME007"], cargaHoraria: 75, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "ME019", nombre: "Sistemas Óleo Hidráulicos", año: 5, cuatrimestre: 0, correlativas: ["ME007", "ME005"], cargaHoraria: 75, esOptativa: true, grupoOptativa: "optativa2" },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma", condicion: "Aprobada antes de comenzar el cuarto año de la carrera" },
        { codigo: "FA102", nombre: "(Curso) Estrategias Comunicacionales", condicion: "5 asignaturas aprobadas" },
        { codigo: "FA103", nombre: "(Curso) Relaciones Humanas", condicion: "10 asignaturas aprobadas" },
        { codigo: "ME025", nombre: "Práctica Profesional Supervisada IM", condicion: "22 asignaturas aprobadas" },
    ],
} satisfies Carrera;

export default ingenieriaMecanica;
