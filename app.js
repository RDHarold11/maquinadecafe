//3 Oz de cafe
let vasosPeq = 3;
//5 Oz de cafe
let vasosMedianos = 2;
//7 Oz de cafe
let vasosGrandes = 1;
//Valor expresado en Oz
let cantidadCafe = 15;
//Valor expresado en gramos
let cantidadAzucar = 30;

const btn = document.querySelector(".btn__cafe");
const vp = document.querySelector(".vasoPequeno");
const vm = document.querySelector(".vasoMediano");
const vg = document.querySelector(".vasoGrande");
const cazucar = document.querySelector(".cantidadAzucar");
const ccafe = document.querySelector(".cantidadCafe");
/* 
    Considerando que: 
    - Dependiendo del tipo de vaso, se le resta n cantidad de cafe
    - Si existe cafe, el programa continua
*/

btn.addEventListener("click", () => {
  if (cantidadCafe == 0) {
    alert("Por el momento no tenemos cafe");
  } else {
    const opcion = prompt(
      "Seleccione el tamaño del vaso: \n 1. Grande, 2. Mediano, 3. Pequeño"
    );
    if (opcion) {
      const validacion = validarCantidadCafe(opcion);
      if (validacion) {
        seleccionarTamanoVaso(opcion);
      } else {
        alert("No tenemos mas cafe para este tamaño de vaso");
      }
    } else {
      alert("Seleccione una cantidad");
    }
  }
});

const validarCantidadCafe = (opcion) => {
  if (opcion == 1 && cantidadCafe < 7) {
    return false;
  }
  if (opcion == 2 && cantidadCafe < 5) {
    return false;
  }
  if (opcion == 3 && cantidadCafe < 3) {
    return false;
  }
  return true;
};

const seleccionarTamanoVaso = (opcion) => {
  if (opcion == 1) {
    validarCantidadVasos("grande", vasosGrandes);
  } else if (opcion == 2) {
    validarCantidadVasos("mediano", vasosMedianos);
  } else {
    validarCantidadVasos("pequeno", vasosPeq);
  }
};

const validarCantidadVasos = (tipo, cantidadVasos) => {
  if (cantidadVasos <= 0) {
    alert("No tenemos mas vasos de este tipo");
  } else {
    //Ya que hay cafe y vasos, pedimos la azucar
    const cantidadAzucar = prompt("Selecciona la cantidad de azucar en gramos");
    seleccionarCantidadAzucar(cantidadAzucar, tipo);
  }
};

const restarCantidadCafe = (tipo) => {
  if (tipo == "grande") {
    cantidadCafe -= 7;
  }
  if (tipo == "mediano") {
    cantidadCafe -= 5;
  }
  if (tipo == "pequeno") {
    cantidadCafe -= 3;
  }
};

const restarCantidadVasos = (tipo) => {
  if (tipo == "grande") {
    vasosGrandes -= 1;
  } else if (tipo == "mediano") {
    vasosMedianos -= 1;
  } else {
    vasosPeq -= 1;
  }
};

const seleccionarCantidadAzucar = (cantidad, tipo) => {
  if (cantidadAzucar < cantidad) {
    alert("No tenemos mas azucar");
  } else {
    cantidadAzucar -= cantidad;
    alert("Felicitaciones, disfrute de su cafe");
    //La maquina le da el vaso
    restarCantidadVasos(tipo);
    //La maquina deposita el cafe
    restarCantidadCafe(tipo);
    //Actualizamos los valores de la cafetera
    desplegarValores();
  }
};

const desplegarValores = () => {
  vp.innerHTML = `Cantidad de vasos pequeños: ${vasosPeq}`;
  vm.innerHTML = `Cantidad de vasos medianos: ${vasosMedianos}`;
  vg.innerHTML = `Cantidad de vasos grandes: ${vasosGrandes}`;
  cazucar.innerHTML = `Cantidad de azucar: ${cantidadAzucar}g`;
  ccafe.innerHTML = `Cantidad de cafe: ${cantidadCafe}Oz`;
};
