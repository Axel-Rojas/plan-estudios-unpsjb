# Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto! Este documento explica cómo personalizar la app para tu institución y cómo colaborar con el desarrollo.


## Adaptarlo a tu institución

Este proyecto fue pensado para que cualquier institución educativa pueda adoptarlo fácilmente aportando sus propios planes de estudio.

### Pasos

1. **Creá un fork** o copiá el proyecto a tu cuenta.

2. **Definí tus carreras** — dirigite a la carpeta `app/data/`. Podés crear un directorio nuevo o reemplazar los de las facultades actuales. Cada carrera se define con arreglos de objetos TypeScript que siguen las interfaces documentadas más abajo.

3. **Actualizá el índice principal** — editá `app/data/index.ts` e importá las facultades y carreras que hayas creado, definiéndolas en el objeto principal `carreras`.

4. **Personalizá nombres e imágenes** — cambiá el logo y adaptá aspectos visuales como iconos y nombre del sitio modificando `manifest.ts` y el layout principal (`app/layout.tsx`).

### Estructura de `app/data/`

```
app/data/
├── facultad-ingenieria/
│   ├── index.ts          ← exporta todas las carreras de esa facultad
│   └── informatica.ts    ← define las materias de una carrera
├── facultad-economicas/
│   └── ...
└── index.ts              ← importa y expone todas las facultades
```



## Tipos de Datos

Toda la base de datos local usa tipado estricto de TypeScript. Al incorporar una nueva `Carrera` o `Materia`, respetá las interfaces definidas en [`app/types.ts`](app/types.ts):

```typescript
export type EstadoMateria = "pendiente" | "regular" | "aprobada" | "en_curso";

export interface Materia {
    codigo: string;
    nombre: string;
    año: number;
    cuatrimestre: 0 | 1 | 2; // 0 = materia anual
    correlativas: string[];   // códigos de las materias correlativas
    condicion?: string;
    cargaHoraria?: number;
    esOptativa?: boolean;
    grupoOptativa?: string;
}

export interface RequisitoComplementario {
    codigo: string;
    nombre: string;
    condicion?: string;
}

export interface Carrera {
    nombre: string;
    facultad: string;
    sede: string;
    plan: string;
    materias: Materia[];
    requisitos?: RequisitoComplementario[];
}
```


## Cómo contribuir al proyecto

### Reportar un bug

Abrí un [issue](https://github.com/AxelRojas-hub/plan-estudios-unpsjb/issues) describiendo:
- Qué esperabas que pasara
- Qué pasó realmente
- Pasos para reproducirlo

### Proponer una mejora

Abrí un issue con el tag `enhancement` explicando la idea. Si ya tenés una implementación, podés abrir directamente un PR.

### Flujo para contribuir con código

```bash
# 1. Hacé un fork y cloná tu fork
git clone https://github.com/TU_USUARIO/plan-estudios-unpsjb.git

# 2. Creá una rama descriptiva
git checkout -b feat/nombre-de-la-feature

# 3. Instalá las dependencias
pnpm install

# 4. Hacé tus cambios y verificá que el proyecto compila
pnpm run build

# 5. Pusheá y abrí un Pull Request
git push origin feat/nombre-de-la-feature
```

## Colaboradores

<a href="https://github.com/AxelRojas-hub/plan-estudios-unpsjb/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AxelRojas-hub/plan-estudios-unpsjb" alt="Contribuidores del proyecto" />
</a>
