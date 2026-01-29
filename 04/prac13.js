function findFirstNonRepeater(s) {

    let arr = new Array(26).fill(0)


    for (let i = 0; i < s.length; i++) {

        arr[s[i].charCodeAt(0) - 97]++

    }
    console.log(arr)

    for(let ele of s){
        if(arr[ele.charCodeAt(0) -97] ===1){
            return ele
        }
    }

}


let s = "rbnankrakz"
console.log(findFirstNonRepeater(s))


// let arr= s.split("")
// console.log(arr[])
