function freqCount(arr){

    let map = new Map()

    for( let num of arr){
        map.set(num, (map.get(num) || 0)+1)
    }
    return map
}

let arr =[1,2,3,4,5,2,1,6]
console.log(freqCount(arr))
