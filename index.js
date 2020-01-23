const getHTML = require('./getter').default;
const getQuestions = require('./parser').default;
const writeData = require('./writer').default;

getHTML('http://www.indiabix.com/biochemistry/water-buffers-ph-and-macromolecules').then(html => {
    // console.log(html);
    const data = getQuestions(html);
    writeData(data, 'data.json');
});