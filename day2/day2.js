import fileReader from '../utils/fileReader.js';

const dataReader = () => {
    const urlFile = './day2/day2.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\n');
    return dataRetrieve;
}

const puzzle1 = (tab) => {
    let horizontal = 0;
    let depth = 0
    tab.forEach(element => {
        let values = element?.split(" ");
        switch (values?.[0]) {
            case 'forward':
                horizontal += parseInt(values[1]);
                break;
            case 'down':
                depth += parseInt(values[1]);
                break;
            case 'up':
                depth -= parseInt(values[1]);
                break;
            default:
                break;
        }
    });
    return horizontal * depth;
}

const puzzle2 = (tab) => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    tab.forEach(element => {
        let values = element?.split(" ");
        switch (values?.[0]) {
            case 'forward':
                horizontal += parseInt(values[1]);
                depth += aim * parseInt(values[1]);
                break;
            case 'down':
                aim += parseInt(values[1]);
                break;
            case 'up':
                aim -= parseInt(values[1]);
                break;
            default:
                break;
        }
    });
    console.log(horizontal);
    console.log(depth);
    return horizontal * depth;
}

const day2 = {
    dataReader,
    puzzle1,
    puzzle2
}

export default day2;