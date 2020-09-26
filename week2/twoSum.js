function twoSum(arr, k){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i !== j){
                if((arr[i] + arr[j]) === k){
                    let res = [i,j]
                    //console.log(res)
                    return res
                }
            }
        }
    }
    
   
    
}

//twoSum([11,10,5,12,7], 15)

module.exports = twoSum