import { Carrera } from "../../types";

const licenciaturaCienciasBiologicas: Carrera = {
    nombre: "Licenciatura en Ciencias Biológicas",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Comodoro Rivadavia, Trelew, Esquel, Puerto Madryn",
    plan: "Resolución CDFCN N° 174/13, C.S. N° 051/13",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Biología General", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 90 },
        { codigo: "02", nombre: "Matemática I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 100 },
        { codigo: "03", nombre: "Química General", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },
        { codigo: "04", nombre: "Matemática II", año: 1, cuatrimestre: 0, correlativas: ["02"], cargaHoraria: 100 },
        { codigo: "05", nombre: "Química Orgánica", año: 1, cuatrimestre: 0, correlativas: ["03"], cargaHoraria: 100 },
        { codigo: "06", nombre: "Geología General", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 100 },

        // Segundo Año
        { codigo: "07", nombre: "Botánica General", año: 2, cuatrimestre: 0, correlativas: ["01"], cargaHoraria: 120 },
        { codigo: "08", nombre: "Física", año: 2, cuatrimestre: 0, correlativas: ["02"], cargaHoraria: 150 },
        { codigo: "09", nombre: "Química Biológica", año: 2, cuatrimestre: 0, correlativas: ["05"], cargaHoraria: 100 },
        { codigo: "10", nombre: "Diversidad de Plantas", año: 2, cuatrimestre: 0, correlativas: ["07"], cargaHoraria: 100 },
        { codigo: "11", nombre: "Estadística I", año: 2, cuatrimestre: 0, correlativas: ["01", "04"], cargaHoraria: 100 },
        { codigo: "12", nombre: "Zoología General", año: 2, cuatrimestre: 0, correlativas: ["01"], cargaHoraria: 120 },

        // Tercer Año
        { codigo: "13", nombre: "Genética", año: 3, cuatrimestre: 0, correlativas: ["07", "09", "11", "12"], cargaHoraria: 130 },
        { codigo: "14", nombre: "Diversidad Animal I", año: 3, cuatrimestre: 0, correlativas: ["12"], cargaHoraria: 110 },
        { codigo: "15", nombre: "Organismos Celulares", año: 3, cuatrimestre: 0, correlativas: ["07", "12"], cargaHoraria: 100 },
        { codigo: "16", nombre: "Fisiología General", año: 3, cuatrimestre: 0, correlativas: ["07", "08", "09", "12"], cargaHoraria: 150 },
        { codigo: "17", nombre: "Biología Celular y Molecular", año: 3, cuatrimestre: 0, correlativas: ["13"], cargaHoraria: 120 },
        { codigo: "18", nombre: "Ecología General", año: 3, cuatrimestre: 0, correlativas: ["06", "09", "10", "11", "14"], cargaHoraria: 120 },

        // Cuarto Año
        { codigo: "19", nombre: "Evolución", año: 4, cuatrimestre: 0, correlativas: ["17"], cargaHoraria: 120 },
        { codigo: "20", nombre: "Diversidad Animal II", año: 4, cuatrimestre: 0, correlativas: ["12"], cargaHoraria: 90 },
        { codigo: "21", nombre: "Estadística II", año: 4, cuatrimestre: 0, correlativas: ["11"], cargaHoraria: 100 },
        { codigo: "22", nombre: "Ecología de la Conservación", año: 4, cuatrimestre: 0, correlativas: ["18"], cargaHoraria: 50 },
        { codigo: "23", nombre: "Filosofía de la Ciencia", año: 4, cuatrimestre: 0, correlativas: ["19"], cargaHoraria: 90 },
        { codigo: "24", nombre: "Actividades Optativas (4to Año)", año: 4, cuatrimestre: 0, correlativas: [], cargaHoraria: 300, esOptativa: true },

        // Quinto Año
        { codigo: "25", nombre: "Actividades Optativas (5to Año)", año: 5, cuatrimestre: 0, correlativas: [], cargaHoraria: 530, esOptativa: true },
        { codigo: "TF", nombre: "Trabajo Final", año: 5, cuatrimestre: 0, correlativas: [], cargaHoraria: 320 }
    ]
};

export default licenciaturaCienciasBiologicas;
