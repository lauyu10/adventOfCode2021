import fs from 'fs';

const fileReader = (urlFile) => {
    return fs.readFileSync(urlFile, 'utf-8');
}

export default fileReader;