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

const orderForm = document.getElementById('orderForm');
const formNote = document.getElementById('formNote');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const zip = document.getElementById('zip').value.trim();
  if (!/^\d{5}$/.test(zip)) {
    formNote.textContent = 'Please enter a valid 5-digit ZIP code.';
    formNote.style.color = '#ffd9d0';
    return;
  }
  formNote.textContent = `Great news — we deliver to ${zip}! Redirecting you to checkout...`;
  formNote.style.color = '#fff6e6';
  orderForm.reset();
});
