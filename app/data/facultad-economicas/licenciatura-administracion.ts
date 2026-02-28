import { Carrera } from "../../types";

const materias: Carrera["materias"] = [
    // --- CICLO INICIAL (Año 1) ---
    // 1° Cuatrimestre
    { codigo: "111", nombre: "Introducción a la Administración", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "112", nombre: "Introducción a las Ciencias Sociales", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 48 },
    { codigo: "113", nombre: "Introducción a la Contabilidad", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 96 },
    { codigo: "114", nombre: "Área Propedéutica", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 64 },
    // 2° Cuatrimestre
    { codigo: "121", nombre: "Introducción a la Economía", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "122", nombre: "Matemática I", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 96 },
    { codigo: "123", nombre: "Tecnología de la Información", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 64 },
    { codigo: "124", nombre: "Introducción al Derecho", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 48 },

    // --- CICLO TÉCNICO ---
    // 3° Cuatrimestre de la carrera (Año 2, Cuatrimestre 1)
    { codigo: "211", nombre: "Contabilidad Básica", año: 2, cuatrimestre: 1, correlativas: ["111", "113", "122"], cargaHoraria: 48 },
    { codigo: "212", nombre: "Derecho Constitucional", año: 2, cuatrimestre: 1, correlativas: ["112", "123", "124"], cargaHoraria: 32 },
    { codigo: "213", nombre: "Lógica", año: 2, cuatrimestre: 1, correlativas: ["112", "113", "122"], cargaHoraria: 32 },
    { codigo: "214", nombre: "Los Procesos de la Administración", año: 2, cuatrimestre: 1, correlativas: ["111", "121", "123"], cargaHoraria: 64 },
    { codigo: "215", nombre: "Ofimática", año: 2, cuatrimestre: 1, correlativas: ["111", "112", "113"], cargaHoraria: 64 },
    { codigo: "216", nombre: "Administración de la Producción y Servucción I", año: 2, cuatrimestre: 1, correlativas: ["114", "123", "124"], cargaHoraria: 64 },
    // 4° Cuatrimestre de la carrera (Año 2, Cuatrimestre 2)
    { codigo: "221", nombre: "Contabilidad Pública Nivel Técnico", año: 2, cuatrimestre: 2, correlativas: ["114", "123", "211", "214", "216"], cargaHoraria: 48 },
    { codigo: "222", nombre: "Microeconomía", año: 2, cuatrimestre: 2, correlativas: ["112", "121", "211", "213", "214"], cargaHoraria: 48 },
    { codigo: "223", nombre: "Derecho Privado I", año: 2, cuatrimestre: 2, correlativas: ["111", "124", "212", "214", "215"], cargaHoraria: 32 },
    { codigo: "224", nombre: "Administración de lo Público I", año: 2, cuatrimestre: 2, correlativas: ["114", "124", "211", "214", "216"], cargaHoraria: 32 },
    { codigo: "225", nombre: "Estadística I", año: 2, cuatrimestre: 2, correlativas: ["122", "123", "214", "215", "216"], cargaHoraria: 64 },
    { codigo: "226", nombre: "Organización y Métodos", año: 2, cuatrimestre: 2, correlativas: ["112", "123", "213", "215", "216"], cargaHoraria: 48 },
    { codigo: "227", nombre: "Matemática II", año: 2, cuatrimestre: 2, correlativas: ["121", "122", "213", "214", "216"], cargaHoraria: 48 },
    // 5° Cuatrimestre de la carrera (Año 3, Cuatrimestre 1)
    { codigo: "231", nombre: "Contabilidad de Costos", año: 3, cuatrimestre: 1, correlativas: ["211", "212", "221", "222", "225"], cargaHoraria: 48 },
    { codigo: "232", nombre: "Gestión Administrativa del Esfuerzo Humano", año: 3, cuatrimestre: 1, correlativas: ["213", "214", "222", "224", "227"], cargaHoraria: 64 },
    { codigo: "233", nombre: "Administración de la Actividad en los Mercados I", año: 3, cuatrimestre: 1, correlativas: ["213", "216", "221", "223", "227"], cargaHoraria: 64 },
    { codigo: "234", nombre: "Administración de la Información I", año: 3, cuatrimestre: 1, correlativas: ["213", "214", "221", "224", "226"], cargaHoraria: 32 },
    { codigo: "235", nombre: "Derecho Administrativo I", año: 3, cuatrimestre: 1, correlativas: ["211", "212", "221", "222", "223"], cargaHoraria: 32 },
    { codigo: "236", nombre: "Administración Financiera I", año: 3, cuatrimestre: 1, correlativas: ["211", "216", "225", "226", "227"], cargaHoraria: 64 },
    { codigo: "237", nombre: "Seminario Práctica Técnica Supervisada", año: 3, cuatrimestre: 1, correlativas: ["217", "228"], cargaHoraria: 32 },

    // --- CICLO PROFESIONAL ---
    // 6° Cuatrimestre de la carrera (Año 3, Cuatrimestre 2)
    { codigo: "311", nombre: "Contabilidad Pública", año: 3, cuatrimestre: 2, correlativas: ["221", "226", "231", "234", "236"], cargaHoraria: 48 },
    { codigo: "312", nombre: "Macroeconomía", año: 3, cuatrimestre: 2, correlativas: ["222", "223", "233", "234", "235"], cargaHoraria: 64 },
    { codigo: "313", nombre: "Introducción a las Ciencias Políticas", año: 3, cuatrimestre: 2, correlativas: ["224", "226", "232", "233", "235"], cargaHoraria: 32 },
    { codigo: "314", nombre: "Metodología de la Investigación", año: 3, cuatrimestre: 2, correlativas: ["225", "227", "231", "233", "236"], cargaHoraria: 64 },
    { codigo: "315", nombre: "Administración de la Información II", año: 3, cuatrimestre: 2, correlativas: ["223", "226", "231", "234"], cargaHoraria: 80 },
    { codigo: "316", nombre: "Sociología I", año: 3, cuatrimestre: 2, correlativas: ["223", "224", "232", "235", "236"], cargaHoraria: 32 },
    // 7° Cuatrimestre de la carrera (Año 4, Cuatrimestre 1)
    { codigo: "321", nombre: "Costos y Gestión", año: 4, cuatrimestre: 1, correlativas: ["231", "233", "311", "313"], cargaHoraria: 48 },
    { codigo: "322", nombre: "Estadística II", año: 4, cuatrimestre: 1, correlativas: ["231", "233", "311", "313", "314"], cargaHoraria: 64 },
    { codigo: "323", nombre: "Administración de lo Público II", año: 4, cuatrimestre: 1, correlativas: ["232", "235", "311", "314", "315"], cargaHoraria: 80 },
    { codigo: "324", nombre: "Derecho Privado II", año: 4, cuatrimestre: 1, correlativas: ["235", "236", "313", "314"], cargaHoraria: 48 },
    { codigo: "325", nombre: "Economía Regional y Sectorial I", año: 4, cuatrimestre: 1, correlativas: ["234", "236", "312", "314", "316"], cargaHoraria: 32 },
    { codigo: "326", nombre: "Enfoque de Sistemas", año: 4, cuatrimestre: 1, correlativas: ["231", "236", "315", "316"], cargaHoraria: 48 },
    // 8° Cuatrimestre de la carrera (Año 4, Cuatrimestre 2)
    { codigo: "331", nombre: "Epistemología de la Administración", año: 4, cuatrimestre: 2, correlativas: ["311", "312", "322", "323", "326"], cargaHoraria: 48 },
    { codigo: "332", nombre: "Derecho Administrativo II", año: 4, cuatrimestre: 2, correlativas: ["313", "315", "321", "324"], cargaHoraria: 48 },
    { codigo: "333", nombre: "Estadística III", año: 4, cuatrimestre: 2, correlativas: ["313", "316", "323", "325"], cargaHoraria: 64 },
    { codigo: "334", nombre: "Sociología II", año: 4, cuatrimestre: 2, correlativas: ["312", "316", "322", "324", "326"], cargaHoraria: 48 },
    { codigo: "335", nombre: "Psicología", año: 4, cuatrimestre: 2, correlativas: ["313", "316", "325", "326"], cargaHoraria: 48 },
    { codigo: "336", nombre: "Administración de la Producción y Servucción II", año: 4, cuatrimestre: 2, correlativas: ["315", "316", "325", "326"], cargaHoraria: 80 },
    // 9° Cuatrimestre de la carrera (Año 5, Cuatrimestre 1)
    { codigo: "341", nombre: "Información Contable", año: 5, cuatrimestre: 1, correlativas: ["321", "325", "332", "335"], cargaHoraria: 48 },
    { codigo: "342", nombre: "Derecho Laboral y de la Seguridad Social", año: 5, cuatrimestre: 1, correlativas: ["322", "324", "332", "334"], cargaHoraria: 64 },
    { codigo: "343", nombre: "Administración del Esfuerzo Humano", año: 5, cuatrimestre: 1, correlativas: ["324", "325", "331", "336"], cargaHoraria: 80 },
    { codigo: "344", nombre: "Administración de la Actividad en los Mercados II", año: 5, cuatrimestre: 1, correlativas: ["321", "326", "331", "333", "336"], cargaHoraria: 80 },
    { codigo: "345", nombre: "Filosofía", año: 5, cuatrimestre: 1, correlativas: ["322", "323", "333", "335"], cargaHoraria: 32 },
    { codigo: "346", nombre: "Investigación Operativa", año: 5, cuatrimestre: 1, correlativas: ["323", "326", "333", "334"], cargaHoraria: 32 },
    // 10° Cuatrimestre de la carrera (Año 5, Cuatrimestre 2)
    { codigo: "351", nombre: "Práctica Profesional Judicial", año: 5, cuatrimestre: 2, correlativas: ["332", "336", "342", "344"], cargaHoraria: 48 },
    { codigo: "352", nombre: "Dirección General", año: 5, cuatrimestre: 2, correlativas: ["331", "335", "341", "343", "344"], cargaHoraria: 80 },
    { codigo: "353", nombre: "Economía Regional y Sectorial II", año: 5, cuatrimestre: 2, correlativas: ["333", "334", "341", "344"], cargaHoraria: 48 },
    { codigo: "354", nombre: "Administración Financiera II", año: 5, cuatrimestre: 2, correlativas: ["334", "336", "344", "345"], cargaHoraria: 80 },
    { codigo: "355", nombre: "Regímenes Tributarios", año: 5, cuatrimestre: 2, correlativas: ["331", "332", "341", "346"], cargaHoraria: 48 },
    { codigo: "356", nombre: "Seminario Práctica Profesional Supervisada", año: 5, cuatrimestre: 2, correlativas: ["337", "347"], cargaHoraria: 48 },
];

const licenciaturaAdministracion: Carrera = {
    nombre: "Licenciatura en Administración - 2025",
    facultad: "Facultad de Ciencias Económicas",
    sede: "Sede Comodoro Rivadavia y Trelew",
    plan: "Plan 2025",
    materias,
    requisitos: [],
};

export default licenciaturaAdministracion;
