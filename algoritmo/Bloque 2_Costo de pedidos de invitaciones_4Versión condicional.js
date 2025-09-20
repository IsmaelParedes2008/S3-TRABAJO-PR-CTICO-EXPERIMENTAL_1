let cantidad = parseInt(prompt("Ingrese la cantidad de tarjetas:"));
let costoUnitario = 0;
let costoTotal = 0;
if (cantidad <= 200) {
    costoUnitario = 2.00;
} else if (cantidad >= 201 && cantidad <= 300) {
    costoUnitario = 1.80;
} else {
    costoUnitario = 1.50;
}
costoTotal = cantidad * costoUnitario;
console.log(`El costo total del pedido es $${costoTotal.toFixed(2)}`);
