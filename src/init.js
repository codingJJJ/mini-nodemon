const listenerFile = require('./listsenerFile');
const startChidProcess = require('./startChidProcess');

const debounce = require('./utils/debounce')
const { entry } = require('./config')

const deBounceStart = debounce(() => startChidProcess(entry), 500)

function init() {

    listenerFile(entry, deBounceStart)
}

module.exports = init