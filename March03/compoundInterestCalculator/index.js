const principal = 10000;
let rate = 23;
rate = rate/100;
const duration = 5;
/**
 * days - assign index value of 0 
 * weeks - assign index value of 1
 * months - assign index value of 2
 * quarters - assign index value of 3
 * years - assign index value of 4
 */
const periodunit_arr = ["days","weeks","months","quarters","years"] 
const periodunit = periodunit_arr[2];
const duration_value = {
    days : 1/365,
    weeks : 7/365,
    months : 1/12,
    quarters : 1/4,
    years : 1
}
const timePeriod = duration_value[periodunit];

const compoundfrequency_arr = ["cf_ForDays","cf_ForWeeks","cf_ForMonths","cf_ForQuarters","cf_ForSemi-Annually","cf_ForAnnually"];
const compoundfrequencyunit = compoundfrequency_arr[2];
const compoundfrequency_value = {
    cf_ForDays : 365,
    cf_ForWeeks : 52,
    cf_ForMonths : 12,
    cf_ForQuarters : 4,
    cf_ForSemiAnnually : 2,
    cf_ForAnnually : 1

}
const compoundfrequency = compoundfrequency_value[compoundfrequencyunit];

console.log(`Period Unit ${periodunit}`);
console.log(`Principal amount ${principal}`);

/**
 * total method to calculate Compound Interest Amount 
 * formula is A = P(1+r/t)
 * @param {*} p P stands for Principal Amount
 * @param {*} n N stands for Compounding Frequency
 * @param {*} r R stands for Rate 
 * @param {*} t T stands for Time Period
 */

const total = (p,n,r,t) =>{ 
    let power = n*t;
    let base = 1+(r/n);
    let result = p*(Math.pow(base,power));
    
    let interestearn = result - p;

    console.log(`Interest earned ${interestearn.toFixed(2)}`);
    console.log(`Total Amount ${result.toFixed(2)}`);
    console.log(" ");
}
total(principal,compoundfrequency,rate,timePeriod);


// switch(periodunit){
//     case "days":
//         total(principal,compoundfrequencyunit,rate,days);
//         break;
//     case "weeks":
//         total(principal,compoundfrequencyunit,rate,weeks);
//         break;
//     case "months":
//         total(principal,compoundfrequencyunit,rate,months);
//         break;
//     case "quarters":
//         total(principal,compoundfrequencyunit,rate,quarters);
//         break;
//     case "years":
//         total(principal,compoundfrequencyunit,rate,years);
//         break;
//     default:
//         console("Enter proper duration unit")
// }
