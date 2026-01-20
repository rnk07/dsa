function maxSumSubArray(arr) {
    let maxSum = arr[0]

    for (let i = 0; i < arr.length; i++) {

        let currSum = 0
        for (let j = i; j < arr.length; j++) {
            console.log(`Value of i:${i}`)
            currSum = currSum +arr[j]
            console.log(`value of j: ${j} and curSum: ${currSum}`)
            
            // maxSum = Math.max(maxSum , currSum)
            if(currSum>maxSum){
                maxSum = currSum
            }

            console.log(`Max Sum is: ${maxSum}`)

        }
    }



    return maxSum
}

const arr =  [2, 3, -8, 7, -1, 2, 3];
console.log(maxSumSubArray(arr));