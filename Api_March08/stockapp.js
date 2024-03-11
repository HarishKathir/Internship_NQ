const axios = require('axios');

async function getStockData(symbol){
    const api_key = "UJ9NTWINW6A38ZUL";
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&interval=5min&apikey=${api_key}`;
    try{
        const response = await axios.get(apiUrl);
        const stockData = response.data;
        console.log(response);
        return [stockData];
    }catch(error){
        console.log(error);
    }
}

async function displayStockData(symbol){
    try{
        const stockData = await getStockData(symbol);
        console.log(stockData);
    }catch(error){
        console.log(error);
    }
}
const symbol = "AAPL";
displayStockData(symbol);