
/**
 * 节流函数
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
function debounce(fn, delay) {
    let id;
    return () => {
        clearTimeout(id)
        id = setTimeout(fn, delay)
    }
}

module.exports = debounce;