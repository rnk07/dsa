function reverseString(a) {

    let stack = []

    for (let i = 0; i < a.length; i++) {

        stack.push(a[i])
    }
    let reverseStack = []
    for (let i = 0; i < a.length; i++) {

        reverseStack[i] = stack.pop()

    }



    return reverseStack.join("")
}

let a = "ronak"
console.log(reverseString(a))