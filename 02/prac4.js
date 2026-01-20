function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];

        if (map.has(need)) {
            console.log(map.get(need))
            return [map.get(need), i];
        }

       map.set(nums[i], i);
       console.log(map)
    }
}

let nums = [1,2,3,4,5,6]
let target = 10
console.log(twoSum(nums,target))