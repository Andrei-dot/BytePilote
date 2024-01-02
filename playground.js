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

const { cpuTemperature } = require('systeminformation');

/*
//// GOOD FUNC TO RETURN PROCESSES
async function test() {
    const { snapshot } = require("process-list");
 
    const tasks = await snapshot('name', 'cpu', 'pmem');
    init = txt.indexOf('(');
    fin = txt.indexOf(')');
    console.log(txt.substr(init+1,fin-init-1))
    console.log(tasks);
}
test();*/

/*
const { cpuUsage }          = require('process');
const os                    = require('os');

const startUsage = cpuUsage();

const now = Date.now();
while (Date.now() - now < 500);

console.log(os.totalmem.length);
console.log(cpuUsage(startUsage));*/
/*
const osu = require('node-os-utils');
var cpu = osu.cpu;

var loop = setInterval(() => {
    let temp = getCpu
}, 500);*/
/*
var loop = setInterval(() => {
    
    cpu.usage()
    .then(cpuPercentage => {
        console.log(cpuPercentage) 
    })    
}, 500);*/
/*
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);
const gpuTempeturyCommand = 'nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader'; 
setInterval(() => {
  getGPUTemperature();
}, 500);
async function getGPUTemperature() {
  try {
    const result = await execAsync(gpuTempeturyCommand);
    return console.log(result.stdout);
  } catch (error) {
    console.log('Error during getting GPU temperature');
    return 'unknown';
  }
} 
const si = require('systeminformation');
*/