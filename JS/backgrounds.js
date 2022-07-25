const images = [
    "배경1.png", "배경2.png", "배경3.png", "배경4.png", "배경5.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src =`img/${chosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);