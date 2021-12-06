import fileReader from "../utils/fileReader.js";
import Board from "./model/board.js";

const LIMIT_BOARD = 5;

const dataReaderTest = () => {
    const urlFile = './day4/testDay4.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\r\n\r\n');
    return dataRetrieve;
}

const dataReader = () => {
    const urlFile = './day4/inputDay4.txt';
    let dataRetrieve = String(fileReader(urlFile));
    dataRetrieve = dataRetrieve.split('\n\n');
    return dataRetrieve;
}

const launchGamePuzzle1 = (data) => {
    const numbers = initNumbers(data.shift());
    const players = initPlayers(data);
    let stopCount = false;
    let winner = undefined;
    let numberPicked = undefined;
    let lineWinner = undefined
    while (!stopCount) {
        numberPicked = numbers.shift();
        players.forEach(player => {
            let checkValue = findValue(player, numberPicked);
            if (checkValue !== undefined) {
                player.boardResult.push(checkValue);
                lineWinner = winCondition(player);
                if (lineWinner !== undefined) {
                    stopCount = true;
                    winner = player;
                }
            }
        })
    }
    console.log(sumValuesOfPosition(winner, lineWinner) * numberPicked);
}

const launchGamePuzzle2 = (data) => {
    const numbers = initNumbers(data.shift());
    const players = initPlayers(data);
    let finishedBoard = new Array(0);
    let stopCount = false;
    let winner = undefined;
    let numberPicked = undefined;
    let lineWinner = undefined
    while (!stopCount) {
        numberPicked = numbers.shift();
        console.log(numberPicked);
        for (let i = 0; i < players.length; i++) {
            console.log(i);
            let player = players[i];
            let checkValue = findValue(player, numberPicked);
            if (checkValue !== undefined) {
                player.boardResult.push(checkValue);
                lineWinner = winCondition(player);
                if (lineWinner !== undefined) {
                    if (finishedBoard.filter(element => element === player).length === 0) {
                        if (finishedBoard.length === players.length - 1) {
                            stopCount = true;
                            winner = player;
                            break;
                        } else {
                            finishedBoard.push(player)
                        }
                    }
                }
            }
        }
    }
    console.log(numbers);
    console.log(winner)
    console.log(numberPicked);
    console.log(sumValuesOfPosition(winner, lineWinner) * numberPicked);
}

const initNumbers = (stringNumbers) => {
    let values = stringNumbers.split(',');
    return values.map(element => parseInt(element));
}

const initPlayers = (data) => {
    let listBoard = new Array(0);
    data.forEach(element => {
        let bingoBoard = new Array(0);
        let rowsBingo = element.split('\n');
        rowsBingo.forEach(row => {
            let values = row.match(/(\d+\.|\d+)+/g);
            values = values.map(value => parseInt(value));
            bingoBoard.push(values);
        });
        listBoard.push(new Board(bingoBoard));
    });
    return listBoard;
}

const winCondition = (board) => {
    for (let i = 0; i < LIMIT_BOARD; i++) {
        let lineBingo = board.boardResult.filter(element => element[0] === i);
        if (lineBingo.length === LIMIT_BOARD) {
            return lineBingo;
        }
        let columnBingo = board.boardResult.filter(element => element[1] === i);
        if (columnBingo.length === LIMIT_BOARD) {
            return columnBingo;
        }
    }
    return undefined;
}

const findValue = (board, value) => {
    for (let i = 0; i < LIMIT_BOARD; i++) {
        for (let j = 0; j < LIMIT_BOARD; j++) {
            if (board.board[i][j] === value) {
                return [i, j];
            }
        }
    }
    return undefined;
}

const sumValuesOfPosition = (board) => {
    let result = 0;
    for (let i = 0; i < LIMIT_BOARD; i++) {
        for (let j = 0; j < LIMIT_BOARD; j++) {
            if (!board.boardResult.filter(element => element[0] === i && element[1] === j).length >= 1) {
                result += board.board[i][j];
            }
        }
    }
    return result;
}

const day4 = {
    dataReaderTest,
    launchGamePuzzle1,
    launchGamePuzzle2,
    dataReader,
}

export default day4;