function sortStringChar(userInput) {

    let charCounter = new Array(26).fill(0)

    for (let ch of userInput) {


        charCounter[ch.charCodeAt(0) - 97]++

    }

    let result =''

    for( let i=0;i<charCounter.length;i++){

        result = result+ String.fromCharCode(i+97).repeat(charCounter[i])


    }





return result

}





let userInput = "ronak"
console.log(sortStringChar(userInput))

