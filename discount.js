var a = new Array(52,208,31,66,110,5,88,300);
for(i =0 ; i<a.length;i++) {
    large = 0;
    medium=0;
    small=0;
    bags = a[i] ;
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
    cost = large*1.80+medium*1.00+small*0.60+(a[i])*5.50;
    if(cost > 400) {
        discount = cost*(15/100);
        after = cost - discount;
        console.log(`The original cost is ${cost}. After 15% discount is ${after}`)
    }
    else
        console.log(`The cost is ${cost}`)
    
}