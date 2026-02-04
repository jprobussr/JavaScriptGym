const images = [
  'https://scrimba.com/links/advancedjs-resources-images-scenic1',
  'https://scrimba.com/links/advancedjs-resources-images-scenic2',
  'https://scrimba.com/links/advancedjs-resources-images-scenic3',
];

const container = document.getElementById('image-container');

const loadImage = async (url) => {
  const img = new Image();
  img.src = url;
  img.alt = 'Scenic image';

  await img.decode();
  container.appendChild(img);
};

const preloadImages = async (urls) => {
  const loading = document.createElement('p');
  loading.textContent = 'Loading...';
  container.appendChild(loading);

  for (const url of urls) {
    try {
      await loadImage(url);
    } catch (error) {
      const p = document.createElement('p');
      p.textContent = `Failed to load: ${url}`;
      container.appendChild(p);
      console.error(error);
    }
  }

  loading.remove();
};

preloadImages(images)
