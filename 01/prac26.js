

function findMissingRepating(arr) {
    let n = arr.length

    let missing, repeating = -1
    let freq = new Array(n + 1).fill(0)

    for (let i = 0; i < n; i++) {
        freq[arr[i]]++
    }

    console.log(freq)

    for (let i = 1; i <= n; i++) {

        if (freq[i] === 0) missing = i
        else if (freq[i] == 2) repeating = i
    }
    return {missing,repeating}
}

const arr = [1, 2, 3, 5, 6, 5]
console.log(findMissingRepating(arr))