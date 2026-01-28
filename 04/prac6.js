function isPalindrome(s){

let n = s.length

for(let i=0;i<n/2;i++){


    if(s[i] !== s[n-1-i]){
        return false
    }

}
return true

}


let s = "abbc"
console.log(isPalindrome(s))