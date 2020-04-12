function run(){
    console.log('hello'.startsWith('hel'));
    console.log('hello'.endsWith('lo'));
    console.log('hello'.includes('el'));

    let multilineStr = `This is 
    multiple line
    string in es6
    `;
    console.log(multilineStr);
    const rawStr = String.raw`not a newline : \n`;
    console.log(rawStr);

    // Iterating over a string
    const iterStr = 'abc';
    for(let s of iterStr){
        console.log(s.codePointAt(0).toString(8));
        console.log(s);
    }

    // spread the string into array
    const arrStrSpread = [...iterStr];
    console.log(arrStrSpread);

    // repeating sting
    console.log('foo '.repeat(3));
    
}

export default run;

