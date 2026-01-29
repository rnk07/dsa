function urlify(s) {

    // one liner 
    // return s.split(" ").join("%20")

    let strArr = []

    for (let i = 0; i < s.length; i++) {


        if (s[i] === " ") {
            strArr.push("%20")
            

        } else {
            strArr.push(s[i])

        }


    }
return strArr.join("")
}

let s = "i love programming"
console.log(urlify(s))
