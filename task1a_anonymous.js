
//anonymous function

const arr = [1,2,3,4,5,6,7,8,9];
   const oddnum = function (number){
    const result =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0){
         result.push(arr[i]);
         return result;
        }
    }
    return -1;
   }
   console.log(oddnum);
      
   

   
      


    