document.getElementById('year').textContent = new Date().getFullYear();

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

document.querySelectorAll('a[href="#combos"]').forEach((link) => {
  link.addEventListener('click', () => activateTab('combos'));
});

const orderForm = document.getElementById('orderForm');
const formNote = document.getElementById('formNote');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const zip = document.getElementById('zip').value.trim();
  if (!/^[A-Za-z0-9]{3}[A-Za-z0-9 ]{2,4}$/.test(zip)) {
    formNote.textContent = 'Please enter a valid postal code.';
    formNote.style.color = '#ffd9d0';
    return;
  }
  formNote.textContent = `Great news — we deliver to ${zip.toUpperCase()}! Redirecting you to checkout...`;
  formNote.style.color = '#fff6e6';
  orderForm.reset();
});
