function addBinary(a, b){
    let num1 = binaryToDecimal(a)
    let num2 = binaryToDecimal(b)

    let num = num1 + num2

    let res = decimalToBinary(num)

    //console.log(res)
    return res
}

function binaryToDecimal(str){
    str = str.split('').map(Number)
    let sum = 0
    for(let i = 0; i < str.length; i++){
        sum += (str[str.length-1-i])*Math.pow(2, i)
    }
    return sum
}

function decimalToBinary(n){
    let sum = ''
    while(n > 0){
        let num = n % 2
        sum = num.toString() + sum
        n = Math.floor(n/2)
    }
    
    return sum
}

//addBinary('1101101111', '1010101011')

module.exports = addBinary
