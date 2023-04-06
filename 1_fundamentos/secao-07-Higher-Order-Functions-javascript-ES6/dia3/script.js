// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Uva', 'açã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite em pó', 'Leite condensado', 'Açaí'];

const fruitSalad = (fruit, additional) => {
  const receipe = [...fruit, ...additional];
  return `Essa é a sua receita de salada de frutas ${receipe}`;
};

console.log(fruitSalad(specialFruit, additionalItens));