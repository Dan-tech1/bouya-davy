document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu");
  const nav = document.querySelector("header nav ul");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Typing effect
const typeTarget = document.querySelector(".typing-text");

if (typeTarget) {
  // Détecter la largeur de l'écran
  const screenWidth = window.innerWidth;

  // Appliquer une taille de texte selon la largeur
  if (screenWidth <= 768) {
    typeTarget.style.fontSize = "18px"; // plus petit sur mobile
  } else {
    typeTarget.style.fontSize = "30px"; // taille normale sur grand écran
  }

  const text = typeTarget.dataset.text || "Étudiant en informatique et réseaux";
  let i = 0;

  function type() {
    if (i < text.length) {
      typeTarget.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  typeTarget.textContent ="";
  type();
}

  // Scroll animation (basic)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".box, .heading").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});

// Scroll animation
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add('active');
    }
  }
});

