function reverseString(s){

    let left =0
    let right = s.length-1

    s = s.split("")

    while(left < right){

        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }

    return s.join("")



}


let s ="ronak"
console.log(reverseString(s))