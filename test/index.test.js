const hash = require('./testindex');

test('Prueba unitaria de hash', () => {
    const message = 'contraseña';
    const hashedMessage = hash(message);
    expect(hashedMessage).toEqual('edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5');
});