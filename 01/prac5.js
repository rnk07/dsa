function removeDuplicateSorted(nums) {
    let duplicates = []

    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] !== nums[i + 1]) {
            duplicates.push(nums[i])
        }
        
    }

    return duplicates
}

let nums = [1,2,2,2,3,4,4,5,5]
console.log(removeDuplicateSorted(nums)) // [1,2,3,4,5]   