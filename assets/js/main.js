// Toggles the mobile nav menu open/closed.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Rotates through the About Me photo/video set every 5 seconds.
  // EDIT ME: to add or remove a slide, edit this array — each entry needs
  // a src (path under assets/img/about-rotation/) and matching alt text.
  var rotatorImg = document.getElementById("rotator-img");
  if (rotatorImg) {
    var slides = [
      { src: "assets/img/about-rotation/img_5599.jpg", alt: "Graduating from the University of Colorado Boulder" },
      { src: "assets/img/about-rotation/img_1595.jpg", alt: "On site at the Eisenhower Tunnel for an HNTB project" },
      { src: "assets/img/about-rotation/img_4392.jpg", alt: "Skiing at sunset in Steamboat Springs, Colorado" },
      { src: "assets/img/about-rotation/about-video.webp", alt: "Skiing through fresh powder" },
      { src: "assets/img/about-rotation/img_7962.jpg", alt: "Hiking above a mountain lake" },
      { src: "assets/img/about-rotation/img_1557.jpg", alt: "At the entrance to Olympic National Park" },
      { src: "assets/img/about-rotation/img_6980.jpg", alt: "Whitewater rafting with friends" },
      { src: "assets/img/about-rotation/img_3674.jpg", alt: "Getting a photo with a dinosaur skeleton at a museum" }
    ];
    var index = 0;
    setInterval(function () {
      index = (index + 1) % slides.length;
      rotatorImg.style.opacity = 0;
      setTimeout(function () {
        rotatorImg.src = slides[index].src;
        rotatorImg.alt = slides[index].alt;
        rotatorImg.style.opacity = 1;
      }, 400);
    }, 5000);
  }
});
