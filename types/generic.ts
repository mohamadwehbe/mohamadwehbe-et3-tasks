const array = <A>(arr:A[]):A => {
    return arr[arr.length - 1];
};

const lastNumber = array([1,2,3]);
const lastString = array(["abc","bcd","cde","def"]);

console.log({lastNumber,lastString});

const makeTuple = <X,Y>(x:X,y:Y):[X,Y] => {
    return [x,y];
}

const t1 = makeTuple(5,6);
const t2 = makeTuple("a","b");
const t3 = makeTuple(null,5);

console.log({t1,t2,t3})