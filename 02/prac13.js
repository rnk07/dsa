
function commonElements(arr1, arr2, arr3) {


    let i = 0
    let j = 0
    let k = 0
    let common = []


    while (i < arr1.length && j < arr2.length && k < arr3.length) {


        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {


            common.push(arr1[i])
            i++
            j++
            k++


        } else if (arr1[i] < arr2[j]) {

            i++
        } else if (arr2[j] < arr3[k]) {
            j++
        } else
            k++




    }

    return common


}


let arr1 = [1, 5, 20, 30];
let arr2 = [5, 13, 20, 30];
let arr3 = [5, 20, 30];
console.log(commonElements(arr1, arr2, arr3));