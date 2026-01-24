const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "read":
    readFile(args[1]);
    break;

  case "write":
    writeFile(args[1], args.slice(2).join(" "));
    break;

  case "copy":
    copyFile(args[1], args[2]);
    break;

  case "delete":
    deleteFile(args[1]);
    break;

  case "list":
    listDirectory(args[1] || ".");
    break;

  default:
    showHelp();
}

function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return console.error("Error reading file:", err.message);
    console.log("File Content:\n", data);
  });
}

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) return console.error("Error writing file:", err.message);
    console.log("File written successfully!");
  });
}

function copyFile(source, destination) {
  fs.copyFile(source, destination, (err) => {
    if (err) return console.error("Error copying file:", err.message);
    console.log("File copied successfully!");
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) return console.error("Error deleting file:", err.message);
    console.log("File deleted successfully!");
  });
}


function listDirectory(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) return console.error("Error listing directory:", err.message);
    console.log("Directory Contents:");
    files.forEach(file => console.log(file));
  });
}
function showHelp() {
  console.log(`
File Manager CLI Usage:

node index.js read <filePath>
node index.js write <filePath> <content>
node index.js copy <sourcePath> <destinationPath>
node index.js delete <filePath>
node index.js list <directoryPath>

Examples:
node index.js read test.txt
node index.js write test.txt Hello World
node index.js copy a.txt b.txt
node index.js delete test.txt
node index.js list .
`);
}
