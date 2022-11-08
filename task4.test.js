const revrse = require('./task4.js')
test('testing reverse', ()=> {
    expect(revrse('labtask')).toBe('ksatbal')
})

test('testing reverse', ()=> {
    expect(revrse('lab task')).toBe('ksat bal')
})