# 🎉 Meme Generator

A dynamic and fun web application that generates wholesome memes at the click of a button. The app fetches meme data from a public API and displays it with smooth UI animations and a colorful, responsive layout.

---

## 🚀 Key Features

* 🔁 **Random Meme Generator**
  Fetches and displays a random wholesome meme using the [meme-api.com](https://meme-api.com) endpoint.

* 🎨 **Stylish UI with Animation**
  Includes slide-and-fade text effects and a glowing navbar title for engaging user experience.

* ⚡ **Single-Click Refresh**
  The "Generate Meme" button dynamically loads new meme content without refreshing the page.

* 📱 **Responsive Design**
  Adapts seamlessly to various screen sizes and devices.

* 🌈 **Thematic Background and Styling**
  Eye-catching background image and colorful elements for an attractive look.

---

## 🧠 Challenges & Solutions

### 🔧 Challenge 1: Asynchronous API Handling

**Problem:** Ensuring memes load correctly on initial load and on button clicks.
**Solution:** Used `fetch()` with `.then()` to process the JSON response and dynamically update the DOM.

### 🎨 Challenge 2: Creating a Visually Engaging Navbar

**Problem:** Making the navbar text stand out with a professional animation.
**Solution:** Combined `@keyframes` for slide-in + glowing text with CSS `text-shadow` for a pulse effect.

### 📐 Challenge 3: Layout Consistency Across Devices

**Problem:** Maintaining a clean layout and readability on all screen sizes.
**Solution:** Used responsive CSS (`max-width`, `margin-inline`, `min-height`, and `background-size`) to ensure content adjusts smoothly.

---

## 💻 Technologies Used

* **HTML5** – Markup structure
* **CSS3** – Styling and animations
* **JavaScript (ES6)** – Dynamic content & DOM manipulation
* **Fetch API** – External API communication

---

## 📚 What I Learned

* How to fetch and display third-party API data
* DOM manipulation with JavaScript
* CSS animations and `@keyframes` usage
* Enhancing user experience through UI/UX design

---

## 🌐 Live Demo

👉 [View Live Site](https://deblina-pal.github.io/meme_generator/)
