function intesectionOfArray(a,b){

    const aSet = new Set(a)
    console.log(aSet)
    res = []
    for(let i = 0; i< b.length; i++){


        if(aSet.has(b[i])){

            res.push(b[i])

            aSet.delete(b[i])


        }

    }
    return res


}

let a = [1, 2, 3, 2, 1];
let b = [3, 2, 2, 3, 3, 2];

console.log(intesectionOfArray(a,b))
