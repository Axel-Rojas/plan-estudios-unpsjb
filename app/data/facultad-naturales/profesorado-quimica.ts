import { Carrera } from "../../types";

const profesoradoQuimica: Carrera = {
    nombre: "Profesorado en Química",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución CAFCN N° 435/04 - 462/06 - C.S. N° 043/04 - 111/06 - Ministerio Educación N° 670/05",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Pedagogía", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },
        { codigo: "02", nombre: "Psicología Evolutiva", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },
        { codigo: "03", nombre: "Química General", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "04", nombre: "Matemática I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "05", nombre: "Química Inorgánica", año: 1, cuatrimestre: 2, correlativas: ["03"], cargaHoraria: 150 },
        { codigo: "06", nombre: "Matemática II", año: 1, cuatrimestre: 2, correlativas: ["04"], cargaHoraria: 150 },

        // Segundo Año
        { codigo: "07", nombre: "Didáctica General", año: 2, cuatrimestre: 0, correlativas: ["01"], cargaHoraria: 120 },
        { codigo: "08", nombre: "Biología Celular", año: 2, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "09", nombre: "Química Orgánica I", año: 2, cuatrimestre: 1, correlativas: ["05"], cargaHoraria: 165 },
        { codigo: "10", nombre: "Seminario de Formación Docente I: Sistema Educativo e Instituciones", año: 2, cuatrimestre: 2, correlativas: [], cargaHoraria: 80 },
        { codigo: "11", nombre: "Química Orgánica II", año: 2, cuatrimestre: 2, correlativas: ["09"], cargaHoraria: 165 },
        { codigo: "12", nombre: "Física I", año: 2, cuatrimestre: 2, correlativas: ["04"], cargaHoraria: 150 },

        // Tercer Año
        { codigo: "13", nombre: "Química Analítica I", año: 3, cuatrimestre: 1, correlativas: ["05"], cargaHoraria: 165 },
        { codigo: "14", nombre: "Física II", año: 3, cuatrimestre: 1, correlativas: ["06", "12"], cargaHoraria: 150 },
        { codigo: "15", nombre: "Seminario de Formación Docente II: Tecnología Educativa", año: 3, cuatrimestre: 1, correlativas: ["07", "08", "10"], cargaHoraria: 80 },
        { codigo: "16", nombre: "Química Analítica II", año: 3, cuatrimestre: 2, correlativas: ["13", "14"], cargaHoraria: 165 },
        { codigo: "17", nombre: "Didáctica Especial de la Química", año: 3, cuatrimestre: 2, correlativas: ["11", "13"], cargaHoraria: 120 },
        { codigo: "18", nombre: "Inglés Técnico", año: 3, cuatrimestre: 2, correlativas: ["09"], cargaHoraria: 90 },

        // Cuarto Año
        { codigo: "19", nombre: "Metodología y Práctica de la Enseñanza", año: 4, cuatrimestre: 0, correlativas: ["13"], cargaHoraria: 200 },
        { codigo: "20", nombre: "Química Industrial", año: 4, cuatrimestre: 0, correlativas: ["13"], cargaHoraria: 150 },
        { codigo: "21", nombre: "Seminario Formador de Formadores: Problemática de la Educación Superior", año: 4, cuatrimestre: 0, correlativas: ["13"], cargaHoraria: 180 },
        { codigo: "22", nombre: "Fisicoquímica", año: 4, cuatrimestre: 1, correlativas: ["16"], cargaHoraria: 165 },
        { codigo: "23", nombre: "Química Biológica", año: 4, cuatrimestre: 1, correlativas: ["11", "13"], cargaHoraria: 150 }
    ]
};

export default profesoradoQuimica;
