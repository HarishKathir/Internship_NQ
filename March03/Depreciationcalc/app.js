const readline = require('readline');
const r = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const roundof = (value) => {
    return value.toFixed(2);
}

const straightlinemethod = (assestcost,salvage,years) =>{
    if(assestcost === 0 || assestcost < 0){
        console.log("Please provide a positive asset cost");
    }
    else if(years === 0 || years === 1){
        console.log("Please provide year value larger than 1")
    }
    else{
        const originalcost = assestcost;
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

            
            const depvalue = (beginingvalue,salvage,years) => {
                return (beginingvalue - salvage)/dep_year;
            }

            console.log(" ");
            console.log(`Beginning value : ${roundof(beginingvalue)}`);
            console.log(`Depreciaton percent : ${roundof(dep_percent)}`);
            console.log(`Depreciation Amount : ${roundof(dep_percent_amount)}`);
            console.log(`Accumulated amount : ${roundof(accumulatedvalue)}`);
            console.log(`Ending value : ${roundof(endingvalue)}`);
            console.log(" ");

            beginingvalue = beginingvalue-dep_percent_amount;
            endingvalue = beginingvalue-dep_percent_amount;

            depvalue(beginingvalue,salvage,dep_year);
            accumulatedvalue = accumulatedvalue+dep_percent_amount;
            dep_year = dep_year-1;

        }
    }
}



r.question("Enter the Assest Cost ",assestcost =>{
    r.question("Enter the Salvage value ",salvage =>{
        r.question("Enter the Depreciation Year ",years =>{
            assestcost = parseFloat(assestcost);
            salvage = parseFloat(salvage);
            years = parseFloat(years);
            straightlinemethod(assestcost,salvage,years);
            r.close();
        });
    });
});