
function findTriplet(arr) {
    let n = arr.length

    let leftMin = new Array(n)
    leftMin[0] = arr[0]
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(arr[i], leftMin[i - 1])
    }

    console.log(leftMin)
    let rightMax = new Array(n)
    rightMax[n - 1] = arr[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(arr[i], rightMax[i + 1])
    }
     console.log(rightMax)

    for (let j = 1; j < n - 1; j++) {
        if (leftMin[j] < arr[j] && arr[j] < rightMax[j]) {
            console.log(j)
            return [leftMin[j], arr[j], rightMax[j]]
        }
    }
    return "No Triplet"
}

const arr = [4,3,2,1]

console.log(findTriplet(arr))
