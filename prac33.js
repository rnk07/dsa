function twoSumCloseToZero(arr){

    let res =arr[0]+arr[1];

    for(let i =0;i <arr.length-1;i++){

        
        for(let j =i+1;j<arr.length;j++){

            let sum = arr[i] +arr[j]
            console.log(`Sum of i= ${i} & j= ${j} is : ${sum}`)
            if(Math.abs(sum)<Math.abs(res)){
                console.log(`Checking if abs sum ${sum}  is less of abs result ${res}`)
                res =sum
                console.log(`If Block-Now Res is ${res}`)
            }
            else if( Math.abs(sum)=== Math.abs(res)){
                console.log(`Checking equality`)
                res  = Math.max(sum,res)
                console.log(`Equality Block-Now Res is ${res}`)
            }
        }
         
    }
return res
}

const  arr = [0, -8, -6, 3]
console.log(twoSumCloseToZero(arr))