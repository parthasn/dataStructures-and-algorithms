function merge2SortedArrays(arr1, arr2){
    let arr = [...arr1, ...arr2].sort((a,b) => a-b)
    
   console.log(arr) 
}




merge2SortedArrays([1,2,3], [2,3,4])

