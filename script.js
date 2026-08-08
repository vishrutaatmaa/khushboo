(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Scroll-triggered reveal
  var revealEls = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Very subtle parallax on the hero light-leak layer
  if (!prefersReducedMotion) {
    var hero = document.getElementById("hero");
    var leak = hero ? hero.querySelector(".light-leak") : null;

    if (leak) {
      var ticking = false;
      window.addEventListener(
        "scroll",
        function () {
          if (!ticking) {
            window.requestAnimationFrame(function () {
              var offset = window.scrollY;
              leak.style.transform = "translate3d(0," + offset * 0.06 + "px,0)";
              ticking = false;
            });
            ticking = true;
          }
        },
        { passive: true }
      );
    }
  }
})();
