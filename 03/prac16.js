function fizzBuzz(n){


    let map = {3:"Fizz", 5:"Buzz"}
    let divisor = [3,5]
    let ans =[]

    for(let i=1; i<= n;i++){
        let s = ""
        for(let num of divisor){


            if (i % num === 0){
                s = s+ map[num]

            }
        }

        if(s === ""){

            s = s+i
        }

        ans.push(s)



    }
return ans

}


const n = 20; 
console.log(fizzBuzz(n)); 
