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

let array = ["java", "javascript", "python", "html", "css"];
let biggestValue = array[0];
let smallestVallue = array[0];

for (index = 0; index < array.length; index += 1) {
    if (array.length < smallestVallue) {

    }
}