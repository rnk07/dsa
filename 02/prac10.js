function merge(arr,left,mid, right) {

let temp =[]
let i =left;
let j =mid+1


// compare and merger




}



function mergeSort(arr, left = 0, right = arr.length - 1) {

    if (left >= right)
        return;

    const mid = Math.floor((left+right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)

    merge(arr, left, mid, right)

}

let arr = [3, 55, 6, 7, 22, 1, 0]
console.log(mergeSort(arr))