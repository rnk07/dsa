function removeCharAtPos(s,pos){

    let ans =""

    if(pos< 0 || pos>= s.length){
        return s
    }

    ans = s.slice(0,pos) + s.slice(pos+1)
    return ans

}


let s = "abcde";
let pos = 1;

console.log(removeCharAtPos(s,pos))

