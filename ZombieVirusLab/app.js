const returnRandBase = () => {
  const dnaBase = ["A", "C", "T", "G"];
  const randIndex = Math.floor(Math.random() * dnaBase.length);

  return dnaBase[randIndex];
};

const generateVirusDna = () => {
  const virusDna = [];

  for (let i = 0; i < 15; i++) {
    virusDna.push(returnRandBase());
  }

  return virusDna;
};

const virusFactory = (specimenNum, dna) => {
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

const virus1 = virusFactory(100, generateVirusDna());
const originalDna = [...virus1.dna];
const mutatedDna = virus1.mutate();

console.log({originalDna, mutatedDna});



