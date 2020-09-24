// function stringInReverseUsingLoop(str){
//     let sum = ''
//     for(let i = 0; i < str.length; i++){
//         sum = str[i] + sum
//     }
//     return sum
// }

// let res = stringInReverseUsingLoop('partha')
// console.log(res)

function stringInReverseUsingRecursion(str){
    if(str.length === 0){
        return ''
    }
    return str.substring(str.length-1, str.length) + stringInReverseUsingRecursion(str.substring(0, str.length-1))
}
// let res1 = stringInReverseUsingRecursion('partha')
//  console.log(res1)

module.exports = stringInReverseUsingRecursion
