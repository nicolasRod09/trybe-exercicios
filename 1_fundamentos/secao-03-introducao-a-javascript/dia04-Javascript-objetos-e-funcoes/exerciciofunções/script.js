const a = 10;
const b = 35;
const c = 35.5;
//
const a1 = 60;
const a2 = 60;
const a3 = 60;

// function soma(a, b) {
//     return a + b;
// }
// soma();

// function sub(a, b) {
//     return a - b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// function mod(a, b) {
//     return a % b;
// }

function maior(a, b) {
    if (a > b) {
        return a + " é maior que " + b;
    } else {
        return b + " é maior que " + b;
    }
}

function maiorDe3(a, b, c) {
    if (a > b && a > c) {
        return "O maior número é " + a;
    } else if (a < b && b > c) {
        return "O maior número é " + b;
    } else {
        return "O maior número é " + c;
    }
}

console.log(maiorDe3(a, b, c));

function positivoNegativo(a) {
    if (a >= 0) {
        return "É positivo";
    } else {
        return "É negativo"
    }
}

console.log(positivoNegativo(a));

function angulo(a1, a2, a3) {
    let resultado = a1 + a2 + a3;
    if (resultado === 180) {
        return "O angulo é válido";
    } else {
        return "Angulo invalido";
    }
}

console.log(angulo(a1, a2, a3));