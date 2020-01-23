const { getAllQuestions } = require('./parser');
const writeData = require('./writer').default;

const links = [   
    'http://www.indiabix.com/biochemistry/structure-and-properties-of-amino-acids/',
    // 'http://www.indiabix.com/biochemistry/thermodynamics-and-free-energy/',
    // 'http://www.indiabix.com/biochemistry/protein-purification/',
    // 'http://www.indiabix.com/biochemistry/allosteric-effects/',
    // 'http://www.indiabix.com/biochemistry/immune-system/',
    // 'http://www.indiabix.com/biochemistry/anti-bodies/',
    // 'http://www.indiabix.com/biochemistry/immunological-techniques/',
    // 'http://www.indiabix.com/biochemistry/membrane-structure-and-functions/',
    // 'http://www.indiabix.com/biochemistry/nucleic-acids/',
    // 'http://www.indiabix.com/biochemistry/genetic-code-and-regulation/',
    // 'http://www.indiabix.com/biochemistry/transcription-and-regulation/',
    // 'http://www.indiabix.com/biochemistry/protein-structure/',
    // 'http://www.indiabix.com/biochemistry/genetic-regulation-prokaryotes/',
    // 'http://www.indiabix.com/biochemistry/polymerase-chain-reaction/',
    // 'http://www.indiabix.com/biochemistry/glycolysis/',
    // 'http://www.indiabix.com/biochemistry/atp-synthesis-and-fatty-acid-oxidation/',
    // 'http://www.indiabix.com/biochemistry/oxidative-phosphorylation/',
    // 'http://www.indiabix.com/biochemistry/nitrogen-metabolism/',
    // 'http://www.indiabix.com/biochemistry/vitamins-and-coenzymes/',
    // 'http://www.indiabix.com/biochemistry/spectroscopy/',
    // 'http://www.indiabix.com/biochemistry/uv-luminance-spectroscopy/',
    // 'http://www.indiabix.com/biochemistry/chromatography/',
    // 'http://www.indiabix.com/biochemistry/hplc/',
    // 'http://www.indiabix.com/biochemistry/cell-structure-and-compartments/',
    // 'http://www.indiabix.com/biochemistry/structure-and-properties-of-peptides/',
    // 'http://www.indiabix.com/biochemistry/protein-stability/',
    // 'http://www.indiabix.com/biochemistry/gel-electrophoresis/',
    // 'http://www.indiabix.com/biochemistry/enzymes/',
    // 'http://www.indiabix.com/biochemistry/antigen/',
    // 'http://www.indiabix.com/biochemistry/immune-response/',
    // 'http://www.indiabix.com/biochemistry/disease-associated-with-immune-system/',
    // 'http://www.indiabix.com/biochemistry/cell-signalling-and-transduction/',
    // 'http://www.indiabix.com/biochemistry/dna-structure-and-replication/',
    // 'http://www.indiabix.com/biochemistry/rna-structure/',
    // 'http://www.indiabix.com/biochemistry/protein-synthesis/',
    // 'http://www.indiabix.com/biochemistry/protein-and-nucleic-acid-interactions/',
    // 'http://www.indiabix.com/biochemistry/recombinant-dna-technology/',
    // 'http://www.indiabix.com/biochemistry/carbohydrate/',
    // 'http://www.indiabix.com/biochemistry/lipid/',
    // 'http://www.indiabix.com/biochemistry/tca-cycle/',
    // 'http://www.indiabix.com/biochemistry/photosynthesis-and-respiration/',
    // 'http://www.indiabix.com/biochemistry/amino-acid-metabolism/',
    // 'http://www.indiabix.com/biochemistry/minerals/',
    // 'http://www.indiabix.com/biochemistry/nmr-spectroscopy/',
    // 'http://www.indiabix.com/biochemistry/ft-ir-spectroscopy/',
    // 'http://www.indiabix.com/biochemistry/gas-chromatography/',
];


parseFromLinks = async (index) => {
    const link = links[index];
    if (link) {
        const linkWords = link.split('/');
        const fileName = linkWords[linkWords.length-3] + '_' + linkWords[linkWords.length-2];
        const data = await getAllQuestions(link);
        writeData(data, `./parsed/${fileName}.json`);
        parseFromLinks(index+1);
    }
};

parseFromLinks(0);

