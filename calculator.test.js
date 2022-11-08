const {sum, mul, sub, divide} = require('./calculator.js')

test('testing sum', () => {
    expect(sum(1, 2)).toBe(3)
})
test('testing mul', () => {
    expect(mul(3, 2)).toBe(6)
})
test('testing sub', () => {
    expect(sub(5, 8)).toBe(-3)
})
test('testing divide for non-zero input', () => {
    expect(divide(4, 2)).toBe(2)
})
test('testing divide for zero input', () => {
    expect(divide(3, 0)).toBe('invalid input of b')
})
