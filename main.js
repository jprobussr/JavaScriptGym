const returnRandomBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}

console.log(returnRandomBase());

const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandomBase());
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
            const randomIndex = Math.floor(Math.random() * this.dna.length);
            const currentBase = this.dna[randomIndex];

            const newBases = bases.filter(base => base !== currentBase);
            const newBase = newBases[Math.floor(Math.random() * newBases.length)];
            this.dna[randomIndex] = newBase;
            return this.dna;
        }
    }
}