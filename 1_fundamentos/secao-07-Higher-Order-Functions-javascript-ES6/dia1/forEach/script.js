// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// // Adicione seu código aqui

// const createMsg = (email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach((Element) => {
//   createMsg(Element);
// });

// Times de SP com mundial

const timesDeSpComMundial = [
  'São Paulo',
  'Corinthians',
  'Santos',
];

const msg = (item) => {
  console.log(`O ${item} tem mundial! Mas o Palmeiras não, 51 é pinga!`);
};

timesDeSpComMundial.forEach((Element) => {
  msg(Element);
});
