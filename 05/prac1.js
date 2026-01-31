function printFun(test){

    if(test<1)
        return 
    else{
        console.log(test)
        printFun(test-1)
        console.log(test)
        return

    }
}

let test = 3;
printFun(test);