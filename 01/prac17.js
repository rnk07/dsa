function subarraySum(arr){

    const n = arr.length;
    let result = 0;

    for(let i= 0;i<n;i++){

        result  =result + (arr[i]*(i+1)*(n-i))

    }
return result
}

let arr = [1,2]
console.log(subarraySum(arr))