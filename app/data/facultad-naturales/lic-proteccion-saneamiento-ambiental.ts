import { Carrera } from "../../types";

const licenciaturaProteccionSaneamientoAmbiental: Carrera = {
    nombre: "Licenciatura en Protección y Saneamiento Ambiental",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Comodoro Rivadavia, Trelew",
    plan: "Resolución CAFCN N° 436/01 - CAFCN N° 343/08 - C.S. N° 094/02 - Ministerio Educación N° 193/03",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Matemática I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "02", nombre: "Química General", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "03", nombre: "Geología y Geomorfología", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 120 },
        { codigo: "04", nombre: "Química Orgánica", año: 1, cuatrimestre: 2, correlativas: ["02"], cargaHoraria: 150 },
        { codigo: "05", nombre: "Física I", año: 1, cuatrimestre: 2, correlativas: ["01"], cargaHoraria: 150 },

        // Segundo Año
        { codigo: "06", nombre: "Química Analítica General", año: 2, cuatrimestre: 0, correlativas: ["02"], cargaHoraria: 150 },
        { codigo: "07", nombre: "Química Biológica", año: 2, cuatrimestre: 1, correlativas: ["04"], cargaHoraria: 150 },
        { codigo: "08", nombre: "Botánica General", año: 2, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "09", nombre: "Suelos e Hidrología", año: 2, cuatrimestre: 0, correlativas: ["03", "05"], cargaHoraria: 120 },
        { codigo: "10", nombre: "Zoología General", año: 2, cuatrimestre: 2, correlativas: [], cargaHoraria: 150 },
        { codigo: "11", nombre: "Meteorología y Climatología", año: 2, cuatrimestre: 2, correlativas: ["05"], cargaHoraria: 90 },

        // Tercer Año
        { codigo: "12", nombre: "Procesos Industriales", año: 3, cuatrimestre: 0, correlativas: ["05", "07"], cargaHoraria: 150 },
        { codigo: "13", nombre: "Estadística", año: 3, cuatrimestre: 1, correlativas: ["01"], cargaHoraria: 120 },
        { codigo: "14", nombre: "Microbiología Ambiental", año: 3, cuatrimestre: 1, correlativas: ["07"], cargaHoraria: 120 },
        { codigo: "15", nombre: "Contaminación y Tratamiento del Aire", año: 3, cuatrimestre: 2, correlativas: ["04", "05", "06"], cargaHoraria: 90 },
        { codigo: "16", nombre: "Contaminación de Suelos y Aguas", año: 3, cuatrimestre: 2, correlativas: ["04", "06", "09"], cargaHoraria: 90 },
        { codigo: "17", nombre: "Introducción a la Ecología", año: 3, cuatrimestre: 2, correlativas: ["03", "08", "10", "13"], cargaHoraria: 150 },

        // Cuarto Año
        { codigo: "18", nombre: "Toxicología y Salud Ambiental", año: 4, cuatrimestre: 1, correlativas: ["14"], cargaHoraria: 90 },
        { codigo: "19", nombre: "Tratamiento de Efluentes Cloacales e Industriales", año: 4, cuatrimestre: 0, correlativas: ["12", "14", "16"], cargaHoraria: 150 },
        { codigo: "20", nombre: "Tratamiento de Residuos de la Explotación Petrolera", año: 4, cuatrimestre: 1, correlativas: ["12", "14", "16"], cargaHoraria: 90 },
        { codigo: "21", nombre: "Repoblamiento Vegetal", año: 4, cuatrimestre: 1, correlativas: ["09", "11", "17"], cargaHoraria: 90 },
        { codigo: "22", nombre: "Tratamiento de los Residuos Sólidos", año: 4, cuatrimestre: 2, correlativas: ["09", "12", "14", "16"], cargaHoraria: 90 },
        { codigo: "23", nombre: "Protección del Paisaje, Flora y Fauna", año: 4, cuatrimestre: 2, correlativas: ["17"], cargaHoraria: 90 },
        { codigo: "24", nombre: "Inglés Técnico", año: 4, cuatrimestre: 2, correlativas: [], cargaHoraria: 90 },

        // Quinto Año
        { codigo: "25", nombre: "Legislación y Gestión Ambiental", año: 5, cuatrimestre: 1, correlativas: ["19", "20", "22", "23"], cargaHoraria: 90 },
        { codigo: "26", nombre: "Evaluación de Impacto Ambiental", año: 5, cuatrimestre: 1, correlativas: ["19", "20", "22", "23"], cargaHoraria: 90 },
        { codigo: "PPS", nombre: "Práctica Profesional o Tesis de Licenciatura", año: 5, cuatrimestre: 2, correlativas: ["25", "26"], cargaHoraria: 400 }
    ]
};

export default licenciaturaProteccionSaneamientoAmbiental;
