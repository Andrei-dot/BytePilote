const osu                   = require('node-os-utils');
const { exec }              = require('child_process');
const { promisify }         = require('util');
const { copyFileSync } = require('fs');
const execAsync             = promisify(exec);

const cpu                     = osu.cpu;
const gpuTempeturyCommand   = 'nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader'; 

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
        editCircleProgressBarPercentage("circle-progress-bar-cpu",cpuPercentage);
        editCircleBarTitles("h1-circle-progress-bar",cpuPercentage);
    })    
}, 100);

const loopGpu = setInterval(() => {
    getGPUTemperature().then(gpuPercentage => {
        editGpuTempBar(gpuPercentage);    
    })
}, 500);

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}