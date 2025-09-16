const button = document.getElementById('get-dog')
const container = document.getElementById('dog-container');

button.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'A random dog'
            img.style.maxWidth = '300px';
            img.style.marginTop = '1rem'

            container.innerHTML = '';
            container.appendChild(img);
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
})