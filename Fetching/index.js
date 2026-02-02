// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((data) => {
//     const imageElement = document.createElement('img');
//     imageElement.src = data.message;
//     imageElement.alt = 'a random dog image';
//     document.getElementById('img-container').appendChild(imageElement);
//   });

// const getDogImage = async () => {
//   const response = await fetch(
//     'https://apis.scrimba.com/dog.ceo/api/breeds/image/random',
//   );
//   const data = await response.json();
//   const imageElement = document.createElement('img');
//   imageElement.src = data.message;
//   imageElement.alt = 'a random dog image';
//   document.getElementById('img-container').appendChild(imageElement);
// };

// getDogImage();

const getDogImage = async () => {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random');
    const data =  await response.json();

    const imageElement = document.createElement('img');
    imageElement.src = data.message;
    imageElement.alt = 'A random dog image';

    document.getElementById('img-container').appendChild(imageElement);
}

getDogImage();
