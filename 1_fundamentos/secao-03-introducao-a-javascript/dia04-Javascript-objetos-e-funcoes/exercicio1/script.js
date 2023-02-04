let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
};

//   diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['7']); // domingo

let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
    },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 19,
    medals: { golden: 2, silver: 3 }
};
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " " + "anos de idade");

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor jogadora do mundo por 6 vezes. " + player.bestInTheWorld);