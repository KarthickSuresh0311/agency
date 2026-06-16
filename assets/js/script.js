/* ============================================================
   YourBrand — site interactions
   Plain vanilla JavaScript. No libraries, nothing to update or break.
   ============================================================ */
(function () {
  "use strict";

  /* ---- 1. Mobile menu toggle ---------------------------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close the menu after tapping a link (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- 2. Scroll-reveal animations ---------------------- */
  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    // Stagger items that share a parent, so groups cascade in smoothly
    reveals.forEach(function (el) {
      var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
        return c.classList.contains("reveal");
      });
      var index = siblings.indexOf(el);
      if (index > 0) {
        el.style.transitionDelay = Math.min(index * 80, 400) + "ms";
      }
      io.observe(el);
    });
  } else {
    // Fallback: just show everything
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- 2b. Soft shadow on the nav once you scroll ------- */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("nav--scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- 2c. Light / dark theme toggle -------------------- */
  var navInner = document.querySelector(".nav__inner");
  var hamburger = document.getElementById("navToggle");
  if (navInner) {
    var themeBtn = document.createElement("button");
    themeBtn.type = "button";
    themeBtn.className = "theme-toggle";
    themeBtn.setAttribute("aria-label", "Toggle light or dark theme");
    themeBtn.innerHTML =
      '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' +
      '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4"/></svg>';

    // Place it just before the hamburger so it's always visible (desktop + mobile)
    if (hamburger) { navInner.insertBefore(themeBtn, hamburger); }
    else { navInner.appendChild(themeBtn); }

    themeBtn.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        try { localStorage.setItem("theme", "light"); } catch (e) {}
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        try { localStorage.setItem("theme", "dark"); } catch (e) {}
      }
    });
  }

  /* ---- 3. Current year in footer ------------------------ */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---- 4. Contact form submit --------------------------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var submitBtn = document.getElementById("submitBtn");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic checks before sending
      if (!form.checkValidity()) {
        setStatus("Please fill in your name, a valid email, and a message.", "err");
        form.reportValidity();
        return;
      }

      // If the access key hasn't been set up yet, don't pretend it sent
      var key = form.querySelector('input[name="access_key"]');
      if (!key || key.value.indexOf("YOUR_WEB3FORMS") !== -1) {
        setStatus("Form isn't connected yet. (Add your Web3Forms key — see the README.)", "err");
        return;
      }

      submitBtn.disabled = true;
      var originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
      setStatus("", "");

      var data = new FormData(form);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            // Send them to the thank-you page on success
            window.location.href = "thank-you.html";
          } else {
            setStatus("Something went wrong. Please email us directly instead.", "err");
          }
        })
        .catch(function () {
          setStatus("Network error. Please check your connection or email us directly.", "err");
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
    });
  }

  function setStatus(msg, type) {
    if (!status) return;
    status.textContent = msg;
    status.className = "form__status" + (type ? " " + type : "");
  }
})();
