var a = new Array(52,208,31,66,110,5,88,300);
console.log('The costs above 280$ are : ')
a.map(bags=>{
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
    cost = large*1.80+medium*1.00+small*0.60+(bags)*5.50;
    if(cost > 280) {
        console.log({bags})
        console.log({cost});
    }
})