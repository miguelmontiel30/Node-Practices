const { exec } = require('child_process')
const { spawn } = require('child_process')
exec('ls -la', (e, stdout) => {
    (e) ?
    console.log(e) :
    console.log(stdout)
})

const myprocess = spawn('cmd.exe', ['/c','dir']);

process.stdout.on("data", data => console.log(data.toString()));
// process.on("exit", () => console.log("process end"));