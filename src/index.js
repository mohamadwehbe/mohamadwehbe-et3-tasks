const prompt = require('prompt-sync')({sigint: true});
const { compact } = require('lodash');
const _ = require('lodash/core');
let guess = false;
let guessOption = false;

console.log("\n From 1-4 the input is an array of the numbers : 52, 208, 31, 66, 110, 5, 88, 300. \n\n 1- Displaying the total number of bags ordered, total price of coffee,\n    number of boxes used from each size and their respective prices, and the total order price(bags + coffee). \n\n 2- Print the costs from the lowest to highest \n\n 3- Print only the cost above 280$. \n\n 4- For every cost above 400$ make a discount of 15%. \n\n 5- Display the list of options (Add order, delete order, find order, checkout). \n    Please make sure the options you choosing is available\n");

const a = [52,208,31,66,110,5,88,300];

function display (array) {
    array.map(bags=>{
        console.log({bags});
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
        totalCost = large*1.80+medium*1.00+small*0.60+priceOfCoffee ;
        console.log({priceOfCoffee});
        console.log(`{ Number of Large Boxes : ${large} , Price of large boxes used : ${large*1.80} }`);
        console.log(`{ Number of Medium Boxes : ${medium} , Price of medium boxes used : ${medium*1.00} }`);
        console.log(`{ Number of Small Boxes : ${small} , Price of small boxes used : ${small*0.60} }`);
        if(contains > 0) console.log(`{ The last small box has ${contains} bags of coffee }`);
        console.log({totalCost});
        console.log('--------------------------------------------------------------------------------------');
    })
}

function cost (bags) {
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
    totalCost = large*1.80+medium*1.00+small*0.60+priceOfCoffee ;
    return totalCost;
}

while(!guess) {
    let question = prompt('choose a question: ');
    if (question === "1" ) {
        console.log('\nDisplay the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
        display(a);
    }
    else if (question == "2") {
        console.log('\nCosts from lowest to highest of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
        a.sort(function(a, b){return a - b});
        a.map(bags=>{
            console.log({bags});
            total = cost(bags);
            console.log({total});
            console.log('##########');
        })
    }
    else if (question == "3") {
        console.log('\ncosts above 280$ of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
        a.map(bags=>{
            if(cost(bags)>280){
                console.log({bags});
                total = cost(bags);
                console.log({total});
                console.log('##########');
            }
        })
    }
    else if (question == "4") {
        console.log('\nDiscont 15% on costs above 400$ of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
        a.sort((a, b)=>{return a - b});
        a.map(bags=>{
            console.log({bags});
            totalCost = cost(bags);
            if(totalCost > 400) {
                discount = totalCost*(15/100);
                afterDiscount = totalCost - discount;
                originalCost = totalCost;
                console.log({originalCost});
                console.log({afterDiscount});
                console.log('-----------------');
            }
            else
                console.log({totalCost});
            console.log('##########');
        })
    }
    else if (question == "5") {
        console.log('\nDisplay the list of options (Add order, delete order, find order, checkout).\n');
        orders = [];
        while (!guessOption) {
            let option = prompt('choose an option: ');
          //Exit
            if (option === "q" || option === "Q" ) {
              console.log('exit program!');
              guessOption = true;
            }
          //Add order
            else if( option === "a" || option === "A" ) {
              let order = prompt('Add an order: ');
                orders.push(order);
                console.log({orders});
                console.log('-----------------');
            }
          //Delete order
            else if( option === "b" || option === "B" ) {
              let order = prompt('Delete an order: ');
              b = orders.filter(e => e === order);
              b.forEach(f => orders.splice(orders.findIndex(e => e === f),1));
              console.log({orders});
              console.log('-----------------');
            }
          //Find order
            else if( option === "c" || option === "C" ) {
            let find = prompt('Find an order: ');
            bool = _.some(orders, order=>order === find);
            if (bool) {
              order = _.filter(orders, order=>order === find);
              console.log({order});
            }
            else console.log(' Not Found! ');
            console.log('-----------------');
            }
          //Checkout(calculate and print all orders)
            else if( option === "d" || option === "D" ) {
              console.log(` Checkout: `);
              display(orders);
            }
            else {
              console.log(` ${option} is not an option, choose again! `);
              console.log(' The options are : A for Add  , B for Delete , C for Find , D for Checkout and Q for Exit! ');
              console.log('--------------------------------------------------------------------------------------');
            }
          }
    }
    else guess=true;
}