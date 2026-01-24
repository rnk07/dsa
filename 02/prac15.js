function bitonicFinder(arr) {

    let n = arr.length



    if (n == 1 || arr[0] > arr[1]) {
        return arr[0]
    }

    if (arr[n - 1] > arr[n - 2]) {
        return arr[n - 1]
    }

    let low = 1;
    let high = n - 2

   
    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        // console.log(mid)

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {

            return arr[mid]

        }

        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
        
    }
    return arr[high]
   

}




let arr = [120, 100, 80, 20, 0]
console.log(bitonicFinder(arr))