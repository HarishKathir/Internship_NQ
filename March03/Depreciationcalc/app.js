/**
 * roundof method is used to return a value with two decimal palaces
 * @param {*} value Value represents the Value passed to round of to two digits
 * @returns 
 */
const roundof = (value) => {
    return value.toFixed(2);
}

const assestcost = 1000;
const salvage = 100;
const years = 5;

/**
 * 
 * @param {*} assestcost Assestcost represents the Original price of the assest
 * @param {*} salvage Salvage represents the salavage price the bought assest
 * @param {*} years Years represents the depreciation Year
 */

const straightlinemethod = (assestcost,salvage,years) =>{
    if(assestcost === 0 || assestcost < 0){
        console.log("Please provide a positive asset cost");
    }
    else if(years === 0 || years === 1){
        console.log("Please provide year value larger than 1")
    }
    else{
        const fullyear = years;
        let beginingvalue = assestcost;
        let accumulatedvalue;
        let endingvalue;
        let dep_year = years;

        const dep_percent = 100/fullyear;    
        const dep_percent_amount = (assestcost -salvage)/fullyear;
        accumulatedvalue = dep_percent_amount;
        endingvalue = beginingvalue-dep_percent_amount;

        for(let i=0;i<years;i++){
            console.log(" ");
            console.log(`${roundof(beginingvalue)} ${roundof(dep_percent)}% ${roundof(dep_percent_amount)} ${roundof(accumulatedvalue)} ${roundof(endingvalue)}`);
            console.log(" ");

            beginingvalue = beginingvalue-dep_percent_amount;
            endingvalue = beginingvalue-dep_percent_amount;
            accumulatedvalue = accumulatedvalue+dep_percent_amount;
            dep_year = dep_year-1;
        }

    }
}

/**
 * sumofyears method is used to calculate the total of usable years
 * formula = n(n+1)/2, n represents the Period of Depreciation
 * @param {*} years Years represent the Period of Depreciation 
 * @returns 
 */
const sumofyears = (years) =>{
    return years*(years+1)/2;
}
/**
 * 
 * @param {*} assestcost Assestcost represents the Original price of the assest
 * @param {*} salvage Salvage represents the salavage price the bought assest
 * @param {*} years Years represents the depreciation Year
 */

const sumOfYearsDigits = (assestcost,salvage,years) =>{
    if(assestcost === 0 || assestcost < 0){
        console.log("Please provide a positive asset cost");
    }
    else if(years === 0 || years === 1){
        console.log("Please provide year value larger than 1")
    }else{
        let openingvalue = assestcost;
        let dep_year = years;
        const sumofyears = years*(years+1)/2;
        let dep_rate = dep_year/sumofyears;
        let dep_cost = openingvalue-salvage; 
        let dep_expense = dep_cost * dep_rate;
        let accumulatedvalue = dep_expense;
        let closingvalue = openingvalue-dep_expense;

        for(let i=0;i<years;i++){

            console.log(" ");
            console.log(`${roundof(openingvalue)} ${roundof(dep_rate*100)} ${roundof(dep_expense)} ${roundof(accumulatedvalue)} ${roundof(closingvalue)}`)
            console.log(" ");

            dep_year = dep_year-1;
            openingvalue = closingvalue; 
            dep_rate = dep_year/sumofyears;
            dep_expense = dep_cost*dep_rate;
            accumulatedvalue = accumulatedvalue + dep_expense;
            closingvalue = openingvalue-dep_expense;
        }
        

    }
}


// console.log("Straight line Method");
// console.log(straightlinemethod(assestcost,salvage,years));



console.log("Sum of years digits");
console.log(sumOfYearsDigits(assestcost,salvage,years));