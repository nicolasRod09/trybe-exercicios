// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     return 'Os valores devem ser numéricos';
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3'));

// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3'));

// const separateName = (arr, arr2) => {
//   if (typeof arr !== 'string' || typeof arr2 !== 'string') {
//     throw new Error('Os valores devem ser strings');
//   }
// };

// const juntaNome = (arr, arr2) => {
//   try {
//     separateName(arr, arr2);
//     return `${arr}${arr2}`;
//   } catch (error) {
//     return error;
//   }
// };
// console.log(juntaNome('k', 'ct'));

// exemplo meu

const verifyQntOfTitlesSp = (num) => {
  if (num === 3) {
    console.log('Você deve estar falando do Soberano São Paulo FC');
  } else if (num === 2) {
    console.log('Você deve estar falando ou das sereias da Vila ou dos gambás de Itaquera');
  } else {
    throw new Error('Você está falando das pepas, elas não tem mundial');
  }
};

const juntaTudo = (num) => {
  try {
    verifyQntOfTitlesSp(num);
  } catch (error) {
    return error;
  }
}

console.log(juntaTudo(2));