# configuracion-typescript

Proyecto base para aprender los fundamentos de TypeScript siguiendo las mejores prácticas actuales.

---

## 📁 Estructura del proyecto

```
configuracion-typescript/
├── src/
│   ├── index.ts                    # Punto de entrada principal
│   └── ejemplos/
│       ├── 01-tipos-basicos.ts     # Tipos primitivos, arrays, enums, union types
│       ├── 02-funciones.ts         # Funciones, parámetros, sobrecarga
│       └── 03-interfaces.ts        # Interfaces, clases, herencia, genéricos
├── dist/                           # Código compilado (generado por tsc)
├── .eslintrc.json                  # Configuración de ESLint para TypeScript
├── .gitignore
├── package.json
├── tsconfig.json                   # Configuración del compilador TypeScript
└── README.md
```

---

## ⚙️ Pasos de configuración

### 1. Inicializar el proyecto Node.js

```bash
npm init -y
```

Esto genera el archivo `package.json` base del proyecto.

---

### 2. Instalar TypeScript y herramientas de desarrollo

```bash
npm install --save-dev typescript ts-node ts-node-dev @types/node
```

| Paquete | Propósito |
|---|---|
| `typescript` | El compilador de TypeScript (`tsc`) |
| `ts-node` | Ejecutar archivos `.ts` directamente sin compilar primero |
| `ts-node-dev` | Como `ts-node` pero con recarga automática al guardar |
| `@types/node` | Tipos para las APIs nativas de Node.js |

---

### 3. Instalar ESLint con soporte para TypeScript

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

ESLint analiza el código en busca de errores y malos patrones. Los paquetes `@typescript-eslint/*` añaden reglas específicas para TypeScript.

---

### 4. Generar el archivo de configuración de TypeScript

```bash
npx tsc --init
```

Luego se editó el `tsconfig.json` generado para activar las opciones más útiles al aprender:

```jsonc
{
  "compilerOptions": {
    "target": "ES2020",          // Versión de JavaScript de salida
    "module": "commonjs",        // Sistema de módulos (Node.js)
    "rootDir": "./src",          // Dónde está el código fuente
    "outDir": "./dist",          // Dónde se guarda el código compilado
    "strict": true,              // Activa TODAS las verificaciones estrictas
    "noUnusedLocals": true,      // Error si hay variables sin usar
    "noUnusedParameters": true,  // Error si hay parámetros sin usar
    "noImplicitReturns": true,   // Error si una función no siempre retorna
    "sourceMap": true,           // Genera mapas para depurar en el código TS
    "declaration": true,         // Genera archivos .d.ts
    "esModuleInterop": true,     // Compatibilidad con módulos ES
    "skipLibCheck": true         // Ignora errores en .d.ts de dependencias
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

> **¿Por qué `"strict": true`?**
> Esta opción activa un conjunto de verificaciones (`noImplicitAny`, `strictNullChecks`, etc.) que son fundamentales para aprender a escribir TypeScript de forma segura. Se recomienda activarla desde el principio.

---

### 5. Configurar ESLint (`.eslintrc.json`)

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

---

### 6. Configurar los scripts en `package.json`

```json
"scripts": {
  "build": "tsc",
  "build:watch": "tsc --watch",
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts",
  "dev:watch": "ts-node-dev --respawn --transpile-only src/index.ts",
  "lint": "eslint 'src/**/*.ts'",
  "clean": "rm -rf dist"
}
```

| Script | Descripción |
|---|---|
| `npm run build` | Compila todo el proyecto a `/dist` |
| `npm run build:watch` | Compila automáticamente al guardar cambios |
| `npm start` | Ejecuta el código ya compilado |
| `npm run dev` | Ejecuta directamente el `.ts` sin compilar |
| `npm run dev:watch` | Desarrollo con recarga automática |
| `npm run lint` | Analiza el código con ESLint |
| `npm run clean` | Elimina la carpeta `dist` |

---

### 7. Crear la estructura de carpetas y archivos fuente

```bash
mkdir -p src/ejemplos
touch src/index.ts
touch src/ejemplos/01-tipos-basicos.ts
touch src/ejemplos/02-funciones.ts
touch src/ejemplos/03-interfaces.ts
```

Cada archivo de ejemplo cubre un tema fundamental de TypeScript con comentarios explicativos.

---

### 8. Crear el `.gitignore`

Se excluyeron del control de versiones `node_modules/`, `dist/`, archivos `.env` y archivos de editores de código.

---

## 🚀 Cómo usar el proyecto

### Instalar dependencias

```bash
npm install
```

### Modo desarrollo (con recarga automática)

```bash
npm run dev:watch
```

### Compilar el proyecto

```bash
npm run build
```

### Ejecutar el código compilado

```bash
npm start
```

### Verificar el código con ESLint

```bash
npm run lint
```

---

## 📚 Temas cubiertos en los ejemplos

### `01-tipos-basicos.ts`
- Tipos primitivos: `string`, `number`, `boolean`
- `Array<T>` y `T[]`
- Tuplas
- Enums
- `unknown` vs `any`
- Union types (`|`)
- Type aliases
- Literal types

### `02-funciones.ts`
- Tipado de parámetros y valor de retorno
- Parámetros opcionales (`?`)
- Parámetros por defecto
- Parámetros rest (`...`)
- Funciones flecha tipadas
- Sobrecarga de funciones
- Tipos de función

### `03-interfaces.ts`
- Definición de interfaces
- Propiedades opcionales y de solo lectura
- Extensión de interfaces
- Implementación en clases
- Herencia de clases
- Miembros privados y estáticos
- Introducción a genéricos (`<T>`)

---

## 🧰 Versiones utilizadas

| Herramienta | Versión recomendada |
|---|---|
| Node.js | ≥ 18.x |
| TypeScript | ^5.4.0 |
| ts-node | ^10.9.x |
| ts-node-dev | ^2.0.x |
| ESLint | ^8.x |

---

## 💡 Próximos pasos sugeridos

Una vez que domines los ejemplos incluidos, puedes continuar con:

1. **Genéricos avanzados** — restricciones con `extends`, tipos condicionales
2. **Utility Types** — `Partial<T>`, `Required<T>`, `Pick<T>`, `Omit<T>`, `Record<K,V>`
3. **Decoradores** — útiles en frameworks como NestJS o Angular
4. **Módulos** — `import`/`export` y resolución de módulos
5. **Tipos avanzados** — mapped types, template literal types
