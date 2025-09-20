let usuarios = parseInt(prompt("Ingrese el número de usuarios del grupo:"));
let costoTotal = 0;
let costoPorUsuario = 0;

if (usuarios >= 100) {
    costoTotal = usuarios * 5;
} else if (usuarios >= 50 && usuarios <= 99) {
    costoTotal = usuarios * 6;
} else if (usuarios >= 30 && usuarios <= 49) {
    costoTotal = usuarios * 8;
} else {
    costoTotal = 300; // costo fijo para menos de 30 usuarios
}

costoPorUsuario = usuarios >= 30 ? costoTotal / usuarios : costoTotal;

console.log(`Costo total del grupo: $${costoTotal.toFixed(2)}`);
console.log(`Costo por usuario: $${costoPorUsuario.toFixed(2)}`);
