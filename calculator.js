function sum(a,b) {
    return a+b
}
function sub(a,b) {
    return a-b
}
function mul(a,b) {
    return a*b
}
function divide(a, b) {
    if (b == 0) {
        return 'invalid input of b'
    }
    return a/b
}


module.exports = {
    sum, sub, mul, divide
}