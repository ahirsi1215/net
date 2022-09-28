const transpose = require('./transpose.js')

const wordSearch = (letters, word) => { 
    
    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticleJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticleJoin) {
        if (l.includes(word)) return true
    }


    return false
}


module.exports = wordSearch