const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Place Order : ', bag => {
        large = 0;
        medium=0;
        small=0;
        console.log(`Number of Bags: ${bag} bags of coffee!`);
        bags = bag ;
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
        console.log(`The total price of the coffee ordered is : ${bag*5.50}$`)
        console.log(`Number of Large Boxes is ${large} , the price of large boxes used is ${large*1.80} `);
        console.log(`Number of Medium Boxes : ${medium} the price of medium boxes used is ${medium*1.00} `);
        console.log(`Number of Small Boxes : ${small} the price of small boxes used is ${small*0.60} `);
        if(bags === 0) console.log('The small boxes are full');
        else console.log(`The last small box has ${5+bags} bags of coffee`);
        console.log(`The total Cost is : ${large*1.80+medium*1.00+small*0.60+(bag)*5.50}$`);
    readline.close();
  });