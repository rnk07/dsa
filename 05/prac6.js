function reverseString(s,n){

    if(n<1) return

    if(n === 1) return s[0]

    return  s[n-1] + reverseString(s, n-1)




}

let s = "ronak"
console.log(reverseString(s, s.length))