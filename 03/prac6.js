function mergerCall(arr,left,mid, right){

    let tempArr =[]
    let low = left
    let high = mid+1


    while(low <= mid && high <= right){


        if(arr[low] <= arr[high]){
            tempArr.push(arr[low])
            low++
        }else{
            tempArr.push(arr[high])
            high++
        }

    }
        while(low <= mid){
            tempArr.push(arr[low])
            low++
        }

        while(high <= right){
            tempArr.push(arr[high])
            high++
        }
console.log(`Temp Array: ${tempArr}`)
        
        for(let i =0;i <tempArr.length;i++){
            console.log(left)
            arr[left+i] = tempArr[i]
            console.log(arr)
        }





}

function mergeAndSort(arr,left =0, right =arr.length-1){

    if(left >= right) return

    let mid  = Math.floor((left+right)/2)
    mergeAndSort(arr, left,mid)
    mergeAndSort(arr,mid+1,right)
    mergerCall(arr,left,mid,right)

return arr

}






let arr = [3,2,6,5,1]; 
console.log(mergeAndSort(arr));