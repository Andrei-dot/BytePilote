const osu                           = require('node-os-utils');
const { exec }                      = require('child_process');
const { promisify }                 = require('util');
const opsys                         = require('os');
const { stdout, stderr }            = require('process');
const { copyFileSync, cpSync }      = require('fs');
const diskinfo                      = require('diskinfo');
const execAsync                     = promisify(exec);
const osvar                         = process.platform;
//const speedTest             = require('speedtest-net');

const cpu                           = osu.cpu;
const gpuTempeturyCommand           = 'nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader'; 
const gpuNameCmd                    = 'nvidia-smi --query-gpu=gpu_name --format=csv, noheader'

const isWin     = false;
const isMac     = false;
const isLinux   = false;

addEventListener("DOMContentLoaded", (e) => {
    switchPlatform();
});

function switchPlatform() {
    switch(osvar) {
        case "win32":
            // alert("[!] Windows OS"); 
            isWin = true;
            break;
        case "linux":
            // alert("linux");
            isLinux = true;
            break;
        case "darwin": 
            // alert("macOs");
            isMac = true;
            break;
        default:
            alert("[!] Unknown platform.");
            break;
    }
}

/******************************
 *  
 * Stockage info 
 * 
 *******************************/

diskinfo.getDrives(function(err,devices) {
    const div = document.getElementById("stockage-container");

    for(let i = 0;  i < 3; i++) {
        const node = document.createElement("h2");
        const textnode = document.createTextNode(devices[i].mounted + devices[i].capacity);
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
    const gpuTemperatureBar = document.getElementById("hz-filler-bar-gpu-1");
    const gpuTempTitle = document.getElementById("gpuTemp");

    // Struggling w/ stdout

    gpuTemperatureBar.style.height = per.valueOf() + "%";
    gpuTempTitle.innerText = `Température : ${per}`;
}

/******************************
 *  
 * CPU Information 
 * 
 *******************************/
function editCircleProgressBarPercentage(bar,percentage) {
    const progressBarCpu = document.getElementById(`${bar}`);
    progressBarCpu.style.background = `radial-gradient(closest-side, #36393e 79%, transparent 80% 100%), conic-gradient(#424549 ${percentage}%, #282b30 0)`;    
}

function editCircleBarTitles(bar,percentage) {
        const progressBarCpuTitle = document.getElementById(`${bar}`);
        progressBarCpuTitle.innerText = `${percentage}` + "%";
}

const loop = setInterval(() => {
    cpu.usage()
    .then(cpuPercentage => {
        // CPU
        editCircleProgressBarPercentage("circle-progress-bar-cpu",cpuPercentage);
        editCircleBarTitles("h1-circle-progress-bar",cpuPercentage.toFixed(0));
    })
    editCircleProgressBarPercentage("circle-progress-bar-ram",((opsys.freemem / opsys.totalmem) * 100 / 2).toFixed(0));
    editCircleBarTitles("h1-circle-progress-bar-ram",((opsys.freemem / opsys.totalmem) * 100 / 2).toFixed(0));

    // const upload = document.getElementById("up");
    // const download = document.getElementById("download");
}, 500);

const loopGpu = setInterval(() => {
    getGPUTemperature().then(gpuPercentage => {
        editGpuTempBar(gpuPercentage);    
    })
}, 500);

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}