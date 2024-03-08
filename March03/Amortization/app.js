const fs = require('fs');

const monthlypayment = (p,r,n,t) => {
    return (p*(r/n))/(1-(Math.pow((1 + r/n),-n*t)));
}

const calculateAmortizationSchedule = (principal,ratePerAnnum,numberofYears,amortizationSchedule) =>{

    const ratePerAnnum_value = ratePerAnnum/100;
    const monthsInYear = 12;
    const monthlypayment_value = monthlypayment(principal,ratePerAnnum_value,monthsInYear,numberofYears);
    const totalMonthlyPayment = loanTerm*12;

    let balanceAmount = principal;
    let paymentNumber = 1;
    for(let i=0;i<totalMonthlyPayment;i++){

        let monthlyInterest = balanceAmount*(ratePerAnnum_value/monthsInYear);
        let monthlyPrincipalPayment = monthlypayment_value - monthlyInterest;
        balanceAmount = balanceAmount - monthlyPrincipalPayment;
        amortizationSchedule.push({
            "PayementNumber" : paymentNumber,
            "Monthly Interest" : monthlyInterest,
            "Monthly Principal Payment" : monthlyPrincipalPayment,
            "Balance Amount" : balanceAmount
        })
        paymentNumber+=1;
    }
    return amortizationSchedule;
}

const loanAmount = 400000;
const loanTerm = 30;
const interestRate = 5;
const amortizationSchedule = [];
calculateAmortizationSchedule(loanAmount,interestRate,loanTerm,amortizationSchedule);
// console.log(amortizationSchedule[358]);

let exportJson = JSON.stringify(amortizationSchedule);
fs.writeFile('myexport.json',exportJson,(err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created")});