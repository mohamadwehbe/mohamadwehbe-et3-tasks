const prompt = require('prompt-sync')({sigint: true});

let guess = false;
 
while (!guess) {

  let option = prompt('choose an option: ');

  if (option === "q" || option === "Q" ) {
    console.log('exit program!');
    guess = true;
  }
  else if( option === "a" || option === "A" )
    console.log(` Add order `);
  else if( option === "b" || option === "B" )
    console.log(` Delete order `);
  else if( option === "c" || option === "C" )
    console.log(` Find order `);
  else if( option === "d" || option === "D" )
    console.log(` Checkout `);
  else
    console.log(` ${option} is not an option, choose again! `);
}