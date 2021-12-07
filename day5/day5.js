import fileReader from "../utils/fileReader.js";

const dataReaderTest = () => {
    const urlFile = './day5/testDay5.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\r\n');
    return dataRetrieve;
}

const dataReader = () => {
    const urlFile = './day5/input.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\n');
    return dataRetrieve;
}

const returnBetweenValue = (firstValue, secondValue) => {
    let arrayValues = new Array(0);
    if (firstValue > secondValue) {
        for (let i = firstValue; i >= secondValue; i--) {
            arrayValues.push(i);
        }
    } else {
        for (let i = firstValue; i <= secondValue; i++) {
            arrayValues.push(i);
        }
    }
    return arrayValues;
}

const puzzle1 = (data) => {
    let coordinates = new Array(0);
    let atLeastDoubleCoordinates = new Array(0);
    data.forEach(element => {
        let points = element.split(' -> ');
        let firstPoint = points[0].split(",");
        firstPoint = {
            x: parseInt(firstPoint[0]),
            y: parseInt(firstPoint[1])
        }
        let secondPoint = points[1].split(",");
        secondPoint = {
            x: parseInt(secondPoint[0]),
            y: parseInt(secondPoint[1])
        }
        if (firstPoint.x === secondPoint.x) {
            let listNumber = returnBetweenValue(firstPoint.y, secondPoint.y);
            listNumber.forEach(element => {
                coordinates.push({
                    x: firstPoint.x,
                    y: element
                })
            })
        } else if (firstPoint.y === secondPoint.y) {
            let listNumber = returnBetweenValue(firstPoint.x, secondPoint.x);
            listNumber.forEach(element => {
                coordinates.push({
                    x: element,
                    y: firstPoint.y
                })
            })
        }
    });
    for (let i = 1; i < coordinates.length; i++) {
        let checkUniqueValue = (element) => (element.x === coordinates[i].x && element.y === coordinates[i].y);
        let doublon = coordinates.filter(checkUniqueValue);
        if (doublon.length > 1) {
            if (atLeastDoubleCoordinates.filter(checkUniqueValue).length === 0) {
                atLeastDoubleCoordinates.push(coordinates[i]);
            }
        }
    }
    console.log(atLeastDoubleCoordinates.length);
}

const puzzle2 = (data) => {
    let coordinates = new Array(0);
    let atLeastDoubleCoordinates = new Array(0);
    data.forEach(element => {
        let points = element.split(' -> ');
        let firstPoint = points[0].split(",");
        firstPoint = {
            x: parseInt(firstPoint[0]),
            y: parseInt(firstPoint[1])
        }
        let secondPoint = points[1].split(",");
        secondPoint = {
            x: parseInt(secondPoint[0]),
            y: parseInt(secondPoint[1])
        }
        if (firstPoint.x === secondPoint.x) {
            let listNumber = returnBetweenValue(firstPoint.y, secondPoint.y);
            listNumber.forEach(element => {
                console.log({
                    x: firstPoint.x,
                    y: element
                })
                coordinates.push({
                    x: firstPoint.x,
                    y: element
                })
            })
        } 
        if (firstPoint.y === secondPoint.y) {
            let listNumber = returnBetweenValue(firstPoint.x, secondPoint.x);
            listNumber.forEach(element => {
                console.log({
                    x: element,
                    y: firstPoint.y
                })
                coordinates.push({
                    x: element,
                    y: firstPoint.y
                })
            })
        }
        if(Math.abs(firstPoint.x - firstPoint.y) === Math.abs(secondPoint.x - secondPoint.y) || 
                Math.abs(firstPoint.x - secondPoint.x) === Math.abs(firstPoint.y - secondPoint.y)){
            let listNumberX = returnBetweenValue(firstPoint.x, secondPoint.x);
            let listNumberY = returnBetweenValue(firstPoint.y, secondPoint.y);
            for(let i = 0; i < listNumberX.length; i++){
                console.log({
                    x: listNumberX[i],
                    y: listNumberY[i]
                })
                coordinates.push({
                    x: listNumberX[i],
                    y: listNumberY[i]
                })
            }
        }
    });
    console.log(coordinates.length);
    for (let i = 1; i < coordinates.length; i++) {
        let checkUniqueValue = (element) => (element.x === coordinates[i].x && element.y === coordinates[i].y);
        let doublon = coordinates.filter(checkUniqueValue);
        if (doublon.length > 1) {
            if (atLeastDoubleCoordinates.filter(checkUniqueValue).length === 0) {
                atLeastDoubleCoordinates.push(coordinates[i]);
            }
        }
    }
    console.log(atLeastDoubleCoordinates.length);
}

const day5 = {
    dataReaderTest,
    dataReader,
    puzzle1,
    puzzle2,
}

export default day5;