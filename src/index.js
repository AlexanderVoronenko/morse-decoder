const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = "";
    for (let i = 0; i < expr.length / 10; i++) {
        let dotsLines = "";

        for (let j = 0; j < 5; j++) {
            let current = "";
            current += expr[i * 10 + j * 2] + expr[i * 10 + j * 2 + 1];
            if (current == "**") break;
            if (current !== "00") dotsLines += current == "10" ? "." : "-";
        }


        result += dotsLines == "" ? " " : MORSE_TABLE[dotsLines];
    }
    return result;
}

module.exports = {
    decode
}