import { Carrera } from "../../types";

const bioquimica: Carrera = {
    nombre: "Bioquímica",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución CAFCN N° 049/07 - C.S. N° 025/07 - Resolución 2017-673 APN-ME",
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
        { codigo: "11", nombre: "Inglés", año: 2, cuatrimestre: 2, correlativas: [], cargaHoraria: 90 },
        { codigo: "12", nombre: "Epistemología y Metodología de la Investigación Científica y Tecnológica", año: 2, cuatrimestre: 2, correlativas: ["02", "03", "04"], cargaHoraria: 60 },

        // Tercer Año
        { codigo: "13", nombre: "Química Biológica I", año: 3, cuatrimestre: 1, correlativas: ["03", "10"], cargaHoraria: 150 },
        { codigo: "14", nombre: "Química Analítica I", año: 3, cuatrimestre: 1, correlativas: ["08", "09"], cargaHoraria: 135 },
        { codigo: "15", nombre: "Fisiología", año: 3, cuatrimestre: 1, correlativas: ["06", "10"], cargaHoraria: 120 },
        { codigo: "16", nombre: "Química Biológica II", año: 3, cuatrimestre: 2, correlativas: ["13"], cargaHoraria: 120 },
        { codigo: "17", nombre: "Química Analítica II", año: 3, cuatrimestre: 2, correlativas: ["14"], cargaHoraria: 120 },
        { codigo: "18", nombre: "Fisiopatología Humana", año: 3, cuatrimestre: 2, correlativas: ["11", "15"], cargaHoraria: 105 },

        // Cuarto Año
        { codigo: "19", nombre: "Microbiología General", año: 4, cuatrimestre: 1, correlativas: ["13"], cargaHoraria: 135 },
        { codigo: "20", nombre: "Inmunología", año: 4, cuatrimestre: 1, correlativas: ["16", "18"], cargaHoraria: 120 },
        { codigo: "21", nombre: "Biología Molecular y Genética", año: 4, cuatrimestre: 1, correlativas: ["16"], cargaHoraria: 120 },
        { codigo: "22", nombre: "Microbiología Clínica", año: 4, cuatrimestre: 2, correlativas: ["19", "20"], cargaHoraria: 165 },
        { codigo: "23", nombre: "Farmacología", año: 4, cuatrimestre: 2, correlativas: ["16", "18"], cargaHoraria: 105 },

        // Quinto Año
        { codigo: "24", nombre: "Bioquímica Clínica", año: 5, cuatrimestre: 1, correlativas: ["17", "22"], cargaHoraria: 135 },
        { codigo: "25", nombre: "Hematología y Hemostasia", año: 5, cuatrimestre: 1, correlativas: ["20", "21"], cargaHoraria: 105 },
        { codigo: "26", nombre: "Parasitología Clínica", año: 5, cuatrimestre: 1, correlativas: ["19", "20"], cargaHoraria: 90 },
        { codigo: "27", nombre: "Bromatología y Nutrición", año: 5, cuatrimestre: 2, correlativas: ["17", "22"], cargaHoraria: 120 },
        { codigo: "28", nombre: "Endocrinología y Líquidos de Punción", año: 5, cuatrimestre: 2, correlativas: ["23", "24"], cargaHoraria: 105 },
        { codigo: "29", nombre: "Salud Pública", año: 5, cuatrimestre: 2, correlativas: ["17", "22", "26"], cargaHoraria: 90 },
        { codigo: "30", nombre: "Toxicología", año: 5, cuatrimestre: 2, correlativas: ["23", "24"], cargaHoraria: 120 },

        // Sexto Año
        { codigo: "31", nombre: "Práctica Profesional en Análisis Clínicos", año: 6, cuatrimestre: 0, correlativas: ["25", "28", "29", "30"], cargaHoraria: 500 },
        { codigo: "32", nombre: "Optativa/Electiva", año: 6, cuatrimestre: 0, correlativas: ["12", "15", "16", "17"], cargaHoraria: 100, esOptativa: true }
    ]
};

export default bioquimica;
