const osu = require('node-os-utils');
var cpu = osu.cpu;


function editCircleProgressBarPercentage(bar,percentage) {
    if(bar == cpu) {
        var progressBarCpu = document.getElementById("circle-progress-bar-cpu");

        progressBarCpu.style.background = `radial-gradient(closest-side, #36393e 79%, transparent 80% 100%), conic-gradient(#424549 ${percentage}%, #282b30 0)`;    
    }
}


function editCircleBarTitles(bar,percentage) {
    if(bar == cpu) {
        var progressBarCpuTitle = document.getElementById("h1-circle-progress-bar");

        progressBarCpuTitle.innerText = `${percentage}` + "%";

    }
}

var loop = setInterval(() => {
    cpu.usage()
    .then(cpuPercentage => {
        editCircleProgressBarPercentage(cpu,cpuPercentage);
        editCircleBarTitles(cpu,cpuPercentage);
    })    
}, 100);