import { Carrera } from "../../types";

const farmacia: Carrera = {
    nombre: "Farmacéutico",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución CAFCN N° 048/07 Y 664/08 RES. C.S. N° 026/07 - Resol. Min. Educación N° 575/08",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Matemática", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "02", nombre: "Química General", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 120 },
        { codigo: "03", nombre: "Biología General y Celular", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 105 },
        { codigo: "04", nombre: "Física", año: 1, cuatrimestre: 2, correlativas: ["01"], cargaHoraria: 150 },
        { codigo: "05", nombre: "Química Inorgánica", año: 1, cuatrimestre: 2, correlativas: ["02"], cargaHoraria: 120 },
        { codigo: "06", nombre: "Morfología", año: 1, cuatrimestre: 2, correlativas: ["03"], cargaHoraria: 105 },

        // Segundo Año
        { codigo: "07", nombre: "Química Orgánica I", año: 2, cuatrimestre: 1, correlativas: ["05"], cargaHoraria: 135 },
        { codigo: "08", nombre: "Fisicoquímica", año: 2, cuatrimestre: 1, correlativas: ["02", "04"], cargaHoraria: 135 },
        { codigo: "09", nombre: "Estadística", año: 2, cuatrimestre: 1, correlativas: ["01"], cargaHoraria: 120 },
        { codigo: "10", nombre: "Química Orgánica II", año: 2, cuatrimestre: 2, correlativas: ["07"], cargaHoraria: 135 },
        { codigo: "11", nombre: "Seminario Manejo de Bibliografía", año: 2, cuatrimestre: 2, correlativas: ["02"], cargaHoraria: 30 },
        { codigo: "12", nombre: "Epistemología y Metodología de la Investigación Científica y Tecnológica", año: 2, cuatrimestre: 2, correlativas: ["02", "03", "04"], cargaHoraria: 60 },
        { codigo: "13", nombre: "Inglés", año: 2, cuatrimestre: 2, correlativas: [], cargaHoraria: 90 },

        // Tercer Año
        { codigo: "14", nombre: "Química Biológica", año: 3, cuatrimestre: 1, correlativas: ["03", "10", "13"], cargaHoraria: 150 },
        { codigo: "15", nombre: "Química Analítica I", año: 3, cuatrimestre: 1, correlativas: ["08", "09"], cargaHoraria: 135 },
        { codigo: "16", nombre: "Fisiología", año: 3, cuatrimestre: 1, correlativas: ["06", "10", "11"], cargaHoraria: 120 },
        { codigo: "17", nombre: "Química Analítica II", año: 3, cuatrimestre: 2, correlativas: ["15"], cargaHoraria: 120 },
        { codigo: "18", nombre: "Fisiopatología Humana", año: 3, cuatrimestre: 2, correlativas: ["13", "16"], cargaHoraria: 105 },
        { codigo: "19", nombre: "Farmacobotánica", año: 3, cuatrimestre: 2, correlativas: ["12", "14"], cargaHoraria: 120 },
        { codigo: "20", nombre: "Farmacología I", año: 3, cuatrimestre: 2, correlativas: ["12", "14", "16"], cargaHoraria: 105 },

        // Cuarto Año
        { codigo: "21", nombre: "Farmacognosia", año: 4, cuatrimestre: 1, correlativas: ["16", "17", "19"], cargaHoraria: 120 },
        { codigo: "22", nombre: "Tecnología Farmacéutica I", año: 4, cuatrimestre: 1, correlativas: ["08", "20"], cargaHoraria: 120 },
        { codigo: "23", nombre: "Microbiología General", año: 4, cuatrimestre: 1, correlativas: ["14"], cargaHoraria: 135 },
        { codigo: "24", nombre: "Tecnología Farmacéutica II", año: 4, cuatrimestre: 2, correlativas: ["22", "23"], cargaHoraria: 120 },
        { codigo: "25", nombre: "Farmacología II", año: 4, cuatrimestre: 2, correlativas: ["18", "20", "21"], cargaHoraria: 120 },
        { codigo: "26", nombre: "Farmacia Legal y Sanitaria", año: 4, cuatrimestre: 2, correlativas: ["21", "22"], cargaHoraria: 90 },
        { codigo: "27", nombre: "Análisis de Medicamentos", año: 4, cuatrimestre: 2, correlativas: ["17", "22"], cargaHoraria: 120 },

        // Quinto Año
        { codigo: "28", nombre: "Farmacia Clínica y Asistencial", año: 5, cuatrimestre: 1, correlativas: ["25", "26"], cargaHoraria: 90 },
        { codigo: "29", nombre: "Química Medicinal", año: 5, cuatrimestre: 1, correlativas: ["25"], cargaHoraria: 120 },
        { codigo: "30", nombre: "Inmunología y Microbiología Aplicada", año: 5, cuatrimestre: 1, correlativas: ["23", "24", "27"], cargaHoraria: 120 },
        { codigo: "31", nombre: "Toxicología de Fármacos", año: 5, cuatrimestre: 1, correlativas: ["25"], cargaHoraria: 60 },
        { codigo: "32", nombre: "Bromatología y Nutrición", año: 5, cuatrimestre: 2, correlativas: ["21", "23"], cargaHoraria: 120 },
        { codigo: "33", nombre: "Práctica Profesional Farmacéutica", año: 5, cuatrimestre: 2, correlativas: ["28", "29", "30", "31"], cargaHoraria: 300 },

        // Optativas
        { codigo: "OPT", nombre: "Asignatura/s Optativa/s", año: 5, cuatrimestre: 0, correlativas: [], cargaHoraria: 100, esOptativa: true }
    ]
};

export default farmacia;
