function findRepat(arr) {


    let n = arr.length;

    let actualSum = arr.reduce((a,b)=> a+b)
    console.log(actualSum)
    let expectedSum  = ((n-1)*n)/2
    console.log(expectedSum)

    return actualSum -expectedSum
}

const arr = [1, 2, 3, 4, 5,5]
console.log(findRepat(arr))