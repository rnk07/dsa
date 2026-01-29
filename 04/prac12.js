function findEarliestRepeater(s) {

    let map = {}
    let counter = 0

    for(let i = 0;i<s.length;i++){
        map[s[i]] = (map[s[i]]|| 0)+1

        if(map[s[i]] !== 1){
            return s[i]
        }

        console.log(`${s[i]} added.`)


    }
    return -1
}

let s = "ronak"
console.log(findEarliestRepeater(s))


