function isEqual(a, b) {

    if (!(a.length === b.length)) return false

    let map = {}

    for (let num of a) {
        map[num] = (map[num] || 0) + 1
    }
    console.log(map)

    for (let num of b) {

        if (!(num in map) || map[num] === 0) {
            return false

        }
        map[num]--
    }
    console.log(map)
    return true



}


const a = [11, 11, 13, 21, 3, 1];
const b = [11, 1, 21, 13, 3, 11,6];

console.log(isEqual(a, b))