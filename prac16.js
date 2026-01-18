function evenBigOddSmall(arr){

    for(let i =1;i<arr.length;i++){

        if((i+1)%2 ==0){
            if(arr[i] < arr[i-1]){
                [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
            }
        }else {
            if(arr[i] > arr[i-1]){
                [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
            }
        }

    }
return arr

}

let arr =[1,2,3,4,5,6]
console.log(evenBigOddSmall(arr))