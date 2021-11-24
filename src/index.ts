import * as prompt from 'prompt-sync';
import some from 'lodash/some';
import filter from 'lodash/filter';

const usePrompt = prompt({sigint: true});

type arrayOfNumber = Array<number>;
let Box = {
    large:0,
    medium:0,
    small:0
}

let guess:boolean = false, guessOption:boolean = false;

console.log("\n From 1-4 the input is an array of the numbers : 52, 208, 31, 66, 110, 5, 88, 300. \n\n 1- Displaying the total number of bags ordered, total price of coffee,\n    number of boxes used from each size and their respective prices, and the total order price(bags + coffee). \n\n 2- Print the costs from the lowest to highest \n\n 3- Print only the cost above 280$. \n\n 4- For every cost above 400$ make a discount of 15%. \n\n 5- Display the list of options (Add order, delete order, find order, checkout). \n    Please make sure the options you choosing is available\n");

let a:arrayOfNumber = [52,208,31,66,110,5,88,300];
let display:Function, cost:Function;

display = (array:arrayOfNumber) : void =>{
    array.map(bags=>{
        console.log({bags});
        let contains =0;
        let tempBags = bags;
        switch(true) {
            case (tempBags>=20):
                Box.large = (tempBags - tempBags % 20)/20;
                tempBags = tempBags%20;
            case (tempBags >= 10):
                Box.medium = (tempBags - tempBags % 10)/10;
                tempBags = tempBags%10;
            case (tempBags >= 5):
                Box.small = (tempBags - tempBags % 5)/5;
                tempBags = tempBags%5;
        }
        if(tempBags > 0) {
            Box.small++ ;
            contains = 0;
        }
        let priceOfCoffee = bags*5.50 ;
        let totalCost = Box.large*1.80+Box.medium*1.00+Box.small*0.60+priceOfCoffee ;
        console.log({priceOfCoffee});
        console.log(`{ Number of Large Boxes : ${Box.large} , Price of large boxes used : ${Box.large*1.80} }`);
        console.log(`{ Number of Medium Boxes : ${Box.medium} , Price of medium boxes used : ${Box.medium*1.00} }`);
        console.log(`{ Number of Small Boxes : ${Box.small} , Price of small boxes used : ${Box.small*0.60} }`);
        if(contains > 0) console.log(`{ The last small box has ${contains} bags of coffee }`);
        console.log({totalCost});
        console.log('--------------------------------------------------------------------------------------');
    })
}

cost = (bags:number) : number =>{
    let contains =0;
    let tempBags = bags;
    switch(true) {
        case (tempBags>=20):
            Box.large = (tempBags - tempBags % 20)/20;
            tempBags = tempBags%20;
        case (tempBags >= 10):
            Box.medium = (tempBags - tempBags % 10)/10;
            tempBags = tempBags%10;
        case (tempBags >= 5):
            Box.small = (tempBags - tempBags % 5)/5;
            tempBags = tempBags%5;
    }
    if(tempBags > 0) {
        Box.small++ ;
        contains = 0;
    }
    let priceOfCoffee = bags*5.50 ;
    let totalCost = Box.large*1.80+Box.medium*1.00+Box.small*0.60+priceOfCoffee ;
    return totalCost;
}

while(!guess) {
    let question = usePrompt('choose a question: ');
    switch(question){
        case "1":
            console.log('\nDisplay the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
            display(a);
            break;
        case "2":
            console.log('\nCosts from lowest to highest of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
            let b:arrayOfNumber = a;
            b.sort((a1, a2)=>{return a1 - a2});
            b.map(bags=>{
                console.log({bags});
                let totalCost = cost(bags);
                console.log({totalCost});
                console.log('##########');
            })
            break;
        case "3":
            console.log('\nCosts above 280$ of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
            a.map(bags=>{
                if(cost(bags)>280){
                    console.log({bags});
                    let totalCost = cost(bags);
                    console.log({totalCost});
                    console.log('##########');
                }
            })
            break;
        case "4":
            console.log('\nDiscount 15% on costs above 400$ of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
            a.map(bags=>{
                console.log({bags});
                let totalCost = cost(bags);
                if(totalCost > 400) {
                    let discount = totalCost*(15/100);
                    let afterDiscount = totalCost - discount;
                    let originalCost = totalCost;
                    console.log({originalCost});
                    console.log({afterDiscount});
                    console.log('-----------------');
                }
                else
                    console.log({totalCost});
                console.log('##########');
            })
            break;
        case "5":
            console.log('\nDisplay the list of options (Add order, delete order, find order, checkout).\nA for Add  , B for Delete , C for Find , D for Checkout, Q for Exit.\n');
            let orders:Array<number> = [];
            while (!guessOption) {
                let option = usePrompt('choose an option: ');
                //Exit
                switch(option.toUpperCase()) {
                    case "Q":
                        console.log('exit program!');
                        guessOption = true;
                        break;
                    case "A":
                        let orderA = usePrompt('Add an order: ');
                        orders.push(+orderA);
                        console.log({orders});
                        console.log('-----------------');
                        break;
                    case "B":
                        let orderB = usePrompt('Delete an order: ');
                        let b = orders.filter(e => e === +orderB);
                        b.forEach(f => orders.splice(orders.findIndex(e => e === f),1));
                        console.log({orders});
                        console.log('-----------------');
                        break;
                    case "C":
                        let find = usePrompt('Find an order: ');
                        let bool = some(orders, order=>order === +find);
                        if (bool) {
                        let order = filter(orders, order=>order === +find);
                        console.log({order});
                        break;
                        }
                        else console.log(' Not Found! ');
                        console.log('-----------------');
                        break;
                    case "D":
                        console.log(` Checkout: `);
                        display(orders);
                        break;
                    default:
                        console.log(` ${option} is not an option, choose again! `);
                        console.log(' The options are : A for Add  , B for Delete , C for Find , D for Checkout and Q for Exit! ');
                        console.log('--------------------------------------------------------------------------------------');
                        break;
                }
            }
            break;
        default:
            guess = true;
            break;
    }
}