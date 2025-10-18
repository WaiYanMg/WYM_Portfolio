// Fade in sections when they appear
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".skill-card, .glass-card").forEach((el) => observer.observe(el));
