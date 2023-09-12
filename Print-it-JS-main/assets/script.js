const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// POUR LES POITNS //
let dots = document.querySelector(".dots");


let dot = dots.querySelectorAll("div");

dot[0].classList.add("dot_selected");
let banner = document.querySelector(".banner-img");

// Pour les fleches //
let arrow_left = document.querySelector(".arrow_left");

let arrow_right = document.querySelector(".arrow_right");
let banner_src = banner.src;

let currentimage = banner_src.replace(
  "http://127.0.0.1:5501/assets/images/slideshow/",
  ""
);


let firstimg = 0;

// Fleche Gauche //
arrow_left.addEventListener("click", function () {
  

  let dotselected = document.querySelector(".dot_selected");
  dotselected.classList.remove("dot_selected");

  let banner = document.querySelector(".banner-img");
  let currentImageSrc = banner.src;

  let currentimage = currentImageSrc.replace(
    "http://127.0.0.1:5501/assets/images/slideshow/",
    ""
  );
  let currentIndex = slides.findIndex((slide) => slide.image === currentimage);

  if (currentIndex !== -1) {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    banner.src = "./assets/images/slideshow/" + slides[currentIndex].image;
  }

  dot[currentIndex].classList.add("dot_selected");
});

let lastimg = slides.length - 1;

// Fleche Droite //
arrow_right.addEventListener("click", function () {
  

  let dotselected = document.querySelector(".dot_selected");
  
  dotselected.classList.remove("dot_selected");

  let banner = document.querySelector(".banner-img");
  let currentImageSrc = banner.src;

  let currentimage = currentImageSrc.replace(
    "http://127.0.0.1:5501/assets/images/slideshow/",
    ""
  );
  let currentIndex = slides.findIndex((slide) => slide.image === currentimage);

  if (currentIndex !== -1) {
    currentIndex = (currentIndex + 1) % slides.length;
    banner.src = "./assets/images/slideshow/" + slides[currentIndex].image;
  }

  dot[currentIndex].classList.add("dot_selected");
});

// mettre les coms pour bien ce re trouver///
