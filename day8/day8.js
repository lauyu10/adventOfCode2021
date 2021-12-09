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

const add = (a, b) => {
    return a + b;
}

const reOrderLetter = (value) => {
    let arrayValue = value.split("");
    arrayValue.sort();
    console.log(arrayValue.reduce(add));
    return arrayValue.reduce(add);
}

const puzzle1 = (data) => {
    let counter1478 = 0;
    data.forEach(element => {
        let values = element.split(' ');
        values.forEach(value => {
            let lengthValue = value.length;
            if(lengthValue === 2 || lengthValue === 3 || lengthValue === 4 || lengthValue === 7){
                counter1478++;
            }
        })
    })
    console.log(counter1478);
}

const case6Char = (value) => {
    let valueOrder = reOrderLetter(value);
    if(valueOrder === DIGIT_0){
        return '0'; 
    } else if(valueOrder === DIGIT_6){
        return '6';
    } else if(valueOrder === DIGIT_9){
        return '9';
    } else {
        return '';
    }
}

const case5Char = (value) => {
    let valueOrder = reOrderLetter(value);
    if(valueOrder === DIGIT_2){
        return '2'; 
    } else if(valueOrder === DIGIT_3){
        return '3';
    } else if(valueOrder === DIGIT_5){
        return '5';
    } else {
        return '';
    }
}

const puzzle2 = (data) => {
    let sum = 0;
    data.forEach(element => {
        let values = element.split(' ');
        let stringToInteger = "";
        values.forEach(value => {
            let lengthValue = value.length;
            switch(lengthValue){
                case 2: 
                    stringToInteger += '1';
                    break;
                case 3:
                    stringToInteger += '7';
                    break;
                case 4:
                    stringToInteger += '4';
                    break;
                case 7:
                    stringToInteger += '8';
                    break;
                case 6: 
                    stringToInteger += case6Char(value);
                    break;
                case 5:
                    stringToInteger += case5Char(value);
                    break;
                default:
                    break;
            }
        })
        console.log(stringToInteger);
        sum += parseInt(stringToInteger);
    })
    console.log(sum);
}

const day8 = {
    dataReaderTest,
    dataReader,
    puzzle1,
    puzzle2,
}

export default day8;