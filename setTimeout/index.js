


function newWindow() {
  let url = 'https://www.dictionary.com/browse/shivoo';
  let newWindow = window.open(url, '', 'width=500, height=800');

  setTimeout(() => {
    newWindow.close();
  }, 5000);
}
