const text = ["Web Developer", "UI Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];
  const display = document.getElementById("typewriter");

  if (isDeleting) {
    display.textContent = currentText.substring(0, j--);
  } else {
    display.textContent = currentText.substring(0, j++);
  }

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 80 : 120);
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
      navbar.style.backgroundColor = "#111";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    }
  });
});
