function isBinary(s){


    for(let i=0; i<s.length;i++){

        if(s[i] !== "0" && s[i] !== "1"){
            return false
        }
    }
return true


}




let s = "01010101010";
console.log(isBinary(s));