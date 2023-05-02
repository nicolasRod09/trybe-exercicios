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
// const myFizzBuzz = require('./src/main');

// describe ('Verifica se número é divísivel', () => {
//   it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//     expect(myFizzBuzz(3)).toBe('fizz');
//     expect(myFizzBuzz(5)).toBe('buzz');
//     expect(myFizzBuzz(8)).toBe(8);
//     expect(myFizzBuzz('1')).toBe(false);
    
//   })
// });

// Exercício 3

// const { encode, decode } = require('./src/main');

// describe ('Testa as funções encode e decode', () => {
//   it('Verifica se encode é definida', () => {
//     expect(encode).toBeDefined();
//   });
//   it('Verifica se encode é função', () => {
//     expect(typeof encode).toBe('function');
//   })
//   it('Verifica se codifica "a" para 1', () => {
//     expect(encode('ana')).toBe('1n1');
//   })
//   it('Verifica se codifica "e" para 2', () => {
//     expect(encode('ele')).toBe('2l2');
//   })
//   it('Verifica se codifica "i" para 3', () => {
//     expect(encode('xixi')).toBe('x3x3');
//   })
//   it('Verifica se codifica "o" para 4', () => {
//     expect(encode('ovo')).toBe('4v4');
//   })
//   it('Verifica se codifica "u" para 5', () => {
//     expect(encode('uv')).toBe('5v');
//   })
//   it("Verifica se o retorno da função tem o mesmo número de caracteres", () => {
//     expect(encode('trybe').length).toEqual(5);
//   })
//   it('Verifica se decode é definida', () => {
//     expect(decode).toBeDefined();
//   })
//   it('Verifica se decode é função', () => {
//     expect(typeof decode).toBe('function');
//   })
//   it('Verifica se decodifica 1 para "a"', () => {
//     expect(decode('1n1')).toBe('ana');
//   })
//   it('Verifica se decodifica 2 para "e"', () => {
//     expect(decode('2l2')).toBe('ele');
//   })
//   it('Verifica se decodifica 3 para "i"', () => {
//     expect(decode('x3x3')).toBe('xixi');
//   })
//   it('Verifica se decodifica 4 para "o"', () => {
//     expect(decode('4v4')).toBe('ovo');
//   })
//   it('Verifica se decodifica 5 para "u"', () => {
//     expect(decode('5v')).toBe('uv');
//   })
//   it("Verifica se o retorno da função tem o mesmo número de caracteres", () => {
//     expect(decode('trybe').length).toEqual(5);
//   })
// })

// Exercício 4
// const techList = require('./src/main');

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

// Exercício 5

const hydrate = require('./src/main');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
