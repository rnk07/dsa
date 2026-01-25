function merge(arr, left, mid, right) {

    let tempArr = []
    let l = left
    let r = mid + 1

    while (l <= mid && r <= right) {

        if (arr[l] <= arr[r]) {
            tempArr.push(arr[l])
            l++
        } else {
            tempArr.push(arr[r])
            r++
        }

    }

    while (l <= mid) {
        tempArr.push(arr[l])
        l++
    }

    while (r <= right) {
        r++
    }


    for (let i = 0; i < tempArr.length; i++) {

        arr[left + i] = tempArr[i]
    }



}









function sort(arr, left = 0, right = arr.length - 1) {

    if (left >= right) return

    let mid = Math.floor((left + right) / 2)

    sort(arr, left, mid)
    sort(arr, mid + 1, right)
    merge(arr, left, mid, right)

    return arr

}



let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6, 0];
console.log(sort(arr))