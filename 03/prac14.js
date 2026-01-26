function isSubset(a,b){


    const hashSet = new Set(a)

    for(const num of b){
        if(!hashSet.has(num)){
            console.log(`for ${num} I am in if valid`)
            return false
        }
    }
return true


}


const a = [11, 1, 13, 21, 3, 7];
const b = [11, 3, 7, 111];

console.log(isSubset(a,b))