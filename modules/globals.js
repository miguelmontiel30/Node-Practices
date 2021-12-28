// console.log(global);

// PARA USAR FILE SYSTEM
const fs = require('fs');

// LEER ARCHIVOS
function readMyFile(route, cb) {
    fs.readFile(route, (error, data) => {
        cb(data.toString())
    })
}

readMyFile(__dirname + '/archivo_texto.txt', console.log)


function writeOnMyFile(route, content, cb) {
    fs.writeFile(
        route,
        content,
        (error) => (error) ? console.log('No he podido escribir', error) : console.log(`Se ha escrito correctamente`)
    )
}

writeOnMyFile(__dirname + '/createdFile.txt', 'Soy un archivo totalmente nuevo, dude', console.log)

function deleteFile(route, cb) {
    fs.unlink(route, cb)
}

deleteFile(__dirname + '/createdFile.txt', console.log)