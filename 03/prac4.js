function rearrange(arr){

    for (let i =1; i<arr.length ;i++){

        if(arr[i] > 0){
            continue
        }


        console.log(`Negative Ele: ${arr[i]}`)
        let temp = arr[i]
        let j = i-1

        while(j >=0 && arr[j] >0){
            console.log(arr[j])
            arr[j+1] = arr[j]
            j-- 
            console.log(`value of j in while loop: ${j}`)
        }

        arr[j+1] = temp;
    }
return arr
}



// Modified insertion sort
let arr = [12, 11, -13,-14,-1];
console.log(rearrange(arr));