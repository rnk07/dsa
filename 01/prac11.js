function zeroAtEnd(arr){

    let temp =[]
    let tempIdx = 0

    for(let i =0 ;i <arr.length;i++){

        if(arr[i] !== 0){
            temp[tempIdx] = arr[i]
            tempIdx++
        }
    }

    while(tempIdx <arr.length){
        temp[tempIdx] = 0;
        tempIdx++
    }

    for(let i=0;i<temp.length;i++){
        arr[i] = temp[i]
    }
return arr
}

let arr =[0,1,0,2]
console.log(zeroAtEnd(arr))