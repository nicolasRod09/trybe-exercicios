// Importamos o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

// Criamos as constantes da nossa imagem, do nome e do botão
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

// Aqui, você insere o token de acesso obtido no site da API
const ACCESS_TOKEN = '251773773910601';

// Essa é a URL base da API. Note que, ao final, ela insere o
// token de acesso. Dessa forma, não precisaremos alterar a URL
// caso o token mude
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

// A API possui 731 heroínas e heróis cadastrados. Porém, para
// simularmos um erro na API por não encontrar o id informado,
// vamos colocar que a quantidade máxima de ids é superior ao
// correto.
const MAX_HEROES = 731;

// Função simples para retornar um valor inteiro aleatório
const randomId = () => Math.floor(Math.random() * MAX_HEROES);
console.log(randomId());
// Adicionamos o eventListener 'click' no nosso botão
button.addEventListener('click', (event) => {
  // event.preventDefault() para evitar que ele recarregue
  // a página
  event.preventDefault();

  const id = randomId();

  // Faremos o fetch utilizando nossa URL e o id gerado
  // pela função
  fetch(`${BASE_URL}/${id}`)
  // Após o fetch, devemos extrair o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = data.name;
      console.log(data.name);
    })
    .catch((error) => Swal.fire ({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }))
});