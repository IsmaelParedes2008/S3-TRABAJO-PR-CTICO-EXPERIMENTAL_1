// Precio inicial fijo
let precioInicial = 300;

let marca = prompt("Ingrese la marca del celular (Samsung, Apple, Xiaomi):").toLowerCase();
let capacidad = parseInt(prompt("Ingrese la capacidad del celular (64 o 128 GB):"));
let precioFinal = 0;

if (marca === "samsung" && capacidad === 64) {
    precioFinal = precioInicial + 50;
} else if (marca === "samsung" && capacidad === 128) {
    precioFinal = precioInicial + 80;
} else if (marca === "apple" && capacidad === 64) {
    precioFinal = precioInicial + 100;
} else if (marca === "apple" && capacidad === 128) {
    precioFinal = precioInicial + 150;
} else if (marca === "xiaomi" && capacidad === 64) {
    precioFinal = precioInicial - 20;
} else if (marca === "xiaomi" && capacidad === 128) {
    precioFinal = precioInicial - 10;
} else {
    console.log("Datos ingresados incorrectos");
}
