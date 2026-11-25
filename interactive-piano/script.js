const pianoKeys = document.querySelectorAll('.piano__key');

const keyboardMap = {
  a: 'key-c4',
  w: 'key-c-sharp4',
  s: 'key-d4',
  e: 'key-d-sharp4',
  d: 'key-e4',
  f: 'key-f4',
  t: 'key-f-sharp4',
  g: 'key-g4',
  y: 'key-g-sharp4',
  h: 'key-a4',
  u: 'key-a-sharp4',
  j: 'key-b4',
  k: 'key-c5',
};

const handleKeyDown = (event) => {
  const pressedKey = event.key;
  const pianoKeyId = keyboardMap[pressedKey];
  if (!pianoKeyId) {
    return;
  }
  console.log(pianoKeyId);
};

document.addEventListener('keydown', handleKeyDown);
