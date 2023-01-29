// Exercício for

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
// }

// Exercício for/of

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let nome of names) {
//     console.log(nome);
// }

// Agora a prática

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// for (let index = 0; index < numbers.length; index += 1) {
//     result += numbers[index];
// }

// console.log(result)

// Média Aritmética  
//   || || || || || || ||
//   \/ \/ \/ \/ \/ \/ \/

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// let aritmetic = sum / numbers.length;

// // console.log(aritmetic);

// if (aritmetic > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }
// let higherNumber = [0];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > higherNumber) {
//         higherNumber = numbers[index]
//     }
// }

// console.log(higherNumber);

// Exercício impar

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         result += 1;
//     }
// }

// if (result === 0) {
//     console.log("Nenhum valor ímpar encontrado");
// } else {
//     console.log(result);
// }

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    }
}

console.log(smallestNumber);