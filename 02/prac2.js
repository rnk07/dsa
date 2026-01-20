function getSecondLargest(arr) {

    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
    let ans = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            thirdLargest = secondLargest
            secondLargest = largest;
            largest = arr[i]
        }

        else if (arr[i] < largest && arr[i] > secondLargest) {
            thirdLargest = secondLargest
            secondLargest = arr[i]
        }
        else if (arr[i] > thirdLargest && arr[i] < largest && arr[i] < secondLargest ) {
            thirdLargest = arr[i]
        }

    }
    if (largest !== -Infinity) ans.push(largest)
    if (secondLargest !== -Infinity) ans.push(secondLargest)
    if (thirdLargest !== -Infinity) ans.push(thirdLargest)
    return ans



}

const arr = [-10,-20,-30]
console.log(getSecondLargest(arr));