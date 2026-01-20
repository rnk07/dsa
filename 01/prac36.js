function maxOnes(arr, k) {
    let res = 0;

    // Exploring all subarrays
    for (let i = 0; i < arr.length; i++) {
        
        // Counter for zeroes
        let cnt = 0;
        for (let j = i; j < arr.length; j++) {
            console.log(`Value of j: ${j}`)
            if (arr[j] === 0) 
                cnt++;
            
            // If cnt is less than or equal to k, then  
            // all zeroes can be flipped to one
            if (cnt <= k)
                res = Math.max(res, j - i + 1);

            console.log(`Zero Counter: ${cnt}`)
            console.log(`Result Length ${res} for i : ${i}`)
        }
    }
    
    return res;
}

// Driver code
const arr = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1];
const k = 2;
console.log(maxOnes(arr, k));