const vocabulary = {
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "e",
    "ё": "e",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "y",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "с",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "х",
    "ц": "ts",
    "ч": "ch",
    "ш": "sh",
    "щ": "sch",
    "ъ": "",
    "ы": "i",
    "ь": "",
    "э": "eh",
    "ю": "yu",
    "я": "ya",
    "А": "A",
    "Б": "B",
    "В": "V",
    "Г": "G",
    "Д": "D",
    "Е": "E",
    "Ё": "E",
    "Ж": "Zh",
    "З": "Z",
    "И": "I",
    "Й": "Y",
    "К": "K",
    "Л": "L",
    "М": "M",
    "Н": "N",
    "О": "O",
    "П": "P",
    "Р": "R",
    "С": "S",
    "Т": "T",
    "У": "U",
    "Ф": "F",
    "Х": "Kh",
    "Ц": "Ts",
    "Ч": "Ch",
    "Ш": "Sh",
    "Щ": "Sch",
    "Ъ": "",
    "Ы": "Y",
    "Ь": "",
    "Э": "Eh",
    "Ю": "Yu",
    "Я": "Ya",
    " ": " ",
    "!": "!",
    "?": "?",
    "@": "@",
    "№": "#",
    "$": "$",
    "%": "%",
    "^": "^",
    "&": "&",
    "*": "*",
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    ".": ".",
    ",": ",",
    "-": "-",
    ":": ":",
    ";": ";",
    "'": "'",
    '"': '"',
    "{": "{",
    "}": "}",
    "=": "=",
    "+": "+",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0",
    "*": "*",
    "/": "/",
}

let addButton = document.querySelector('.add-btn')
let text = document.querySelector('.input')
let ru = document.querySelector('.ru')
let tr = document.querySelector('.tr')
let clearButton = document.querySelector('.clear-btn')

function translate(translate) {
    let str = ''
    for (let i = 0; i < translate.length; i++) {
        if (translate[i] in vocabulary) {
            str += vocabulary[translate[i]]
        } else {
            text.value = ''
            return alert('Используйте только кириллицу'), remove.lastdiv;
        }
    }
    return str
}

function newLine() {

    let textBtr = text.value
    let textAtr = translate(text.value)

    if (textBtr.length > 7) {
        textBtr = textBtr.substring(0, 7) + '...'
        textAtr = textAtr.substring(0, 7) + '...'
    }

    let strTextB = document.createElement('li')
    strTextB.classList.add('item-border')
    strTextB.style.paddingLeft = '10px'
    strTextB.style.justifyContent = 'flex-start'

    if (textBtr.length > 7 ) {
        strTextB.title = text.value
    }
    

    strTextB.innerText = textBtr

    if (textBtr == '') {
        alert('Вы ничего не написали');
    } else {
        let closeButton = document.createElement('button')
        let icon = document.createElement('img')
        icon.src = 'Group 1.svg'
        closeButton.append(icon)
        closeButton.classList.add('btn-reset')

        let num = document.createElement('div')
        num.classList.add('num')

        function count() {
            let nums = document.querySelectorAll('.num')
            for (let i = 0; i < nums.length; i += 1) {
                nums[i].innerText = i + 1;
            }
        }
        
        strTextB.prepend(num)
        ru.append(strTextB)

        count()

        let strTextA = document.createElement('li')
        strTextA.classList.add('item-border')
        strTextA.innerText = textAtr
        strTextA.append(closeButton)
        tr.append(strTextA)
        
        function closeLine() {
            strTextA.remove()
            strTextB.remove()
        }

        closeButton.addEventListener('click', closeLine)
        closeButton.addEventListener('click', count)

        if (text.value.length > 7) {
            let hintRus = document.createElement('span')
            hintRus.className = 'hint'
            hintRus.innerText = text.value
            strTextB.append(hintRus)
            strTextB.classList.add('stroka-ru')

            let hintTranslit = document.createElement('span')
            hintTranslit.className = 'hint'
            hintTranslit.innerText = translate(text.value)
            strTextA.append(hintTranslit)
            strTextA.classList.add('stroka-tr')
        }
    }
}

addButton.addEventListener('click', newLine)


text.addEventListener('keydown', (i) => {
    if (i.keyCode == '13') {
        newLine()
    }
})

clearButton.addEventListener('click', function() {
    text.value = ''
    document.querySelectorAll(".ru > *").forEach((e, i) => i && e.remove())
    document.querySelectorAll(".tr > *").forEach((e, i) => i && e.remove())
})