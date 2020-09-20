// function isPrimeUsingLoop(n){
//     if(n === 1 || n === 0){
//         return false
//     }
//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// }

// if(isPrimeUsingLoop(0)){
//     console.log("Prime")
// }
// else{
//     console.log("Not Prime")
// }

function isPrimeUsingRecursion(n, i = n-1){
    if(i < 2){
        return true
    }
    if(n === 1 || n === 0){
        return false
    }
    if(n % i === 0){
        return false
    }
    return isPrimeUsingRecursion(n, i-1)
}

if(isPrimeUsingRecursion(16)){
        console.log("Prime")
    }
    else{
        console.log("Not Prime")
    }