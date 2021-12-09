import fileReader from "../utils/fileReader.js";
import Coordinate from "./model/coordinate.js";

const dataReaderTest = () => {
    const urlFile = './day9/testDay9.txt';
    const arrayNumber = new Array(0);
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\r\n');
    dataRetrieve.forEach(element => {
        let values = element.split('');
        values = values.map(element => parseInt(element));
        arrayNumber.push(values);
    });
    return arrayNumber;
}

const dataReader = () => {
    const urlFile = './day9/input.txt';
    const arrayNumber = new Array(0);
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\n');
    dataRetrieve.forEach(element => {
        let values = element.split('');
        values = values.map(element => parseInt(element));
        arrayNumber.push(values);
    });
    return arrayNumber;
}

const determineNeighborsNoDiagonal = (i, j, xLimit, yLimit) => {
    let coordinates = new Array(0);
    if (i - 1 >= 0) {
        coordinates.push(new Coordinate(i - 1, j));
    }
    if (i + 1 < xLimit) {
        coordinates.push(new Coordinate(i + 1, j));
    }
    if (j - 1 >= 0) {
        coordinates.push(new Coordinate(i, j - 1));
    }
    if (j + 1 < yLimit) {
        coordinates.push(new Coordinate(i, j + 1));
    }
    return coordinates;
}

const sum = (previousValue, currentValue) => previousValue + currentValue;

const mul = (previousValue, currentValue) => previousValue * currentValue;

const puzzle1 = (data) => {
    let coordinatesLowValue = lowPointsPosition(data);
    let sumValue = 0;
    coordinatesLowValue.forEach(element => {
        sumValue += data[element.x][element.y] + 1;
    })
    console.log(sumValue);
}

const lowPointsPosition = (data) => {
    let xLimit = data.length;
    let yLimit = data[0].length;
    let valuesLowest = new Array(0);
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            let neighbors = determineNeighborsNoDiagonal(i, j, xLimit, yLimit);
            let valueToTest = data[i][j];
            let isLowest = true;
            for (let candidat = 0; candidat < neighbors.length; candidat++) {
                let neighbor = neighbors[candidat]
                if (valueToTest >= data[neighbor.x][neighbor.y]) {
                    isLowest = false;
                    break;
                }
            }
            if (isLowest) {
                valuesLowest.push(new Coordinate(i, j));
            }
        }
    }
    return valuesLowest;
}

const bfs = (data, coordinateOfStart) => {
    let coordinates = new Array(coordinateOfStart);
    let checkedCoordinates = new Array(coordinateOfStart);
    let basinLength = 1;
    while (coordinates.length > 0) {
        let coordinateToCheck = coordinates.splice(0, 1);
        let neighbors = determineNeighborsNoDiagonal(coordinateToCheck[0].x, coordinateToCheck[0].y, data.length, data[0].length);
        neighbors.forEach(element => {
            if (!includes(checkedCoordinates, element)) {
                if (data[element.x][element.y] < 9) {
                    coordinates.push(new Coordinate(element.x, element.y));
                    basinLength++
                }
                checkedCoordinates.push(new Coordinate(element.x, element.y));
            }
        });
    }
    return basinLength;
}

const includes = (list, element) => {
    let result = false;
    for(let i = 0; i < list.length; i++){
        if(list[i].x === element.x && list[i].y === element.y){
            return true;
        }
    }
    return result;
}


const puzzle2 = (data) => {
    let valuesToCheck = lowPointsPosition(data);
    let basinsLength = new Array(0);
    valuesToCheck.forEach(element => {
        let basinLength = bfs(data, element);
        basinsLength.push(basinLength);
    })
    basinsLength.sort((a, b) => {
        return a - b;
    });
    let threeBestValues = basinsLength.splice(basinsLength.length - 3, 3);
    console.log(threeBestValues.reduce(mul));
}

const day9 = {
    dataReaderTest,
    dataReader,
    puzzle1,
    puzzle2,
}

export default day9;
