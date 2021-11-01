const prompt = require('prompt-sync')({sigint: true});

let guess = false;
 
while (!guess) {

  let option = prompt('choose an option: ');

  if (option === "q" || option === "Q" ) {
    console.log('exit program!');
    guess = true;
  }
  else if( option === "a" || option === "A" )
    console.log(` option is : ${option} `);
  else if( option === "b" || option === "B" )
    console.log(` option is : ${option} `);
  else if( option === "c" || option === "C" )
    console.log(` option is : ${option} `);
  else if( option === "d" || option === "D" )
    console.log(` option is : ${option} `);
  else
    console.log(` ${option} is not an option, choose again! `);
}