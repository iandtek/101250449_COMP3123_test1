const fs = require('fs')
const path = require('path')
const logsDir = './logs'

function removeLogFiles() {
    // Output the file names to delete
    fs.readdirSync(logsDir).forEach(fileName => {
        console.log(path.join(fileName))
    })

    // Remove all the logs from the log directory
    // remove logs directory
    
    fs.rmdir(logsDir, { recursive: true }, (err) => {
        if (err) {
            throw err
        }
        console.log(`${logsDir} is deleted!`)
    });
}

removeLogFiles()