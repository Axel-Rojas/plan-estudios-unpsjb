import { Carrera } from "../types";
import carrerasIngenieria from "./facultad-ingenieria";
import carrerasJuridicas from "./facultad-juridicas";
import carrerasEconomicas from "./facultad-economicas";
import carrerasHumanidades from "./facultad-humanidades";
import carrerasNaturales from "./facultad-naturales";

const carreras: Record<string, Carrera[]> = {
    ingenieria: carrerasIngenieria,
    juridicas: carrerasJuridicas,
    economicas: carrerasEconomicas,
    humanidades: carrerasHumanidades,
    naturales: carrerasNaturales,
};

export default carreras;
