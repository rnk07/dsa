
function hoarePartition(arr, low, high) {

    let pivot = arr[low]
    let i = low - 1;
    let j = high + 1;

    while (true) {

        // i condition
        do {
            i++
        } while (arr[i] < pivot)

        // j found condition

        do {
            j--
        } while (arr[j] > pivot)

        if (i >= j) {
            return j
        }

        // Swap elements when i and j found conditoin is true
        [arr[i], arr[j]] = [arr[j], arr[i]]


    }


return arr


}


function quickSortHoare(arr, low = 0, high = arr.length - 1) {
    
    console.log(`low: ${low} , high: ${high}`)
    if (low < high) {

        // here we use partiton and partition index 
        let p = hoarePartition(arr, low, high)
        console.log(`Partition Index: ${p}`)

        // recursively sort left and right array
        
        console.log(`Left Streak: ${quickSortHoare(arr, low, p)}`)
        
        console.log(`Right Streak: ${quickSortHoare(arr, p + 1, high)}`)
       

    }
return arr
}


let arr = [8, 3, 1, 7, 0, 10, 2]
console.log(quickSortHoare(arr))
