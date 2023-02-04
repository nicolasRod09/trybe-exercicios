let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);

let word = "tryber";
let reverse = '';

for (let index = 0; index < word.length; index += 1) {
    reverse += word[word.length - 1 - index];
}

console.log(reverse);

// let array = ["java", "javascript", "python", "html", "css"];
// let biggestValue = array[0];
// let smallestValue = array[0];

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > biggestValue.length) {
//         biggestValue = array[index];
//     }
// }

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length < smallestValue.length) {
//         smallestValue = array[index];
//     }
// }
// console.log(biggestValue);
// console.log(smallestValue);

let maiorNumero = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        maiorNumero = currentNumber;
    }
}