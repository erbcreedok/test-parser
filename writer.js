const fs = require('fs');

function writeData(data, filename) {
    try {
    	let text = JSON.stringify(data, null, '\t');
        text = text.split('\t').join('');
        text = text.split('[').join('');
        text = text.split(']').join('');
        text = text.split('],\n').join('');
        text = text.split('{').join('');
        text = text.split('}').join('');
        text = text.split(',').join('');
        text = text.split('"').join('');

        fs.writeFileSync(filename, text, 'utf-8');
        console.log(`JSON has been saved to ${filename}`);
        return true;
    } catch (e) {
        console.log(`error while saving ${filename}`);
        return false;
    }
}

module.exports.default = writeData;