const os = require('os');

//Info about current user
console.log(os.userInfo());

//returns system uptime
console.log(os.uptime());

//return system info
const systeminfo = {
    name : os.type(),
    release : os.release(),
    totalmemory : os.totalmem(),
    freememory : os.freemem()
}
console.log(systeminfo);