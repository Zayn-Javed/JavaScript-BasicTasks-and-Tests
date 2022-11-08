function find(x) {
    var flag = false;
    var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == x) {
            flag = true
            break
        }
    }
    return flag
}
module.exports= find