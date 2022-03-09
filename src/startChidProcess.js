const { spawn } = require('child_process')

let childProcess

/**
 * 开启一个重新开启一个子进程
 */
function startChidProcess (path) {
    childProcess && childProcess.kill();
    childProcess = spawn('node', [path], {
        stdio: [process.stdin, process.stdout, process.stderr]
    })
}

module.exports = startChidProcess