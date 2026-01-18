function maxProfit(stockPrice){


    let profit =0;

    for(let i =0; i<stockPrice.length;i++){

        if(stockPrice[i+1] > stockPrice[i]){
            profit = profit + (stockPrice[i+1] - stockPrice[i])
        }



    }
return profit

}

let stockPrice = [100, 180, 10, 310, 40, 535, 695]
console.log(maxProfit(stockPrice))