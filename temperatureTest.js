/*const si = require('systeminformation');
setInterval(()=>{
    si.cpuTemperature()
        .then(tmp=>{
            console.log(tmp);
        });
    },5000);
    */

const si        = require('systeminformation');

si.cpuTemperature().then(data => {
    try {
        console.log(data.max);
    } catch(e) {

    }
})