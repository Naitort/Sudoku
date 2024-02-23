let puzzle = [
    ['a', 'k', 'f', 'o', 'x', 'e', 's'],
    ['s', 'o', 'a', 'w', 'a', 'h', 'p'],
    ['i', 't', 'c', 'k', 'e', 't', 'n'],
    ['o', 't', 's', 'd', 'h', 'o', 'h'],
    ['s', 'e', 'x', 'g', 's', 't', 'a'],
    ['u', 'r', 'p', 'i', 'w', 'e', 'u'],
    ['z', 's', 'b', 'n', 'u', 'i', 'r'],
]
const word = 'otters'
const fox = 'foxes'
const qw = 'tckel'
function searchStraightLineInclude(word, puzzle) {
    for (let i = 0; i < puzzle.length; i++) {
        let newArr = []
        for (let j = 0; j < puzzle[i].length; j++) {
            //console.log(puzzle[j][i])
            newArr.push(puzzle[j][i])
        }
        for (arr of newArr) {
            if (arr === word[0]) {
                if (
                    newArr.join('').substr(newArr.indexOf(arr), word.length) ===
                        word ||
                    newArr
                        .reverse()
                        .join('')
                        .substr(newArr.indexOf(arr), word.length) === word
                ) {
                    return true
                }
            }
        }
        //console.log(newArr)
    }

    for (item of puzzle) {
        for (arr of item) {
            if (arr === word[0]) {
                if (
                    item.join('').substr(item.indexOf(arr), word.length) ===
                        word ||
                    item
                        .reverse()
                        .join('')
                        .substr(item.indexOf(arr), word.length) === word
                ) {
                    return true
                }
            }
        }
    }
    return false
}
console.log(searchStraightLineInclude(qw, puzzle))
