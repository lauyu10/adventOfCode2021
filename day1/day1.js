import fileReader from '../utils/fileReader.js';

const dataReader = () => {
	const urlFile = './day1/day1.txt';
	let dataRetrieve = String(fileReader(urlFile));
	dataRetrieve = dataRetrieve.split('\n').map((value) => parseInt(value));
	return dataRetrieve;
}

const puzzle1 = (tab) => {
	let increase = 0;
	for (let i = 1; i <= tab.length; i++) {
		if (tab[i - 1] < tab[i]) {
			increase++;
		}
	}
	return increase;
}

const puzzle2 = (tab) => {
	let increase = 0;
	for (let i = 1; i < tab.length - 1; i++) {
		if ((tab[i - 1] + tab[i] + tab[i + 1]) < (tab[i] + tab[i + 1] + tab[i + 2])) {
			increase++;
		}
	}
	return increase;
}

const day1 = {
	puzzle1,
	puzzle2,
	dataReader,
}

export default day1;
