const fs = require ('fs')

    const write = function(cmd="Nothing") {
        fs.writeFileSync('./note.txt',cmd)
    }
    //write
    module.exports = write