import fileReader from "../utils/fileReader.js";

const dataReader = () => {
    const urlFile = './day3/inputDay3.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\n');
    return dataRetrieve;
}

const dataReaderTest = () => {
    const urlFile = './day3/testDay3.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\r\n');
    return dataRetrieve;
}

const puzzle1 = (tab) => {
    let gammmaBitValue = determineBitsOfGamma(tab);
    let epsilonBitValue = reverseValueBit(gammmaBitValue);
    gammmaBitValue = parseInt(gammmaBitValue, 2);
    epsilonBitValue = parseInt(epsilonBitValue, 2);
    return gammmaBitValue * epsilonBitValue;
}

const puzzle2 = (tab) => {
    let oxygenRate = parseInt(getOxygenRate(tab), 2);
    let CO2Rate = parseInt(getCO2Rate(tab), 2);
    return oxygenRate * CO2Rate;
}

const getOxygenRate = (tab) => {
    let arrayToCheck = tab;
    for(let i = 0; i < tab[0].length && arrayToCheck.length > 1; i++){
        let value = "";
        for(let j = 0; j < arrayToCheck.length; j++){
            value += arrayToCheck[j].charAt(i);
        }
        const valueOfBit = conditionElementMost(value);
        arrayToCheck = arrayToCheck.filter((element) => element.charAt(i) === valueOfBit);
    }
    return arrayToCheck[0];
}

const getCO2Rate = (tab) => {
    let arrayToCheck = tab;
    for(let i = 0; i < tab[0].length && arrayToCheck.length > 1; i++){
        let value = "";
        for(let j = 0; j < arrayToCheck.length; j++){
            value += arrayToCheck[j].charAt(i);
        }
        const valueOfBit = conditionElementLeast(value);
        arrayToCheck = arrayToCheck.filter((element) => element.charAt(i) === valueOfBit);
    }
    return arrayToCheck[0];
}

const reverseValueBit = (value) => {
    let result = "";
    for(let i = 0; i < value.length; i++){
        result += reverseBit(value.charAt(i));
    }
    return result
}

const reverseBit = (value) => {
    return value === "0" ? "1" : "0"; 
}

const determineBitsOfGamma = (tab) => {
    let result = "";
    for(let i = 0; i < tab[0].length; i++){
        let value = "";
        for(let j = 0; j < tab.length; j++){
            value += tab[j].charAt(i);
        }
        result += conditionElementMost(value);
    }
    return result;
}

const counterElementOf0 = (element) => {
    return (element.match(/0/g)||[]).length;
}

const counterElementOf1 = (element) => {
    return (element.match(/1/g)||[]).length;
}

const conditionElementMost = (element) => {
    if(counterElementOf1(element) < counterElementOf0(element)){
        return "0";
    } else {
        return "1";
    }
}

const conditionElementLeast = (element) => {
    if(counterElementOf1(element) < counterElementOf0(element)){
        return "1";
    } else {
        return "0";
    }
}

const day3 = {
    dataReader,
    dataReaderTest,
    puzzle1,
    puzzle2,
}

export default day3;