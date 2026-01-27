function mostFreqEle(arr){
    
    let freq = new Map()
    
    for(let i =0 ; i<arr.length;i++){
        
        freq.set(arr[i], (freq.get(arr[i]) ||0)+1)
        
    }
    
    console.log(freq)
    
    let maxCount = 0  
    let ansValue = -1;
    for(let [key,val] of freq) {
        
        
        if(maxCount < val || (val === maxCount && key >ansValue)) {
            
            ansValue = key
            maxCount = val
            
            console.log(ansValue,maxCount)
        }
        
    }
    return ansValue
}

let arr = [40, 50, 30, 40, 50, 30];
console.log(mostFreqEle(arr));