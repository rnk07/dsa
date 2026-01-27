function printMissing(arr, low, high) {

    let setTable = new Set()
    let ans = []

    for (let i = 0; i < arr.length; i++) {


        setTable.add(arr[i])

    }
    console.log(setTable)

    for (let i = low; i <= high; i++) {
        if (!setTable.has(i)) {
            // console.log(i)
            ans.push(i

            )
        }
    }
    return ans

}


let arr = [1, 3, 5, 4];
let low = 1, high = 10;
console.log(printMissing(arr, low, high));