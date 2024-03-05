const principal = 10000;
let rate = 23;
rate = rate/100;
const duration = 5;
const periodunit_arr = ["days","weeks","months","quarters","years"] // days = 0 , weeks = 1, months = 2, quarters = 3, years = 4
const periodunit = periodunit_arr[3];

const days = duration/365;
const weeks = days*7;
const months = duration/12;
const quarters = duration/4;
const year = duration;

const compoundfrequencyunit_arr = [365,52,12,4,2,1]; //days = 0, weeks = 1, months = 2 ,quarterly = 3, semi-annually = 4, annually = 5
const compoundfrequencyunit = compoundfrequencyunit_arr[3];

console.log(`Period Unit ${periodunit}`);
console.log(`Principal amount ${principal}`);

//p =  principal
//n = compounding frequency
//r = rate
//t = duration
const total = (p,n,r,t) =>{ 
    let power = n*t;
    let base = 1+(r/n);
    let result = p*(Math.pow(base,power));
    
    let interestearn = result - p;

    console.log(`Interest earned ${interestearn.toFixed(2)}`);
    console.log(`Total Amount ${result.toFixed(2)}`);
    console.log(" ");
}

switch(periodunit){
    case "days":
        total(principal,compoundfrequencyunit,rate,days);
        break;
    case "weeks":
        total(principal,compoundfrequencyunit,rate,weeks);
        break;
    case "months":
        total(principal,compoundfrequencyunit,rate,months);
        break;
    case "quarters":
        total(principal,compoundfrequencyunit,rate,quarters);
        break;
    case "years":
        total(principal,compoundfrequencyunit,rate,years);
        break;
}
