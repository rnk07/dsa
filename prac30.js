function kadaneMaxSumofArr(arr) {

    let result = arr[0]
    let maxEnding = arr[0]

    for (let i = 1; i < arr.length; i++) {

        maxEnding =Math.max(maxEnding+arr[i],arr[i])
        console.log(maxEnding)
        result = Math.max(result,maxEnding)

    }
return result

}

const arr = [1, 2, 3]
console.log(kadaneMaxSumofArr(arr))