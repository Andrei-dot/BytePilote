const os                = require('os');
const fs                = require('fs'); // FileSystem
//const spawn      = require('child_process').spawn;

//cpuTemp = spawn('cat')

/*
 * Cpu 
 */
const cpuName = document.getElementById("cpuName");
const cpuCores = document.getElementById("cpuCores");
const cpuSpeed = document.getElementById("cpuSpeed");

const cpus      = os.cpus();

cpuName.innerText = `CPU Name : ${cpus[0].model}`;
cpuCores.innerText = `CPU Name : ${cpus.length}`;
cpuSpeed.innerText = `CPU Speed : ${cpus[0].speed}`;

/*
 * Gpu 
 */

// const gpuName = document.getElementById("gpuName");

/*
function getGpuInfos() {

    const gl = document.createElement('canvas').getContext('webgl');

    if(!gl) { return { error : "No graphic driver here. :/"}; }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

    if(debugInfo) {
        /*
         * Le problème ici c'est que les noms de gpu sont pas tous de la même taille, par conséquent => substring par regex
         
        
        let gpuNameString = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).substring(15, 38);
        gpuName.innerText = `GPU Name : ` + gpuNameString;
    }
    return { error : "No webgl info", };
}

getGpuInfos();*/
