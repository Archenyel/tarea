const hash = require('./test.index');

test('Prueba unitaria de hash', () => {
    const message = 'Hola Mundo';
    const hashedMessage = hash(message);
    expect(hashedMessage).toEqual('872e4bdc3f3d5c0e8f6f2d2a4f4e6e5f6e7e8e9eaebecedeeeff0f1f2f3f4f5');
});