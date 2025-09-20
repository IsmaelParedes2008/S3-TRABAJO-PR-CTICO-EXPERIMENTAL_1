let N = parseInt(prompt("Ingrese la cantidad de grupos:"));
let usuarios, costoTotal, costoPorUsuario;

for (let i = 1; i <= N; i++) {
    usuarios = parseInt(prompt(`Ingrese el número de usuarios del grupo ${i}:`));

    if (usuarios >= 100) {
        costoTotal = usuarios * 5;
    } else if (usuarios >= 50 && usuarios <= 99) {
        costoTotal = usuarios * 6;
    } else if (usuarios >= 30 && usuarios <= 49) {
        costoTotal = usuarios * 8;
    } else {
        costoTotal = 300; 
    }

    costoPorUsuario = usuarios >= 30 ? costoTotal / usuarios : costoTotal;

    console.log(`Grupo ${i}: Costo total $${costoTotal.toFixed(2)}, Costo por usuario $${costoPorUsuario.toFixed(2)}`);
}
