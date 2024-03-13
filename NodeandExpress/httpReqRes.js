const http = require(`http`);

const server = http.createServer((req,res)=>{
    console.log(req)
    res.write("Hello");
    console.log(res);
    res.end();
});
server.listen(1532)