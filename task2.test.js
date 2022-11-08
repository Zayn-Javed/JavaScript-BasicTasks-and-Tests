const findSum = require('./task2.js')

test('testing findSum with value greater than 0', ()=> {
    expect(findSum(3,5,10)).toBe(23)
})

test('testing findSum with value less than 0', ()=> {
    expect(findSum(3,5,0)).toBe('invalid input')
})