/*

    // Solution efficace mais nulle pour le crossplateform, retourne C: E: F: sous forme d'array.

const child = require('child_process');

child.exec('wmic logicaldisk get name', (error, stdout) => {
    console.log(
        stdout.split('\r\r\n')
            .filter(value => /[A-Za-z]:/.test(value))
            .map(value => value.trim())
    );
}); */

/*

    // Code très fonctionnel mais peu pratique

const diskInfo = require('node-disk-info');

diskInfo.getDiskInfo()
    .then(disks => {
        printResults(disks);
    })
    .catch(reason => {
        console.error(reason);
    });

function printResults(disks) {
     for(var i = 0; i < disks.length; i++) {
        console.log('Filesystem:', disks[i].filesystem);
        console.log('Blocks:', disks[i].blocks);
        console.log('Used:', disks[i].used);
        console.log('Available:', disks[i].available);
        console.log('Capacity:', disks[i].capacity);
        console.log('Mounted:', disks[i].mounted, '\n');
     }   
}
*/

/*
var d = require('diskinfo');

d.getDrives(function(err, aDrives) {

    console.log(aDrives[1].mounted);

    
    for (var i = 0; i < aDrives.length; i++) {
          console.log('Drive ' + aDrives[i].filesystem);
          console.log('blocks ' + aDrives[i].blocks);
          console.log('used ' + aDrives[i].used);
          console.log('available ' + aDrives[i].available);
          console.log('capacity ' + aDrives[i].capacity);
          console.log('mounted ' + aDrives[i].mounted);
          console.log('-----------------------------------------');
    }

});*/