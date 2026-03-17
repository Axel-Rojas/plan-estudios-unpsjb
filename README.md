# Plan de Estudios UNPSJB

El proyecto es una aplicación web que permite visualizar el plan de estudios, estado de materias y organización académica, pensada inicialmente para la Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB) y con la idea de poder ser adaptada a cualquier institución educativa.

## Instalación

Seguí estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
```bash
git clone https://github.com/AxelRojas-hub/plan-estudios-unpsjb.git
cd plan-estudios-unpsjb
```

2. Instalá las dependencias usando pnpm:
```bash
pnpm install
```

3. Iniciá el servidor de desarrollo:
```bash
pnpm run dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Cómo instalarlo y personalizarlo para tu Institución

Este proyecto fue pensado para que cualquier institución educativa lo pueda adaptar fácilmente aportando sus propios planes de estudio.

1. **Creá un fork** o copia el proyecto.
2. **Definí tus carreras**: Dirigite a la carpeta `app/data/`. Podrás crear un directorio nuevo o reemplazar los de las facultades actuales. Cada carrera se define creando arreglos de objetos TypeScript.
3. **Actualizá el índice principal**: Editá el archivo `app/data/index.ts` e importá las facultades y carreras que hayas creado definiéndolas en el objeto principal `carreras`.
4. **Personalizá nombres e imágenes**: Asegurate de cambiar el logo y adaptar aspectos visuales como iconos y nombre del sitio modificando `manifest.ts` y el layout principal.

---

## Tipos de Datos

Toda la base de datos local usa un estricto tipado de Typescript. Cuando incorpores una nueva `Carrera` o incluyas una nueva `Materia`, asegurate de respetar las siguientes interfaces definidas en `app/types.ts`:

```typescript
export type EstadoMateria = "pendiente" | "regular" | "aprobada";

export interface Materia {
    codigo: string;
    nombre: string;
    año: number;
    cuatrimestre: 0 | 1 | 2; // 0 significa que es una materia Anual
    correlativas: string[];  // Array de string conteniendo los Códigos de las materias que son correlativas
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
---

## Contribuciones

Todo aporte es bienvenido, ya sean ideas de mejora o pull requests, los colaboradores son:

<a href="https://github.com/AxelRojas-hub/plan-estudios-unpsjb/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AxelRojas-hub/plan-estudios-unpsjb" alt="Contribuidores del proyecto" />
</a>