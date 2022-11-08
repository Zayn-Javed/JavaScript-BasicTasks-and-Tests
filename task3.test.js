const { power, rounds, ceil } = require('./task3.js')
test('testing power', ()=> {
    expect(power(5,2)).toBe(25)
})
test('testing power', ()=> {
    expect(power(5,0)).toBe(1)
})
test('testing rounds', ()=> {
    expect(rounds(5.46)).toBe(5)
})
test('testing rounds', ()=> {
    expect(rounds(5.5)).toBe(6)
})
test('testing ceil', ()=> {
    expect(ceil(5.4)).toBe(6)
})
test('testing ceil', ()=> {
    expect(ceil(7.8)).toBe(8)
})