function twoSum(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
    
      
          console.log(`Value of i: ${i}`)
        for (let j = i + 1; j < n; j++) {
        
          console.log(`Value of j: ${j}`)
          console.log(`Sum of ${i} ${j} ele is: ${arr[i] + arr[j]}`)
            if (arr[i] + arr[j] === target) {
                console.log(`Found target pair.`)
                return true;
            }
        }
    }
    // If no pair is found after checking
    // all possibilities
    return false;
}

// Driver Code
let arr = [0, -1, 2, -3, 1];
let target = -2;

console.log (twoSum(arr, target))
  