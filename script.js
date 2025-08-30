//typed js
var typed = new Typed("#element", {
  strings: [
    "Problem Solver",
    "Web Developer",
    "Tech Enthusiast",
    "Team Player",
    "Learner",
  ],
  typeSpeed: 60,
  loop: true,
});

//theme
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let isLight = true;
const theme = document.getElementById("theme-toggle");
const body = document.body;

theme.addEventListener("click", () => {
  // Fade out icon
  icon.style.opacity = "0";

  setTimeout(() => {
    if (isLight) {
      body.classList.remove("lighttheme");
      body.classList.add("darktheme");

      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");

      isLight = false;
    } else {
      body.classList.remove("darktheme");
      body.classList.add("lighttheme");

      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");

      isLight = true;
    }

    // Fade in icon
    icon.style.opacity = "1";
  }, 150);
});

//navbar
const toggleBtn = document.querySelector(".navbar-toggle");
const navList = document.querySelector(".navlist");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//when box enter viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // Remove class when out of view
    }
  });
});

const hero_button = document.querySelector(".button-container");
observer.observe(hero_button);

const skill_box = document.querySelectorAll(".skill-box");
skill_box.forEach((box) => {
  observer.observe(box);
});

const skill_box2 = document.querySelectorAll(".card-container");

skill_box2.forEach((box) => {
  observer.observe(box);
});

const gears = document.querySelectorAll(".gear");
gears.forEach((gear) => {
  observer.observe(gear);
});

const projectCard = document.querySelectorAll(".project-box");
projectCard.forEach((card) => {
  observer.observe(card);
});

const certificates = document.querySelectorAll(".certificate-card");
certificates.forEach((cert) => {
  observer.observe(cert);
});

//form
emailjs.init("-R3S2gW4k0cwCQd_V"); //public key of Email js

const btn = document.getElementById("sendForm");

//form submission
document
  .getElementById("contact-form-data")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page refresh

    btn.value = "Sending..";
    const serviceId = "service_do9olwy";
    const templateId = "template_34ibeem";

    emailjs.sendForm(serviceId, templateId, this).then(
      () => {
        alert("Sent");
      },
      (error) => {
        alert("Failed");
      }
    );
  });
