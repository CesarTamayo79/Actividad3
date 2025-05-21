const number = parseInt(prompt("Ingrese la tabla de multiplicar deseada:"));
console.log("la tabal resultante es:")
for (let i = 1; i <= 12; i++) {
    const result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}