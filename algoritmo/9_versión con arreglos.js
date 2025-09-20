// Precio inicial fijo
let precioInicial = 300;

let N = parseInt(prompt("Ingrese el número de celulares a vender:"));
let marcas = [];
let capacidades = [];
let preciosFinales = [];

for (let i = 0; i < N; i++) {
    marcas[i] = prompt(`Ingrese la marca del celular ${i+1} (Samsung, Apple, Xiaomi):`).toLowerCase();
    capacidades[i] = parseInt(prompt(`Ingrese la capacidad del celular ${i+1} (64 o 128 GB):`));

    if (marcas[i] === "samsung" && capacidades[i] === 64) {
        preciosFinales[i] = precioInicial + 50;
    } else if (marcas[i] === "samsung" && capacidades[i] === 128) {
        preciosFinales[i] = precioInicial + 80;
    } else if (marcas[i] === "apple" && capacidades[i] === 64) {
        preciosFinales[i] = precioInicial + 100;
    } else if (marcas[i] === "apple" && capacidades[i] === 128) {
        preciosFinales[i] = precioInicial + 150;
    } else if (marcas[i] === "xiaomi" && capacidades[i] === 64) {
        preciosFinales[i] = precioInicial - 20;
    } else if (marcas[i] === "xiaomi" && capacidades[i] === 128) {
        preciosFinales[i] = precioInicial - 10;
    } else {
        console.log(`Datos incorrectos para el celular ${i+1}`);
        preciosFinales[i] = 0;
    }
}

for (let i = 0; i < N; i++) {
    console.log(`Celular ${i+1}: Marca ${marcas[i]}, Capacidad ${capacidades[i]}GB, Precio final $${preciosFinales[i]}`);
}
