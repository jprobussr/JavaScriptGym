// const images = [
//   'https://scrimba.com/links/advancedjs-resources-images-scenic1',
//   'https://scrimba.com/links/advancedjs-resources-images-scenic2',
//   'https://scrimba.com/links/advancedjs-resources-images-scenic3',
// ];

// const container = document.getElementById('image-container');

// const loadImage = async (url) => {
//   const img = new Image();
//   img.src = url;
//   img.alt = 'Scenic Image';

//   img.decode();
//   return img;
// }

// const preloadImages = async (urls) => {
//   const loading = document.createElement('p');
//   loading.textContent = 'Loading...';
//   container.appendChild(loading);

//   try {
//     const promises = urls.map((url) => loadImage(url));
//     const results = await Promise.allSettled(promises);

//     results.forEach((result, index) => {
//       if (result.status === 'fulfilled') {
//         container.appendChild(result.value);
//       } else {
//         const p = document.createElement('p');
//         p.textContent = `Failed to load: ${urls[index]}`;
//         container.append(p);
//         console.error(result.reason);
//       }
//     });
//   } finally {
//     loading.remove();
//   }
// }

// preloadImages(images);