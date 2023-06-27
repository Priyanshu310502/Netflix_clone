document.getElementById('cta-button').addEventListener('click', function() {
    var images = [
      'back_1.jpeg',
      'back_2.jpeg',
      'netflix_3.avif',
      'back_3.jpeg',
      'back_4.png'
    ];
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];
    document.getElementById('main').style.backgroundImage = 'url(' + selectedImage + ')';
  });