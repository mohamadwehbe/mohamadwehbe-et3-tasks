const prompt = require('prompt-sync')({sigint: true});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let guess = false;

const orders = [];
 
while (!guess) {

  let option = prompt('choose an option: ');

  if (option === "q" || option === "Q" ) {
    console.log('exit program!');
    guess = true;
  }
  else if( option === "a" || option === "A" ) {
    let order = prompt('Add an order: ');
      orders.push(order);
  }
  else if( option === "b" || option === "B" ) {
    let order = prompt('Delete an order: ');
    b = orders.filter(e => e === order);
    b.forEach(f => orders.splice(orders.findIndex(e => e === f),1));
    console.log(orders);
  }
  else if( option === "c" || option === "C" )
    console.log(` Find order `);
  else if( option === "d" || option === "D" ) {
    console.log(` Checkout: `);
    orders.map(order=>{
      large = 0;
        medium=0;
        small=0;
        console.log(`Number of Bags: ${order} bags of coffee!`);
        bags = order ;
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
        console.log(`The total price of the coffee ordered is : ${order*5.50}$`)
        console.log(`Number of Large Boxes is ${large} , the price of large boxes used is ${large*1.80} `);
        console.log(`Number of Medium Boxes : ${medium} the price of medium boxes used is ${medium*1.00} `);
        console.log(`Number of Small Boxes : ${small} the price of small boxes used is ${small*0.60} `);
        if(bags === 0) console.log('The small boxes are full');
        else console.log(`The last small box has ${5+bags} bags of coffee`);
        console.log(`The total Cost is : ${large*1.80+medium*1.00+small*0.60+(order)*5.50}$`);
    });
  }
  else
    console.log(` ${option} is not an option, choose again! `);
}