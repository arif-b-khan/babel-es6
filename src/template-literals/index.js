export default function run() {
    // template literal
    const jane = 'jane';
    console.log(` hello ${jane}
    How are you
    doing today`);
    // Tagged template literals
    const taggedTemplateLiteral = String.raw`I'm going to use \ stroke / `;
    console.log(taggedTemplateLiteral);
    console.log(String.raw`\n` === '\\n');
    console.log(describe`${3 + 3}`);
    RegExExample();
}

function describe(tmplObj, ...substs) {
    return {
        Cooked: merge(tmplObj, substs),
        Raw: merge(tmplObj.raw, substs),
    };
}

function merge(tmplStrs, substs) {
    // There is always at least one element in tmplStrs
    let result = tmplStrs[0];
    substs.forEach((subst, i) => {
        result += String(subst);
        result += tmplStrs[i + 1];
    });
    return result;
}

function RegExExample(params) {
    const INTEGER = /\d+/;
    const decimalPoint = '.';
    const expression = regex`${INTEGER}(${decimalPoint}${INTEGER})?`;
    console.log(expression);
}

function regex(tmplObj, ...substs) {
    // Static text: verbatim
    let regexText = tmplObj.raw[0];
    for (let [i, subst] of substs.entries()) {
        if (subst instanceof RegExp) {
            // Dynamic regular expressions: verbatim
            regexText += String(subst);
        } else {
            // Other dynamic data: escaped
            regexText += quoteText(String(subst));
        }
        // Static text: verbatim
        regexText += tmplObj.raw[i + 1];
    }
    return new RegExp(regexText);
}

function quoteText(text) {
    return text.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g, '\\$&');
}