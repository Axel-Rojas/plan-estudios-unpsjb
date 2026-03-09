import { Carrera } from "../../types";

const tecnicoUnivQuimica: Carrera = {
    nombre: "Tecnicatura Universitaria en Química",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución CAFCN N° 163/96 - 304/96 - 303/07 - CDFCN N° 314/09 - C.S. N° 203/96 - C.S N° 075/07 - C.S N° 033/10 - Ministerio de Cultura y Educación N° 1904/97",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Matemática I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "02", nombre: "Química General", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 120 },
        { codigo: "03", nombre: "Prácticas del Laboratorio Químico", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "04", nombre: "Matemática II", año: 1, cuatrimestre: 2, correlativas: ["01"], cargaHoraria: 150 },
        { codigo: "05", nombre: "Química Inorgánica", año: 1, cuatrimestre: 2, correlativas: ["02", "03"], cargaHoraria: 120 },
        { codigo: "06", nombre: "Física I", año: 1, cuatrimestre: 2, correlativas: ["01"], cargaHoraria: 120 },

        // Segundo Año
        { codigo: "07", nombre: "Física II", año: 2, cuatrimestre: 1, correlativas: ["04", "06"], cargaHoraria: 120 },
        { codigo: "08", nombre: "Química Orgánica I", año: 2, cuatrimestre: 1, correlativas: ["05"], cargaHoraria: 150 },
        { codigo: "09", nombre: "Estadística", año: 2, cuatrimestre: 1, correlativas: ["01"], cargaHoraria: 120 },
        { codigo: "10", nombre: "Química Orgánica II", año: 2, cuatrimestre: 2, correlativas: ["08"], cargaHoraria: 150 },
        { codigo: "11", nombre: "Química Ambiental", año: 2, cuatrimestre: 2, correlativas: ["08"], cargaHoraria: 90 },
        { codigo: "12", nombre: "Seminario de Manejo de Bibliografía", año: 2, cuatrimestre: 2, correlativas: ["02"], cargaHoraria: 30 },

        // Tercer Año
        { codigo: "13", nombre: "Química Biológica General", año: 3, cuatrimestre: 1, correlativas: ["10"], cargaHoraria: 150 },
        { codigo: "14", nombre: "Fisicoquímica", año: 3, cuatrimestre: 1, correlativas: ["05", "07"], cargaHoraria: 135 },
        { codigo: "15", nombre: "Química Analítica I", año: 3, cuatrimestre: 1, correlativas: ["09", "10"], cargaHoraria: 135 },
        { codigo: "16", nombre: "Química Analítica II", año: 3, cuatrimestre: 2, correlativas: ["15"], cargaHoraria: 120 },
        { codigo: "17", nombre: "Inglés", año: 3, cuatrimestre: 2, correlativas: [], cargaHoraria: 90 }
    ]
};

export default tecnicoUnivQuimica;
