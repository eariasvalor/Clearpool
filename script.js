(function () {
  "use strict";

  // Year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

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

      var url = "https://wa.me/606447461?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener");
      note.textContent = "Abriendo WhatsApp… si no se abre, escríbenos al 606 447 461.";
      note.className = "form-note ok";
    });
  }
})();
