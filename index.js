import day1 from './day1/day1.js';

const dataDay1 = day1.dataReader();

const resultDay1Puzzle1 = day1.puzzle1(dataDay1);
const resultDay1Puzzle2 = day1.puzzle2(dataDay1);

console.log(resultDay1Puzzle1, resultDay1Puzzle2);