function convertToCamelCase(s) {

    let res = []
    let spaceCheck = false
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            spaceCheck = true

        }
        else if (spaceCheck === true) {
            res.push(s[i].toUpperCase())
            spaceCheck = false

        }
        else {
            res.push(s[i])

        }
    }

    return res.join("")

}

let s = "i got intern at geeksforgeeks";
console.log(convertToCamelCase(s));