export default function run() {
    const s1 = Symbol('s1');
    const s2 = Symbol('s1');
    console.log(s1 === s2);
    const s3 = Symbol.for('s1');
    console.log(s1 == s3);
    // const fname = Symbol('fname');
    let o1 = {
        [Symbol.for('fname')]: 'Arif',
        [Symbol('lname')]: 'Khan'
    }

    // following are the way to get symbols
    console.log(Reflect.ownKeys(o1));
    let o2 = Object.assign({}, o1);
    console.log(Reflect.ownKeys(o2));
    console.log(o2[Symbol.for('fname')]);
    // Symbol properties are not visible
    console.log(Object.keys(o1));
    // console.log(Object.getOwnPropertyNames(o1));

    const n1 = Symbol('1');
    try {
        console.log(Number(n1));
    } catch (err) {
        console.log(err);
    }
    console.log(Boolean(n1));
    console.log(String(n1));

    // ConvertingSymbolToObject();
SymbolRegistry();
}


/**
 * Explain the behavior of symbol when wrapped with object
 * Symbol cannot be instantiate using constructor
 */
function ConvertingSymbolToObject(){
    const sym = Symbol('yes');
    let obj = {
        [sym]: 'a', 
        str: 'b'
    };
    const wrappedSym = Object(sym);
    console.log(obj[wrappedSym]);

}

function SymbolRegistry(){
    const symbolStr = 'hello everybody';
    const symC = Symbol(symbolStr);
    console.log(Symbol.keyFor(symC));
    console.log(symC.toString());
    const sym1 = Symbol.for(symbolStr);
    console.log(Symbol.keyFor(sym1));
    const sym2 = Symbol.for(symbolStr);
    console.log(Symbol.keyFor(sym2));
    console.log(sym1 === sym2);
}