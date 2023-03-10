const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const urgente = document.getElementsByClassName('emergency-tasks')[0];
urgente.style.backgroundColor = 'rgb(255, 159, 132)';

const cabecalhoUrgente = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < cabecalhoUrgente.length; index += 1) {
    cabecalhoUrgente[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const taskSemUrgencia = document.querySelector('.no-emergency-tasks');
taskSemUrgencia.style.backgroundColor = 'rgb(249, 219, 94)';

const cabecalhoSemUrgencia = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < cabecalhoSemUrgencia.length; index += 1) {
    cabecalhoSemUrgencia[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';