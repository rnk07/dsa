
function dupWithinKDist(arr, k) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i+1; j < arr.length && j<= i + k; j++) {

            if (i !== j && arr[i] === arr[j]) {
                console.log(`Index of both val is ${i}&${j}`,`Duplicate val is:${arr[j]}`)
                let dist = j - i
                if (dist <= k) {
                    return "Yes"
                }
            }
        }

    }
    return "No"
}



let arr = [1,2,1,3,2,4,5,6], k = 3;
console.log(dupWithinKDist(arr, k))