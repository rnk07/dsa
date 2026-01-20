function largestInArray(arr) {

    let max =arr[0]
    for(let i =0;i <arr.length;i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
return max

}

let arr = [10, 322, 33, 98]
console.log(`This is function outpt:${largestInArray(arr)}`)
console.log(`This is Library Method Output: ${Math.max(...arr)}`)