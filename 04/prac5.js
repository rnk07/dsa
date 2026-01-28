function checkPangram(s) {

    let lowerCaseString = s.toLowerCase()
    console.log(lowerCaseString)
    let maxSize = 26
    let charArray = new Array(maxSize).fill(false)


    for (let i = 0; i < lowerCaseString.length; i++) {

      
        let ch = lowerCaseString[i]
      if(ch >= 'a' && ch <= 'z'){

          charArray[ch.charCodeAt(0) - 97] = true
        }

    }
    console.log(charArray)

    for (let i = 0; i < maxSize; i++) {

        if (!charArray[i]) {
            return false
        }
    }



    return true



}


let s = "The quick brown fox jumps over the lazy dog" 
console.log(checkPangram(s)) 


