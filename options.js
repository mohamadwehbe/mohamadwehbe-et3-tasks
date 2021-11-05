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
  else if( option === "b" || option === "B" )
    console.log(` Delete order `);
  else if( option === "c" || option === "C" )
    console.log(` Find order `);
  else if( option === "d" || option === "D" ) {
    console.log(` Checkout: `);
    orders.map(order=>{
      console.log(order);
    });
  }
  else
    console.log(` ${option} is not an option, choose again! `);
}