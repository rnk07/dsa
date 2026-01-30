function kthNonRepeater(str, k) {

    let map = new Map()


    for (let i = 0; i < str.length; i++) {

        map.set(str[i], (map.get(str[i]) || 0) + 1)

    }
    console.log(map)

    let kCounter = 0;

    for (let i = 0; i < str.length; i++) {

        if (map.get(str[i]) === 1) {

            kCounter++;

            if (kCounter === k) {
                return str[i]
            }
        }
    }

    return -1;


}

const str = "geeksforgeeks";
const k = 1;
console.log(kthNonRepeater(str, k))