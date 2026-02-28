import { Carrera } from "../../types";

const ingenieriaForestal: Carrera = {
    nombre: "Ingeniería Forestal",
    facultad: "Facultad de Ingeniería",
    sede: "Sede Esquel",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre
        { codigo: "MA046", nombre: "Análisis Matemático", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 150 },
        { codigo: "QU001", nombre: "Química", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 135 },
        // 1° Año - 2° Cuatrimestre
        { codigo: "FI008", nombre: "Física I", año: 1, cuatrimestre: 2, correlativas: ["MA046"], cargaHoraria: 105 },
        { codigo: "MA045", nombre: "Álgebra", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 135 },
        // 1° Año - Anual
        { codigo: "FO030", nombre: "Introducción a las ciencias forestales y Dendrometría", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },
        { codigo: "FO031", nombre: "Botánica General", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 120 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "FO032", nombre: "Química Orgánica y Biológica", año: 2, cuatrimestre: 1, correlativas: ["QU001"], cargaHoraria: 135 },
        { codigo: "FI002", nombre: "Física II", año: 2, cuatrimestre: 1, correlativas: ["FI008"], cargaHoraria: 75 },
        { codigo: "FO033", nombre: "Botánica Forestal", año: 2, cuatrimestre: 1, correlativas: [], condicion: "3 asignaturas aprobadas", cargaHoraria: 90 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA046", "MA045"], cargaHoraria: 90 },
        { codigo: "FO034", nombre: "Meteorología y Fenología", año: 2, cuatrimestre: 2, correlativas: ["MA046", "MA045"], cargaHoraria: 90 },
        { codigo: "FO035", nombre: "Zoología Forestal", año: 2, cuatrimestre: 2, correlativas: ["FO031"], cargaHoraria: 105 },
        // 2° Año - Anual
        { codigo: "FO015", nombre: "Geociencias", año: 2, cuatrimestre: 0, correlativas: [], condicion: "3 asignaturas aprobadas", cargaHoraria: 120 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "FO037", nombre: "Fisiología Vegetal", año: 3, cuatrimestre: 1, correlativas: ["FO032", "FO031"], cargaHoraria: 90 },
        { codigo: "FO038", nombre: "Suelos Forestales", año: 3, cuatrimestre: 1, correlativas: ["FO032", "FO015"], cargaHoraria: 90 },
        { codigo: "FO039", nombre: "Topografía y Teledetección", año: 3, cuatrimestre: 1, correlativas: ["MA045", "FI008"], cargaHoraria: 105 },
        { codigo: "FO040", nombre: "Economía General", año: 3, cuatrimestre: 1, correlativas: ["MA006"], cargaHoraria: 75 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "FO041", nombre: "Dendrología", año: 3, cuatrimestre: 2, correlativas: ["FO033"], cargaHoraria: 90 },
        { codigo: "FO042", nombre: "Genética y Mejoramiento Forestal", año: 3, cuatrimestre: 2, correlativas: ["FO037", "MA006"], cargaHoraria: 90 },
        { codigo: "FO043", nombre: "Ecología y Fitogeografía", año: 3, cuatrimestre: 2, correlativas: ["MA006", "FO033"], cargaHoraria: 90 },
        { codigo: "FO044", nombre: "Optativa I", año: 3, cuatrimestre: 2, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },

        // Optativa I - opciones
        { codigo: "FO061", nombre: "Sistemas de Información Geográfico y Tecnología Geomática", año: 3, cuatrimestre: 2, correlativas: ["FI008", "FO039"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "FO062", nombre: "Administración de organizaciones forestales", año: 3, cuatrimestre: 2, correlativas: ["FO040"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "FO063", nombre: "Servicios Ecosistémicos y Bienes No madereros del Bosque", año: 3, cuatrimestre: 2, correlativas: ["FO032", "FO040"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },

        // 4° Año - 1° Cuatrimestre
        { codigo: "FO045", nombre: "Hidrología y Corrección de Torrentes", año: 4, cuatrimestre: 1, correlativas: ["FO038", "FO039"], cargaHoraria: 105 },
        { codigo: "FO046", nombre: "Silvicultura 1: Establecimiento de bosques", año: 4, cuatrimestre: 1, correlativas: ["FO041", "FO043"], cargaHoraria: 90 },
        { codigo: "FO047", nombre: "Evaluación e Inventario de Recursos Forestales", año: 4, cuatrimestre: 1, correlativas: ["FO030", "MA006"], cargaHoraria: 75 },
        { codigo: "FO048", nombre: "Biodiversidad y Conservación", año: 4, cuatrimestre: 1, correlativas: ["FO038", "FO043"], cargaHoraria: 75 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "FO049", nombre: "Patología Forestal", año: 4, cuatrimestre: 2, correlativas: ["FO033", "FO035"], cargaHoraria: 90 },
        { codigo: "FO050", nombre: "Silvicultura 2: Sistemas Silvícolas", año: 4, cuatrimestre: 2, correlativas: ["FO046", "FO047"], cargaHoraria: 90 },
        { codigo: "FO051", nombre: "Aprovechamiento Forestal, Mecanización y caminos", año: 4, cuatrimestre: 2, correlativas: ["FO039", "FO046"], cargaHoraria: 90 },
        { codigo: "FO052", nombre: "Optativa 2", año: 4, cuatrimestre: 2, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa2" },

        // Optativa II - opciones
        { codigo: "FO064", nombre: "Bosques Patagónicos", año: 4, cuatrimestre: 2, correlativas: ["FO046"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "FO065", nombre: "Diseño y Evaluación de Proyectos Forestales con enfoque emprendedor", año: 4, cuatrimestre: 2, correlativas: ["FO040"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "FO066", nombre: "Manejo Agroforestal", año: 4, cuatrimestre: 2, correlativas: ["FO035", "FO046"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "FO067", nombre: "Evaluación de Impacto Ambiental", año: 4, cuatrimestre: 2, correlativas: ["FO043"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa2" },

        // 5° Año - 1° Cuatrimestre
        { codigo: "FO053", nombre: "Protección Forestal", año: 5, cuatrimestre: 1, correlativas: ["FO034", "FO049"], cargaHoraria: 90 },
        { codigo: "FO054", nombre: "Productos y Procesos Mecánicos de la madera", año: 5, cuatrimestre: 1, correlativas: ["FO041", "FI008"], cargaHoraria: 105 },
        { codigo: "FO055", nombre: "Procesamiento químico y térmico de la madera", año: 5, cuatrimestre: 1, correlativas: ["FO032", "FO041"], cargaHoraria: 90 },
        { codigo: "FO056", nombre: "Economía Forestal", año: 5, cuatrimestre: 1, correlativas: ["FO040"], cargaHoraria: 75 },
        // 5° Año - 2° Cuatrimestre
        { codigo: "FO057", nombre: "Ordenación Forestal", año: 5, cuatrimestre: 2, correlativas: ["FO047", "FO050"], cargaHoraria: 90 },
        { codigo: "FO058", nombre: "Sociología y Extensión Forestal", año: 5, cuatrimestre: 2, correlativas: [], condicion: "15 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "FO059", nombre: "Política y Legislación Forestal", año: 5, cuatrimestre: 2, correlativas: ["FO040"], cargaHoraria: 75 },
        { codigo: "FO060", nombre: "Optativa 3", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa3" },

        // Optativa III - opciones
        { codigo: "FO068", nombre: "Silvicultura Urbana y de Interfaces", año: 5, cuatrimestre: 2, correlativas: ["FO046"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa3" },
        { codigo: "FO069", nombre: "Bioenergía y Desarrollo de Industrias Forestales en la Región Andino Patagónica", año: 5, cuatrimestre: 2, correlativas: ["FO054"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa3" },
        { codigo: "FO070", nombre: "Manejo de Cuencas", año: 5, cuatrimestre: 2, correlativas: ["FO045"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa3" },
    ],
    requisitos: [
        { codigo: "FO071", nombre: "Tesina" },
        { codigo: "FA105", nombre: "Prácticas Profesionales Supervisadas (PPS)" },
        { codigo: "FA007", nombre: "Acreditación de Idioma" },
    ],
} satisfies Carrera;

export default ingenieriaForestal;
