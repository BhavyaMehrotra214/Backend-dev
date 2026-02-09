import fs from "fs";
import readline from "readline";

// Create read stream
const readStream = fs.createReadStream("logs.txt");

// Create readline interface
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

// Counters
let infoCount = 0;
let warnCount = 0;
let errorCount = 0;
let totalLines = 0;

// Read file line by line
rl.on("line", (line) => {
  totalLines++;

  if (line.includes("INFO")) {
    infoCount++;
  } else if (line.includes("WARN")) {
    warnCount++;
  } else if (line.includes("ERROR")) {
    errorCount++;
  }
});

// When file reading is complete
rl.on("close", () => {
  console.log("Log File Summary Report");
  console.log("---------------------------");
  console.log("Total Lines:", totalLines);
  console.log("INFO Count :", infoCount);
  console.log("WARN Count :", warnCount);
  console.log("ERROR Count:", errorCount);
});