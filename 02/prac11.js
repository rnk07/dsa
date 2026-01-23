function merge(arr, left, mid, right) {

    let temp = []
    let i = left
    let j = mid + 1

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[j])
            j++
        }
    }

    // Remaining Ele from left half
    while (i <= mid) {
        temp.push(arr[i])
        i++
    }

    while (j <= right) {
        temp.push(arr[j])
        j++
    }


    for (let k = 0; k < temp.length; k++) {

        arr[left + k] = temp[k]
    }

    
}



function mergeSort(arr, left = 0, right = arr.length - 1) {


    if (left >= right) return

    const mid = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)

return arr
}


let arr = [3, 5, 2, 6, 7, 2, 3, 0,1,2,9]
console.log(mergeSort(arr))