const imgs = [
  'images/admin.png',
  'images/fakeProfile.png',
  'images/profilePicture.PNG',
];

const container = document.getElementById('container');

const renderImages = () => {
    let imgDOM = '';
    for (let i = 0; i < imgs.length; i++) {
        imgDOM += `<img alt='Profile Image' class='team-img' src=${imgs[i]} />`;
    }

    container.innerHTML = imgDOM;
}

renderImages();
