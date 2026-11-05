const details = document.getElementById("details");
const detailsWrapper = details.parentNode;
const TIP_TEXT = "Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка";
let tooltip = null;

function showTip() {
  if (tooltip) return;
  details.classList.add("details-hover");

  tooltip = document.createElement("span");
  tooltip.className = "tooltip";
  tooltip.textContent = TIP_TEXT;
  detailsWrapper.appendChild(tooltip);
}

function hideTip() {
  details.classList.remove("details-hover");
  if (tooltip) {
    detailsWrapper.removeChild(tooltip);
    tooltip = null;
  }
}

details.addEventListener("mouseover", showTip);
details.addEventListener("mouseout", hideTip);