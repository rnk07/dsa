function printNtoOne(n){

if(n ==0) return
else{
    console.log(n)
    printNtoOne(n-1)
}

}

let n =3;
printNtoOne(n)