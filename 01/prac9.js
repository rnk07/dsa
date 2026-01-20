function reverseArray(arr){


    let n = arr.length;

    for(let i =0; i<n/2 ;i++){
        let temp = arr[i]
        arr[i] = arr[n-i-1]
        arr[n-i-1] = temp

    }


}


let arr = [5,6,7]
reverseArray(arr)
console.log(arr)