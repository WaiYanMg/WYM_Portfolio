// Initialize EmailJS
(function() {
  emailjs.init("5O7Ay2vR4Gz57Jl1j"); // Replace with your EmailJS public key
})();

// Email validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Firefly effect helper
function spawnFireflies(container, count = 6) {
  for (let i = 0; i < count; i++) {
    const f = document.createElement("div");
    f.classList.add("firefly");
    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight;
    f.style.left = `${x}px`;
    f.style.top = `${y}px`;
    container.appendChild(f);
    setTimeout(() => f.remove(), 1500);
  }
}

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const status = document.getElementById("status");
  const popup = document.getElementById("success-popup");

  const name = form.from_name.value.trim();
  const email = form.from_email.value.trim();
  const message = form.message.value.trim();

  // Validation
  if (!name || !email || !message) {
    status.innerText = "⚠️ Please fill out all required fields.";
    status.style.color = "darkred";
    return;
  }
  if (!isValidEmail(email)) {
    status.innerText = "⚠️ Please enter a valid email address.";
    status.style.color = "darkred";
    return;
  }

  status.innerText = "⏳ Sending message...";
  status.style.color = "gray";

  // Send email
  emailjs.sendForm("service_a12sv2n", "template_dsraxbe", form)
    .then(() => {
      status.innerText = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();

      // Auto reply
      emailjs.send("service_a12sv2n", "template_avqp5ai", {
        from_name: name,
        from_email: email
      });

      // Show glass notification popup
      popup.classList.remove("hidden");
      spawnFireflies(popup, 12);

      // Hide popup after 4 seconds
      setTimeout(() => {
        popup.classList.add("hidden");
      }, 4000);
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      status.innerText = "❌ Failed to send message. Please try again.";
      status.style.color = "darkred";
    });
});
