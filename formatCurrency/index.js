// toLocaleString() = returns a string with a language
//                    sensitive representation of this

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default);
// 'options = object with formatting options

// let myNum = 123456.789;
// let myNum = 0.1; // percent

// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi 
// myNum = myNum.toLocaleString("pt-BR"); // Brasil
// myNum = myNum.toLocaleString("de-DE"); // standard German

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
// myNum = myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

// format a number to percent
// myNum = myNum.toLocaleString(undefined, {style: "percent"});

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);
