import * as prompt from 'prompt-sync';
import * as _ from 'lodash/index';

const usePrompt = prompt({sigint: true});

let guess = false;

let orders:Array<number> = [];
 
let display:Function
display = (array:Array<number>) : void =>{
  array.map(bags=>{
      console.log({bags});
      let large:number = 0, medium:number=0,small:number = 0,contains:number = 0;
      let tempBags:number = bags;
      switch(true) {
          case (tempBags>=20):
              large = (tempBags - tempBags % 20)/20;
              tempBags = tempBags%20;
          case (tempBags >= 10):
              medium = (tempBags - tempBags % 10)/10;
              tempBags = tempBags%10;
          case (tempBags >= 5):
              small = (tempBags - tempBags % 5)/5;
              tempBags = tempBags%5;
      }
      if(tempBags > 0) {
          small++ ;
          contains = 0;
      }
      let priceOfCoffee = bags*5.50 ;
      let totalCost = large*1.80+medium*1.00+small*0.60+priceOfCoffee ;
      console.log({priceOfCoffee});
      console.log(`{ Number of Large Boxes : ${large} , Price of large boxes used : ${large*1.80} }`);
      console.log(`{ Number of Medium Boxes : ${medium} , Price of medium boxes used : ${medium*1.00} }`);
      console.log(`{ Number of Small Boxes : ${small} , Price of small boxes used : ${small*0.60} }`);
      if(contains > 0) console.log(`{ The last small box has ${contains} bags of coffee }`);
      console.log({totalCost});
      console.log('--------------------------------------------------------------------------------------');
  })
}

while (!guess) {

  let option = usePrompt('choose an option: ');
  //Exit
  switch(option.toUpperCase()) {
      case "Q":
          console.log('exit program!');
          guess = true;
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
          let bool = _.some(orders, order=>order === +find);
          if (bool) {
          let order = _.filter(orders, order=>order === +find);
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