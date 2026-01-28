function isSubseq(s1, s2) {

    let s1Len = s1.length
    let s2Len = s2.length


    let i = 0
    let j = 0

    while (i < s1Len && j < s2Len) {

        console.log(`${s1[i]} and ${s2[j]}`)
        if (s1[i] === s2[j]) {
            i++
        }

        j++

    }

    return i === s1Len


}

let s1 = "AXY"
let s2 = "XADCYPY"
console.log(isSubseq(s1, s2))