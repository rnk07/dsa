


function reverseArray(arr) {

    let left = 0, right = arr.length - 1;

    while (left < right) {


        [arr[left], arr[right]] = [arr[right], arr[left]]

        left++;
        right--

    }
    
}

let arr = [1, 2, 3, 4, 5]
reverseArray(arr)
console.log(arr)