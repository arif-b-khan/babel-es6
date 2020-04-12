export default function run(){

    for(const x of [1,2,3,4]){
        console.log(x);
    }   

    let obj = {
        baz: {}
    };
    const freeze = Object.freeze(obj);
    try{
        obj.prop = 10;
        console.log(obj.prop);
    }
    catch(err){
        console.log(err);
    }
    // this means object.freeze performs shallow copy
    obj.baz.prop = 'test';
    console.log(obj.baz.prop);

    // calling function which has let as paramenter name this will throw static binding error
    // letParamTest('test');

    // calling function with TDZ's correct implementation
    paramDefaultTDZ();

    // paramDefaultFailedTDZ();


    // paramDefaultMethodBody();
}

/**
 * Cannot create function with same let parameter
 */
// function letParamTest(params) {
//     let params = undefined;
// }

/**
 * Parameter defaults as temporal dead zone
 */
function paramDefaultTDZ(x=1, y=x) {
    console.log(`${x}-${y}`);
}

function paramDefaultFailedTDZ(x=y, y=1) {
    console.log(`${x}-${y}`);
}

/**
 * parameter default is scoped as outer block for method body. 
 * That's the reason it is not possible for parameter block to access.
 * Method body variables
 */
function paramDefaultMethodBody(func = x => foo) {
    let foo = 'test';
    console.log(func());
}

function testFun(){
    console.log(this);
    this.name = 'arif';
    this.age = 35;
}

