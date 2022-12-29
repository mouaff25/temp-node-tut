const os = require('os');

// info about current user
const user = os.userInfo();

// methoed returns the system uptime in seconds
const uptime = os.uptime()


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log('User info:');
console.log(user);
console.log(`The system uptime is ${uptime} seconds.`);
console.log('OS info:');
console.log(currentOS);