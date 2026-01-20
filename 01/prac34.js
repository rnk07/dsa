function closeToZeroSum(arr){

    arr.sort((a,b)=> a-b)
    console.log(arr)

    let left =0 
    let right = arr.length -1

    let minAbsSum = Infinity
    let finalBestSum = 0;


    while(left<right){

        let sum  = arr[left] + arr[right]
        let absSum = Math.abs(sum)

        if( absSum< minAbsSum || (absSum ===minAbsSum && sum > finalBestSum)) {


            minAbsSum = absSum;
            finalBestSum = sum;

        }

        if(sum <0){
            left++
        }else if(sum >0){
            right--
        }else{
            return 0 // If Sum is 0.
        }

        
        
        
    }
    return finalBestSum


}


const arr =[0, -8, -6, 3];
console.log(closeToZeroSum(arr))