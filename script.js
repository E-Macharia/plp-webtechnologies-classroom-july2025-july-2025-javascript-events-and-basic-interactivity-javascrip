// ====================
// Part 1: Event Handling
// ====================

// Toggle Data Science info
const dsText = document.getElementById("dsText");
document.getElementById("toggleDS").addEventListener("click", function () {
  dsText.style.display = dsText.style.display === "none" ? "block" : "none";
});

// Dark/Light mode toggle
document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// ====================
// Part 2: Interactive Elements
// ====================

// Accordion functionality
const accordionButtons = document.querySelectorAll(".accordion-btn");
accordionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Image carousel
const images = ["images/data1.jpg", "images/data2.jpg", "images/data3.jpg"];
let currentIndex = 0;

function showImage() {
  const img = document.getElementById("carouselImage");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[currentIndex];
    img.style.opacity = 1;
  }, 500);
}

document.getElementById("nextBtn").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

document.getElementById("prevBtn").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Auto-slide every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}, 4000);

// ====================
// Part 3: Form Validation
// ====================

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Reset errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").innerText =
      "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!password.match(passwordPattern)) {
    document.getElementById("passwordError").innerText =
      "Password must have 8+ chars, uppercase, lowercase, number, special char.";
    valid = false;
  }

  // If valid
  if (valid) {
    alert(" Form submitted successfully!");
    this.reset();
  }
});
