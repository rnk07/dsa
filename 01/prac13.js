function incrementByK(arr, k) {

    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }

    }

    let noOfOps = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== max) {
            if ((max - arr[i]) % k !== 0) {
                return -1
            } else {
                noOfOps = noOfOps + ((max - arr[i]) / k)
            }
        }
    }
return noOfOps

}


let arr = [4, 7, 19, 16]
let k = 3;
console.log(incrementByK(arr, k))