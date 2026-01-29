function kAnagram(s1, s2, k) {

    let map1 = new Array(26).fill(0)
    let map2 = new Array(26).fill(0)

    for (let ch of s1) {
        map1[ch.charCodeAt(0) - 97] = (map1[ch] || 0) + 1
    }
    console.log(map1)

    for (let ch of s2) {
        map2[ch.charCodeAt(0) - 97] = (map2[ch] || 0) + 1
    }

    console.log(map2)

    let count = 0

    for (let i = 0; i < 26; i++) {
        if (map1[i] < map2[i]) {
            count++
        }
    }

    if (count > k) return false


    return true

}

let s1 = "anagram"
let s2 = "anauxyz"
let k = 3
console.log(kAnagram(s1, s2, k))