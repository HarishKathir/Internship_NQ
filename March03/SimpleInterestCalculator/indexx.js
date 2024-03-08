const principal = 1000;
const rate = 10;
const duration = 3;
const periodunit_arr = ["days","weeks","months","quarters","years"]
const periodunit = periodunit_arr[0];

const period_multiplication={
     days : 1/365,
     weeks : 7/365,
     months : 1/12,
     quarters : 1/4,
     year : 1
};
const duration_value = period_multiplication[periodunit];
/**
 * 
 * @param {*} p   P is for Principal
 * @param {*} n   N is for duration
 * @param {*} r   R is for rate
 * @returns 
 */
const interestcalc = (p,n,r) =>{
    return (p*n*r)/100;
}

const totalamount = (interestcalculated ,principal) => {
    return (interestcalculated+principal).toFixed(2);
}

console.log(periodunit);
console.log(`Principal Amount ${principal}`);
let interestdays = interestcalc(principal,duration_value,rate); // if duration is 1 , calculated for 1 day 
let totalfordays = totalamount(interestdays,principal);

 console.log(`Interest earned ${interestdays.toFixed(2)}`);
 console.log(`Total amount ${totalfordays}`);



// switch(periodunit){
//     case "days":
//         let interestdays = interestcalc(principal,days,rate); // if duration is 1 , calculated for 1 day 
//         let totalfordays = totalamount(interestdays,principal);

//         console.log(`Interest earned ${interestdays.toFixed(2)}`);
//         console.log(`Total amount ${totalfordays}`);
//         break;

//     case "weeks" :
//         let interestweeks = interestcalc(principal,weeks,rate); // if duration is 1 , calculated for 1 week
//         let totalforweeks = totalamount(interestweeks,principal);

        
//         console.log(`Interest earned ${interestweeks.toFixed(2)}`);
//         console.log(`Total amount ${totalforweeks}`);
//         break;
    
//     case "months" :
//         let interestmonths = interestcalc(principal,months,rate); // if duration is 1 , calculated for 1 month 
//         let totalformonths = totalamount(interestmonths,principal);

//         console.log(`Interest earned ${interestmonths.toFixed(2)}`);
//         console.log(`Total amount ${totalformonths}`);
//         break;
    
//     case "quarters" :
//         let interestquarters = interestcalc(principal,quarters,rate); // if duration is 1 , calculated for 1 quarter
//         let totalforquarters = totalamount(interestquarters,principal);


//         console.log(`Interest earned ${interestquarters.toFixed(2)}`);
//         console.log(`Total amount ${totalforquarters}`);
//         break;
    
//     case "years" :
//         let interestyears = interestcalc(principal,year,rate); // if duration is 1 , calculated for 1 year 
//         let totalforyears = totalamount(interestyears,principal);

//         console.log(`Interest earned ${interestyears.toFixed(2)}`);
//         console.log(`Total amount ${principal+interestyears}`);
//         break;

//     default :
//         console.log("error , enter a proper duration unit");
    
// }
