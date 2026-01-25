function pushZerosToEnd(arr){

let count =0 
    for(let i =0;i <arr.length;i++){
console.log(count)
        if(arr[i] !== 0) {


            [arr[count], arr[i]] = [arr[i],arr[count]]
            count++


        }

    } 
return arr


}




const arr = [0,0,0,1];
console.log(pushZerosToEnd(arr));