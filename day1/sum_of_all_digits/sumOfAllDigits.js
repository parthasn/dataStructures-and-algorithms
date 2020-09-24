// function sumUsingLoop(num){
//     let sum = 0
//     while(num !== 0){
//         sum += num%10
//         num = Math.floor(num/10)
//     }
//     return sum
// }

// console.log(sumUsingLoop(1234))

function sumUsingRecursion(num){
    if(num === 0){
        return 0
    }
    let rem = num % 10
    return rem + sumUsingRecursion(Math.floor(num/10))
}

// let res = sumUsingRecursion(0001)
// console.log(res)


module.exports = sumUsingRecursion

