// Alpha Dental Clinic - Interactive Scripts

// Mobile nav toggle
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
  document.body.classList.toggle('nav-open');
});

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
    document.body.classList.remove('nav-open');
  });
});

// Nav background on scroll (transparent at top to show hero image)
let scrollTimeout;
function updateNavScroll() {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateNavScroll, 10);
}, { passive: true });
updateNavScroll(); // Initial state

// Contact form submission
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]')?.value;
  const phone = form.querySelector('input[type="tel"]')?.value;
  const msg = `Hi, I'd like to book an appointment. Name: ${name}, Phone: ${phone}`;
  const whatsappUrl = `https://wa.me/923123030288?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank');
  form.reset();
});
