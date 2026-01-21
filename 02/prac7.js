function countOnes(arr) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;


    while (low <= high) {


        let mid = Math.floor((low + high) / 2)

        if (arr[mid] === 0) {
            high = mid - 1
        }

        else if (mid === n - 1 || arr[mid + 1] !== 1)
            return mid + 1

        else
            console.log("else")
            low = mid + 1
    }

    return 0

}

let arr = [1,1,1,1,1]
console.log(countOnes(arr))