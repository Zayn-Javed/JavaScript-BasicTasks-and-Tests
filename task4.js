function revrse(str) {

    var splitedStr = str.split("")
    var revStr = splitedStr.reverse()
    return revStr.join("")
}
module.exports = revrse