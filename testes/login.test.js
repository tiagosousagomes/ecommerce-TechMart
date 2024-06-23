
// validateEmail.test.js

const validateEmail = require('../TechtMart/login/validation');

describe('validateEmail function', () => {
    test('deve retornar verdadeiro para emails validos', () => {
        expect(validateEmail('test@gmail.com')).toBe(true);
        expect(validateEmail('test@gmail.name')).toBe(true);
        expect(validateEmail('test@sub.gmail.com')).toBe(true);
    });

    test('deve retornar falso para emails invalidos', () => {
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('test.com')).toBe(false);
        expect(validateEmail('test@gmail')).toBe(false);
        expect(validateEmail('test@at@gmail.com')).toBe(false);
    });

    test('retornar falso para os input que não contenham string', () => {
        expect(validateEmail(123)).toBe(false);
        expect(validateEmail(null)).toBe(false);
        expect(validateEmail(undefined)).toBe(false);
        expect(validateEmail({ email: 'test@gmail.com' })).toBe(false);
    });
});


