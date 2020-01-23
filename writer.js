const fs = require('fs');

function writeData(data, filename) {
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), 'utf-8');
        console.log(`JSON has been saved to ${filename}`);
        return true;
    } catch (e) {
        return false;
    }
}

module.exports.default = writeData;