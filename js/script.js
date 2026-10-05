const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");

function updateThemeButton() {
  if (!themeToggle || !themeIcon) {
    return;
  }

  const isDark = document.documentElement.dataset.theme === "dark";

  themeIcon.textContent = isDark ? "☀" : "☾";

  themeToggle.setAttribute("aria-pressed", String(isDark));

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Включить светлую тему" : "Включить тёмную тему",
  );
}

if (themeToggle) {
  updateThemeButton();

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";

    const newTheme = isDark ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem("theme", newTheme);

    updateThemeButton();
  });
}

/* =========================
   Scroll Reveal
========================= */

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  document.body.classList.add("reveal-enabled");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  reveals.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  reveals.forEach((element) => {
    element.classList.add("is-visible");
  });
}

/* =========================
   Footer Link Animations
========================= */

const footerAnimatedLinks = document.querySelectorAll(
  ".footer__link--telegram, .footer__link--email",
);

footerAnimatedLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.remove("is-animating");

    /*
      Force browser reflow.

      Это позволяет повторно запустить
      CSS-анимацию при каждом наведении.
    */
    void link.offsetWidth;

    link.classList.add("is-animating");
  });

  link.addEventListener("animationend", () => {
    link.classList.remove("is-animating");
  });
});
