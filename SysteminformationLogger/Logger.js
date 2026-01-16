const os = require("os");
const fs = require("fs");

function logSystemInfo() {
  const cpuCores = os.cpus().length;
  const totalMemory = (os.totalmem() / (1024 * 1024)).toFixed(2);
  const freeMemory = (os.freemem() / (1024 * 1024)).toFixed(2);
  const platform = os.platform();
  const timestamp = new Date().toLocaleString();

  const logData = `
[${timestamp}]
Platform: ${platform}
CPU Cores: ${cpuCores}
Total Memory: ${totalMemory} MB
Free Memory: ${freeMemory} MB
---------------------------------------
`;

  fs.appendFileSync("system.log", logData);
  console.log("System info logged...");
}

setInterval(logSystemInfo, 5000);
