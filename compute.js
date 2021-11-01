const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Place Order : ', nb => {
    if(nb % 2 === 0) {
        large = 0;
        medium=0;
        small=0;
        console.log(`Your Order is : ${nb}-lb of coffee!`);
        bags = nb/2
        console.log(`Number of Bags : ${bags} bags of coffee!`);
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
        console.log(`Number of Large Bags : ${large} bags of coffee!`);
        console.log(`Number of Medium Bags : ${medium} bags of coffee!`);
        console.log(`Number of Small Bags : ${small} bags of coffee!`);
        console.log(`Cost is : ${large*1.80+medium*1.00+small*0.60+(nb/2)*5.50}$!`);
    }
    else console.log(`Place Again!`);
    readline.close();
  });