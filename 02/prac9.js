function lomutoPartion(arr, low, high) {

    let pivot = arr[high]
    let i = low - 1;


    for (let j = low; j < high; j++) {

        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]


    return i + 1;
}

function quickSortLomuto(arr, low = 0, high = arr.length - 1) {


    if (low < high) {

        let p = lomutoPartion(arr, low, high)



        quickSortLomuto(arr, low, p - 1)
        quickSortLomuto(arr, p + 1, high)

    }

    return arr
}

let arr = [8, 3, 1, 7, 0, 10, 2]
console.log(quickSortLomuto(arr))