const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Place Order : ', nb => {
    console.log(`Your Order is : ${nb}-lb of coffee !`);
    readline.close();
  });