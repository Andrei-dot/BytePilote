const osu                           = require('node-os-utils');
const { exec }                      = require('child_process');
const { promisify }                 = require('util');
const opsys                         = require('os');
const { stdout, stderr }            = require('process');
const diskinfo                      = require('diskinfo');
const execAsync                     = promisify(exec);
const networkSpeed                  = require('network-speed');
const si                            = require('systeminformation');
const networkSpeedTest              = new networkSpeed();


const cpu                           = osu.cpu;
const gpuTempeturyCommand           = 'nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader'; 
const gpuNameCmd                    = 'nvidia-smi --query-gpu=gpu_name --format=csv, noheader'

/******************************
 *  
 * Network info 
 * 
 *******************************/
async function getNetworkDownloadSpeed() {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await networkSpeedTest.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    document.getElementById("down").innerText = "⏬" + speed.mbps + " mbps";
}

async function getNetworkUploadSpeed() {
    const options = {
      hostname: 'www.google.com',
      port: 80,
      path: '/catchers/544b09b4599c1d0200000289',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const fileSizeInBytes = 2000000
    const speed = await networkSpeedTest.checkUploadSpeed(options, fileSizeInBytes);
    document.getElementById("up").innerText = "⏫" + speed.mbps + " mbps";
}

/******************************
 *  
 * Storage info 
 * 
 *******************************/
diskinfo.getDrives(function(err,devices) {
    const div = document.getElementById("stockage-container");

    for(let i = 0;  i < 3; i++) {
        const node = document.createElement("h2");
        const textnode = document.createTextNode(devices[i].mounted + " " + devices[i].capacity);
        node.appendChild(textnode);
        div.appendChild(node);
    }
});

/******************************
 *  
 * GPU Information 
 * 
 *******************************/
async function getGPUTemperature() {
    try {
        const result = await execAsync(gpuTempeturyCommand);
        return result.stdout;
    } catch (error) {
        console.log('Error during getting GPU temperature');
        return 'unknown';
    }
}  

function editGpuTempBar(per) {
    // Struggling w/ stdout & bar
    const gpuTemperatureBar = document.getElementById("hz-filler-bar-gpu-1").style.width = per.valueOf() + "%";
    const gpuTempTitle = document.getElementById("gpuTemp").innerText = `Température : ${per}`;
}

/******************************
 *  
 * CPU Information 
 * 
 *******************************/
function editCircleProgressBarPercentage(bar,percentage) {
    const progressBarCpu = document.getElementById(`${bar}`).style.background = `radial-gradient(closest-side, #36393e 79%, transparent 80% 100%), conic-gradient(#424549 ${percentage}%, #282b30 0)`;    
}

function editCircleBarTitles(bar,percentage) {
    const progressBarCpuTitle = document.getElementById(`${bar}`).innerText = `${percentage}` + "%";
}

const loopCpuAndRam = setInterval(() => {
    // CPU
    cpu.usage().then(cpuPercentage => {
        editCircleProgressBarPercentage("circle-progress-bar-cpu",cpuPercentage);
        editCircleBarTitles("h1-circle-progress-bar",cpuPercentage.toFixed(0));
    })
    

    // GPU
    getGPUTemperature().then(gpuPercentage => {
        editGpuTempBar(gpuPercentage);    
    })


    // RAM
    editCircleProgressBarPercentage("circle-progress-bar-ram",((opsys.freemem / opsys.totalmem) * 100 / 2).toFixed(0));
    editCircleBarTitles("h1-circle-progress-bar-ram",((opsys.freemem / opsys.totalmem) * 100 / 2).toFixed(0));
}, 500);

const sysinf = setInterval(() => {
   /* 
    si.cpu()
    .then(data => console.log(data.manufacturer + data.brand + data.family))
    .catch(error => console.log(error));

    si.graphics()
    .then(data => console.log(data.controllers[1].vendor + data.controllers[1].model + data.controllers[1].temperatureGpu + data.controllers[1].fanSpeed + data.controllers[1].clockCore))
    .catch(error => console.log(error));*/
    
    si.graphics().then(data => {
        editGpuTempBar(data.controllers[1].temperatureGpu)
    })
    .catch(error => console.log(error));
}, 10000)

const getNetworkSpeed = setInterval(() => {
    getNetworkDownloadSpeed();
    getNetworkUploadSpeed();
}, 2000);