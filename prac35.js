function threeSplitEqualSumArray(arr) {
    let finalResutl = []
    let totalSum = 0

    for (let ele of arr) {
        totalSum = totalSum + ele
    }

    if (totalSum % 3 !== 0) {
        finalResutl = [-1, -1]
        return finalResutl
    }


    let sumTracker = 0;
    for (let i = 0; i < arr.length; i++) {

        sumTracker = sumTracker + arr[i]
        if (sumTracker === totalSum / 3) {
            finalResutl.push(i)
            sumTracker = 0;
        }



        if (finalResutl.length == 2 && i < arr.length - 1) {
            return finalResutl
        }



    }

    finalResutl = [-1, -1]
    return finalResutl


}

let arr = [1, 3, 4, 0, 4]
console.log(threeSplitEqualSumArray(arr))
