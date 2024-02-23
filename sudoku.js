const fs = require('fs')

function read(n) {
    let arrNum = []
    const arr = fs
        .readFileSync('./puzzles.txt', 'utf-8')
        .trim()
        .split('\n')
        [n].split('')

    for (let i = 0; i < arr.length; i += 9) {
        arrNum.push(arr.slice(i, i + 9))
    }
    return arrNum
}
//console.log(read(3))

/**
 * cсчитываем строчку через фску
 * сформировать массив 9х9
 * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
 */

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
                newArrInside.push(read[j][i])
            }
            newArr.push(newArrInside)
        }

        return newArr
    }

    //   readToStringVert(read, 77)

    //находим каких цифр нет в строке
    const numbers = function doNumbers() {
        const numbers = ['f', '1', '2', '3', '4', '5', '6', '7', '8', '9']
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
    return 'Is totally solved'
}

function prettyBoard(n) {
    /**
     * Принимает игровое поле в том формате, в котором его вернули из функции solve.
     * Выводит в консоль/терминал судоку.*/
    return n.join('\n')
}
//console.log(prettyBoard(read(3)))
