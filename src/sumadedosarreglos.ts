document.getElementById("app").innerHTML = `
<h1>Suma de Dos Arreglos</h1>
`;

let ArregloA: number[] = new Array(6);
//empezar con minusculas las variables
let ArregloB: number[] = new Array(6);
let SumaArregloAyB: number[] = new Array(6);
//esta funcion deberia llamarse cargarArreglo
function LeerArreglo(
  Arreglo: number[],
  Tamanio: number,
  NombreArreglo: string
): number[] {
  for (let i: number = 0; i < Tamanio; i++) {
    let NumeroLeido: number;
    //no definir variables dentro de un ciclo
    NumeroLeido = Number(
      prompt(`Ingrese el número para la posición ${i} del ${NombreArreglo}: `)
    );
    Arreglo[i] = NumeroLeido;
  }
  return Arreglo;
    //los arreeglos son globales, no hace falta retornarlos
}

function SumarArreglo(
  arregloA: number[],
  arregloB: number[],
  tamanio: number
): number[] {
  let SumaArreglos: number[] = new Array(tamanio);
    //porque no usar el arreglo de suma ya definido al principio del script?
  for (let i: number = 0; i < 6; i++) {
    SumaArreglos[i] = arregloA[i] + arregloB[i];
  }
  return SumaArreglos;
}
//a veces no es bueno mostrar tanta informacion, console.log arreglo es suficiente y claro
function MostrarArreglo(
  arreglo: number[],
  tamanio: number,
  NombreArreglo: string
) {
  for (let i: number = 0; i < tamanio; i++) {
    console.log(
      `El dato en la posición ${i} del ${NombreArreglo} es ${arreglo[i]}`
    );
  }
}

ArregloA = LeerArreglo(ArregloA, 6, "Arreglo A");
MostrarArreglo(ArregloA, 6, "Arreglo A");
ArregloB = LeerArreglo(ArregloB, 6, "Arreglo B");
MostrarArreglo(ArregloB, 6, "Arreglo B");
SumaArregloAyB = SumarArreglo(ArregloA, ArregloB, 6);
MostrarArreglo(SumaArregloAyB, 6, "arreglo de la suma de los Arreglos A y B");
//La solucion es correcta
