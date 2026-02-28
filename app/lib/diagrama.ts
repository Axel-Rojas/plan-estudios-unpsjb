import { Materia } from "../types";

export function obtenerMateriasVisibles(materias: Materia[]): Materia[] {
    return materias.filter(
        (m) => !m.esOptativa || m.codigo === "OP1" || m.codigo === "OP2"
    );
}

export function obtenerMateriasOptativas(materias: Materia[]): Materia[] {
    return materias.filter(
        (m) => m.esOptativa && m.codigo !== "OP1" && m.codigo !== "OP2"
    );
}

export function agruparMateriasPorCuatrimestre(materiasVisibles: Materia[]): Record<string, Materia[]> {
    const grupos: Record<string, Materia[]> = {};
    for (const m of materiasVisibles) {
        const key = `${m.año}-${m.cuatrimestre}`;
        if (!grupos[key]) grupos[key] = [];
        grupos[key].push(m);
    }
    return grupos;
}

export function ordenarClavesGrupos(agrupadas: Record<string, Materia[]>): string[] {
    return Object.keys(agrupadas).sort((a, b) => {
        const [aY, aC] = a.split("-").map(Number);
        const [bY, bC] = b.split("-").map(Number);
        return aY !== bY ? aY - bY : aC - bC;
    });
}

export function calcularDatosFlechas(materiasVisibles: Materia[]): { from: string; to: string }[] {
    const data: { from: string; to: string }[] = [];
    for (const m of materiasVisibles) {
        for (const corr of m.correlativas) {
            if (materiasVisibles.some((vm) => vm.codigo === corr)) {
                data.push({ from: corr, to: m.codigo });
            }
        }
    }
    return data;
}

export function crearMapaMaterias(materias: Materia[]): Map<string, Materia> {
    const map = new Map<string, Materia>();
    for (const m of materias) {
        map.set(m.codigo, m);
    }
    return map;
}

export function crearMapaDependientes(materias: Materia[]): Map<string, string[]> {
    const map = new Map<string, string[]>();
    for (const m of materias) {
        for (const corr of m.correlativas) {
            if (!map.has(corr)) map.set(corr, []);
            map.get(corr)!.push(m.codigo);
        }
    }
    return map;
}

export function obtenerCadenaCompleta(
    codigo: string,
    materiasPorCodigo: Map<string, Materia>,
    mapaDependientes: Map<string, string[]>
): Set<string> {
    const result = new Set<string>();

    const backQueue = [codigo];
    const backVisited = new Set<string>();
    while (backQueue.length > 0) {
        const current = backQueue.shift()!;
        if (backVisited.has(current)) continue;
        backVisited.add(current);
        const mat = materiasPorCodigo.get(current);
        if (mat) {
            for (const corr of mat.correlativas) {
                result.add(corr);
                backQueue.push(corr);
            }
        }
    }

    const fwdQueue = [codigo];
    const fwdVisited = new Set<string>();
    while (fwdQueue.length > 0) {
        const current = fwdQueue.shift()!;
        if (fwdVisited.has(current)) continue;
        fwdVisited.add(current);
        const deps = mapaDependientes.get(current);
        if (deps) {
            for (const dep of deps) {
                result.add(dep);
                fwdQueue.push(dep);
            }
        }
    }

    return result;
}
