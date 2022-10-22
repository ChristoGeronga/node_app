const fs = require ('fs')

    const write = function(cmd="Nothing") {
        fs.writeFileSync('./note.txt',cmd)
    }
    module.exports = write