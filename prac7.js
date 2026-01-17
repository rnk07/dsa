

function generateAllSubArrays(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let temp = [];

        for (let j = i; j < arr.length; j++) {
           
            temp.push(arr[j]);
          
            result.push([...temp]);
        }
    }

    return result;
}


let arr = [1, 2,3]
console.log(generateAllSubArrays(arr))





