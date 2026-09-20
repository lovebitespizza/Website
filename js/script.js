document.getElementById('year').textContent = new Date().getFullYear();

const siteHeader = document.querySelector('.site-header');
function setViewportVars() {
  const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  document.documentElement.style.setProperty('--vh100', `${vh}px`);
  document.documentElement.style.setProperty('--header-h', `${siteHeader.getBoundingClientRect().height}px`);
}
setViewportVars();
window.addEventListener('resize', setViewportVars);
window.addEventListener('orientationchange', setViewportVars);
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', setViewportVars);
}
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(setViewportVars);
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const menuPanels = document.querySelectorAll('.menu-panel');

function activateTab(target) {
  tabButtons.forEach((btn) => {
    const isMatch = btn.dataset.target === target;
    btn.classList.toggle('active', isMatch);
    btn.setAttribute('aria-selected', String(isMatch));
  });
  menuPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === target);
  });
}

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => activateTab(btn.dataset.target));
});
