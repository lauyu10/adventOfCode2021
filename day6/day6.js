import fileReader from '../utils/fileReader.js'

const LIMIT_DATE_PUZZLE_1 = 80;
const LIMIT_DATE_PUZZLE_2 = 256;

const dataReaderTest = () => {
    const urlFile = './day6/testDay6.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split(',');
    dataRetrieve = dataRetrieve.map(element => parseInt(element));
    return dataRetrieve;
}

const dataReader = () => {
    const urlFile = './day6/inputDay6.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split(',');
    dataRetrieve = dataRetrieve.map(element => parseInt(element));
    return dataRetrieve;
}

const puzzle1 = (data) => {
    let counterLanterns = initData(data);
    for(let date = 1; date <= LIMIT_DATE_PUZZLE_1; date++){
        let lanternCreated = parseInt(counterLanterns.splice(0, 1));
        counterLanterns.push(lanternCreated);
        counterLanterns[6] += lanternCreated;
    }
    console.log(counterLanterns.reduce(sum));
}

const initData = (data) => {
    let counterLantern = new Array(9);
    for(let i = 0; i < counterLantern.length; i++){
        counterLantern[i] = data.filter(element => element === i).length;
    }
    return counterLantern;
}

const sum = (previousValue, currentValue) => {
    return previousValue + currentValue;
}

const puzzle2 = (data) => {
    let counterLanterns = initData(data);
    console.log(counterLanterns);
    for(let date = 1; date <= LIMIT_DATE_PUZZLE_2; date++){
        let lanternCreated = parseInt(counterLanterns.splice(0, 1));
        counterLanterns.push(lanternCreated);
        counterLanterns[6] += lanternCreated;
        console.log(counterLanterns);
    }
    console.log(counterLanterns.reduce(sum));
}

const day6 = {
    dataReaderTest,
    dataReader,
    puzzle1,
    puzzle2,
}

export default day6;