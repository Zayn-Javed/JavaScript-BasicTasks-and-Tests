const find = require('./task5.js')
test('testing find', ()=> {
    expect(find(3)).toBe(true)
})
test('testing find', ()=> {
    expect(find(31)).toBe(false)
})