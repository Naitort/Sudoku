function generateChessboard() {
    const figures = [
        'Ладья',
        'Конь',
        'Слон',
        'Ферзь',
        'Король',
        'Слон',
        'Конь',
        'Ладья',
    ]
    const pawns = new Array(8).fill('Пешка')
    const empty = new Array(8).fill(null)
    const board = []
    board.push(figures.map((el) => `Ч ${el}`))
    board.push(pawns.map((el) => `Ч ${el}`))
    for (let i = 0; i < 4; i++) {
        board.push(empty)
    }
    board.push(pawns.map((el) => `Б ${el}`))
    board.push(figures.map((el) => `Б ${el}`))
    return board
    console.log(board);
}

console.log(generateChessboard)

function renderChessboard() {
    const emojis = {
        'Б Ферзь': '♕',
        'Б Король': '♔',
        'Б Слон': '♗',
        'Б Конь': '♘',
        'Б Ладья': '♖',
        'Б Пешка': '♙',
        'Ч Ферзь': '♛',
        'Ч Король': '♚',
        'Ч Слон': '♝',
        'Ч Конь': '♞',
        'Ч Ладья': '♜',
        'Ч Пешка': '♟',
    }
    const board2 = []
    for (item of generateChessboard()) {
        const emoj = item.map((el) => emojis[el]).join('')
        board2.push(emoj)
    }
    return board2.join('\n')
}
generateChessboard()
console.table(renderChessboard())
module.exports = { generateChessboard, renderChessboard }
