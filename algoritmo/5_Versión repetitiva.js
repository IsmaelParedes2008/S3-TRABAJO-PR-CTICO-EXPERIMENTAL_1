let N = parseInt(prompt("Ingrese la cantidad de pedidos:"));
let cantidad;
let costoUnitario;
let costoTotal;

for (let i = 1; i <= N; i++) {
    cantidad = parseInt(prompt(`Ingrese la cantidad de tarjetas del pedido ${i}:`));

    if (cantidad <= 200) {
        costoUnitario = 2.00;
    } else if (cantidad >= 201 && cantidad <= 300) {
        costoUnitario = 1.80;
    } else {
        costoUnitario = 1.50;
    }

    costoTotal = cantidad * costoUnitario;

    console.log(`El costo total del pedido ${i} es $${costoTotal.toFixed(2)}`);
}
