function morethanNbyK(arr,k){

    let n = arr.length
    const x = Math.floor(n/k)

    let freqOb = {}

    for( let i =0;i <n ;i++){


        freqOb[arr[i]] =  (freqOb[arr[i]] || 0) +1;
        console.log(freqOb)

    }

    for( let key in freqOb){

        if(freqOb[key] >x){
            console.log(key)
        }
    }


}




const arr = [ 3, 4, 2, 2, 1, 2, 3, 3 ];
const k = 4;
morethanNbyK(arr, k);