/*const si = require('systeminformation');
setInterval(()=>{
    si.cpuTemperature()
        .then(tmp=>{
            console.log(tmp);
        });
    },5000);
    */
/*
const si        = require('systeminformation');

si.cpuTemperature().then(data => {
    try {
        console.log(data.max);
    } catch(e) {

    }
})*/

async function test() {
    const { snapshot } = require("process-list");
 
    const tasks = await snapshot('name', 'cpu', 'pmem');
    init = txt.indexOf('(');
    fin = txt.indexOf(')');
    console.log(txt.substr(init+1,fin-init-1))
    console.log(tasks);
}
test();