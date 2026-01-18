function uniqueFiner(arr) {
    let map = {}

    for (const num of arr) {

        map[num] = (map[num] || 0) + 1
    }

    for(const key in map){
        if(map[key] === 1){
            return  parseInt(key)
        }
    }
return -1
}


let arr = [2, 3, 5, 4, 5, 3, 4];
console.log(uniqueFiner(arr))
