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

let currentProject = null;
let currentMediaIndex = 0;

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");
  const github = document.getElementById("modal-github");
  const demo = document.getElementById("modal-demo");
  const img = document.getElementById("modal-image");
  const vid = document.getElementById("modal-video");

  // Store the project globally
  currentProject = project;
  currentMediaIndex = 0;

  title.textContent = project.title;
  desc.textContent = project.desc;

  // Show GitHub / Demo if available
  github.classList.toggle("hidden", !project.github);
  if (project.github) github.href = project.github;
  demo.classList.toggle("hidden", !project.demo);
  if (project.demo) demo.href = project.demo;

  // Show first media
  if (project.video) {
    vid.src = project.video;
    vid.classList.remove("hidden");
    img.classList.add("hidden");
  } else {
    vid.classList.add("hidden");
    img.classList.remove("hidden");
    img.src = project.images[0];
  }

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// Media Navigation
function nextMedia() {
  if (!currentProject || !currentProject.images) return;
  currentMediaIndex = (currentMediaIndex + 1) % currentProject.images.length;
  document.getElementById("modal-image").src = currentProject.images[currentMediaIndex];
}

function prevMedia() {
  if (!currentProject || !currentProject.images) return;
  currentMediaIndex = (currentMediaIndex - 1 + currentProject.images.length) % currentProject.images.length;
  document.getElementById("modal-image").src = currentProject.images[currentMediaIndex];
}

// Click outside to close
document.getElementById("project-modal").addEventListener("click", e => {
  if (e.target.id === "project-modal") closeProjectModal();
});
