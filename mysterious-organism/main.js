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
        const randomIndex = Math.floor(Math.random() * 15);
        const originalBase = this.dna[randomIndex];

        let newBase = returnRandBase();
        
        while (newBase === originalBase) {
            newBase = returnRandBase();
        }
        this.dna[randomIndex] = newBase;
        return this.dna;
    },
  };

  return newObject;
};

const organism1 = pAequorFactory(1, mockUpStrand());
const originalDna = [...organism1.dna];

console.log(`Before: ${originalDna}`);
console.log(`After: ${organism1.mutate()}`);


