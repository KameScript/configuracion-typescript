/**
 * 01 - Tipos Básicos en TypeScript
 *
 * TypeScript añade tipos estáticos a JavaScript.
 * Esto ayuda a detectar errores en tiempo de desarrollo.
 */

export function ejercicioTiposBasicos(): void {
  // --- Tipos primitivos ---
  const nombre: string = 'Ana';
  const edad: number = 28;
  const activo: boolean = true;

  // --- Arrays ---
  const frutas: string[] = ['manzana', 'pera', 'naranja'];
  const numeros: Array<number> = [1, 2, 3, 4, 5];

  // --- Tuplas (arreglo con tipos fijos y longitud fija) ---
  const coordenada: [number, number] = [40.4168, -3.7038];

  // --- Enum ---
  enum Direccion {
    Norte = 'NORTE',
    Sur = 'SUR',
    Este = 'ESTE',
    Oeste = 'OESTE',
  }

  const rumbo: Direccion = Direccion.Norte;

  // --- Any, Unknown, Never ---
  // ⚠️  Evita "any" en lo posible; usa "unknown" cuando no conoces el tipo
  const valorDesconocido: unknown = JSON.parse('{"clave": 42}');

  // --- Union types ---
  let id: number | string = 101;
  id = 'ABC-101'; // también válido

  // --- Type alias ---
  type Punto = { x: number; y: number };
  const punto: Punto = { x: 10, y: 20 };

  // --- Literal types ---
  type Semaforo = 'rojo' | 'amarillo' | 'verde';
  const luz: Semaforo = 'verde';

  console.log(`Nombre: ${nombre}, Edad: ${edad}, Activo: ${activo}`);
  console.log(`Frutas: ${frutas.join(', ')}`);
  console.log(`Números: ${numeros.join(', ')}`);
  console.log(`Coordenada: [${coordenada[0]}, ${coordenada[1]}]`);
  console.log(`Rumbo: ${rumbo}`);
  console.log(`Valor desconocido: ${JSON.stringify(valorDesconocido)}`);
  console.log(`ID: ${id}`);
  console.log(`Punto: (${punto.x}, ${punto.y})`);
  console.log(`Semáforo en: ${luz}`);
}
