const { type } = require("os");
const readline = require(`readline`);
const reader = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const roundof = (num) =>{
    return num.toFixed(2);
}
const interestearn = (interest,principal) =>{
    return roundof(interest-principal);
}
//compounded weekly
const compoundInterestweekly = (amt,rate,time) =>{
    let n = 52; //52 times a year
    rate = (rate/100)/n;
    let pow = n*time;
    let res = amt*Math.pow(1+rate,pow);
    res = roundof(res);

    console.log(" ");
    console.log(`Interest earned is ${interestearn(res,amt)}`);
    console.log(`Weekly compounded Interest for ${time} years is ${res}`);
}
//compounded monthly
const compoundInterestmonthly = (amt,rate,time) =>{
    let n = 12; //12 times a year
    rate = (rate/100)/n;
    let pow = n*time;
    let res = amt*Math.pow(1+rate,pow);
    res = roundof(res);

    console.log(" ");
    console.log(`Interest earned is ${interestearn(res,amt)}`);
    console.log(`Monthly compounded Interest for ${time} years is ${res}`);

}
//compounded quarterly
const compoundInterestquarterly = (amt,rate,time) =>{
    let n = 4; //4 times a yera
    rate = (rate/100)/n;
    let pow = n*time;
    let res = amt*Math.pow(1+rate,pow);
    res = roundof(res);
    
    console.log(" ");
    console.log(`Interest earned is ${interestearn(res,amt)}`);
    console.log(`Quarterly compounded Interest for ${time} years is ${res}`);

}
//compounded yearly
const compoundInterestyearly = (amt,rate,time) =>{
    let n = 1;
    rate = (rate/100)/n;
    let pow = n*time;
    let res = amt*Math.pow(1+rate,pow);
    res = roundof(res);

    console.log(" ");
    console.log(`Interest earned is ${interestearn(res,amt)}`);
    console.log(`Yearly compounded Interest for ${time} years is ${res}`);

}
//compound Interest display
const compoundInteretcalc = (amt,rate,time) => {
    compoundInterestweekly(amt,rate,time);
    compoundInterestmonthly(amt,rate,time);
    compoundInterestquarterly(amt,rate,time);
    compoundInterestyearly(amt,rate,time);
}

reader.question("enter the principal amount ",amt=>{
    reader.question("enter the rate ",rate =>{
        reader.question("enter the time period ",time=>{
                amt = parseFloat(amt);
                rate = parseFloat(rate);
                time = parseFloat(time);
                console.log(compoundInteretcalc(amt,rate,time));
                reader.close();
        });
    });
});