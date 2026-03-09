import { Carrera } from "../../types";

const licenciaturaEnfermeria: Carrera = {
    nombre: "Licenciatura en Enfermería",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución CDFCN N° 403/16, C.S. N° 079/16",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Enfermería Básica", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 170 },
        { codigo: "02", nombre: "Ciencias Biológicas", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },
        { codigo: "03", nombre: "Antropología", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 65 },
        { codigo: "04", nombre: "Sociología I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 60 },
        { codigo: "05", nombre: "Filosofía I", año: 1, cuatrimestre: 2, correlativas: ["04"], cargaHoraria: 60 },
        { codigo: "06", nombre: "Enfermería Comunitaria I", año: 1, cuatrimestre: 2, correlativas: ["03", "04"], cargaHoraria: 100 },
        { codigo: "07", nombre: "Microbiología y Parasitología", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 55 },

        // Segundo Año
        { codigo: "08", nombre: "Enfermería del Adulto y el Anciano", año: 2, cuatrimestre: 0, correlativas: ["01", "02"], cargaHoraria: 220 },
        { codigo: "09", nombre: "Enfermería Materno - Infantil", año: 2, cuatrimestre: 0, correlativas: ["01", "02", "06"], cargaHoraria: 220 },
        { codigo: "10", nombre: "Nutrición y Dietoterapia", año: 2, cuatrimestre: 1, correlativas: ["01", "02"], cargaHoraria: 55 },
        { codigo: "11", nombre: "Epidemiología", año: 2, cuatrimestre: 1, correlativas: ["06"], cargaHoraria: 65 },
        { codigo: "12", nombre: "Farmacología", año: 2, cuatrimestre: 1, correlativas: ["02", "07"], cargaHoraria: 55 },
        { codigo: "13", nombre: "Psicología", año: 2, cuatrimestre: 2, correlativas: ["03", "04"], cargaHoraria: 80 },
        { codigo: "14", nombre: "Etica y Deontología Profesional I", año: 2, cuatrimestre: 2, correlativas: ["01", "05"], cargaHoraria: 65 },

        // Tercer Año
        { codigo: "15", nombre: "Enfermería del Niño y el Adolescente", año: 3, cuatrimestre: 0, correlativas: ["09"], cargaHoraria: 200 },
        { codigo: "16", nombre: "Enfermería en Salud Mental", año: 3, cuatrimestre: 1, correlativas: ["08", "13"], cargaHoraria: 100 },
        { codigo: "17", nombre: "Investigación en Enfermería I", año: 3, cuatrimestre: 2, correlativas: ["08", "09"], cargaHoraria: 50 },
        { codigo: "18", nombre: "Gestión de los Servicios de Enfermería Hospitalarios y Comunitarios I", año: 3, cuatrimestre: 2, correlativas: ["08", "09"], cargaHoraria: 100 },
        { codigo: "19", nombre: "Práctica Integrada I", año: 3, cuatrimestre: 2, correlativas: ["09", "16"], cargaHoraria: 100 },
        { codigo: "EA", nombre: "Actividades Electivas", año: 3, cuatrimestre: 0, correlativas: [], cargaHoraria: 95, esOptativa: true },

        // Cuarto Año
        { codigo: "20", nombre: "Enfermería en Cuidados Críticos", año: 4, cuatrimestre: 0, correlativas: ["15", "16", "17", "18", "19", "EA"], cargaHoraria: 250, condicion: "1° CICLO" },
        { codigo: "21", nombre: "Enfermería Comunitaria II", año: 4, cuatrimestre: 1, correlativas: ["15", "16", "17", "18", "19", "EA"], cargaHoraria: 150, condicion: "1° CICLO" },
        { codigo: "22", nombre: "Filosofía II", año: 4, cuatrimestre: 1, correlativas: ["15", "16", "17", "18", "19", "EA"], cargaHoraria: 80, condicion: "1° CICLO" },
        { codigo: "23", nombre: "Educación en Enfermería", año: 4, cuatrimestre: 2, correlativas: ["15", "16", "17", "18", "19", "EA"], cargaHoraria: 60, condicion: "1° CICLO" },
        { codigo: "24", nombre: "Sociología II", año: 4, cuatrimestre: 2, correlativas: ["15", "16", "17", "18", "19", "EA"], cargaHoraria: 90, condicion: "1° CICLO" },
        { codigo: "25", nombre: "Investigación en Enfermería II", año: 4, cuatrimestre: 2, correlativas: ["15", "16", "17", "18", "19", "EA"], cargaHoraria: 100, condicion: "1° CICLO" },

        // Quinto Año
        { codigo: "26", nombre: "Gestión de los Servicios de Enfermería Hospitalarios y Comunitarios II", año: 5, cuatrimestre: 0, correlativas: ["20", "21"], cargaHoraria: 200 },
        { codigo: "27", nombre: "Taller de Investigación en Enfermería", año: 5, cuatrimestre: 0, correlativas: ["22", "25"], cargaHoraria: 180 },
        { codigo: "28", nombre: "Etica y Deontología Profesional II", año: 5, cuatrimestre: 2, correlativas: ["20", "21"], cargaHoraria: 90 },
        { codigo: "29", nombre: "Práctica Integrada II", año: 5, cuatrimestre: 2, correlativas: ["20", "21"], cargaHoraria: 100 }
    ]
};

export default licenciaturaEnfermeria;
