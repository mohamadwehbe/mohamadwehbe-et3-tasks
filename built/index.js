"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync");
var _ = require("lodash");
var use = prompt({ sigint: true });
var guess = false;
var guessOption = false;
console.log("\n From 1-4 the input is an array of the numbers : 52, 208, 31, 66, 110, 5, 88, 300. \n\n 1- Displaying the total number of bags ordered, total price of coffee,\n    number of boxes used from each size and their respective prices, and the total order price(bags + coffee). \n\n 2- Print the costs from the lowest to highest \n\n 3- Print only the cost above 280$. \n\n 4- For every cost above 400$ make a discount of 15%. \n\n 5- Display the list of options (Add order, delete order, find order, checkout). \n    Please make sure the options you choosing is available\n");
var a = [52, 208, 31, 66, 110, 5, 88, 300];
function display(array) {
    array.map(function (bags) {
        console.log({ bags: bags });
        var large = 0;
        var medium = 0;
        var small = 0;
        var contains = 0;
        var tempBags = bags;
        if (tempBags >= 20) {
            large = (tempBags - tempBags % 20) / 20;
            tempBags = tempBags % 20;
        }
        if (tempBags >= 10) {
            medium = (tempBags - tempBags % 10) / 10;
            tempBags = tempBags % 10;
        }
        if (tempBags >= 5) {
            small = (tempBags - tempBags % 5) / 5;
            tempBags = tempBags % 5;
        }
        if (tempBags > 0) {
            small++;
            contains = tempBags;
        }
        var priceOfCoffee = bags * 5.50;
        var totalCost = large * 1.80 + medium * 1.00 + small * 0.60 + priceOfCoffee;
        console.log({ priceOfCoffee: priceOfCoffee });
        console.log("{ Number of Large Boxes : " + large + " , Price of large boxes used : " + large * 1.80 + " }");
        console.log("{ Number of Medium Boxes : " + medium + " , Price of medium boxes used : " + medium * 1.00 + " }");
        console.log("{ Number of Small Boxes : " + small + " , Price of small boxes used : " + small * 0.60 + " }");
        if (contains > 0)
            console.log("{ The last small box has " + contains + " bags of coffee }");
        console.log({ totalCost: totalCost });
        console.log('--------------------------------------------------------------------------------------');
    });
}
function cost(bags) {
    var large = 0;
    var medium = 0;
    var small = 0;
    var contains = 0;
    var tempBags = bags;
    if (tempBags >= 20) {
        large = (tempBags - tempBags % 20) / 20;
        tempBags = tempBags % 20;
    }
    if (tempBags >= 10) {
        medium = (tempBags - tempBags % 10) / 10;
        tempBags = tempBags % 10;
    }
    if (tempBags >= 5) {
        small = (tempBags - tempBags % 5) / 5;
        tempBags = tempBags % 5;
    }
    if (tempBags > 0) {
        small++;
        contains = tempBags;
    }
    var priceOfCoffee = bags * 5.50;
    var totalCost = large * 1.80 + medium * 1.00 + small * 0.60 + priceOfCoffee;
    return totalCost;
}
var _loop_1 = function () {
    var question = use('choose a question: ');
    if (question === "1") {
        console.log('\nDisplay the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
        display(a);
    }
    else if (question == "2") {
        console.log('\nCosts from lowest to highest of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
        a.sort(function (a, b) { return a - b; });
        a.map(function (bags) {
            console.log({ bags: bags });
            var total = cost(bags);
            console.log({ total: total });
            console.log('##########');
        });
    }
    else if (question == "3") {
        console.log('\ncosts above 280$ of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
        a.map(function (bags) {
            if (cost(bags) > 280) {
                console.log({ bags: bags });
                var total = cost(bags);
                console.log({ total: total });
                console.log('##########');
            }
        });
    }
    else if (question == "4") {
        console.log('\nDiscont 15% on costs above 400$ of the array of bags [52, 208, 31, 66, 110, 5, 88, 300]\n');
        a.sort(function (a, b) { return a - b; });
        a.map(function (bags) {
            console.log({ bags: bags });
            var totalCost = cost(bags);
            if (totalCost > 400) {
                var discount = totalCost * (15 / 100);
                var afterDiscount = totalCost - discount;
                var originalCost = totalCost;
                console.log({ originalCost: originalCost });
                console.log({ afterDiscount: afterDiscount });
                console.log('-----------------');
            }
            else
                console.log({ totalCost: totalCost });
            console.log('##########');
        });
    }
    else if (question == "5") {
        console.log('\nDisplay the list of options (Add order, delete order, find order, checkout).\n');
        var orders_1 = [];
        var _loop_2 = function () {
            var option = use('choose an option: ');
            //Exit
            if (option === "q" || option === "Q") {
                console.log('exit program!');
                guessOption = true;
            }
            //Add order
            else if (option === "a" || option === "A") {
                var order = use('Add an order: ');
                orders_1.push(order);
                console.log({ orders: orders_1 });
                console.log('-----------------');
            }
            //Delete order
            else if (option === "b" || option === "B") {
                var order_1 = use('Delete an order: ');
                var b = orders_1.filter(function (e) { return e === order_1; });
                b.forEach(function (f) { return orders_1.splice(orders_1.findIndex(function (e) { return e === f; }), 1); });
                console.log({ orders: orders_1 });
                console.log('-----------------');
            }
            //Find order
            else if (option === "c" || option === "C") {
                var find_1 = use('Find an order: ');
                var bool = _.some(orders_1, function (order) { return order === find_1; });
                if (bool) {
                    var order = _.filter(orders_1, function (order) { return order === find_1; });
                    console.log({ order: order });
                }
                else
                    console.log(' Not Found! ');
                console.log('-----------------');
            }
            //Checkout(calculate and print all orders)
            else if (option === "d" || option === "D") {
                console.log(" Checkout: ");
                display(orders_1);
            }
            else {
                console.log(" " + option + " is not an option, choose again! ");
                console.log(' The options are : A for Add  , B for Delete , C for Find , D for Checkout and Q for Exit! ');
                console.log('--------------------------------------------------------------------------------------');
            }
        };
        while (!guessOption) {
            _loop_2();
        }
    }
    else
        guess = true;
};
while (!guess) {
    _loop_1();
}
