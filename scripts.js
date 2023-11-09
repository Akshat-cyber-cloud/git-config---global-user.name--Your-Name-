// Get references to the images
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

// Set initial positions
let position1 = 0;
let position2 = 0;
let position3 = 0;

// Add click event listeners to move images left and right
image1.addEventListener("click", () => {
    position1 = position1 === 0 ? 100 : 0;
    image1.style.left = position1 + "px";
});

image2.addEventListener("click", () => {
    position2 = position2 === 0 ? 100 : 0;
    image2.style.left = position2 + "px";
});

image3.addEventListener("click", () => {
    position3 = position3 === 0 ? 100 : 0;
    image3.style.left = position3 + "px";
});
