const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}

console.log(returnRandBase());

const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }

    return newStrand;
}

console.log(mockUpStrand());

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,

        mutate() {
            const bases = ['A', 'T', 'C', 'G'];
            const randomIndex = Math.floor(Math.random() * this.dna.length);
            const currentBase = this.dna[randomIndex];

            const newBases = bases.filter((base) => base !== currentBase);
            const newBase = newBases[Math.floor(Math.random() * newBases.length)];
            this.dna[randomIndex] = newBase;
            return this.dna;
        },

        compareDNA(otherPAequor) {
            let commonCount = 0;
            this.dna.filter((base, index) => {
                if (base === otherPAequor.dna[index]) {
                    commonCount++;
                }
            });

            const percentage = ((commonCount / this.dna.length) * 100).toFixed(2);

            console.log(`Specimen #${this.specimenNum} and Specimen #${otherPAequor.specimenNum} have ${percentage}% DNA in common`);
        },

        willLilelySurvive() {
            const survivalBases = this.dna.filter((base) => base === 'C' || base === 'G');
            const survivalRate = (survivalBases.length / this.dna.length) * 100;
            return survivalRate >= 60;
        },
    };
}

const pAequor1 = pAequorFactory(1, ['A', 'C', 'T', 'G', 'A', 'A', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T']);
const pAequor2 = pAequorFactory(2, ['A', 'C', 'T', 'G', 'A', 'A', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C']);

pAequor1.compareDNA(pAequor2);

const ex1 = pAequorFactory(1, ['A', 'C', 'T', 'G']);
const ex2 = pAequorFactory(2, ['C', 'A', 'T', 'T']);

ex1.compareDNA(ex2);

const specimen1 = pAequorFactory(1, mockUpStrand());
console.log(`Specimen #DNA: ${specimen1.dna}`);
console.log(`will Specimen #1 survive? ${specimen1.willLilelySurvive()}`);