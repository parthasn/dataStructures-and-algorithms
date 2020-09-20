function isPalindromeUsingLoop(str){
    for(let i = 0; i < str.length/2; i++){
        if(str[i] === str[str.length-1 - i]){
            continue
        }
        else{
            return false
        }
    }
    return true
}

if(isPalindromeUsingLoop('malayalam')){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}

function isPalindromeUsingRecursion(str){
    if(str.length === 0 || str.length === 1){
        return true
    }
    if(str[0] !== str[str.length-1]){
        return false
    }
    return isPalindromeUsingRecursion(str.substring(1, str.length-1))
}

if(isPalindromeUsingRecursion('malayalam')){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}