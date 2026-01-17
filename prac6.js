

function generateAllSubArrays(arr) {

    let result = [];

    for(let i = 0; i < arr.length; i++) {

        for(let j = i+1; j<= arr.length;j++){

            let temp =arr.slice(i,j)
            result.push(temp)

        }

    }

return result
}


let arr = [1,2,3]
console.log(generateAllSubArrays(arr))





