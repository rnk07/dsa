

function merger(arr, left, mid,right){

    let tempArr = []
   
    let low = left
    let high = mid+1


    while(low <= mid && arr[low]<0){
        tempArr.push(arr[low])
        low++
    }

    while(high <= right && arr[high]<0){
        tempArr.push(arr[high])
        high++
    }

  
   while(low <= mid && arr[low]>=0){
        tempArr.push(arr[low])
        low++
    }

    while(high <= right && arr[high]>=0){
        tempArr.push(arr[high])
        high++
    }

    for (let i = 0; i < tempArr.length; i++) {
        arr[left+i] = tempArr[i];
    }

}



function rearrange(arr, left = 0, right= arr.length-1 ){
    
    if(left >= right) return 

        let mid = Math.floor((left+right)/2)


        rearrange(arr, left,mid)
        rearrange(arr, mid+1, right)
        merger(arr, left, mid, right)

    

return arr
}

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(rearrange(arr));