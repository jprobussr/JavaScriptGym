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
    compareVirusDna(otherVirus) {
      let matchingBases = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherVirus.dna[i]) {
          matchingBases++;
        }
      }
      const similarity = (matchingBases / this.dna.length) * 100;
      console.log(
        `Specimen #${this.specimenNum} and Specimen #${otherVirus.specimenNum} have ${similarity.toFixed(2)}% DNA in common.`,
      );
    },
    isHighlyInfectious() {
      let cgCount = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          cgCount++;
        }
      }
      const cgPercentage = (cgCount / this.dna.length) * 100;
      return cgPercentage >= 60;
    },
  };
};

const organism1 = virusFactory(100, generateVirusDna());
const organism2 = virusFactory(2, generateVirusDna());

const infectiousViruses = [];

while (infectiousViruses.length < 30) {
  const newVirus = virusFactory(
    infectiousViruses.length + 1,
    generateVirusDna(),
  );
  if (newVirus.isHighlyInfectious()) {
    infectiousViruses.push(newVirus);
  }
}

const allInfectious = infectiousViruses.every((virus) => {
  return virus.isHighlyInfectious();
});

console.log(allInfectious);