/**
 * 03 - Interfaces y Clases en TypeScript
 *
 * Las interfaces definen contratos de forma.
 * Las clases permiten programación orientada a objetos con tipos.
 */

// --- Interface básica ---
interface Animal {
  nombre: string;
  especie: string;
  edad: number;
  hacerSonido(): string;
}

// --- Interface con propiedades opcionales y de solo lectura ---
interface Configuracion {
  readonly host: string;       // no se puede modificar después de crear
  puerto: number;
  debug?: boolean;             // opcional
  timeout?: number;
}

// --- Extender interfaces ---
interface Mascota extends Animal {
  dueno: string;
}

// --- Implementar interface en clase ---
class Perro implements Mascota {
  readonly nombre: string;
  especie: string = 'Canis lupus familiaris';
  edad: number;
  dueno: string;

  constructor(nombre: string, edad: number, dueno: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.dueno = dueno;
  }

  hacerSonido(): string {
    return '¡Guau!';
  }

  // Método adicional
  describir(): string {
    return `${this.nombre} es un perro de ${this.edad} año(s), dueño: ${this.dueno}`;
  }
}

// --- Herencia de clases ---
class PerroGuia extends Perro {
  habilidad: string;

  constructor(nombre: string, edad: number, dueno: string, habilidad: string) {
    super(nombre, edad, dueno);
    this.habilidad = habilidad;
  }

  describir(): string {
    return `${super.describir()} | Habilidad: ${this.habilidad}`;
  }
}

// --- Clase con miembros privados y estáticos ---
class Contador {
  private static instancias: number = 0;
  private cuenta: number;

  constructor(inicial: number = 0) {
    this.cuenta = inicial;
    Contador.instancias++;
  }

  incrementar(paso: number = 1): void {
    this.cuenta += paso;
  }

  obtenerCuenta(): number {
    return this.cuenta;
  }

  static obtenerInstancias(): number {
    return Contador.instancias;
  }
}

// --- Genéricos básicos ---
function primerElemento<T>(arreglo: T[]): T | undefined {
  return arreglo[0];
}

export function ejercicioInterfaces(): void {
  const config: Configuracion = {
    host: 'localhost',
    puerto: 3000,
    debug: true,
  };
  console.log(`Config: ${config.host}:${config.puerto} (debug: ${config.debug ?? false})`);

  const perro = new Perro('Max', 3, 'Laura');
  console.log(perro.describir());
  console.log(`${perro.nombre} dice: ${perro.hacerSonido()}`);

  const guia = new PerroGuia('Rex', 5, 'Carlos', 'guiar a ciegos');
  console.log(guia.describir());

  const c1 = new Contador(10);
  c1.incrementar(5);
  const c2 = new Contador(0);
  console.log(`Contador 1: ${c1.obtenerCuenta()}, Contador 2: ${c2.obtenerCuenta()}`);
  console.log(`Instancias de Contador creadas: ${Contador.obtenerInstancias()}`);

  console.log(`primerElemento([10, 20, 30]) = ${primerElemento([10, 20, 30])}`);
  console.log(`primerElemento(['a', 'b']) = ${primerElemento(['a', 'b'])}`);
}
