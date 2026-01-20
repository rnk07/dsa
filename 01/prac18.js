function maxProfit(stockPrice){

    let profit =0;

    for(let i =1;i<stockPrice.length;i++){

        if(stockPrice[i] > stockPrice[i-1]){
            profit = profit + (stockPrice[i]- stockPrice[i-1])
        }

    }
return profit


}


let stockPrice = [100, 180, 10, 310, 40, 535, 695]
console.log(maxProfit(stockPrice))