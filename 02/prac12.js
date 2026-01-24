



function countSmallerEqualEle(mat, x){

    const n = mat.length
    let count = 0;
    let row  = 0;
    let column = n-1;



    while( row <n && column >=0){


        if(mat[row][column] <= x){
            count = count + (column+1)
            row++

        }else{
            column--
        }

        console.log(count)
    }
return count

}

function kthSmallest(mat, k){


    const n = mat.length
    let low = mat[0][0]
    let high =  mat[n-1][n-1]
    let ans  =0 ;

    while(low <= high){


        const mid = low + Math.floor((high-low)/2)
        console.log(`Mid value: ${mid}`)


        const count  = countSmallerEqualEle(mat, mid)


        if(count< k){
            low = mid+1
            console.log(`New Low Value: ${low}`)
        }else{

            ans =mid
            high = mid -1
            console.log(`New High value: ${high}`)
            console.log(`Ans atm : ${ans}`)

        }



    }
return ans

}

const mat = 
                [[10, 20, 30, 40],
                [15, 25, 35, 45],
                [24, 29, 37, 48],
                [32, 33, 39, 50]];
const k = 3;


console.log(kthSmallest(mat,1))