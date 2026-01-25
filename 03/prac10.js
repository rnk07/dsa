function sortMatrx(mat) {

    let row = mat.length
    let col = mat[0].length

    let matSize = row * col

    // Now loop to sort matrix using buble sort


    for (let i = 0; i < matSize; i++) {
        for (let j = 0; j < matSize - 1; j++) {

            

            if (mat[(Math.floor(j/col))][j%col] >
                mat[(Math.floor((j+1)/col))][(j+1)%col]

            ) {

                let temp = mat[(Math.floor(j/col))][j%col]
                mat[(Math.floor(j/col))][j%col] = mat[(Math.floor((j+1)/col))][(j+1)%col]
                mat[(Math.floor((j+1)/col))][(j+1)%col] = temp

            }





        }
       
    }

    return mat
}


let mat = [[5, 4, 7],
[1, 3, 8],
[2, 9, 6]
];


console.log(sortMatrx(mat))