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

// ✨ Firefly Intro Animation (for name)
window.addEventListener("load", () => {
  const introName = document.getElementById("intro-name");
  if (!introName) return;

  const container = introName.querySelector(".firefly-container");
  if (!container) return;

  const start = Date.now();
  const duration = 3000;
  const interval = 250;

  const fireflyTimer = setInterval(() => {
    if (Date.now() - start > duration) {
      clearInterval(fireflyTimer);
      return;
    }

    for (let i = 0; i < 3; i++) {
      const f = document.createElement("div");
      f.classList.add("firefly");
      const x = Math.random() * introName.offsetWidth;
      const y = Math.random() * introName.offsetHeight;
      f.style.left = `${x}px`;
      f.style.top = `${y}px`;
      container.appendChild(f);
      setTimeout(() => f.remove(), 1500);
    }
  }, interval);
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
