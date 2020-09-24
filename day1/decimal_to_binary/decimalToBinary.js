function decimalToBinary(n){
    let sum = ''
    while(n > 0){
        let num = n % 2
        sum = num.toString() + sum
        n = Math.floor(n/2)
    }
    return sum
}

console.log(decimalToBinary(25))
console.log(decimalToBinary(100))
console.log(decimalToBinary(1325))

//module.exports = decimalToBinary

