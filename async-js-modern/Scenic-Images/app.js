const imgContainer = document.getElementById('img-container');
const uploadContainer = document.getElementById('upload-container');
const loadBtn = document.getElementById('submit-imgs');

const images = [
  'https://scrimba.com/links/advancedjs-resources-images-scenic1',
  'https://scrimba.com/links/advancedjs-resources-images-scenic2',
  'https://scrimba.com/links/advancedjs-resources-images-scenic3',
];

const getImagePromise = (url) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'scenic image';

    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', () =>
      reject(new Error(`Failed to load image: ${url}`)),
    );
  });
};

const preloadImages = async (imageUrlsArr) => {
  try {
    const promises = imageUrlsArr.map((url) => getImagePromise(url));

    const results = await Promise.all(promises);

    console.log('All images loaded successfully!');
    uploadContainer.style.display = 'none';

    results.forEach((img) => imgContainer.appendChild(img));
  } catch (err) {
    console.log(err);
  }
};

loadBtn.addEventListener('click', () => preloadImages(images));
