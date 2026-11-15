const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  const randIndex = Math.floor(Math.random() * dnaBases.length);
  return dnaBases[randIndex];
};

const mockUpStrand = () => {
  const newStrand = [];

  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }

  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      const originalBase = this.dna[randIndex];
      let newBase = returnRandBase();

      while (originalBase === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
  };
};

const organism = pAequorFactory(10, mockUpStrand());
const originalDna = [...organism.dna];
const mutatedDna = organism.mutate();

console.log({originalDna, mutatedDna});


