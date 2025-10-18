// 🪄 Firefly Intro Animation for "Projects" title (3s)
window.addEventListener("load", () => {
  const introTitle = document.getElementById("intro-projects");
  if (!introTitle) return;

  const container = introTitle.querySelector(".firefly-container");
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

      const x = Math.random() * introTitle.offsetWidth;
      const y = Math.random() * introTitle.offsetHeight;
      f.style.left = `${x}px`;
      f.style.top = `${y}px`;

      container.appendChild(f);
      setTimeout(() => f.remove(), 1500);
    }
  }, interval);
});

// 🌟 Scroll Fade-in for Project Cards
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150);
      }
    });
  }, { threshold: 0.2 });

  projects.forEach(p => observer.observe(p));
});

// 🌟 Animation for Visible Projects
const css = document.createElement("style");
css.innerHTML = `
.project-card {
  opacity: 0;
  transform: translateY(40px);
}
.project-card.visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s ease-out;
}`;
document.head.appendChild(css);
