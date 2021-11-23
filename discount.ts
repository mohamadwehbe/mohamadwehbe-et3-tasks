let arr:Array<number> = [52,208,31,66,110,5,88,300];
arr.map(bags=>{
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
    let cost:number = large*1.80+medium*1.00+small*0.60+(bags)*5.50;
    if(cost > 400) {
        let discount = cost*(15/100);
        let afterDiscount = cost - discount;
        let originalCost = cost;
        console.log({originalCost});
        console.log({afterDiscount});
    }
    else
        console.log({cost});
})