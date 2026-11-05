// ---------- Пункт 1 ----------
const productImages = [
  "images/coat.png",
  "images/shoes.webp",
  "images/dress.jpg",
  "images/backpack.jpg"
];

const fallingLayer = document.getElementById("fallingLayer"); // метод пошуку: getElementById

function dropImage() {
  const img = document.createElement("img");
  img.src = productImages[Math.floor(Math.random() * productImages.length)];
  img.alt = "";
  img.className = "falling-item";
  img.style.left = Math.random() * 95 + "%";
  img.style.animationDuration = (3 + Math.random() * 2) + "s";

  img.addEventListener("animationend", function () {
    fallingLayer.removeChild(img);
  });

  fallingLayer.appendChild(img);
}

setInterval(dropImage, 1000);

// ---------- Пункт 5 ----------
const nav = document.querySelector(".main-nav"); // метод пошуку: querySelector

function adaptNav() {
  const isNarrow = window.innerWidth <= 768; // BOM: об'єкт window
  nav.classList.toggle("nav-vertical", isNarrow);
  document.body.classList.toggle("narrow", isNarrow);
}

adaptNav();
window.addEventListener("resize", adaptNav);