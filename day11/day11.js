import fileReader from "../utils/fileReader.js";
import Coordinate from "../day9/model/coordinate.js";

const LIMIT_STEP = 100;

const dataReaderTest = () => {
    const urlFile = './day11/testDay11.txt';
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
    const urlFile = './day11/input.txt';
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

const determineNeighborsDiagonal = (i, j, xLimit, yLimit) => {
    let coordinates = new Array(0);
    if (i - 1 >= 0) {
        coordinates.push(new Coordinate(i - 1, j));
        if(j - 1 >= 0){
            coordinates.push(new Coordinate(i - 1, j - 1));
        }
        if(j + 1 < yLimit){
            coordinates.push(new Coordinate(i - 1, j + 1));
        }
    }
    if (i + 1 < xLimit) {
        coordinates.push(new Coordinate(i + 1, j));
        if(j - 1 >= 0){
            coordinates.push(new Coordinate(i + 1, j - 1));
        }
        if(j + 1 < yLimit){
            coordinates.push(new Coordinate(i + 1, j + 1));
        }
    }
    if (j - 1 >= 0) {
        coordinates.push(new Coordinate(i, j - 1));
    }
    if (j + 1 < yLimit) {
        coordinates.push(new Coordinate(i, j + 1));
    }
    return coordinates;
}

const puzzle1 = (data) => {
    let flashs = 0;
    for(let i = 1; i <= LIMIT_STEP; i++){
        let listCoordindatesToCheckNeighbors = new Array(0);
        for(let x = 0; x < data.length; x++){
            for(let y = 0; y < data[0].length; y++){
                if(data[x][y] + 1 > 9){
                    data[x][y] = 0;
                    listCoordindatesToCheckNeighbors.push({x: x, y: y});
                    flashs++;
                } else {
                    data[x][y] += 1;
                }
            }
        }
        while(listCoordindatesToCheckNeighbors.length > 0){
            let valueToCheck = listCoordindatesToCheckNeighbors.splice(0, 1)[0];
            let neighbors = determineNeighborsDiagonal(valueToCheck.x, valueToCheck.y, data.length, data[0].length);
            neighbors.forEach(element => {
                if(data[element.x][element.y] === 9){
                    data[element.x][element.y] = 0;
                    listCoordindatesToCheckNeighbors.push({x: element.x, y: element.y});
                    flashs++;
                } else if (data[element.x][element.y] !== 0){
                    data[element.x][element.y] += 1
                }
            })
        }
    }
    console.log(flashs);
}

const puzzle2 = (data) => {
    let notAllWith0 = true;
    let i = 1;
    while(notAllWith0){
        let listCoordindatesToCheckNeighbors = new Array(0);
        for(let x = 0; x < data.length; x++){
            for(let y = 0; y < data[0].length; y++){
                if(data[x][y] + 1 > 9){
                    data[x][y] = 0;
                    listCoordindatesToCheckNeighbors.push({x: x, y: y});
                } else {
                    data[x][y] += 1;
                }
            }
        }
        while(listCoordindatesToCheckNeighbors.length > 0){
            let valueToCheck = listCoordindatesToCheckNeighbors.splice(0, 1)[0];
            let neighbors = determineNeighborsDiagonal(valueToCheck.x, valueToCheck.y, data.length, data[0].length);
            neighbors.forEach(element => {
                if(data[element.x][element.y] === 9){
                    data[element.x][element.y] = 0;
                    listCoordindatesToCheckNeighbors.push({x: element.x, y: element.y});
                } else if (data[element.x][element.y] !== 0){
                    data[element.x][element.y] += 1
                }
            })
        }
        let tabInRow = data.flat();
        if(tabInRow.filter(customElements => customElements === 0).length === tabInRow.length){
            notAllWith0 = false;
            break;
        }
        i++
    }
    console.log(i);
}

const day11 = {
    dataReaderTest,
    dataReader,
    puzzle1,
    puzzle2,
}

export default day11;