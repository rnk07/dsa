function floorAndCeil(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    let floor = -1;
    let ceil = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            floor = mid;
            ceil = mid;
            break;
        }

        if (arr[mid] < x) {
            floor = mid;      // possible floor
            low = mid + 1;    // look for bigger floor
        } else {
            ceil = mid;       // possible ceil
            high = mid - 1;   // look for smaller ceil
        }
    }

    return { floor, ceil };
}





let arr =  [1, 2, 8, 10, 10, 12, 19]
let x =3
console.log(floorAndCeil(arr, x))