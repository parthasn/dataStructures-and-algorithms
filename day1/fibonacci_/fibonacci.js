// function fibonacciUsingLoop(n){
//     let a = 0
//     let b = 1
//     let f = a+b
//     for(let i = 2; i < n; i++){
//         f = a+b
//         a = b
//         b = f
//     }
//     return f
// }

// let res = fibonacciUsingLoop(1)
// let res1 = fibonacciUsingLoop(8)
// let res2 = fibonacciUsingLoop(100)
// console.log(res, res1, res2)

function fibonacciUsingRecursion(n){
    if(n === 1){
        return 0
    }
    if(n === 2){
        return 1
    }
    return fibonacciUsingRecursion(n-1) + fibonacciUsingRecursion(n-2)
}


module.exports = fibonacciUsingRecursion
