

// findLeaders(nums) // [17, 5, 2] 
// Explanation: The leaders in the array are 17, 5, and 2.


function findLeaders(nums) {

    let leaders = [];
    let maxFromRightSide = nums[nums.length -1]

    leaders.push(maxFromRightSide)


    for(i =nums.length-2; i>=0 ;i--){

        if(nums[i]> maxFromRightSide){
            maxFromRightSide = nums[i]
            leaders.push(maxFromRightSide)


        }

    }
return leaders.reverse()

}
let nums = [1,2,3,4,5,2]
console.log(findLeaders(nums)) // [5, 2]