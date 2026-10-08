(() => {
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-toggle__icon");
  const languageToggle = document.querySelector(".language-toggle");

  /* =========================
     Translations
  ========================= */

  const translations = {
    en: {
      "nav.projects": "Projects",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.contacts": "Contact",

      "hero.subtitle": "Junior Frontend Developer",
      "hero.title": "I build modern<br />and responsive web interfaces.",
      "hero.status": "Open to work",
      "hero.button": "View projects",

      "projects.subtitle": "Selected work",
      "projects.title": "Projects",

      "projects.sminex.description":
        "Responsive residential complex landing page built from a provided design. Implemented page structure, responsive layout and image optimization.",
      "projects.sminex.feature1": "Responsive layout",
      "projects.sminex.feature3": "SVG sprite",
      "projects.sminex.feature4": "Image optimization",

      "projects.notes.description":
        "Full-stack application for user registration, authentication and personal notes with server-side data storage.",
      "projects.notes.feature1": "User registration and authentication",
      "projects.notes.feature2": "JWT + Cookies",
      "projects.notes.feature3": "REST API",
      "projects.notes.feature4": "Persistent notes",

      "projects.whitemark.description":
        "Responsive contact page with an animated preloader. Company logos appear sequentially on the initial load, followed by a smooth transition to the main interface.",
      "projects.whitemark.feature1": "Animated preloader",
      "projects.whitemark.feature2": "SVG sprite",
      "projects.whitemark.feature3": "CSS animations",
      "projects.whitemark.feature4": "Responsive layout",
      "projects.whitemark.feature5": "GitHub Pages",

      "projects.wwave.description":
        "Responsive one-page website built from a provided design. Implemented the page structure, responsive layout and interactive interface elements.",
      "projects.wwave.feature1": "Responsive layout",
      "projects.wwave.feature2": "BEM",
      "projects.wwave.feature3": "SCSS",

      "projects.evcalid.description":
        "Responsive one-page website built as part of frontend layout practice. The project focuses on page structure, responsiveness and clean interface implementation.",
      "projects.evcalid.feature1": "Responsive layout",
      "projects.evcalid.feature2": "Semantic HTML",
      "projects.evcalid.feature3": "SCSS",
      "projects.evcalid.feature4": "BEM",

      "projects.lagoona.description":
        "Static one-page hotel website created for HTML/CSS layout practice. The project focuses on page structure, cards, positioning and classic layout techniques.",
      "projects.lagoona.feature1": "Semantic HTML",
      "projects.lagoona.feature2": "Flexbox",
      "projects.lagoona.feature3": "BEM",
      "projects.lagoona.feature4": "Classic layout",
      "projects.lagoona.feature5": "Non-responsive",

      "about.subtitle": "About me",
      "about.title": "Junior Frontend Developer",
      "about.intro":
        "Junior Frontend Developer focused on building responsive web interfaces and improving my skills through practical projects.",
      "about.text1":
        "I work with HTML5, CSS3, SCSS, JavaScript, TypeScript and React. I use BEM, SVG sprites, SVG animations, responsive design, image optimization and modern approaches to code organization.",
      "about.text2":
        "I work with Git and GitHub, can turn Figma designs into working interfaces and pay attention to performance, semantics and cross-browser compatibility.",
      "about.text3":
        "I also have basic English reading skills and can work with technical documentation, developer resources, and code examples in English. I am actively improving my English to communicate more confidently in an international work environment.",

      "skills.subtitle": "Technologies & tools",
      "skills.title": "Skills",

      "footer.subtitle": "Contact",
      "footer.title": "Let's work together.",
      "footer.text":
        "Open to job opportunities, freelance projects and interesting frontend work.",
      "footer.copyright": "© 2026 Kutelev Artem. Frontend Developer.",
    },

    ru: {
      "nav.projects": "Проекты",
      "nav.about": "Обо мне",
      "nav.skills": "Навыки",
      "nav.contacts": "Контакты",

      "hero.subtitle": "Junior Frontend Developer",
      "hero.title": "Создаю современные<br />и адаптивные веб-интерфейсы.",
      "hero.status": "Открыт к работе",
      "hero.button": "Смотреть проекты",

      "projects.subtitle": "Мои работы",
      "projects.title": "Проекты",

      "projects.sminex.description":
        "Адаптивный лендинг жилого комплекса, сверстанный по готовому дизайну. Реализовал структуру страницы, адаптивную верстку и оптимизацию изображений.",
      "projects.sminex.feature1": "Адаптивная верстка",
      "projects.sminex.feature3": "SVG-спрайт",
      "projects.sminex.feature4": "Оптимизация изображений",

      "projects.notes.description":
        "Full-stack приложение для регистрации пользователей, авторизации и создания личных заметок с сохранением данных на сервере.",
      "projects.notes.feature1": "Регистрация и авторизация",
      "projects.notes.feature2": "JWT + Cookies",
      "projects.notes.feature3": "REST API",
      "projects.notes.feature4": "Сохранение заметок",

      "projects.whitemark.description":
        "Адаптивная страница контактов с анимационным прелоадером. При первой загрузке последовательно появляются логотипы компаний, после чего прелоадер плавно исчезает и открывается основной интерфейс.",
      "projects.whitemark.feature1": "Анимационный прелоадер",
      "projects.whitemark.feature2": "SVG-спрайт",
      "projects.whitemark.feature3": "CSS-анимации",
      "projects.whitemark.feature4": "Адаптивная верстка",
      "projects.whitemark.feature5": "GitHub Pages",

      "projects.wwave.description":
        "Адаптивный одностраничный сайт, выполненный по готовому дизайну. Реализовал структуру страницы, адаптивную верстку и интерактивные элементы интерфейса.",
      "projects.wwave.feature1": "Адаптивная верстка",
      "projects.wwave.feature2": "БЭМ",
      "projects.wwave.feature3": "SCSS",

      "projects.evcalid.description":
        "Адаптивный одностраничный сайт, выполненный в рамках практики frontend-вёрстки. Основное внимание уделено структуре страницы, адаптивности и аккуратной реализации интерфейса.",
      "projects.evcalid.feature1": "Адаптивная верстка",
      "projects.evcalid.feature2": "Семантический HTML",
      "projects.evcalid.feature3": "SCSS",
      "projects.evcalid.feature4": "БЭМ",

      "projects.lagoona.description":
        "Одностраничный статичный сайт гостиничного комплекса. Проект выполнен для практики HTML/CSS-вёрстки, работы с блоками, карточками, позиционированием и структурой страницы.",
      "projects.lagoona.feature1": "Семантический HTML",
      "projects.lagoona.feature2": "Flexbox",
      "projects.lagoona.feature3": "БЭМ",
      "projects.lagoona.feature4": "Классическая вёрстка",
      "projects.lagoona.feature5": "Без адаптивной верстки",

      "about.subtitle": "Обо мне",
      "about.title": "Junior Frontend Developer",
      "about.intro":
        "Junior Frontend Developer, создаю адаптивные веб-интерфейсы и развиваю навыки на практических проектах.",
      "about.text1":
        "Работаю с HTML5, CSS3, SCSS, JavaScript, TypeScript и React. Использую БЭМ, SVG-спрайты, SVG-анимации, адаптивную верстку, оптимизацию изображений и современные подходы к организации кода.",
      "about.text2":
        "Работаю с Git и GitHub, умею переводить макеты из Figma в готовые интерфейсы и уделяю внимание производительности, семантике и кроссбраузерности.",
      "about.text3":
        "У меня также есть базовые навыки чтения на английском языке, и я могу работать с технической документацией, ресурсами для разработчиков и примерами кода на английском. Я активно улучшаю свой английский, чтобы более уверенно общаться в международной рабочей среде.",

      "skills.subtitle": "Технологии и инструменты",
      "skills.title": "Навыки",

      "footer.subtitle": "Контакты",
      "footer.title": "Обсудим проект?",
      "footer.text":
        "Открыт к предложениям о работе, freelance-задачам и интересным frontend-проектам.",
      "footer.copyright": "© 2026 Kutelev Artem. Frontend Developer.",
    },
  };

  /* =========================
     Language
  ========================= */

  function updateLanguageButton(lang) {
    if (!languageToggle) {
      return;
    }

    const current = languageToggle.querySelector(".language-toggle__current");

    const alternative = languageToggle.querySelector(
      ".language-toggle__alternative",
    );

    if (current && alternative) {
      if (lang === "en") {
        current.textContent = "EN";
        alternative.textContent = "RU";
      } else {
        current.textContent = "RU";
        alternative.textContent = "EN";
      }
    }

    languageToggle.setAttribute("aria-pressed", String(lang === "ru"));

    languageToggle.setAttribute(
      "aria-label",
      lang === "ru"
        ? "Switch language to English"
        : "Переключить язык на русский",
    );
  }

  function updateMeta(lang) {
    const description = document.querySelector('meta[name="description"]');

    const ogTitle = document.querySelector('meta[property="og:title"]');

    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );

    if (lang === "ru") {
      document.title = "Kutelev Artem — Junior Frontend Developer";

      description?.setAttribute(
        "content",
        "Портфолио Kutelev Artem — Junior Frontend Developer. HTML, CSS, JavaScript, TypeScript и React.",
      );

      ogTitle?.setAttribute(
        "content",
        "Kutelev Artem — Junior Frontend Developer",
      );

      ogDescription?.setAttribute(
        "content",
        "Портфолио Junior Frontend Developer — веб-интерфейсы, React, TypeScript, HTML и SCSS.",
      );
    } else {
      document.title = "Kutelev Artem — Junior Frontend Developer";

      description?.setAttribute(
        "content",
        "Portfolio of Kutelev Artem — Junior Frontend Developer. HTML, CSS, JavaScript, TypeScript and React.",
      );

      ogTitle?.setAttribute(
        "content",
        "Kutelev Artem — Junior Frontend Developer",
      );

      ogDescription?.setAttribute(
        "content",
        "Junior Frontend Developer portfolio — responsive web interfaces, React, TypeScript, HTML and SCSS.",
      );
    }
  }

  function applyLanguage(lang) {
    const dictionary = translations[lang];

    if (!dictionary) {
      return;
    }

    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translation = dictionary[key];

      if (translation === undefined) {
        console.warn(`Translation not found: ${key} (${lang})`);
        return;
      }

      element.innerHTML = translation;
    });

    localStorage.setItem("language", lang);

    updateLanguageButton(lang);
    updateMeta(lang);
    updateThemeButton();
  }

  /* =========================
     Theme
  ========================= */

  function updateThemeButton() {
    if (!themeToggle || !themeIcon) {
      return;
    }

    const isDark = document.documentElement.dataset.theme === "dark";

    const currentLanguage =
      document.documentElement.lang === "ru" ? "ru" : "en";

    themeIcon.textContent = isDark ? "☀" : "☾";

    themeToggle.setAttribute("aria-pressed", String(isDark));

    const labels = {
      en: {
        dark: "Switch to light theme",
        light: "Switch to dark theme",
      },

      ru: {
        dark: "Включить светлую тему",
        light: "Включить тёмную тему",
      },
    };

    themeToggle.setAttribute(
      "aria-label",
      isDark ? labels[currentLanguage].dark : labels[currentLanguage].light,
    );
  }

  /* =========================
     Initialize
  ========================= */

  const savedLanguage = localStorage.getItem("language");

  const initialLanguage = savedLanguage === "ru" ? "ru" : "en";

  applyLanguage(initialLanguage);

  updateThemeButton();

  /* =========================
     Language Toggle
  ========================= */

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const currentLanguage =
        document.documentElement.lang === "ru" ? "ru" : "en";

      const newLanguage = currentLanguage === "en" ? "ru" : "en";

      applyLanguage(newLanguage);
    });
  }

  /* =========================
     Theme Toggle
  ========================= */

  if (themeToggle) {
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
    [
      ".footer__link--telegram",
      ".footer__link--email",
      ".footer__link--facebook",
      ".footer__link--whatsapp",
      ".footer__link--instagram",
    ].join(", "),
  );

  footerAnimatedLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.classList.remove("is-animating");

      void link.offsetWidth;

      link.classList.add("is-animating");
    });

    link.addEventListener("animationend", () => {
      link.classList.remove("is-animating");
    });
  });
})();
