import { Carrera } from "../../types";

const licenciaturaQuimica: Carrera = {
    nombre: "Licenciatura en Química",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución CDFCNyCS NRO 131/22 - Resolución C.S. N° 052/22",
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
        { codigo: "12", nombre: "Inglés", año: 2, cuatrimestre: 2, correlativas: [], cargaHoraria: 90 },

        // Tercer Año
        { codigo: "13", nombre: "Química Biológica General", año: 3, cuatrimestre: 1, correlativas: ["10"], cargaHoraria: 150 },
        { codigo: "14", nombre: "Fisicoquímica I", año: 3, cuatrimestre: 1, correlativas: ["05", "07"], cargaHoraria: 135 },
        { codigo: "15", nombre: "Química Analítica I", año: 3, cuatrimestre: 1, correlativas: ["09", "10"], cargaHoraria: 135 },
        { codigo: "16", nombre: "Fisicoquímica II", año: 3, cuatrimestre: 2, correlativas: ["09", "14"], cargaHoraria: 120 },
        { codigo: "17", nombre: "Química Analítica II", año: 3, cuatrimestre: 2, correlativas: ["15"], cargaHoraria: 120 },
        { codigo: "18", nombre: "Química de los Polímeros", año: 3, cuatrimestre: 2, correlativas: ["13"], cargaHoraria: 60 },

        // Cuarto Año
        { codigo: "19", nombre: "Química Inorgánica Avanzada", año: 4, cuatrimestre: 1, correlativas: ["16"], cargaHoraria: 75 },
        { codigo: "20", nombre: "Quimiometría", año: 4, cuatrimestre: 1, correlativas: ["17"], cargaHoraria: 75 },
        { codigo: "21", nombre: "Química Orgánica III", año: 4, cuatrimestre: 1, correlativas: ["18"], cargaHoraria: 70 },
        { codigo: "22", nombre: "Fisicoquímica III", año: 4, cuatrimestre: 2, correlativas: ["16"], cargaHoraria: 90 },
        { codigo: "23", nombre: "Química Analítica Instrumental", año: 4, cuatrimestre: 2, correlativas: ["20"], cargaHoraria: 105 },
        { codigo: "24", nombre: "Química de las Energías Renovables", año: 4, cuatrimestre: 2, correlativas: ["13", "18"], cargaHoraria: 60 },
        { codigo: "25", nombre: "Procesos Industriales", año: 4, cuatrimestre: 2, correlativas: ["19"], cargaHoraria: 75 },

        // Quinto Año
        { codigo: "26", nombre: "Química Orgánica IV", año: 5, cuatrimestre: 1, correlativas: ["21", "23"], cargaHoraria: 80 },
        { codigo: "27", nombre: "Modelado Molecular", año: 5, cuatrimestre: 1, correlativas: ["21", "22"], cargaHoraria: 90 },
        { codigo: "28", nombre: "Optativa I", año: 5, cuatrimestre: 1, correlativas: [], cargaHoraria: 100, esOptativa: true },
        { codigo: "29", nombre: "Optativa II", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 100, esOptativa: true },
        { codigo: "30", nombre: "Trabajo Final", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 200 }
    ],
    requisitos: [
        { codigo: "TF", nombre: "Trabajo Final", condicion: "Para cursar el trabajo final el alumno debe tener aprobado hasta 4to año y estar cursando una asignatura de 5to año." }
    ]
};

export default licenciaturaQuimica;
