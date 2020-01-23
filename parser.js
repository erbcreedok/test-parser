const { JSDOM } = require('jsdom');

function getQuestion(node) {
    const number = node.querySelector('.bix-td-qno').textContent - 0;
    const question = number + '. ' + node.querySelector('.bix-td-qtxt p').textContent;
    const options = [...node.querySelectorAll('.bix-tbl-options tr')].map(x => x.textContent);
    const answer = node.querySelector('.jq-hdnakqb').textContent;
    return {number, question, options, answer};
}

function getQuestions(document) {
    const questions = [...document.querySelectorAll('.bix-tbl-container')].map(getQuestion);   
    // const questions2 = [...document.querySelectorAll('.bix-tbl-container')].map(getQuestion)
    return questions;
}

function getDocument(url) {
    return JSDOM.fromURL(url).then(dom => {
        console.log(`fetching ${url}`);
        return dom.window.document;
    });
}

async function getAllQuestions(parentURL, thisUrl=parentURL) {
    const document = await getDocument(thisUrl);
    const questions = getQuestions(document);
    let nextPageElem = document.querySelector('.mx-pager a:last-child');
    if (nextPageElem) {
        const nextURL = parentURL + nextPageElem.href.split(parentURL)[1];
        questions.push(...await getAllQuestions(parentURL, nextURL));
    }
    return questions;
}

module.exports = { getQuestions, getDocument, getAllQuestions };