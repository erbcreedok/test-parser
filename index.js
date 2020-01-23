const getHTML = require('./getter').default;
const getQuestions = require('./parser').default;

getHTML('http://www.indiabix.com/biochemistry/water-buffers-ph-and-macromolecules').then(html => {
    // console.log(html);
    console.log(getQuestions(html));
});