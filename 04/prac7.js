function findSubstring(txt, pat) {


    for (let i = 0; i < txt.length; i++) {



        let j;
        for ( j = 0; j < pat.length; j++) {


            if (txt[i + j] !== pat[j]) {
                break
            }
        

        }

        if (j === pat.length) {
            return i
        }
    }
    return -1


}




const txt = "geeksforgeeks";
const pat = "eks";
console.log(findSubstring(txt, pat));