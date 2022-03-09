const fs = require('fs');
/**
 * 查找当前的依赖文件
 * @param {*} paths 
 * @returns 
 */
function findRelyArr(paths) {
    const reg = /(?<=require\(['|"](?!\w))(.+)(?=['|"]\))/g
    const pathArr = Array.isArray(paths) ? paths : [paths]
    return pathArr.reduce((pre, val) => {
        const fileName = val.endsWith('.js') ? val : val + '.js';
        let relyArr;
        try {
            const text = fs.readFileSync(fileName, 'utf-8');
            relyArr = text.match(reg)
            if(Array.isArray(relyArr)) {
                return pre.concat(...findRelyArr(relyArr))
            }
        } catch(err) {
            return pre
        }
        return pre
    }, [paths])
}

module.exports = findRelyArr