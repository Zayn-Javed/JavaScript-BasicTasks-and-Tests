

function findSum(x, y, z) {
    if (z <= 0) {
        return 'invalid input'
    }
    else {
        var sum = 0
        for (let index = 0; index < z; index++) {
            if (index%x==0 || index%y==0) {
                sum= sum+ index
            }   
        }
        return sum
    }
}
module.exports = findSum