document.getElementById("app").innerHTML = `
<h1>Suma de Dos Arreglos</h1>
`;

let ArregloA: number[] = new Array(6);
let ArregloB: number[] = new Array(6);
let SumaArregloAyB: number[] = new Array(6);

function LeerArreglo(
  Arreglo: number[],
  Tamanio: number,
  NombreArreglo: string
): number[] {
  for (let i: number = 0; i < Tamanio; i++) {
    let NumeroLeido: number;
    NumeroLeido = Number(
      prompt(`Ingrese el número para la posición ${i} del ${NombreArreglo}: `)
    );
    Arreglo[i] = NumeroLeido;
  }
  return Arreglo;
}

function SumarArreglo(
  arregloA: number[],
  arregloB: number[],
  tamanio: number
): number[] {
  let SumaArreglos: number[] = new Array(tamanio);
  for (let i: number = 0; i < 6; i++) {
    SumaArreglos[i] = arregloA[i] + arregloB[i];
  }
  return SumaArreglos;
}

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
