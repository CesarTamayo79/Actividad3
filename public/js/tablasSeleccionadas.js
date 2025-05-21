var tabla = prompt("Tablas de multiplicar Pares o Impares (escribe 'pares' o 'impares')");
tabla = tabla.toLowerCase();

if (tabla === "pares") {
    var num = 2;
    while (num <= 10) {

        console.log("")
        console.log("Tabla del " + num);
        var i = 1;
        while (i <= 12) {
            console.log("")
            console.log(num + " x " + i + " = " + (num * i));
            i = i + 1;
        }
        num = num + 2;
    }
} else {
    if (tabla === "impares") {
        var num = 1;
        while (num <= 9) {
            console.log("")
            console.log("Tabla del " + num);
            var i = 1;
            while (i <= 12) {
                console.log(num + " x " + i + " = " + (num * i));
                i = i + 1;
            }
            num = num + 2;
        }
    } else {
        console.log("Opción no válida. Escribe 'pares' o 'impares'.");
    }
}
