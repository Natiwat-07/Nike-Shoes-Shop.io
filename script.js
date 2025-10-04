// DATA
const shoesData = [
    {
        img: "img/shoes1.webp",
        bg: "#93db7d",
        bgText: "img/background-text.png",
        title: "Nike Men's G.T. Cut 3 EP <br/> Basketball Shoes",
    },
    {
        img: "img/shoes2.webp",
        bg: "#a4f1ffff",
        bgText: "img/background-text.png",
        title: "Nike Women's Sabrina 3 <br/> Basketball Shoes",
    },
    {
        img: "img/shoes3.webp",
        bg: "#ff68bbff",
        bgText: "img/background-text.png",
        title: "Nike Women's A'One Leo <br/> Basketball Shoes",
    },
];

let currentIndex = 0;

const shoesImg = document.querySelector(".shoes-img");
const backgroundText = document.querySelector(".background-text");
const textH1 = document.querySelector(".text h1");
const body = document.body;

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

// Animation
function animateElement() {
    // Remove Animation
    shoesImg.classList.remove("animate-top");
    backgroundText.classList.remove("animate-right");
    textH1.classList.remove("animate-scale");

    // Force reflow to Restart Animation
    void shoesImg.offsetWidth;

    // Add Animation
    shoesImg.classList.add("animate-top");
    backgroundText.classList.add("animate-right");
    textH1.classList.add("animate-scale");
}

function updateShoes(index) {
    const data = shoesData[index];

    shoesImg.src = data.img;
    backgroundText.src = data.bgText;
    textH1.innerHTML = data.title;
    body.style.background = data.bg

    animateElement();
}

// Arrow clicks events
rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex +1) % shoesData.length;
    updateShoes(currentIndex);
});

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex -1 + shoesData.length) % shoesData.length;
    updateShoes(currentIndex);
});

updateShoes(currentIndex);

// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});