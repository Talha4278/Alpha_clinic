// Alpha Dental Clinic - Interactive Scripts

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileNavDrawer = document.querySelector('.mobile-nav-drawer');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const mobileNavClose = document.querySelector('.mobile-nav-close');

function closeMobileNav() {
  mobileNavDrawer?.classList.remove('open');
  mobileNavOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

function openMobileNav() {
  mobileNavDrawer?.classList.add('open');
  mobileNavOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

navToggle?.addEventListener('click', openMobileNav);
mobileNavClose?.addEventListener('click', closeMobileNav);
mobileNavOverlay?.addEventListener('click', closeMobileNav);

// Close mobile nav when clicking a link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
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

// Contact form submission - Send to WhatsApp
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#fullname')?.value;
  const email = form.querySelector('#email')?.value;
  const phone = form.querySelector('#phone')?.value;
  const service = form.querySelector('#service')?.value;
  const message = form.querySelector('#message')?.value;
  
  const whatsappMessage = `*Appointment Request from Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${message}`;
  const whatsappUrl = `https://wa.me/923123030288?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
  form.reset();
});
