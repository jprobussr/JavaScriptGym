const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

console.log(returnRandBase());

const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }

    return newStrand;
};

console.log(mockUpStrand());

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,

        mutate() {
            const bases = ['A', 'T', 'C', 'G'];
            const randIndex = Math.floor(Math.random() * this.dna.length);
            const currentBase = this.dna[randIndex];

            const newBases = bases.filter((base) => base !== currentBase);
            const newBase = newBases[Math.floor(Math.random() * newBases.length)];
            this.dna[randIndex] = newBase;
            return this.dna;
        },

        compareDNA(otherPAequor) {
            let commonCount = 0;
            
            // Compare DNA bases at each index
            this.dna.forEach((base, index) => {
                if (base === otherPAequor.dna[index]) {
                    commonCount++;
                }
            });
            // Calculate percentage of identical bases
            const percentage = ((commonCount / this.dna.length) * 100).toFixed(2);

            //Print the message
            console.log(`Specimen #${this.specimenNum} and Specimen #${otherPAequor.specimenNum} have ${percentage}% DNA in common.`);
    }
};

}

const pAequor1 = pAequorFactory(1, ['A', 'C', 'T', 'G', 'A', 'A', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T']);
const pAequor2 = pAequorFactory(2, ['A', 'C', 'T', 'G', 'A', 'A', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C']);

pAequor1.compareDNA(pAequor2);
