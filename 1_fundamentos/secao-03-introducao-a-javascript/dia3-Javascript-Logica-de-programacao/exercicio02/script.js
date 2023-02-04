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
