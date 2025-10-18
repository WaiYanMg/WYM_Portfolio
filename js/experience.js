// 🌟 Reveal timeline cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".timeline-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150); // cascade delay
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

// 📄 Smooth Resume Download + Firefly Notification
document.addEventListener("DOMContentLoaded", () => {
  const resumeBtn = document.querySelector(".btn-gold");
  if (!resumeBtn) return;

  resumeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Trigger download
    const link = document.createElement("a");
    link.href = "/docs/WaiYanMaung_CV.pdf";
    link.download = "WaiYanMaung_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Create floating notification panel
    const notif = document.createElement("div");
    notif.className = "fixed bottom-10 right-10 glass-card px-6 py-3 text-gold font-semibold shadow-lg animate-fade-in-fast";
    notif.innerText = "📄 Resume Downloaded Successfully!";
    document.body.appendChild(notif);

    // Add firefly sparks
    for (let i = 0; i < 10; i++) {
      const f = document.createElement("div");
      f.classList.add("firefly");
      f.style.left = `${Math.random() * 100}%`;
      f.style.top = `${Math.random() * 100}%`;
      notif.appendChild(f);
      setTimeout(() => f.remove(), 1500);
    }

    // Remove panel after 3 seconds
    setTimeout(() => notif.remove(), 3000);
  });
});
