function eqiIndex(arr) {
    let totalSum = 0;
    for(let ele of arr) {
        totalSum =totalSum+ele
    }

    let leftSum = arr[0]; // sum before index 1

    for (let i = 1; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}

let arr =[3,1,1,2]
console.log(eqiIndex(arr))