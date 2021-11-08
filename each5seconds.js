setInterval(function(){ 

    var a = new Array(52,208,31,66,110,5,88,300);

    for(i =0 ; i<a.length;i++)
    {
        //count large,medium,and small
        large = 0;
        medium=0;
        small=0;
        console.log(`{ numberOfBags: ${a[i]} }`);
        bags = a[i] ;
        while (bags >= 20) {
            large++;
            bags = bags - 20;
        }
        while(bags >=10) {
            medium++;
            bags = bags - 10;
        }
        while(bags > 0) {
        small++;
        bags = bags - 5;
        }
        priceOfCoffee = a[i]*5.50 ;
        console.log({priceOfCoffee});
        console.log(`{ Number of Large Boxes : ${large} , Price of large boxes used : ${large*1.80} }`);
        console.log(`{ Number of Medium Boxes : ${medium} , Price of medium boxes used : ${medium*1.00} }`);
        console.log(`{ Number of Small Boxes : ${small} , Price of small boxes used : ${small*0.60} }`);
        if(bags === 0) console.log('The small boxes are full');
        else console.log(`The last small box has ${5+bags} bags of coffee`);
        totalCost = large*1.80+medium*1.00+small*0.60+(a[i])*5.50 ;
        console.log({totalCost});
    }
}, 5000);//Runs each 5 seconds