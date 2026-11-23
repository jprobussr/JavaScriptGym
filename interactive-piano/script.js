const pianoKeys = document.querySelectorAll(".piano__key");

const handleMouseEnter = (event) => {
  event.currentTarget.style.backgroundColor = "lightblue";
};

const handleMouseLeave = (event) => {
  event.currentTarget.style.backgroundColor = "";
};

const handleKeyDown = (event) => {
  console.log(event.key);
}

const setupPianoKey = (key) => {
  key.addEventListener("mouseenter", handleMouseEnter);
  key.addEventListener("mouseleave", handleMouseLeave);
};


document.addEventListener('keydown', handleKeyDown);
pianoKeys.forEach(setupPianoKey);
