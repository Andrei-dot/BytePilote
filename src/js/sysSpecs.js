const osu                           = require('node-os-utils');
const si                            = require('systeminformation');

document.addEventListener("DOMContentLoaded", addSysInfos);

function addSysInfos() {
    getCPUBand();
}

function getCPUBand() {
    const liCPU = document.getElementById("listCpu");
    
    si.cpu().then(data => {
        try{
            liCPU.innerText = data.manufacturer + data.brand;
        }catch(e){
            console.log(e);
        }
    })
}