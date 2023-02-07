const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

// Positive Tests:

test('When initialized with a user-given seed, the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});

test('When initialized with the default seed, the next number can be returned', () => {
    fibonacci.init(1);
    expect(fibonacci.next()).toBe(1);
});

test('When initialized with the default seed, the number after next can be returned (Variation 2)', () => {
    fibonacci.init(1);
    next = fibonacci.next();
    expect(next.next()).toBe(3);

});

test('When initialized with a user-given seed, the number after next can be returned (Variation 2)', () => {
    fibonacci.init(3);
    next = fibonacci.next();
    expect(next.next()).toBe(5);

});

test('When initialized with a user-given seed, skipping by one will return the next number', () => {
    fibonacci.init(8);
    expect(fibonacci.skip(1)).toBe(13);
});

test('When initialized with the default seed, skipping by one will return the next number', () => {
    fibonacci.init(1);
    expect(fibonacci.skip(1)).toBe(1);
});

test('When initialized with the default seed, skipping by a given number will return the value at the index given plus one', () => {
    fibonacci.init(1);
    expect(fibonacci.skip(3)).toBe(3);

});

test('When initialized with a user given seed, skipping by a given number will return the value at the index given plus one', () => {
    fibonacci.init(5);
    expect(fibonacci.skip(2)).toBe(13);
});

// Negative Tests:

test('When initialized with the user-given seed 0, the number after next cannot be returned', () => {
    expect(() => {
        fibonacci.init(0);
      }).toThrow();
});

test('When initialized with a user-given negative seed, an error should be thrown', () => {
    expect(() => {
        fibonacci.init(-1);
      }).toThrow();

});

test('When initialized with a user-given decimal seed, an error should be thrown', () => {
    expect(() => {
        fibonacci.init(2.32);
    }).toThrow();

});

test('When initialized with a user-given string seed, an error should be thrown', () => {
    expect(() => {
        fibonacci.init('Words');
    }).toThrow();

});

test('When initialized with a user-given string seed, an error should be thrown (Variation 2)', () => {
    expect(() => {
        fibonacci.init('3');
    }).toThrow();

});

test('When initialized with a user-given seed outside of the Fibonacci sequence, an error should be thrown', () => {
    expect(() => {
        fibonacci.init(4);
    }).toThrow();

});