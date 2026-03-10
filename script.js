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

// Nav background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
});

// Animate stats from 0 to target
function animateStats() {
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  let hasAnimated = false;

  function runAnimation() {
    statNums.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1500;

      const startTime = performance.now();
      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        current = Math.floor(target * progress);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(update);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        runAnimation();
      }
    });
  }, { threshold: 0.3 });

  statNums.forEach(el => observer.observe(el));
}

animateStats();

// Appointment form submission
document.querySelector('.appointment-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]')?.value;
  const phone = form.querySelector('input[type="tel"]')?.value;
  const msg = `Hi, I'd like to book an appointment. Name: ${name}, Phone: ${phone}`;
  const whatsappUrl = `https://wa.me/923123030288?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank');
  form.reset();
});
