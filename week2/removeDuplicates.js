function removeDuplicates(input){
    for(let i=1;i<input.length;i++){
       if(input[i]==input[i-1]){
         input.splice(i,1)
           i--
       }
     }
   return input.length
 
 }
 
 //console.log(removeDuplicates([2,2,3,3,4,6,7,7]))
 
 module.exports = removeDuplicates
 