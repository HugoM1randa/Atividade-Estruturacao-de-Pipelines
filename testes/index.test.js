const conta = require('../src/index.js');

test('conta a * b + c + d * e', () => {
    expect(conta(1,2,3,4,5)).toBe(25);
});