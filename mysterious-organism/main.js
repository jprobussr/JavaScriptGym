const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  const randIndex = Math.floor(Math.random() * 4);

  const element = dnaBases[randIndex];

  return element;
};

const mockUpStrand = () => {
  const newArr = [];

  for (let i = 0; i < 15; i++) {
    newArr.push(returnRandBase());
  }

  return newArr;
};

const pAequorFactory = (specimenNum, dna) => {
  const newObject = {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * 15);
      const originalBase = this.dna[randIndex];
      let newBase = returnRandBase();

      while (newBase === originalBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
  };

  return newObject;
};

