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
    var timer = null;

    function showSlide(newIndex) {
      index = (newIndex + slides.length) % slides.length;
      rotatorImg.style.opacity = 0;
      setTimeout(function () {
        rotatorImg.src = slides[index].src;
        rotatorImg.alt = slides[index].alt;
        rotatorImg.style.opacity = 1;
      }, 400);
    }

    function startAutoplay() {
      timer = setInterval(function () {
        showSlide(index + 1);
      }, 5000);
    }

    function restartAutoplay() {
      clearInterval(timer);
      startAutoplay();
    }

    var prevBtn = document.querySelector(".rotator-prev");
    var nextBtn = document.querySelector(".rotator-next");
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        showSlide(index - 1);
        restartAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        showSlide(index + 1);
        restartAutoplay();
      });
    }

    startAutoplay();
  }

  // Lightbox: clicking a project's featured or gallery photo opens a
  // full-size popup overlay; clicking outside the image (or the close
  // button, or pressing Escape) dismisses it and returns to the page.
  var lightboxTargets = document.querySelectorAll("img.media-featured, img.media-gallery-item");
  if (lightboxTargets.length) {
    var overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close">&times;</button><img class="lightbox-img" alt="">';
    document.body.appendChild(overlay);

    var lightboxImg = overlay.querySelector(".lightbox-img");
    var closeBtn = overlay.querySelector(".lightbox-close");

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      overlay.classList.add("open");
      document.body.classList.add("lightbox-locked");
    }

    function closeLightbox() {
      overlay.classList.remove("open");
      document.body.classList.remove("lightbox-locked");
      lightboxImg.src = "";
    }

    lightboxTargets.forEach(function (img) {
      img.classList.add("lightbox-trigger");
      img.addEventListener("click", function () {
        openLightbox(img.currentSrc || img.src, img.alt);
      });
    });

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closeLightbox();
    });
    closeBtn.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLightbox();
    });
  }
});
