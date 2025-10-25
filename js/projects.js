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

// ---------------------------------------------------
// 💡 Project Modal Logic (with formatted descriptions)
// ---------------------------------------------------

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

  // 🧠 Allow HTML formatting in project description
  title.textContent = project.title;
  desc.innerHTML = project.desc;

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
  } else if (project.images && project.images.length > 0) {
    vid.classList.add("hidden");
    img.classList.remove("hidden");
    img.src = project.images[0];
  }

  // Open modal
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// 🔄 Media Navigation
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

// 🖱️ Close modal when clicking outside
document.addEventListener("click", (e) => {
  const modal = document.getElementById("project-modal");
  if (e.target.id === "project-modal") closeProjectModal();
});


// 🌐 GitHub CDN base path
//const CDN_BASE = "https://cdn.jsdelivr.net/gh/WaiYanMg/WYM_Portfolio_Media/";
const CDN_BASE = "https://cdn.jsdelivr.net/gh/WaiYanMg/WYM_Portfolio_Media@main/";

// 🖼️ Project media paths
const PROJECT_MEDIA = {
  careplus: {
    video: `${CDN_BASE}videos/careplus-web.mp4`,
    poster: `${CDN_BASE}images/careplus-thumb.png`,
  },
   pos: [
    `${CDN_BASE}images/POS1.png`,
    `${CDN_BASE}images/POS2.png`,
    `${CDN_BASE}images/POS3.png`,
    `${CDN_BASE}images/POS4.png`,
    `${CDN_BASE}images/POS5.png`,
    `${CDN_BASE}images/POS6.png`,
    `${CDN_BASE}images/POS7.png`,
    `${CDN_BASE}images/POS8.png`,
    `${CDN_BASE}images/POS9.png`,
  ],
  fumi: [
    `${CDN_BASE}images/fumi1.PNG`,
    `${CDN_BASE}images/fumi2.PNG`,
    `${CDN_BASE}images/fumi3.PNG`,
    `${CDN_BASE}images/fumi4.PNG`,
  ],
hr: [
  `${CDN_BASE}images/GA_HR1.png`,
  `${CDN_BASE}images/GA_HR2.png`,
  `${CDN_BASE}images/GA_HR3.png`,
  `${CDN_BASE}images/GA_HR4.png`,
  `${CDN_BASE}images/GA_HR5.png`,
  `${CDN_BASE}images/GA_HR6.png`,
  `${CDN_BASE}images/GA_HR7.png`,
  `${CDN_BASE}images/GA_HR8.png`,
  `${CDN_BASE}images/GA_HR9.png`,
  `${CDN_BASE}images/GA_HR10.png`,
  `${CDN_BASE}images/GA_HR11.png`,
  `${CDN_BASE}images/GA_HR12.png`,
  `${CDN_BASE}images/GA_HR13.png`,
  `${CDN_BASE}images/GA_HR14.png`,
  `${CDN_BASE}images/GA_HR15.png`,
  `${CDN_BASE}images/GA_HR16.JPG`,
],
  iot: [
    `${CDN_BASE}images/IOT1.png`,
    `${CDN_BASE}images/IOT2.png`,
    `${CDN_BASE}images/IOT3.png`,
    `${CDN_BASE}images/IOT4.png`,
    `${CDN_BASE}images/IOT5.png`,
  ],
};