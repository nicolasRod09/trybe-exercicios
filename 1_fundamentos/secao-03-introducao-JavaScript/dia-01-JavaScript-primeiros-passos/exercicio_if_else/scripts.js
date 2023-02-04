///Nota pessoa candidata desafio tecnico

const nota = 80;
let aprovacao = "Parabéns, você faz parte do grupo de pessoas aprovadas!";
let listaDeEspera = "Você está na nossa lista de espera";
let reprovado = "Infelizmente, você reprovou.";

if (nota >= 80) {
    console.log(aprovacao);
}
else if (nota < 80 && nota >= 60){
    console.log(listaDeEspera);
}
else if (nota < 60) { 
    console.log(reprovado);
}


console.log()
