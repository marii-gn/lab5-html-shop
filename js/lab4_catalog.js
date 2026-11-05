// --- методи пошуку елементів ---
const searchInput = document.getElementById("searchInput");           // getElementById
const cards = document.querySelectorAll(".product-card");             // querySelectorAll
const titles = document.getElementsByClassName("product-title");      // getElementsByClassName
const mainEl = document.getElementsByTagName("main")[0];              // getElementsByTagName
const catalogSection = document.querySelector(".catalog");            // querySelector

// ---------- Пункт 2: самодрук ----------
const NEW_TEXT = "Новинка!";

function typeNewLabel(title) {
  const label = document.createElement("span");
  label.className = "new-label";
  title.appendChild(label); // appendChild

  let i = 0;
  const timer = setInterval(function () {
    label.textContent += NEW_TEXT[i];
    i++;
    if (i === NEW_TEXT.length) clearInterval(timer);
  }, 150);
}

cards.forEach(function (card, i) {
  card.dataset.name = titles[i].textContent.toLowerCase();
  if (card.dataset.new === "true") {
    typeNewLabel(titles[i]);
  }
});

// ---------- Пункт 3: пошук ----------
function updateInfo(query, found) {
  const oldInfo = document.getElementById("resultsInfo");

  if (!query) {
    if (oldInfo) mainEl.removeChild(oldInfo); // removeChild
    return;
  }

  const info = document.createElement("p");
  info.id = "resultsInfo";
  info.className = "results-info";
  info.textContent = found ? "Знайдено товарів: " + found : "Нічого не знайдено";

  if (oldInfo) {
    mainEl.replaceChild(info, oldInfo);        // replaceChild
  } else {
    mainEl.insertBefore(info, catalogSection); // insertBefore
  }
}

function searchProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let found = 0;

  cards.forEach(function (card) {
    const match = card.dataset.name.includes(query);
    card.style.display = match ? "" : "none";
    if (match) found++;
  });

  updateInfo(query, found);
}

function clearSearch() { // викликається з атрибута onclick у HTML
  searchInput.value = "";
  searchProducts();
  searchInput.focus();
}

searchInput.oninput = searchProducts;
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Escape") clearSearch();
});