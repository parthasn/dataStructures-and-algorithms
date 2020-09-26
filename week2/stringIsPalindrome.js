function stringIsPalindrome(str){
    let alphanums = 'abcdefghijklmnopqrisuvwxyz0987654321'.split('')
    
    str = str.toLowerCase().split('')
    let arr = []
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < alphanums.length; j++){
            if(str[i] === alphanums[j]){
                arr.push(str[i])
            }
        }
    }
    arr = arr.join('')
    let res = isPalindrome(arr)
    //console.log(res)
    return res
}

function isPalindrome(str){
    if(str.length === 0 || str.length === 1){
        return true
    }
    if(str[0] !== str[str.length-1]){
        return false
    }
    return isPalindrome(str.substring(1, str.length-1))
}

//stringIsPalindrome('A man, a plan, a canal: Panama')

module.exports = stringIsPalindrome