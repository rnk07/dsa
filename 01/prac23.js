
function missingNum(arr) {

    for (let i = 1; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] === i) {
                found = true
                break
            }
        }
        if (!found)
            return i

    }
    return -1;
}

const arr = [1, 3, 4, 5]
console.log(missingNum(arr))