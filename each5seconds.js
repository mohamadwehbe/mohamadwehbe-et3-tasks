var a = new Array(52,208,31,66,110,5,88,300);

setInterval(()=>{ 

    a.map(bags=>{
        large = medium = small = contains =0;
        tempBags = bags;
        if(tempBags >= 20) {
            large = (tempBags - tempBags % 20)/20;
            tempBags = tempBags%20;
        }
        if(tempBags >= 10) {
            medium = (tempBags - tempBags % 10)/10;
            tempBags = tempBags%10;
        }
        if(tempBags >= 5) {
            small = (tempBags - tempBags % 5)/5;
            tempBags = tempBags%5;
        }
        if(tempBags > 0) {
            small ++;
            contains = tempBags ;
        }
        priceOfCoffee = bags*5.50 ;
        console.log({priceOfCoffee});
        console.log(`{ Number of Large Boxes : ${large} , Price of large boxes used : ${large*1.80} }`);
        console.log(`{ Number of Medium Boxes : ${medium} , Price of medium boxes used : ${medium*1.00} }`);
        console.log(`{ Number of Small Boxes : ${small} , Price of small boxes used : ${small*0.60} }`);
        if(contains > 0) console.log(`{ The last small box has ${contains} bags of coffee }`);
        totalCost = large*1.80+medium*1.00+small*0.60+(bags)*5.50 ;
        console.log({totalCost});
    })

}, 5000);//Runs each 5 seconds