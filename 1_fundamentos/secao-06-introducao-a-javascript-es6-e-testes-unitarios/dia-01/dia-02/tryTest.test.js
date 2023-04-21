// Exercício 1
// const myRemove = require('./src/main');

// describe ('Verifica array', () => {
//   test ('Verifica se a chamada myRemove retorna o array esperado', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   });
//   test ('Verifica se a chamada myRemove não retorna o array', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//   });
//   test ('Verifica se a chamada myRemove retorna o array esperado', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
//   })
// })

// Exercício 2
const myFizzBuzz = require('./src/main');

describe ('Verifica se número é divísivel', () => {
  it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(8)).toBe(8);
    expect(myFizzBuzz('1')).toBe(false);
    
  })
});

