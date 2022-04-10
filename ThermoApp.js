// I am making a ThermoApp which converts temparatures from one unit to the other





// the value for kelvin is set, change this value accordingly
const kelvin = 0;

// storing the result of celcius in another variable
let celcius = kelvin - 273;

//converts to fahrenheit
let fahrenheit = celcius *(9/5) + 32;

//elimantes the decimal answers due to conversion
fahrenheit = Math.floor(fahrenheit);

console.log(`The temparature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celcius *(33/100);

newton = Math.floor(newton);

console.log(`The temparature is ${newton} degrees Newton.`);

console.log(kelvin);
console.log(celcius);
console.log(fahrenheit);
console.log(newton);




