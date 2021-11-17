type union = number | string ; 
type descriptor = 'as-number' | 'as-string' ;

function combine(in1:union, in2:union, resultConversion: descriptor) {
    let result;
    if (typeof in1 === 'number' && typeof in2 === 'number' || resultConversion === 'as-number') {
        result = +in1 + +in2 ;
    }
    else {
        result = in1.toString() + in2.toString();
    }
    return result;
}

const combineAges1 = combine(20,30,'as-number');
const CombineAges2 = combine('20','30','as-number')
const combineNames = combine('Max','Anna','as-string');

console.log({combineAges1});
console.log({CombineAges2});
console.log({combineNames});