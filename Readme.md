# 🌟 Wai Yan Maung — Portfolio Website

A modern, fully responsive **portfolio website** built using **HTML**, **Tailwind CSS**, and **JavaScript**.  
It showcases my **software development**, **.NET**, and **web development** skills — with elegant design, glassmorphism UI, and animated firefly effects.

---

## 🎯 Purpose

This website serves as my **personal portfolio and interactive CV**, allowing visitors to:
- Learn about my background and education  
- Explore my projects and professional experience  
- Contact me directly through a live email form  
- Experience my design style and coding standards through real, working code

> **Goal:** To present myself as a creative and skilled developer using modern frontend technologies.

---

## 🧱 Project Structure

portfolio/
├── index.html # Homepage — intro, age, hero section
├── about.html # About page — education, summary, technical skills
├── projects.html # Projects page — video demos, GitHub links
├── experience.html # Work experience timeline
├── contact.html # Contact form with EmailJS integration
│
├── /css/
│ ├── style.css # Global styles (nav, glass panels, firefly, etc.)
│ ├── about.css
│ ├── projects.css
│ ├── experience.css
│
├── /js/
│ ├── main.js # Navigation, animations, firefly, and scroll effects
│ ├── projects.js # Project modal & gallery logic
│ ├── contact.js # EmailJS form submission & popup
│ ├── tailwind-config.js# Tailwind theme customization
│
├── /images/ # Thumbnails & project screenshots
├── /videos/ # Demo videos
└── /partials/ # Shared modal components (project details)

yaml
Copy code

---

## 🧠 Core Features

| Feature | Description |
|----------|--------------|
| ✨ **Firefly Effects** | Custom glowing animations for links, titles, and sections |
| 📱 **Responsive Navbar** | Smooth mobile menu toggle with icon switching |
| 🎞️ **Scroll Animations** | Cards and sections fade in as the user scrolls |
| 🧮 **Auto Age Calculation** | Real-time age displayed dynamically on homepage |
| 📧 **EmailJS Contact Form** | Send messages directly without needing a backend |
| 🌈 **Glassmorphism UI** | Elegant frosted-glass design across panels and cards |
| ⚡ **Lightweight JS** | No frameworks — just optimized, clean vanilla JavaScript |

---

## 🎨 Design Philosophy

> "Every visual should respond, every action should feel alive."

The site follows **three design pillars**:

1. **Motion for Clarity** — Animations guide user focus instead of distracting it  
2. **Minimal yet Expressive** — Clean layout, white space, and subtle glow effects  
3. **Consistency** — Shared gold theme, glass UI, and smooth transitions across all pages

---

## ⚙️ Technologies Used

| Category | Stack |
|-----------|--------|
| **Frontend** | HTML5, Tailwind CSS, Vanilla JavaScript |
| **Styling** | Custom CSS, Glassmorphism design |
| **Icons** | Font Awesome |
| **Email Handling** | EmailJS |
| **Animations** | CSS keyframes, IntersectionObserver, JS Firefly system |
| **Hosting** | Works seamlessly on GitHub Pages / Netlify / Vercel |

---

## 🚀 Installation & Setup

You can run this website locally with any static web server.

### 🧩 Option 1 — Quick Preview
Just open `index.html` in your browser.

### ⚙️ Option 2 — Local Development Server
If you have Node.js installed:
```bash
npx live-server
Then open http://localhost:8080 in your browser.

🧰 Production Optimization (Tailwind Warning Fix)
If you see the message:

cdn.tailwindcss.com should not be used in production

You can fix it by installing Tailwind locally:

bash
Copy code
npm install -D tailwindcss
npx tailwindcss init
Then build the CSS:

bash
Copy code
npx tailwindcss -i ./css/style.css -o ./dist/style.css --minify
Finally, replace the Tailwind CDN link in your HTML with:

html
Copy code
<link rel="stylesheet" href="/dist/style.css">
This removes the warning and makes your site faster.

🔮 Future Improvements
🌗 Add Dark Mode toggle

🪞 Theme switcher (Gold / Blue variants)

🧭 Add smooth page transitions between sections

☁️ Save contact form data using Firebase or Supabase

📸 Dynamic project carousel with swipe gestures

📊 Add analytics or visitor counter

💼 About Me
Name: Wai Yan Maung
Profession: Software Developer / Web Developer
Location: Dublin, Ireland
Tech Stack: C#, .NET, ASP.NET MVC, MSSQL, JavaScript, Tailwind, AWS

I love creating modern, fast, and interactive web experiences —
blending clean engineering with creative design.

📬 Contact
💌 Email: waiyanmgw@gmail.com
💼 LinkedIn: linkedin.com/in/wai-yan-maung-8ba161263
💻 GitHub: github.com/WaiYanMaungW

🏁 Summary
The Wai Yan Maung Portfolio Website is a professional and artistic presentation of my journey as a developer —
showcasing my technical background, creativity, and attention to UI/UX detail.

Designed with ❤️ in Dublin, built with clean code and glowing fireflies ✨

# 🌟 Wai Yan Maung — Portfolio Website

A modern, fully responsive **portfolio website** built using **HTML**, **Tailwind CSS**, and **JavaScript**.  
It showcases my **software development**, **.NET**, and **web development** skills — with elegant design, glassmorphism UI, and animated firefly effects.

---

## 🎯 Purpose

This website serves as my **personal portfolio and interactive CV**, allowing visitors to:
- Learn about my background and education  
- Explore my projects and professional experience  
- Contact me directly through a live email form  
- Experience my design style and coding standards through real, working code

> **Goal:** To present myself as a creative and skilled developer using modern frontend technologies.

---

## 🧱 Project Structure

portfolio/
├── index.html # Homepage — intro, age, hero section
├── about.html # About page — education, summary, technical skills
├── projects.html # Projects page — video demos, GitHub links
├── experience.html # Work experience timeline
├── contact.html # Contact form with EmailJS integration
│
├── /css/
│ ├── style.css # Global styles (nav, glass panels, firefly, etc.)
│ ├── about.css
│ ├── projects.css
│ ├── experience.css
│
├── /js/
│ ├── main.js # Navigation, animations, firefly, and scroll effects
│ ├── projects.js # Project modal & gallery logic
│ ├── contact.js # EmailJS form submission & popup
│ ├── tailwind-config.js# Tailwind theme customization
│
├── /images/ # Thumbnails & project screenshots
├── /videos/ # Demo videos
└── /partials/ # Shared modal components (project details)

yaml
Copy code

---

## 🧠 Core Features

| Feature | Description |
|----------|--------------|
| ✨ **Firefly Effects** | Custom glowing animations for links, titles, and sections |
| 📱 **Responsive Navbar** | Smooth mobile menu toggle with icon switching |
| 🎞️ **Scroll Animations** | Cards and sections fade in as the user scrolls |
| 🧮 **Auto Age Calculation** | Real-time age displayed dynamically on homepage |
| 📧 **EmailJS Contact Form** | Send messages directly without needing a backend |
| 🌈 **Glassmorphism UI** | Elegant frosted-glass design across panels and cards |
| ⚡ **Lightweight JS** | No frameworks — just optimized, clean vanilla JavaScript |

---

## 🎨 Design Philosophy

> "Every visual should respond, every action should feel alive."

The site follows **three design pillars**:

1. **Motion for Clarity** — Animations guide user focus instead of distracting it  
2. **Minimal yet Expressive** — Clean layout, white space, and subtle glow effects  
3. **Consistency** — Shared gold theme, glass UI, and smooth transitions across all pages

---

## ⚙️ Technologies Used

| Category | Stack |
|-----------|--------|
| **Frontend** | HTML5, Tailwind CSS, Vanilla JavaScript |
| **Styling** | Custom CSS, Glassmorphism design |
| **Icons** | Font Awesome |
| **Email Handling** | EmailJS |
| **Animations** | CSS keyframes, IntersectionObserver, JS Firefly system |
| **Hosting** | Works seamlessly on GitHub Pages / Netlify / Vercel |

---

## 🚀 Installation & Setup

You can run this website locally with any static web server.

### 🧩 Option 1 — Quick Preview
Just open `index.html` in your browser.

### ⚙️ Option 2 — Local Development Server
If you have Node.js installed:
```bash
npx live-server
Then open http://localhost:8080 in your browser.

🧰 Production Optimization (Tailwind Warning Fix)
If you see the message:

cdn.tailwindcss.com should not be used in production

You can fix it by installing Tailwind locally:

bash
Copy code
npm install -D tailwindcss
npx tailwindcss init
Then build the CSS:

bash
Copy code
npx tailwindcss -i ./css/style.css -o ./dist/style.css --minify
Finally, replace the Tailwind CDN link in your HTML with:

html
Copy code
<link rel="stylesheet" href="/dist/style.css">
This removes the warning and makes your site faster.

🔮 Future Improvements
🌗 Add Dark Mode toggle

🪞 Theme switcher (Gold / Blue variants)

🧭 Add smooth page transitions between sections

☁️ Save contact form data using Firebase or Supabase

📸 Dynamic project carousel with swipe gestures

📊 Add analytics or visitor counter

💼 About Me
Name: Wai Yan Maung
Profession: Software Developer / Web Developer
Location: Dublin, Ireland
Tech Stack: C#, .NET, ASP.NET MVC, MSSQL, JavaScript, Tailwind, AWS

I love creating modern, fast, and interactive web experiences —
blending clean engineering with creative design.

📬 Contact
💌 Email: waiyanmgw@gmail.com
💼 LinkedIn: linkedin.com/in/wai-yan-maung-8ba161263
💻 GitHub: github.com/WaiYanMaungW

🏁 Summary
The Wai Yan Maung Portfolio Website is a professional and artistic presentation of my journey as a developer —
showcasing my technical background, creativity, and attention to UI/UX detail.

Designed with ❤️ in Dublin, built with clean code and glowing fireflies ✨


