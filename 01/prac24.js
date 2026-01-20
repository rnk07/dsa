function missingFind(arr){

    let n = arr.length+1
    let sum =0
    for(let  i =0;i<arr.length;i++){
        console.log(arr[i])
        sum = sum + arr[i]

    }
console.log(sum)
    let actualSum = (n*(n+1))/2
console.log(actualSum)
    return actualSum - sum

}

const arr = [1,3,4,5]
console.log(`Missing number ${missingFind(arr)} `)