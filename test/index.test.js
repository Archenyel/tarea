const hash = require('./test.index');

test('Prueba unitaria de hash', () => {
    const message = 'Hola Mundo';
    const hash = hash(message);
    expect(hash).toEqual('872e4bdc3f3f2b1e6f8b4d5c6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f');
});