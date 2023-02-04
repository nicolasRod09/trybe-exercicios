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
    name: "Nicolas",
    lastName: "Rodrigues",
    age: 19,
    medals: { golden: 2, silver: 3 }
};
console.log("O jogador " + player.name + " " + player.lastName + " tem " + player.age + " " + "anos de idade");