const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
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
    compareDna(otherOrganism) {
      let matchingBase = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          matchingBase++;
        }
      }
      const percentage = (matchingBase / this.dna.length) * 100;

      console.log(
        `Specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`,
      );
    },
    willLikelySurvive() {
      let survivalBase = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          survivalBase++;
        }
      }

      const survivalPercentage = (survivalBase / this.dna.length) * 100;
      return survivalPercentage >= 60;
    },
  };
};

const survivingOrganisms = [];
let specimenCounter = 1;

while (survivingOrganisms.length < 30) {
  const newOrganism = pAequorFactory(specimenCounter, mockUpStrand());
  
  if (newOrganism.willLikelySurvive()) {
    survivingOrganisms.push(newOrganism);
  }

  specimenCounter++;
}

const allSurvive = survivingOrganisms.every((organism) => {
  return organism.willLikelySurvive();
});

console.log(allSurvive);