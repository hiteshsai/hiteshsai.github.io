/* ============================================================
   Hitesh Jonnalagadda — Portfolio JS
   Dark/light mode toggle · Mobile nav · Scroll reveal
   ============================================================ */

(function () {
  'use strict';

  // --- Dark / Light mode toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Initialize
  setTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen for OS changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // --- Mobile navigation ---
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Scroll reveal (IntersectionObserver) ---
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Active nav link on scroll ---
  var sections = document.querySelectorAll('section[id]');
  if (sections.length > 0) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        var link = document.querySelector('.nav__link[href="#' + id + '"]');
        if (link) {
          if (entry.isIntersecting) {
            document.querySelectorAll('.nav__link').forEach(function (l) {
              l.classList.remove('active');
            });
            link.classList.add('active');
          }
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  // --- Dynamic copyright year ---
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
