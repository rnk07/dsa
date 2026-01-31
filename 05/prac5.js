function sumOfArray(a, n) {




    if (n <= 0) return 0


    console.log(a)
    return sumOfArray(a,n-1) + a[n - 1]







}

let a = [1, 2, 3]
console.log(sumOfArray(a, a.length))