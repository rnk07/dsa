function uniqueIdentifier(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {

            if (nums[i] === nums[j]) {
                count++
            }

        }
        if(count ===1){
            return nums[i]
        }

    }
    return -1
}

let nums = [20,  5, 5, 20 ,30,30]
console.log(uniqueIdentifier(nums))