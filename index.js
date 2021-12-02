import day1 from './day1/day1.js';
import day2 from './day2/day2.js';

const dataDay1 = day1.dataReader();

const resultDay1Puzzle1 = day1.puzzle1(dataDay1);
const resultDay1Puzzle2 = day1.puzzle2(dataDay1);

console.log(resultDay1Puzzle1, resultDay1Puzzle2);

const dataDay2 = day2.dataReader();
const result1 = day2.puzzle1(dataDay2);
console.log(result1);
const result2 = day2.puzzle2(dataDay2);

console.log(result2);