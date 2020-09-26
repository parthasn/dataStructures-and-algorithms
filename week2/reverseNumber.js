function reverseNumber(num){
    num = num.toString().split('')
    let reverse = ''
    if(num[0] === '-'){
        num.shift()
        for(let i = 0; i < num.length; i++){
            reverse = num[i] + reverse
        }
        reverse = "-" + reverse
    }
    else{
        for(let i = 0; i < num.length; i++){
            reverse = num[i] + reverse
        }
    }
    //console.log(reverse)
    return Number(reverse)
    
}

//reverseNumber(-12)

module.exports = reverseNumber