const { getAllQuestions } = require('./parser');
const writeData = require('./writer').default;

const links = [   
    'http://www.indiabix.com/biochemistry/dna-structure-and-replication/048002',
    'http://www.indiabix.com/biochemistry/dna-structure-and-replication/049001',
    'http://www.indiabix.com/biochemistry/carbohydrate/050001',
];


parseFromLinks = async (index) => {
    const link = links[index];
    if (link) {
        const linkWords = link.split('/');
        const fileName = linkWords[linkWords.length-3] + '_' + linkWords[linkWords.length-2] + `(${linkWords[linkWords.length-1]})` ;
        const data = await getAllQuestions(link);
        writeData(data, `./parsed/${fileName}.json`);
        parseFromLinks(index+1);
    }
};

parseFromLinks(0);

