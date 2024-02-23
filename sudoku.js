function read(n) {
    /**
     * cсчитываем строчку через фску
     * сформировать массив 9х9
     * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
     */
}

function solve(read) {
    //составляем массив строк по горизонтали
    const readToStringGor = function readToString() {
        newArr = []
        for (string of read) {
            newArr.push(string.join(''))
        }
        return newArr
    }
    // составляем массив строк по вертикали
    const readToStringVert = function readToStringVert(read) {
        let newArr = []
        for (let i = 0; i < read.length; i++) {
            const newRead = read[i].map((el) => (el === '-' ? (el = 'f') : el))

            let newArrInside = []
            for (let j = 0; j < newRead.length; j++) {
                console.log(read[j][i])

                newArrInside.push(read[j][i])
            }
            newArr.push(newArrInside)
        }
        console.log(newArr)
        return newArr
    }

    readToStringVert(read, 77)

    //находим каких цифр нет в строке
    const numbers = function doNumbers() {
        const numbers = ['a', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        const str = arr.join('').replaceAll('-', '')
        const newArr = []
        numbers.forEach((el) => !str.includes(el) && newArr.push(el))
        return newArr
    }

    // есть массив строк и столбцов, нужно сравнивать и подставлять для теста
}

/**
 * проходит по массиву решает и доставляет цифры
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

function isSolved() {
    /**
     *
     * Принимает игровое поле в том формате, в котором его вернули из функции solve.
     * Возвращает булевое значение — решено это игровое поле или нет.
     */
}

function prettyBoard() {
    /**
     * Принимает игровое поле в том формате, в котором его вернули из функции solve.
     * Выводит в консоль/терминал судоку.
     * Подумай, как симпатичнее его вывести.
     */

    for (item of solve()) {
        const sudoku = item.map((el) => emojis[el]).join('')
        board2.push(emoj)
    }
    return sudoku.join('\n')
}
