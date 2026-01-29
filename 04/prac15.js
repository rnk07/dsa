function isRotation(s1,s2){

    for(let i = 0;i <s1.length;i++){

        if(s1 === s2){
            return true
        }

        let lastChr = s1[s1.length-1]
        s1 = lastChr + s1.slice(0,s1.length-1)
        console.log(s1)

    }

return false

}

let s1 = "bca"
let s2 = "cab"
console.log(isRotation(s1,s2))

