function decimalToBinary(n){
    let sum = ''
    while(n > 0){
        let num = n % 2
        sum = num.toString() + sum
        n = Math.floor(n/2)
    }
    return sum
}

let res = decimalToBinary(72)
console.log(res)

