const http = require('http');

function getHTML(url) {
    return new Promise((res, rej) => {
        http.get('http://www.indiabix.com/biochemistry/water-buffers-ph-and-macromolecules', (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                res(data);
            });
            resp.on('error', e => {
                rej(e);
            });
        });
    });
}

module.exports.default = getHTML;