(function () {
  "use strict";

  var root = document.documentElement;
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Light/dark toggle ---------------------------------------------------------
  // With no saved choice the site follows the OS; clicking saves an explicit one.
  function currentTheme() {
    return root.getAttribute("data-theme") || (prefersDark.matches ? "dark" : "light");
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    var syncPressed = function () {
      toggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
    };
    syncPressed();
    prefersDark.addEventListener("change", syncPressed);

    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      syncPressed();
    });
  }

  // Link icons on post headings ------------------------------------------------
  document.querySelectorAll(".prose h2[id], .prose h3[id], .prose h4[id]").forEach(function (heading) {
    var anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = "#" + heading.id;
    anchor.setAttribute("aria-label", "Link to this section");
    anchor.textContent = "#";
    heading.appendChild(anchor);
  });

  // Copy buttons on code blocks ------------------------------------------------
  if (navigator.clipboard) {
    document.querySelectorAll(".prose div.highlighter-rouge").forEach(function (block) {
      var code = block.querySelector("pre code");
      if (!code) return;

      var button = document.createElement("button");
      button.type = "button";
      button.className = "copy-btn";
      button.textContent = "Copy";
      button.addEventListener("click", function () {
        navigator.clipboard.writeText(code.innerText).then(function () {
          button.textContent = "Copied";
          setTimeout(function () {
            button.textContent = "Copy";
          }, 1500);
        });
      });
      block.appendChild(button);
    });
  }
})();
