function nonRep(s) {

    let visArray = new Array(26).fill(-1)


    for (let i = 0; i < s.length; i++) {

        let index = s.charCodeAt(i) - 97;
        if (visArray[index] === -1) {
            visArray[index] = i
        }
        else {

            visArray[index] = -2;
        }

    }
    console.log(visArray)
    let idx = -1

    for (let i = 0; i < 26; i++) {
        if (visArray[i] >= 0 && (idx === -1 || visArray[i] < visArray[idx]))
            idx = i
    }

    return idx === -1 ? "No non Repeater" : s[visArray[idx]]

}

let s = "ronaktronak";
console.log(nonRep(s));