const { JSDOM } = require('jsdom');

function getQuestion(node) {
    const number = node.querySelector('.bix-td-qno').textContent - 0;
    const question = number + '. ' + node.querySelector('.bix-td-qtxt p').textContent;
    const options = Array.from(node.querySelectorAll('.bix-tbl-options tr')).map(x => x.textContent);
    const answer = node.querySelector('.jq-hdnakqb').textContent;
    return {number, question, options, answer};
}

function getQuestions(htmlString) {
    console.log(htmlString);
    const dom = new JSDOM(htmlString);
    const document = dom.window.document;
    const questions = Array.from(document.querySelectorAll('.bix-tbl-container')).map(getQuestion);   
    return questions;
}

module.exports.default = getQuestions;