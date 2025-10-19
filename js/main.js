// 🌟 Scroll Animation for Service Cards
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".service-item");

  if (items.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), index * 150);
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
  }
});

// Nvgaigation Menu Toggle for Mobile
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });


// 🌙 Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// ✨ Firefly Hover Effect (for buttons, links, logo)
document.querySelectorAll(".firefly-hover").forEach((element) => {
  const container = element.querySelector(".firefly-container");
  if (!container) return; // skip if no container inside

  element.addEventListener("mouseenter", () => {
    for (let i = 0; i < 5; i++) {
      const f = document.createElement("div");
      f.classList.add("firefly");
      const x = Math.random() * element.offsetWidth;
      const y = Math.random() * element.offsetHeight;
      f.style.left = `${x}px`;
      f.style.top = `${y}px`;
      container.appendChild(f);
      setTimeout(() => f.remove(), 1200);
    }
  });
});

// ✨ Shared Firefly Intro Animation Function
function triggerFireflyIntro(elementId, duration = 3000, interval = 250) {
  const target = document.getElementById(elementId);
  if (!target) return;

  const container = target.querySelector(".firefly-container");
  const start = Date.now();

  const timer = setInterval(() => {
    if (Date.now() - start > duration) {
      clearInterval(timer);
      return;
    }

    // Spawn 3 fireflies each cycle
    for (let i = 0; i < 3; i++) {
      const f = document.createElement("div");
      f.classList.add("firefly");

      const x = Math.random() * target.offsetWidth;
      const y = Math.random() * target.offsetHeight;
      f.style.left = `${x}px`;
      f.style.top = `${y}px`;

      container.appendChild(f);
      setTimeout(() => f.remove(), 1500);
    }
  }, interval);
}

// 🌟 Automatically run firefly intro on load for common pages
window.addEventListener("load", () => {
  // Example: homepage, about, experience
  ["intro-name", "intro-about", "intro-experience"].forEach(id => {
    triggerFireflyIntro(id);
  });
});


// 🕒 Auto-calculate real-time age
document.addEventListener("DOMContentLoaded", () => {
  const birthDate = new Date(1996, 6, 10); // July = 6 (months start at 0)
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust if birthday hasn't occurred yet this year
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hasBirthdayPassed) age--;

  // Display the age
  const ageSpan = document.getElementById("age");
  if (ageSpan) ageSpan.textContent = age;
});

function initFireflyHover() {
  document.querySelectorAll(".firefly-hover").forEach((element) => {
    // Avoid duplicates
    if (element.dataset.fireflyInit) return;
    element.dataset.fireflyInit = true;

    const container = element.querySelector(".firefly-container");
    if (!container) return;

    element.addEventListener("mouseenter", () => {
      for (let i = 0; i < 5; i++) {
        const spark = document.createElement("div");
        spark.classList.add("firefly");
        spark.style.top = `${Math.random() * 100}%`;
        spark.style.left = `${Math.random() * 100}%`;
        spark.style.animationDelay = `${Math.random() * 0.5}s`;
        container.appendChild(spark);

        setTimeout(() => spark.remove(), 1200);
      }
    });
  });
}

// Run once at page load
document.addEventListener("DOMContentLoaded", initFireflyHover);

