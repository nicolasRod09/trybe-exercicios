// Requisito 3 - Primeira cor da paleta deve ser preto
const palette = document.querySelector('#color-palette');

// Requisito 4
const cores = palette.children;
cores[0].style.backgroundColor = 'black';
cores[0].classList.add('selected');
const coresIniciais = ['rgb(0,0,0)', 'red', 'green', 'blue'];
for (let index = 1; index < cores.length; index += 1) {
    cores[index].style.backgroundColor = coresIniciais[index];
}

// Botão
const button = document.getElementById('button-random-color');

// Função de cores aleatórias
button.addEventListener('click', () => {
    const coresUsadas = [];
    for (let index = 1; index < cores.length; index += 1) {
        if (!coresUsadas.includes(`rgba(${Math.floor(Math.random()
            * 254) + 1},${Math.floor(Math.random()
                * 254) + 1},${Math.floor(Math.random()
                    * 254) + 1},${1})`)) {
            cores[index].style.backgroundColor = `rgba(${Math.floor(Math.random()
                * 254) + 1},${Math.floor(Math.random()
                    * 254) + 1},${Math.floor(Math.random()
                        * 254) + 1},${1})`;
            coresUsadas.push(cores[index]);
        }
    }
    const colorsToSave = {
        color1: cores[1].style.backgroundColor,
        color2: cores[2].style.backgroundColor,
        color3: cores[3].style.backgroundColor
    };

    localStorage.setItem('pixelBoard', colorsToSave);
});

// Requisito 5

// Função de armazenar paleta

// const loadPalette = () => {
//   for (let index = 1; index < cores.length; index += 1) {
//     cores[index].style.backgroundColor = localStorage.paletteColors[index];
//   }
// };
// Requisito 6
const pixelBoard = document.getElementById('pixel-board');

// Requisito 10

function mudaCor(evento) {
    const clique = evento;
    const selected = document.getElementsByClassName('selected')[0];
    clique.target.style.backgroundColor = selected.style.backgroundColor;
}

const createBoard = (width) => {
    for (let index = 0; index < (width * width); index += 1) {
        pixelBoard.appendChild(document.createElement('div'));
        pixelBoard.children[index].className = 'pixel';
    }
    pixelBoard.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    pixelBoard.style.gridTemplateRows = `repeat(${width}, 1fr)`;
    for (let index = 0; index < pixelBoard.children.length; index += 1) {
        pixelBoard.children[index].addEventListener('click', mudaCor);
    }
};

createBoard(5);

// Requisito 9
const changeSelected = (evento) => {
    for (let index = 0; index < cores.length; index += 1) {
        if (cores[index].classList.contains('selected')) {
            cores[index].classList.remove('selected');
        } evento.target.classList.add('selected');
    }
};

for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', changeSelected);
}

// Requisito 11

const clearBoard = document.getElementById('clear-board');

const clear = () => {
    for (let index = 0; index < pixelBoard.children.length; index += 1) {
        pixelBoard.children[index].style.backgroundColor = 'rgb(255,255,255)';
    }
};

clearBoard.addEventListener('click', clear);

// Requisito 12

// Requisito 13
const generateBoard = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

const checkBoardSize = () => {
    if (boardSize.value.length === 0) {
        window.alert('Board inválido!');
    }
    if (boardSize.value < 5) {
        pixelBoard.innerHTML = '';
        createBoard(5);
        clear();
    } else if (boardSize.value > 50) {
        pixelBoard.innerHTML = '';
        createBoard(50);
        clear();
    } else {
        pixelBoard.innerHTML = '';
        createBoard(boardSize.value);
        clear();
    }
};

generateBoard.addEventListener('click', checkBoardSize);

// Salvar paleta

// Onload
window.onload = () => {

};