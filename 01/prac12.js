function moveZeroEnd(arr) {

   let count = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
         arr[count] = arr[i]
         count++;
      }
   }
while (count < arr.length){
        arr[count++] = 0;
}

}


let arr = [0, 1, 2, 0, ]
moveZeroEnd(arr)
console.log(arr)