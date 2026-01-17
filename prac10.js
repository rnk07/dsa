function rotationArray(nums,pass){

    while(pass>0){

        nums.unshift(nums.pop())
        pass--;


    }


}

let nums = [1,2,3,4,5]
let pass =2;

rotationArray(nums,pass)
console.log(nums)