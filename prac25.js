
function findMissingRepeating(arr){

    let missing, repating = -1;

    for(let i =0; i<arr.length;i++){
        let index  = Math.abs(arr[i]) -1


        if(arr[index] < 0){
            repating = Math.abs(arr[i])
        }else {
            arr[index] = -arr[index]
        }


    }

    for(let i =0;i<arr.length;i++)
        if(arr[i]>0){
            missing = i+1
        }

return {repating,missing}
}

const arr =[3,1,3]
console.log(findMissingRepeating(arr))