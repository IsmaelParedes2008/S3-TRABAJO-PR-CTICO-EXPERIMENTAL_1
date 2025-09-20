let N = parseInt(prompt("Ingrese la cantidad de grupos:"));
let usuarios = [];
let costosTotales = [];
let costosPorUsuario = [];
let costoTotal;

for (let i = 0; i < N; i++) {
    usuarios[i] = parseInt(prompt(`Ingrese el número de usuarios del grupo ${i+1}:`));

    if (usuarios[i] >= 100) {
        costoTotal = usuarios[i] * 5;
    } else if (usuarios[i] >= 50 && usuarios[i] <= 99) {
        costoTotal = usuarios[i] * 6;
    } else if (usuarios[i] >= 30 && usuarios[i] <= 49) {
        costoTotal = usuarios[i] * 8;
    } else {
        costoTotal = 300;
    }

    costosTotales[i] = costoTotal;
    costosPorUsuario[i] = usuarios[i] >= 30 ? costoTotal / usuarios[i] : costoTotal;
}

for (let i = 0; i < N; i++) {
    console.log(`Grupo ${i+1}: Usuarios ${usuarios[i]}, Costo total $${costosTotales[i].toFixed(2)}, Costo por usuario $${costosPorUsuario[i].toFixed(2)}`);
}
