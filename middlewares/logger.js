import fs from "fs";
import path from "path";

const logFilePath = path.join("logs", "requests.log");

if (!fs.existsSync("logs")) {
  fs.mkdirSync("logs");
}

const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const end = Date.now();
    const responseTime = end - start;

    const log = `${new Date().toISOString()} | ${req.method} | ${req.originalUrl} | ${res.statusCode} | ${responseTime}ms\n`;

    // Append log to file
    fs.appendFile(logFilePath, log, (err) => {
      if (err) {
        console.error("Error writing log:", err);
      }
    });
  });

  next();
};

export default logger;