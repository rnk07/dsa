function sumOfNum(num){

    if(num === 0) return 0

    return Math.floor((num%10)) + sumOfNum(num/10)

}

let num =12345;
console.log(sumOfNum(num))