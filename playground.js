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

const osu = require('node-os-utils');
var cpu = osu.cpu;


var loop = setInterval(() => {
    let temp = getCpu
}, 500);
/*
var loop = setInterval(() => {
    
    cpu.usage()
    .then(cpuPercentage => {
        console.log(cpuPercentage) 
    })    
}, 500);*/

/*
describe('cpu', function () {
    it('returns cpu average and count', function (done) {
      this.timeout(5000)
  
      var cpu = osu.cpu
      var info = cpu.average()
      var count = cpu.count()
      assert.ok(count > 0)
      assert.ok(Object.keys(info).length > 0)
      done()
    })
  
    it.skip('returns cpu usage', function (done) {
      this.timeout(5000)
  
      var cpu = osu.cpu
  
      cpu.usage().then((num) => {
        assert.ok(num > 0)
        done()
      })
    })
  })
  
  describe('drive', function () {
    it('returns drive info', function (done) {
      var drive = osu.drive
  
      drive.info().then((info) => {
        assert.ok(Object.keys(info).length > 0)
        done()
      })
    })
  })
  
  describe('memory', function () {
    it('returns memory info', function (done) {
      var men = osu.mem
  
      men.info().then((info) => {
        assert.ok(Object.keys(info).length > 0)
        done()
      })
    })
  })
*/