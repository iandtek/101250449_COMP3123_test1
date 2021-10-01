const fs = require('fs');
const path = require('path');
const logsDir = './logs';


function createLogFiles() {
    // Create a logs directory if it doesn't exist 
    if (!fs.existsSync(logsDir)){
        fs.mkdirSync(logsDir);
    }

    // Change directory to logs directory

    // Create 10 log files and write some text into the file
    for (let i = 1; i <= 10; i++) {
        let filename = `log-${i}.txt`
        fs.writeFile(path.join(logsDir, filename), `Log Created at ${Date.now()}`, function (err) {
            if (err) throw err;
        }); 
        console.log(filename);       
    }
}

createLogFiles()