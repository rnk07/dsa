function sumClosest(arr, target) {

    arr.sort((a, b) => a - b)
    console.log(arr)

    let n = arr.length
    let left = 0;
    let right = n - 1
    let minDiff = Infinity
    let res =[]

    while (left < right) {

        let currSum = arr[left] + arr[right]

        if( Math.abs(target - currSum) < minDiff){

            minDiff  = Math.abs(target-currSum)
            res = [arr[left],arr[right]]
        }


        if(currSum < target){
            left++
        }else if( currSum > target){
            right--
        }else
            return res



    }

return res

}



let arr = [5, 2, 7, 1, 4];
let target = 10;
console.log(sumClosest(arr, target));