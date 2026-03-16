// Typing Animation
var typed = new Typed(".text", {
  strings: [
    "Software Developer ",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Backend Developer",
    "Frondend Developer",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// Mobile Menu Toggle
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

// Close menu when clicking on a link
document.querySelectorAll(".navbar ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});

// Skills Animation
function playAnimation() {
  const items = document.querySelectorAll(".skill-item");
  items.forEach((item, index) => {
    item.style.animation = "none";
    setTimeout(() => {
      item.style.animation = `fadeIn 0.5s ease forwards`;
    }, index * 100);
  });
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully! I will get back to you soon.");
  this.reset();
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70; // 70px is navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Light ON / OFF Toggle
const lightBtn = document.getElementById("lightToggle");

lightBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-on");

  // Change icon
  if (document.body.classList.contains("light-on")) {
    lightBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    lightBtn.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
  }
});
