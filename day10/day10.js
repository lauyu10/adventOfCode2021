import fileReader from "../utils/fileReader.js";

const SPECIAL_CHAR_OPEN = ['(', '[', '<', '{'];
const SPECIAL_CHAR_CLOSE = [')', ']', '>', '}'];

const dataReaderTest = () => {
    const urlFile = './day10/testDay10.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\r\n');
    return dataRetrieve;
}

const dataReader = () => {
    const urlFile = './day_10/input.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\n');
    return dataRetrieve;
}

const checkValidChar = (lastOpenChar, charToCheck) => {
    switch (lastOpenChar) {
        case '{':
            return charToCheck === '}';
        case '<':
            return charToCheck === '>';
        case '(':
            return charToCheck === ')';
        case '[':
            return charToCheck === "]";
        default:
            return false;
    }
}

const whichError = (closedChar) => {
    switch (closedChar) {
        case '}':
            return 1197;
        case '>':
            return 25137;
        case ')':
            return 3;
        case ']':
            return 57;
        default:
            return 0;
    }
}

const whatMissing = (char) => {
    switch (char) {
        case '{':
            return 3;
        case '<':
            return 4;
        case '(':
            return 1;
        case '[':
            return 2;
        default:
            return 0;
    }
}

const puzzle1 = (data) => {
    let sumErrorCode = 0;
    data.forEach(row => {
        let lifoChar = new Array(0);
        for (let i = 0; i < row.length; i++) {
            if (SPECIAL_CHAR_CLOSE.includes(row.charAt(i))) {
                let lastOpenChar = lifoChar.pop();
                if (!checkValidChar(lastOpenChar, row.charAt(i))) {
                    sumErrorCode += whichError(row.charAt(i))
                    break;
                }
            } else {
                lifoChar.push(row.charAt(i));
            }
        }
    })
    console.log(sumErrorCode);
}

const puzzle2 = (data) => {
    let sumErrorCode = new Array(0);
    data.forEach(row => {
        let lifoChar = new Array(0);
        for (let i = 0; i < row.length; i++) {
            if (SPECIAL_CHAR_CLOSE.includes(row.charAt(i))) {
                let lastOpenChar = lifoChar.pop();
                if (!checkValidChar(lastOpenChar, row.charAt(i))) {
                    lifoChar = new Array(0);
                    break;
                }
            } else {
                lifoChar.push(row.charAt(i));
            }
        }
        if(lifoChar.length > 0){
            let sum = 0;
            while(lifoChar.length > 0){
                let char = lifoChar.pop();
                sum = sum * 5 + whatMissing(char);
            }
            sumErrorCode.push(sum);
        }
    });
    sumErrorCode.sort((a, b) => {
        return a - b;
    });
    console.log(sumErrorCode[Math.floor(sumErrorCode.length / 2)]);
}

const day10 = {
    dataReaderTest,
    dataReader,
    puzzle1,
    puzzle2,
}

export default day10