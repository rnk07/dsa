function minCostArraySizeOne(arr){

 return ((arr.length-1)*Math.min(...arr))


}

let arr = [4,3,2,5,3,1]
console.log(minCostArraySizeOne(arr))
