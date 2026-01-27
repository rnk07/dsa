function maxDistanceOccruance(arr) {

    let map = {}
    let ans = 0;


    for (let i = 0; i < arr.length; i++) {


        if (!(arr[i] in map)) {
            map[arr[i]] = i
        }else{

            ans = Math.max(ans, i -map[arr[i]])

        }
    }
return ans

}

const arr = [1, 1, 2, 2, 2, 1]
console.log(maxDistanceOccruance(arr))