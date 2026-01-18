// let a =5;
// let b =5;

// console.log(a^b)

function uniqueFiner(arr){

    let result =0;

    for(let i =0;i<arr.length;i++){

        result =result ^ arr[i]
    }

    return result
}

const arr = [1,1,2,3,2];
console.log(uniqueFiner(arr));