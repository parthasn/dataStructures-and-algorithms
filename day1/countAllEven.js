// function countEvenUsingLoop(arr){
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             count++
//         }
//     }
//     return count
// }

// let res = countEvenUsingLoop([1,2,3,4,5,6,7,8,9])
// console.log(res)

function countEvenUsingRecursion(arr){
    if(arr.length === 0){
        return 0
    }
    if(arr[arr.length-1] % 2 === 0){
        arr.pop()
        return 1 + countEvenUsingRecursion(arr)
    }
    arr.pop()
    return countEvenUsingRecursion(arr)
}

//let res1 = countEvenUsingRecursion([1,2,3,4,5,6,7,8,9])
//console.log(res1)

module.exports = countEvenUsingRecursion