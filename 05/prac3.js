function printTillN(n){
    if(n == 0)
        return;
    
 
    printTillN(n-1);
    console.log(n)
        
}

let n =5;
printTillN(n)