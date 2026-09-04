// 🌟 MAIN.JS — WAI YAN MAUNG PORTFOLIO
// -----------------------------------------------------------
// Handles all animations, interactivity, and live updates
// -----------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================
  // 1️⃣ Scroll Animation — Reveal Service / Project Cards
  // ==========================================================
  const items = document.querySelectorAll(".service-item");
  if (items.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add delay for smooth staggered animation
          setTimeout(() => entry.target.classList.add("visible"), index * 150);
        }
      });
    }, { threshold: 0.2 });
    items.forEach(item => observer.observe(item));
  }

  // ==========================================================
  // 2️⃣ Mobile Navbar Toggle — Responsive Menu System
  // ==========================================================
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();

      const isHidden = nav.classList.contains("hidden");
      const icon = toggle.querySelector("i");

      if (isHidden) {
        // 🔓 OPEN MENU
        nav.classList.remove("hidden");
        nav.classList.add("flex", "animate-fade-in-menu");
        icon.classList.replace("fa-bars", "fa-xmark");
        setTimeout(() => nav.classList.remove("animate-fade-in-menu"), 350);
      } else {
        // 🔒 CLOSE MENU
        nav.classList.add("animate-fade-out-menu");
        icon.classList.replace("fa-xmark", "fa-bars");
        setTimeout(() => {
          nav.classList.add("hidden");
          nav.classList.remove("flex", "animate-fade-out-menu");
        }, 250);
      }
    });

    // 🧭 Close menu when clicking outside (mobile only)
    document.addEventListener("click", (e) => {
      if (
        window.innerWidth < 768 &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target) &&
        !nav.classList.contains("hidden")
      ) {
        nav.classList.add("animate-fade-out-menu");
        const icon = toggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");

        setTimeout(() => {
          nav.classList.add("hidden");
          nav.classList.remove("flex", "animate-fade-out-menu");
        }, 250);
      }
    });

    // 🔗 Close menu when a link is clicked
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          nav.classList.add("animate-fade-out-menu");
          const icon = toggle.querySelector("i");
          icon.classList.replace("fa-xmark", "fa-bars");

          setTimeout(() => {
            nav.classList.add("hidden");
            nav.classList.remove("flex", "animate-fade-out-menu");
          }, 250);
        }
      });
    });
  }

  // ==========================================================
  // 3️⃣ Dark / Light Mode Toggle (Optional)
  // ==========================================================
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // ==========================================================
  // 4️⃣ Real-Time Age Calculator
  // ==========================================================
  const birthDate = new Date(1996, 6, 10); // July 10, 1996
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) age--;

    const ageSpan = document.getElementById("age");
  if (ageSpan) ageSpan.textContent = `${age} years old`;

  // ==========================================================
  // 5️⃣ Firefly Hover Effect — Golden Spark Animation
  // ==========================================================
  initFireflyHover();

  // ==========================================================
  // 6️⃣ Firefly Intro Animation for Headings
  // ==========================================================
  ["intro-name", "intro-about", "intro-experience"].forEach(id => {
    triggerFireflyIntro(id);
  });
});


// ====================================================================
// ✨ FUNCTION DEFINITIONS — Firefly Effects & Visual Enhancements
// ====================================================================

// 🔥 Firefly Hover Effect
function initFireflyHover() {
  document.querySelectorAll(".firefly-hover").forEach((el) => {
    // Prevent multiple initializations on the same element
    if (el.dataset.fireflyInit) return;
    el.dataset.fireflyInit = true;

    const container = el.querySelector(".firefly-container");
    if (!container) return;

    el.addEventListener("mouseenter", () => {
      // Create multiple glowing particles randomly inside the element
      for (let i = 0; i < 5; i++) {
        const f = document.createElement("div");
        f.classList.add("firefly");
        f.style.left = `${Math.random() * el.offsetWidth}px`;
        f.style.top = `${Math.random() * el.offsetHeight}px`;
        container.appendChild(f);
        // Remove spark after animation ends
        setTimeout(() => f.remove(), 1200);
      }
    });
  });
}

// 💫 Firefly Intro Animation (for main headers)
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

    // Create small glowing orbs periodically
    for (let i = 0; i < 3; i++) {
      const f = document.createElement("div");
      f.classList.add("firefly");
      f.style.left = `${Math.random() * target.offsetWidth}px`;
      f.style.top = `${Math.random() * target.offsetHeight}px`;
      container.appendChild(f);
      setTimeout(() => f.remove(), 1500);
    }
  }, interval);
}

