let N = parseInt(prompt("Ingrese la cantidad de grupos de hermanos:"));
let edad1, edad2, edad3;
let mayor;

for (let i = 1; i <= N; i++) {
    console.log(`--- Grupo ${i} ---`);
    edad1 = parseInt(prompt("Ingrese la edad del primer hermano:"));
    edad2 = parseInt(prompt("Ingrese la edad del segundo hermano:"));
    edad3 = parseInt(prompt("Ingrese la edad del tercer hermano:"));

    // Determinar el mayor
    if (edad1 >= edad2 && edad1 >= edad3) {
        mayor = edad1;
    } else if (edad2 >= edad1 && edad2 >= edad3) {
        mayor = edad2;
    } else {
        mayor = edad3;
    }

    console.log(`El hermano mayor del grupo ${i} tiene ${mayor} años.`);
}
