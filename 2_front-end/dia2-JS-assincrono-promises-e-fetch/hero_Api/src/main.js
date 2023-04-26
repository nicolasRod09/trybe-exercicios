import Swal from 'sweetalert2';

const getName = document.querySelector('#name');
const getImg = document.querySelector('#name');
const getBtn = document.querySelector('#button');

const ACESS_TOKEN = '251773773910601';
const HERO_URL = `https://superheroapi.com/api/${ACESS_TOKEN}`;

const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);
getBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();

  fetch(`${HERO_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      getImg.src = data.image.url;
      getName.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
