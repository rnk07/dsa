function countPairs(arr, target) {

    const freqMap = new Map()
    let count = 0;


    for (let i = 0; i < arr.length; i++) {

        if (freqMap.has(target - arr[i])) {

            count = count + freqMap.get(target-arr[i])

        }


        freqMap.set(arr[i], ((freqMap.get(arr[i]) || 0) + 1))


    }

    return count



}


const arr = [1, 5, 7, -1, 5];
const target = 6;
console.log(countPairs(arr, target));