function isPalindrome(s, left, right) {
 
    if(left >= right) return true

    if(s[left] !== s[right]) return false





    return isPalindrome(s, left + 1, right - 1)


}

let s = "aabba"
console.log(isPalindrome(s, 0, s.length - 1))