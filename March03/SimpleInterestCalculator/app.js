const readline = require(`readline`);
const reader = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

//to calculate the basic interest value
const interest = (principal, rate , number) =>{
    return principal*rate*number/100;
}

//to round of the calculated interest value to two decimal places
const roundof = (num) =>{
    return Math.round(num * 100)/100;
}

//Interest calculation for weeks
const forweeks = (value,duration,amt) =>{
    let result = roundof(value/52);
    console.log(`Interest for ${duration} weeks is ${result}`);
    console.log(`Total amount is ${amt+result}`);
}

//Interest calculation for months
const formonths = (value,duration,amt) =>{
    let result = roundof(value/30);
    console.log(`Interest for ${duration} months is ${result}`);
    console.log(`Total amount is ${amt+result}`);
}

//Interest calculation for quarters
const forquarters = (value,duration,amt) =>{
    let result = roundof(value/4);
    console.log(`Interest for ${duration} quarters is ${result}`);
    console.log(`Total amount is ${amt+result}`);
}

//interest calculation for years
const foryears = (value,duration,amt) =>{
    let result = roundof(value/1);
    console.log(`Interest for ${duration} year is ${result}`);
    console.log(`Total amount is ${amt+result}`);
}

//Function to display all the values
const simpleInterestCalc = (amt,rate,duration) =>{

    const val = interest(amt,rate,duration);

    forweeks(val,duration,amt);
    formonths(val,duration,amt);
    forquarters(val,duration,amt);
    foryears(val,duration,amt);
}

reader.question("Enter your principle amount",amt=> {
    reader.question("enter your interest rate",rate => {
            reader.question("Enter the duration",duration =>{
                // console.log(`${amt} ${rate} ${duration} ${durationunit}`);
                amt = parseFloat(amt);
                rate = parseFloat(rate);
                duration = parseFloat(duration);
                simpleInterestCalc(amt,rate,duration);
                reader.close();
        });
    });
});

