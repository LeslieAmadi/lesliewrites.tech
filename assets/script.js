// Leslie Writes — Interactions

// Page load fade
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
}, { threshold: 0.15, rootMargin: "0px 0px -80px 0px" });
faders.forEach(el => io.observe(el));

// Mobile nav
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');
if (toggle && nav){
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Parallax (slow layered)
const layer = document.querySelector('.parallax-layer');
if (layer){
  const speed = 0.18; // subtle and elegant
  const onScroll = () => {
    const y = window.scrollY * speed;
    layer.style.transform = `translate3d(0, ${y}px, 0)`;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
}

// Nav active link
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
  if (link.getAttribute('href') === current){ link.classList.add('active'); }
});

// Contact inline thank-you (Formspree)
const contactForm = document.getElementById('contactForm');
if (contactForm){
  const thanks = document.getElementById('thankYou');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    try{
      const res = await fetch(contactForm.action, { method: "POST", body: data, headers: { "Accept":"application/json" }});
      if (res.ok){ contactForm.reset(); if(thanks){ thanks.style.display = 'block'; thanks.classList.add('fade-in'); } }
      else { if(thanks){ thanks.textContent = "Something went wrong. Please try again."; thanks.style.display = 'block'; } }
    }catch{
      if(thanks){ thanks.textContent = "Network error — please try again."; thanks.style.display = 'block'; }
    }
  });
}
