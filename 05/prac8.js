function decimalToBinary(num) {
    if (num === 0) return "0"

    function helper(num){
        if(num ===0) return ""

        return helper(Math.floor(num / 2)) + (num % 2)
    }
    return helper(num)
}


let num = 15;
console.log(decimalToBinary(num))