const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = document.querySelectorAll(".site-nav__link");
const revealElements = document.querySelectorAll("[data-reveal]");
const yearElement = document.getElementById("year");
const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const themeStorageKey = "theme";

const applyTheme = (theme) => {
  root.setAttribute("data-theme", theme);
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
};

applyTheme(root.getAttribute("data-theme") || (themeQuery.matches ? "dark" : "light"));

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem(themeStorageKey, nextTheme);
});

themeQuery.addEventListener("change", (event) => {
  if (!localStorage.getItem(themeStorageKey)) {
    applyTheme(event.matches ? "dark" : "light");
  }
});

const closeMenu = () => {
  if (!siteNav || !menuToggle) return;
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

const closeMenuAndRestoreFocus = () => {
  if (!siteNav?.classList.contains("is-open")) return;
  closeMenu();
  menuToggle?.focus();
};

menuToggle?.addEventListener("click", () => {
  if (!siteNav || !menuToggle) return;
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!siteNav || !menuToggle) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (!siteNav.contains(target) && !menuToggle.contains(target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenuAndRestoreFocus();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const sections = document.querySelectorAll("section[id]");
if ("IntersectionObserver" in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const sectionId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${sectionId}`;
          link.classList.toggle("is-active", isCurrent);
          if (isCurrent) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { threshold: 0, rootMargin: "-30% 0px -60% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
