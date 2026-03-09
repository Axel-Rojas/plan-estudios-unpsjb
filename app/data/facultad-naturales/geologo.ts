import { Carrera } from "../../types";

const geologo: Carrera = {
    nombre: "Geología",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución CDFCNyCS N° 130/22 - Resolución C.S. N° 053/22",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Geología General", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 150 },
        { codigo: "02", nombre: "Matemática", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "03", nombre: "Química General", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 120 },
        { codigo: "04", nombre: "Física", año: 1, cuatrimestre: 2, correlativas: ["02"], cargaHoraria: 150 },
        { codigo: "05", nombre: "Química Inorgánica", año: 1, cuatrimestre: 2, correlativas: ["03"], cargaHoraria: 120 },

        // Segundo Año
        { codigo: "06", nombre: "Paleontología", año: 2, cuatrimestre: 0, correlativas: ["01", "03"], cargaHoraria: 150 },
        { codigo: "07", nombre: "Geoquímica General", año: 2, cuatrimestre: 0, correlativas: ["01", "04", "05"], cargaHoraria: 120 },
        { codigo: "08", nombre: "Estadística", año: 2, cuatrimestre: 1, correlativas: ["02"], cargaHoraria: 120 },
        { codigo: "09", nombre: "Mineralogía General", año: 2, cuatrimestre: 1, correlativas: ["01", "05"], cargaHoraria: 120 },
        { codigo: "10", nombre: "Mineralogía Óptica", año: 2, cuatrimestre: 2, correlativas: ["04", "09"], cargaHoraria: 120 },

        // Tercer Año
        { codigo: "11", nombre: "Sedimentología", año: 3, cuatrimestre: 0, correlativas: ["06", "08", "10"], cargaHoraria: 150 },
        { codigo: "12", nombre: "Petrología", año: 3, cuatrimestre: 1, correlativas: ["07", "10"], cargaHoraria: 150 },
        { codigo: "13", nombre: "Geología Estructural", año: 3, cuatrimestre: 2, correlativas: ["10"], cargaHoraria: 150 },
        { codigo: "14", nombre: "Geomorfología", año: 3, cuatrimestre: 0, correlativas: ["08", "09"], cargaHoraria: 150 },

        // Cuarto Año
        { codigo: "15", nombre: "Suelos", año: 4, cuatrimestre: 0, correlativas: ["11", "12"], cargaHoraria: 120 },
        { codigo: "16", nombre: "Topografía y Carteo Geológico", año: 4, cuatrimestre: 0, correlativas: ["11", "12", "13", "14"], cargaHoraria: 90 },
        { codigo: "17", nombre: "Fotogeología y Teledetección", año: 4, cuatrimestre: 0, correlativas: ["11", "12", "13", "14"], cargaHoraria: 120 },
        { codigo: "18", nombre: "Hidrogeología", año: 4, cuatrimestre: 0, correlativas: ["11", "13", "14"], cargaHoraria: 120 },
        { codigo: "19", nombre: "Geología Histórica y Estratigrafía", año: 4, cuatrimestre: 0, correlativas: ["11", "12", "13", "14"], cargaHoraria: 150 },
        { codigo: "20", nombre: "Geología de Yacimientos Minerales", año: 4, cuatrimestre: 0, correlativas: ["11", "12", "13", "14"], cargaHoraria: 120 },

        // Quinto Año
        { codigo: "21", nombre: "Geoquímica Aplicada", año: 5, cuatrimestre: 1, correlativas: ["15", "18"], cargaHoraria: 90 },
        { codigo: "22", nombre: "Geología Económica", año: 5, cuatrimestre: 0, correlativas: ["16", "19", "20"], cargaHoraria: 120 },
        { codigo: "23", nombre: "Geología Aplicada a la Ingeniería y al Medio Ambiente", año: 5, cuatrimestre: 0, correlativas: ["16", "17", "18"], cargaHoraria: 120 },
        { codigo: "24", nombre: "Geofísica General y Sísmica", año: 5, cuatrimestre: 0, correlativas: ["16", "19"], cargaHoraria: 120 },
        { codigo: "25", nombre: "Geología de Yacimientos Combustibles", año: 5, cuatrimestre: 0, correlativas: ["16", "18", "19", "20"], cargaHoraria: 120 },
        { codigo: "26", nombre: "Geología Argentina", año: 5, cuatrimestre: 0, correlativas: ["16", "17", "19", "20"], cargaHoraria: 120 }
    ],
    requisitos: [
        { codigo: "SC", nombre: "Seminario de Campo", condicion: "Tener aprobadas todas las materias de 2° año; y el concepto de Sedimentología, Petrología, Geomorfología y Geología Estructural. Asimismo cursando o tener concepto de Topografía y Carteo Geológico, y Fotogeología y Teledetección." },
        { codigo: "TF", nombre: "Trabajo Final", condicion: "Poseer todas las materias de 3° año aprobadas y conceptos de todas las de 4° año. Para defensa, todas las materias aprobadas." },
        { codigo: "ING", nombre: "Prueba de Acreditación de Conocimientos Básicos de Inglés", condicion: "Aprobada antes del cursado de 4° año." }
    ]
};

export default geologo;
