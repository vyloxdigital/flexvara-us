/* FlexVara — flexvara-us.vercel.app */
(function () {
  "use strict";

  /* Mobile navigation */
  var btn = document.querySelector(".nav-btn");
  var list = document.getElementById("nav-list");
  if (btn && list) {
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("is-open")) {
        list.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  /* Sticky order dock: show once the hero buttons scroll away,
     hide again over the pricing section so it never covers the buttons. */
  var dock = document.querySelector(".dock");
  if (dock && "IntersectionObserver" in window) {
    var past = false;
    var atPrices = false;
    var sync = function () {
      dock.classList.toggle("is-up", past && !atPrices);
    };
    var hero = document.getElementById("hero-cta");
    if (hero) {
      new IntersectionObserver(
        function (en) {
          past = !en[0].isIntersecting && en[0].boundingClientRect.top < 0;
          sync();
        },
        { threshold: 0 }
      ).observe(hero);
    }
    var prices = document.getElementById("prices");
    if (prices) {
      new IntersectionObserver(
        function (en) {
          atPrices = en[0].isIntersecting;
          sync();
        },
        { threshold: 0 }
      ).observe(prices);
    }
  }
})();
