import { Carrera } from "../../types";
import contadorPublico from "./contador-publico";
import licenciaturaAdministracion from "./licenciatura-administracion";
import licenciaturaAdministracion1990 from "./licenciatura-administracion-1990";
import tecnicaturaAdministracion from "./tecnicatura-administracion";
import licenciaturaEconomia from "./licenciatura-economia";
import tecnicaturaFinanzasEmpresariales from "./tecnicatura-finanzas";
import licenciaturaAdministracionTurismo from "./licenciatura-empresas-turisticas";
import tecnicaturaAdministracionContable from "./tecnicatura-administracion-contable";
import tecnicoContable from "./tecnico-contable";
import tecnicaturaAdministracionPublica from "./tecnico-administracion-publica";
import tecnicaturaAdministracionBancaria from "./tecnico-administracion-bancaria";
import tecnicaturaFinanzasDigitales from "./tecnicatura-finanzas-digitales";

const carreras: Carrera[] = [
    contadorPublico,
    licenciaturaAdministracion,
    licenciaturaAdministracion1990,
    tecnicaturaAdministracion,
    licenciaturaEconomia,
    tecnicaturaFinanzasEmpresariales,
    licenciaturaAdministracionTurismo,
    tecnicaturaAdministracionContable,
    tecnicoContable,
    tecnicaturaAdministracionPublica,
    tecnicaturaAdministracionBancaria,
    tecnicaturaFinanzasDigitales,
];

export default carreras;
