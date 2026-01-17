

var twoSum = function (nums, target) {
let map = {};

    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];

        if (map[need] !== undefined) {
         
            return [map[need], i];
        }

        map[nums[i]] = i;
    }

    return []; 

}
let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums,target))