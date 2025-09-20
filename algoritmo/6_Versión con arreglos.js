let N = parseInt(prompt("Ingrese la cantidad de pedidos:"));
let cantidades = [];
let costosTotales = [];
let costoUnitario;

for (let i = 0; i < N; i++) {
    cantidades[i] = parseInt(prompt(`Ingrese la cantidad de tarjetas del pedido ${i+1}:`));

    if (cantidades[i] <= 200) {
        costoUnitario = 2.00;
    } else if (cantidades[i] >= 201 && cantidades[i] <= 300) {
        costoUnitario = 1.80;
    } else {
        costoUnitario = 1.50;
    }

    costosTotales[i] = cantidades[i] * costoUnitario;
}

for (let i = 0; i < N; i++) {
    console.log(`Pedido ${i+1}: Cantidad ${cantidades[i]}, Costo total $${costosTotales[i].toFixed(2)}`);
}
