import { Carrera } from "../../types";

const profesoradoCienciasBiologicas: Carrera = {
    nombre: "Profesorado en Ciencias Biológicas",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución CAFCN N° 246/02 - CAFCN N° 343/08 - C.S. N° 096/02 - Ministerio Educación N° 119/95",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Matemática", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "02", nombre: "Química General", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "03", nombre: "Biología General", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 80 },
        { codigo: "04", nombre: "Química Orgánica", año: 1, cuatrimestre: 2, correlativas: ["02"], cargaHoraria: 150 },
        { codigo: "05", nombre: "Pedagogía", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },
        { codigo: "06", nombre: "Psicología Evolutiva", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },

        // Segundo Año
        { codigo: "07", nombre: "Química Biológica", año: 2, cuatrimestre: 1, correlativas: ["04"], cargaHoraria: 150 },
        { codigo: "08", nombre: "Botánica General", año: 2, cuatrimestre: 1, correlativas: ["03"], cargaHoraria: 150 },
        { codigo: "09", nombre: "Física", año: 2, cuatrimestre: 2, correlativas: ["01"], cargaHoraria: 150 },
        { codigo: "10", nombre: "Zoología General", año: 2, cuatrimestre: 2, correlativas: ["03"], cargaHoraria: 150 },
        { codigo: "11", nombre: "Didáctica General", año: 2, cuatrimestre: 0, correlativas: ["05"], cargaHoraria: 120 },
        { codigo: "12", nombre: "Geología General", año: 2, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },

        // Tercer Año
        { codigo: "13", nombre: "Estadística", año: 3, cuatrimestre: 1, correlativas: ["01"], cargaHoraria: 120 },
        { codigo: "14", nombre: "Didáctica Específica de las Ciencias Naturales", año: 3, cuatrimestre: 1, correlativas: ["06", "11"], cargaHoraria: 120 },
        { codigo: "15", nombre: "Genética y Evolución", año: 3, cuatrimestre: 1, correlativas: ["07"], cargaHoraria: 150 },
        { codigo: "16", nombre: "Seminario de Formación Docente I", año: 3, cuatrimestre: 2, correlativas: ["11"], cargaHoraria: 80 },
        { codigo: "17", nombre: "Introducción a la Ecología", año: 3, cuatrimestre: 2, correlativas: ["08", "10", "12", "13"], cargaHoraria: 150 },
        { codigo: "18", nombre: "Morfología Humana", año: 3, cuatrimestre: 2, correlativas: ["03"], cargaHoraria: 100 },

        // Cuarto Año
        { codigo: "19", nombre: "Educación para la Salud", año: 4, cuatrimestre: 1, correlativas: ["13", "18"], cargaHoraria: 100 },
        { codigo: "20", nombre: "Seminario de Formación Docente II", año: 4, cuatrimestre: 1, correlativas: ["16"], cargaHoraria: 80 },
        { codigo: "21", nombre: "Filosofía de la Ciencia", año: 4, cuatrimestre: 1, correlativas: ["04", "08", "09", "10", "12"], cargaHoraria: 120 },
        { codigo: "22", nombre: "Fisiología General", año: 4, cuatrimestre: 2, correlativas: ["07", "08", "10"], cargaHoraria: 150 },
        { codigo: "23", nombre: "Biología Celular y Molecular", año: 4, cuatrimestre: 2, correlativas: ["15"], cargaHoraria: 150 },
        { codigo: "24", nombre: "Metodología y Práctica de la Enseñanza", año: 4, cuatrimestre: 0, correlativas: ["14"], cargaHoraria: 200 },

        // Quinto Año
        { codigo: "25", nombre: "Organismos Celulares", año: 5, cuatrimestre: 1, correlativas: ["08", "10"], cargaHoraria: 100 },
        { codigo: "26", nombre: "Diversidad Animal", año: 5, cuatrimestre: 2, correlativas: ["10"], cargaHoraria: 100 },
        { codigo: "27", nombre: "Diversidad Vegetal", año: 5, cuatrimestre: 2, correlativas: ["08"], cargaHoraria: 100 },
        { codigo: "28", nombre: "Biología Ambiental", año: 5, cuatrimestre: 1, correlativas: ["04", "17"], cargaHoraria: 100 },
        { codigo: "29", nombre: "Biología Evolutiva", año: 5, cuatrimestre: 1, correlativas: ["08", "10", "12"], cargaHoraria: 100 },
        { codigo: "30", nombre: "Seminario Formador de Formadores", año: 5, cuatrimestre: 0, correlativas: ["21", "24"], cargaHoraria: 180 }
    ],
    requisitos: [
        { codigo: "TC", nombre: "Trabajo de Campo", condicion: "Deberá acreditarse 20 días de trabajo de campo a partir del 4to año" }
    ]
};

export default profesoradoCienciasBiologicas;
