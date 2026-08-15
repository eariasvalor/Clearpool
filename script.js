(function () {
  "use strict";

  // Solo la foto se mantiene fija; el texto y la ola scrollean juntos con la
  // pagina, para que la distancia entre ambos no cambie al bajar.
  var heroBg = document.querySelector(".hero-bg");
  var heroInner = document.querySelector(".hero-inner");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ((heroBg || heroInner) && !reduceMotion) {
    var ticking = false;
    function updateScroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop;
      // La foto se mantiene fija en el viewport (contra-resta el scroll)
      if (heroBg) heroBg.style.transform = "translate3d(0," + y + "px,0)";
      var heroH = (heroInner ? heroInner.offsetHeight : 600) + 240;
      // Sin desplazamiento vertical: solo se atenua al salir de pantalla.
      if (heroInner) {
        heroInner.style.opacity = String(Math.max(0, 1 - y / heroH));
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    }, { passive: true });
    updateScroll();
  }

  // Reveal on scroll
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Contact form -> prefilled WhatsApp
  var form = document.getElementById("lead-form");
  var note = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();
      var service = form.elements.service.value;
      var message = form.elements.message.value.trim();

      if (!name || !phone) {
        note.textContent = "Completa tu nombre y teléfono, por favor.";
        note.className = "form-note err";
        return;
      }

      var text = "Hola, soy " + name + ". Necesito un servicio de: " + service + ".";
      if (message) text += " " + message;
      text += " Mi teléfono: " + phone + ".";

      var url = "https://wa.me/34606447461?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener");
      note.textContent = "Abriendo WhatsApp… si no se abre, escríbenos al 606 447 461.";
      note.className = "form-note ok";
    });
  }

  // Año actual en el pie
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
