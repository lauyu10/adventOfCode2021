import fileReader from "../utils/fileReader.js";

const dataReaderTest = () => {
    const urlFile = './day7/testDay7.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split(',');
    dataRetrieve = dataRetrieve.map(element => parseInt(element));
    return dataRetrieve;
}

const dataReader = () => {
    const urlFile = './day7/input.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split(',');
    dataRetrieve = dataRetrieve.map(element => parseInt(element));
    return dataRetrieve;
}

const median = (data) => {
    data.sort((a, b) => {
        return a - b;
    });
    console.log(data);
    let half = Math.floor(data.length / 2);
    if(data.length % 2 === 1){
        return data[half];
    } else {
        return Math.round((data[half - 1] + data[half])/ 2.0);
    }
}

const meanCeil = (data) => {
   return Math.ceil(data.reduce((a, b) => a + b) / data.length);
}
const meanFloor = (data) => Math.floor(data.reduce((a, b) => a + b) / data.length);

const countBetweenValues = (list, valueToRespect) => {
    let sum = 0; 
    list.forEach(element => {
        sum += Math.abs(element - valueToRespect); 
    });
    return sum;
} 

const countBetweenSumValues = (list, valueToRespect) => {
    let sum = 0;
    list.forEach(element => {
        let diff = Math.abs(element - valueToRespect);
        sum += (diff * (diff + 1)) / 2;
    })
    return sum;
}

const puzzle1 = (data) => {
    let medianValue = median(data);
    console.log(medianValue);
    console.log(countBetweenValues(data, medianValue));
}

const puzzle2 = (data) => {
    let meanValueCeil = meanCeil(data);
    let meanValueFloor = meanFloor(data);
    console.log(meanValueCeil);
    console.log(meanValueFloor)
    console.log(countBetweenSumValues(data, meanValueFloor));
}

const day7 = {
    dataReaderTest,
    dataReader,
    puzzle1,
    puzzle2,
}

export default day7;