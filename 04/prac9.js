function isAnagrams(s1, s2) {

    if (s1.length !== s2.length) { return false }
    let map = {}

    for (let ch of s1) {
        map[ch] = (map[ch] || 0) + 1
    }
    console.log(map)

    for (let ch of s2) {
        map[ch] = (map[ch] || 0) - 1
    }
    console.log(map)

    for (let ele in map) {

        console.log(`$value of {ele} is: ${map[ele]}`)
        if (map[ele] !== 0) {
            return false
        }
    }
    return true

}


let s1 = "geeksq"
let s2 = "eekgs"
console.log(isAnagrams(s1, s2))



// let map ={}
// let map2 = new Map()


// map[s1[0]] = (map[s1[0]] ||0) +1
// console.log(map)


// map2.set(s1[0], (map2.get([s1[0]]) ||0) +1)
// console.log(map2)