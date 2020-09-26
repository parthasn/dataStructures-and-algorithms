function searchInsertPosition(arr, k){
    let lo = 0
    let hi = arr.length-1
    let ans = -1
    let max = Math.max(...arr)
    if(k > max){
        return arr.length
        //console.log(arr.length)
    }
    else{
        let res = lowerBound(arr, k, ans, lo, hi)
        return res
        //console.log(res)
    }
   
    
}
function lowerBound(arr, k, ans, lo, hi){
    while(lo <= hi){
        let mid = lo + Math.floor((hi-lo)/2)
        if(arr[mid] >= k){
            ans = mid
            hi = mid-1
        }
       
        else{
            lo = mid+1
        }
    }
    return ans
}
// let arr =[1,1,1,1,1,1]
// let k = 1
// searchInsertPosition(arr, k)

module.exports = searchInsertPosition

