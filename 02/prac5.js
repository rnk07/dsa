function dupChecker(arr){

    let set = new Set()

    for(let num of arr){

        if(set.has(num)){
            return true
        }
        set.add(num)

    }
return false


}

let arr = [1,2,5,3,4]
console.log(dupChecker(arr))