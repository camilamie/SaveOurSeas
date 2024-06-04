const section1 = document.getElementById('section1');
const images = [
    'image1.webp',
    'image2.webp',
    'image4.webp'
];
let currentIndex = 0;

function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    section1.style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(changeBackgroundImage, 5000);

// Initial background image
section1.style.backgroundImage = `url('${images[0]}')`;