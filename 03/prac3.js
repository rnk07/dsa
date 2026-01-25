function segregate(arr){

    let n = arr.length
    let low = 0;
    let high = n-1

    while(low <high){

        if(arr[low] %2 !== 0){
            if(arr[high]%2 ===0){

                //Swap
                [arr[low],arr[high]] = [arr[high],arr[low]]
            }else{
                high--
            }
        }else{
            low++
        }
        


    }
return arr
}


const arr = [1, 2, 3, 4, 5, 6];
console.log(segregate(arr));