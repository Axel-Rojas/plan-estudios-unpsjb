import { Carrera } from "../../types";

const guardaparqueUniversitario: Carrera = {
    nombre: "Guardaparque Universitario",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Esquel",
    plan: "Resolución CDFCNyCS N° 477/18 - Resolución CS N° 099/19 - RESOL-2020-369-APN-ME",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Biología General", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "02", nombre: "Técnicas Cuantitativas", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 80 },
        { codigo: "03", nombre: "Taller de Herramientas de Comunicación", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 50 },
        { codigo: "04", nombre: "Geología General", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 100 },
        { codigo: "05", nombre: "Sociología", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 100 },
        { codigo: "06", nombre: "Diversidad de los Vertebrados", año: 1, cuatrimestre: 2, correlativas: ["01"], cargaHoraria: 90 },
        { codigo: "07", nombre: "Práctica Profesional I", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 100 },

        // Segundo Año
        { codigo: "08", nombre: "Botánica General", año: 2, cuatrimestre: 1, correlativas: ["01"], cargaHoraria: 120 },
        { codigo: "09", nombre: "Diversidad de Invertebrados", año: 2, cuatrimestre: 1, correlativas: ["01"], cargaHoraria: 100 },
        { codigo: "10", nombre: "Taller Manejo del Fuego", año: 2, cuatrimestre: 1, correlativas: [], cargaHoraria: 50 },
        { codigo: "11", nombre: "Diversidad de Plantas", año: 2, cuatrimestre: 2, correlativas: ["08"], cargaHoraria: 100 },
        { codigo: "12", nombre: "Ecología General", año: 2, cuatrimestre: 2, correlativas: ["02", "06", "08", "09"], cargaHoraria: 120 },
        { codigo: "13", nombre: "Educación Ambiental", año: 2, cuatrimestre: 2, correlativas: [], cargaHoraria: 50 },
        { codigo: "14", nombre: "Práctica Profesional II", año: 2, cuatrimestre: 2, correlativas: ["07"], cargaHoraria: 100 },

        // Tercer Año
        { codigo: "15", nombre: "Conservación de las Áreas Naturales Protegidas", año: 3, cuatrimestre: 1, correlativas: ["10", "12"], cargaHoraria: 90 },
        { codigo: "16", nombre: "Estudio y Manejo de Vida Silvestre", año: 3, cuatrimestre: 1, correlativas: ["12"], cargaHoraria: 50 },
        { codigo: "17", nombre: "Fundamentos de SIG y Teledetección", año: 3, cuatrimestre: 1, correlativas: ["02"], cargaHoraria: 60 },
        { codigo: "18", nombre: "Taller Legislación Ambiental", año: 3, cuatrimestre: 2, correlativas: [], cargaHoraria: 50 },
        { codigo: "19", nombre: "Biología de la Conservación", año: 3, cuatrimestre: 2, correlativas: ["12"], cargaHoraria: 50 },
        { codigo: "20", nombre: "Taller de Ética Ambiental", año: 3, cuatrimestre: 2, correlativas: [], cargaHoraria: 50 },
        { codigo: "21", nombre: "Práctica Profesional Final", año: 3, cuatrimestre: 2, correlativas: ["14"], cargaHoraria: 150 }
    ]
};

export default guardaparqueUniversitario;
