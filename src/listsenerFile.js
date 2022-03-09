const chokiar = require('chokidar');
const c = require('../c');



const findRelyArr = require('./utils/findRelyArr')

function listenerFile(entry, deBounceStart) {

    const paths = findRelyArr(entry)
    chokiar.watch(paths).on('all', () => {
        deBounceStart()
    })
}

module.exports = listenerFile
