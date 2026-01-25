function segregate0and1(arr){

    let n = arr.length
    let low  =0;
    let high = n-1


    while(low < high){

        while (arr[low] === 0 && low <high) { low++}
        
        while (arr[high] === 1 && low <high) { high --}

        if(low < high){

            [arr[low],arr[high]] = [arr[high], arr[low]]
            low++
            high--

        }


    }
return arr

}


let arr = [1,1,1,1,1,1,1,0,0,0,0,0,0,0];
console.log(segregate0and1(arr));