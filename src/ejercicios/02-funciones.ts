/**
 * 02 - Funciones en TypeScript
 *
 * TypeScript permite tipar parámetros, valores de retorno,
 * y admite parámetros opcionales, por defecto y rest.
 */

// --- Función con tipos explícitos ---
function sumar(a: number, b: number): number {
  return a + b;
}

// --- Parámetro opcional (?) ---
function saludar(nombre: string, saludo?: string): string {
  return `${saludo ?? 'Hola'}, ${nombre}!`;
}

// --- Parámetro por defecto ---
function potencia(base: number, exponente: number = 2): number {
  return Math.pow(base, exponente);
}

// --- Parámetros rest ---
function concatenar(separador: string, ...palabras: string[]): string {
  return palabras.join(separador);
}

// --- Función flecha con tipo ---
const multiplicar = (a: number, b: number): number => a * b;

// --- Sobrecarga de funciones ---
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: number | string): string {
  if (typeof valor === 'number') {
    return valor.toFixed(2);
  }
  return valor.trim().toUpperCase();
}

// --- Tipo de función ---
type Operacion = (a: number, b: number) => number;

const dividir: Operacion = (a, b) => {
  if (b === 0) throw new Error('División por cero');
  return a / b;
};

export function ejercicioFunciones(): void {
  console.log(`sumar(3, 4) = ${sumar(3, 4)}`);
  console.log(`saludar('Carlos') = ${saludar('Carlos')}`);
  console.log(`saludar('Carlos', 'Buenas') = ${saludar('Carlos', 'Buenas')}`);
  console.log(`potencia(3) = ${potencia(3)}`);
  console.log(`potencia(2, 10) = ${potencia(2, 10)}`);
  console.log(`concatenar('-', 'a', 'b', 'c') = ${concatenar('-', 'a', 'b', 'c')}`);
  console.log(`multiplicar(6, 7) = ${multiplicar(6, 7)}`);
  console.log(`formatear(3.14159) = ${formatear(3.14159)}`);
  console.log(`formatear('  typescript  ') = ${formatear('  typescript  ')}`);
  console.log(`dividir(10, 3) = ${dividir(10, 3).toFixed(4)}`);
}
