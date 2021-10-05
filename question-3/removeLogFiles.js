const fs = require('fs')
const path = require('path')
const logsDir = './logs'

function removeLogFilesSync() {
    // Output the file names to delete
    // Remove all the logs from the log directory
    // remove logs directory

    fs.readdirSync(logsDir).forEach(fileName => {
        fs.unlinkSync(path.join(logsDir, fileName))
        console.log(path.join(fileName))
    })
    fs.rmdirSync(logsDir)
    console.log(`${logsDir} has been deleted.`)

}

function removeLogFilesAsync() {
    fs.readdir(logsDir, (err, files) => {
        if (err)
          console.log(err)
        else {
          files.forEach(file => {
            fs.unlink(path.join(logsDir, file), function (err) {
                if (err) throw err
                // if no error, file has been deleted successfully
                console.log(file)
            });
          })
        // Delete Directory
        fs.rmdir(logsDir, function (err) {
            if (err) throw err
            // if no error, file has been deleted successfully
            console.log(`${logsDir} has been deleted.`)
        })
        }
      })
}

removeLogFilesSync()