const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Place Order : ', bags => {
      //count large,medium,and small
        large = 0;
        medium=0;
        small=0;
        console.log({bags});
        bag = bags ;
        while (bag >= 20) {
            large++;
            bag = bag - 20;
        }
        while(bag >=10) {
            medium++;
            bag = bag - 10;
        }
        while(bag > 0) {
        small++;
        bag = bag - 5;
        }
        priceOfCoffee = bags*5.50 ;
        console.log({priceOfCoffee});
        console.log(`{ Number of Large Boxes : ${large} , Price of large boxes used : ${large*1.80} }`);
        console.log(`{ Number of Medium Boxes : ${medium} , Price of medium boxes used : ${medium*1.00} }`);
        console.log(`{ Number of Small Boxes : ${small} , Price of small boxes used : ${small*0.60} }`);
        if(bag === 0) console.log('{The small boxes are full}');
        else console.log(`{ The last small box has ${5+bag} bags of coffee }`);
        totalCost = large*1.80+medium*1.00+small*0.60+(bags)*5.50 ;
        console.log({totalCost});
    readline.close();
  });