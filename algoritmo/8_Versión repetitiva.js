let precioInicial = 300;

let N = parseInt(prompt("Ingrese el número de celulares a vender:"));
let marca = "";
let capacidad = 0;
let precioFinal = 0;

for (let i = 1; i <= N; i++) {
    marca = prompt(`Ingrese la marca del celular ${i} (Samsung, Apple, Xiaomi):`).toLowerCase();
    capacidad = parseInt(prompt(`Ingrese la capacidad del celular ${i} (64 o 128 GB):`));

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
        console.log(`Datos incorrectos para el celular ${i}`);
        continue;
    }

    console.log(`Celular ${i}: Marca ${marca}, Capacidad ${capacidad}GB, Precio final $${precioFinal}`);
}
