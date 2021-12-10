import fileReader from "../utils/fileReader.js";

const DIGIT_2 = 'acdfg';

const DIGIT_3 = 'abcdf';
const DIGIT_5 = 'bcdef';

const DIGIT_0 = 'abcdeg';
const DIGIT_6 = 'bcdefg';
const DIGIT_9 = 'abcdef';

const dataReaderTest = () => {
    const urlFile = './day8/testDay8.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\r\n');
    let finalData = new Array(0);
    dataRetrieve.forEach(element => {
        finalData.push(element.split(' | ')[1]);
    });
    return finalData;
}

const dataReader = () => {
    const urlFile = './day8/input.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\n');
    let finalData = new Array(0);
    dataRetrieve.forEach(element => {
        finalData.push(element.split(' | ')[1]);
    });
    return finalData;
}

const dataReader2 = () => {
    const urlFile = './day8/input.txt';
    let dataRetrieve = String(fileReader(urlFile));
    return dataRetrieve.split('\n');
}

const puzzle1 = (data) => {
    let counter1478 = 0;
    data.forEach(element => {
        let values = element.split(' ');
        values.forEach(value => {
            let lengthValue = value.length;
            if (lengthValue === 2 || lengthValue === 3 || lengthValue === 4 || lengthValue === 7) {
                counter1478++;
            }
        })
    })
    console.log(counter1478);
}

const isAnagram = (string1, string2) => {
    if(string1.length !== string2.length){
        return false;
    } else {
        return containsAllChars(string1, string2.split(''));
    }
}

const containsAllChars = (string, chars) => {
    for (const char of chars) {
        if (!string.includes(char)) {
            return false;
        }
    }
    return true;
}

const puzzle2 = (data) => {
    let sum = 0;
    const lengthAndValueKnown = {2: 1, 3: 7, 4: 4, 7: 8}
    data.forEach(element => {
        const map = {}
        const twoThreeFive = [];
        const zeroSixNine = [];
        let values = element.split(' | ');
        let modelValue = values[0].split(' ');
        let valueToCheck = values[1].split(' ');
        modelValue.forEach(digit => {
            if (lengthAndValueKnown[digit.length]) {
                map[lengthAndValueKnown[digit.length]] = digit;
            } else if (digit.length === 5) {
                twoThreeFive.push(digit);
            } else {
                zeroSixNine.push(digit);
            }
        })
        const charsInOne = map[1].split("");
        const charsInFour = map[4].split("");
        const charSpecificToFour = charsInFour.filter(
            (char) => !charsInOne.includes(char)
        );

        for (const digit of twoThreeFive) {
            if (containsAllChars(digit, charsInOne)) {
                map[3] = digit;
            } else if (containsAllChars(digit, charSpecificToFour)){
                map[5] = digit;
            } else {
                map[2] = digit;
            }
        }

        for (const digit of zeroSixNine) {
            if (containsAllChars(digit, charsInFour)) {
                map[9] = digit;
            } else if (containsAllChars(digit, charSpecificToFour)) {
                map[6] = digit;
            } else {
                map[0] = digit;
            }
        }

        let valueToInt = "";
        for(const checkValue of valueToCheck){
            for (const [digit, value] of Object.entries(map)) {
                if (isAnagram(checkValue, value)) {
                    valueToInt += digit;
                    break;
                }
            }
        }
        sum += parseInt(valueToInt);
    })
    console.log(sum);
}

const day8 = {
    dataReaderTest,
    dataReader,
    dataReader2,
    puzzle1,
    puzzle2,
}

export default day8;