// assets/script.js

(() => {
    // Blog utilities (if blog.html exists)
    const searchInput = document.getElementById('searchInput');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const postsContainer = document.getElementById('postsList');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const darkToggle = document.getElementById('darkToggle');
  
    // Helper safe-checks because this script runs on every page
    function safeQuery(selector) { try { return document.querySelector(selector); } catch(e){ return null; } }
  
    // Dark mode toggle (persists)
    if (darkToggle) {
      const saved = localStorage.getItem('leslie_theme');
      if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
      darkToggle.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('leslie_theme','light');
        } else {
          document.documentElement.setAttribute('data-theme','dark');
          localStorage.setItem('leslie_theme','dark');
        }
      });
    }
  
    // CONTACT & SUBSCRIBE placeholder handlers (client-side only)
    window.handleSubscribe = function (e) {
      e.preventDefault();
      const email = document.getElementById('subscribeEmail')?.value || '';
      if (!email) return alert('Please enter your email.');
      alert(`Thanks — "${email}" would be added to your list.\nThis is a placeholder. To collect emails, connect Mailchimp or use an embed form.`);
      document.getElementById('subscribeForm')?.reset();
    };
  
    window.handleContact = function (e) {
      e.preventDefault();
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const message = document.getElementById('message')?.value || '';
      if (!(name && email && message)) return alert('Please complete all fields.');
      alert(`Thanks ${name}! Your message has been prepared.\nThis is a placeholder. To receive messages, connect a form backend.`);
      document.getElementById('contactForm')?.reset();
    };
  
    // --- Blog search, tag filter & pagination (if blog exists) ---
    if (postsContainer) {
      const posts = Array.from(postsContainer.querySelectorAll('.post'));
      const POSTS_PER_PAGE = 5;
      const prev = document.getElementById('prevPage');
      const next = document.getElementById('nextPage');
      const pageInfoEl = document.getElementById('pageInfo');
      const searchEl = document.getElementById('searchInput');
      const tagBtns = document.querySelectorAll('.tag-btn');
  
      let activeTag = 'all';
      let query = '';
      let currentPage = 1;
      let filtered = posts.slice();
  
      function matchesQuery(post, q) {
        if (!q) return true;
        const hay = (post.querySelector('.post-title')?.textContent || '') + ' ' +
                    (post.querySelector('.post-excerpt')?.textContent || '') + ' ' +
                    (post.dataset.tags || '');
        return hay.toLowerCase().includes(q.toLowerCase());
      }
      function matchesTag(post, tag) {
        if (tag === 'all') return true;
        return (post.dataset.tags || '').split(',').map(s=>s.trim()).includes(tag);
      }
      function applyFilters() {
        query = searchEl.value.trim();
        filtered = posts.filter(p => matchesQuery(p, query) && matchesTag(p, activeTag));
        currentPage = 1;
        renderPage();
      }
      function renderPage() {
        const total = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        const end = start + POSTS_PER_PAGE;
        posts.forEach(p => p.style.display = 'none');
        filtered.slice(start, end).forEach(p => p.style.display = '');
        pageInfoEl.textContent = `Page ${currentPage} of ${total}`;
        prev.disabled = currentPage <= 1;
        next.disabled = currentPage >= total;
      }
      // events
      if (searchEl) searchEl.addEventListener('input', applyFilters);
      tagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tagBtns.forEach(b=>b.setAttribute('aria-pressed','false'));
          btn.setAttribute('aria-pressed','true');
          activeTag = btn.dataset.tag;
          applyFilters();
        });
      });
      prev?.addEventListener('click', ()=>{ if (currentPage>1){ currentPage--; renderPage(); window.scrollTo({top:200, behavior:'smooth'}); }});
      next?.addEventListener('click', ()=>{ const total = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE)); if (currentPage<total){ currentPage++; renderPage(); window.scrollTo({top:200, behavior:'smooth'}); }});
  
      // init
      applyFilters();
    }
  
  })();  
 
  

  /* ===============================
   Leslie Amadi Portfolio Script
   =============================== */

// Fade-in on scroll animation
const fadeElements = document.querySelectorAll(".fade-in, .fade-up");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeElements.forEach(el => {
  appearOnScroll.observe(el);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Navbar active link highlight
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".navbar nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Card hover glow
document.querySelectorAll(".overview-card, .portfolio-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    card.style.transform = "translateY(-5px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
    card.style.transform = "translateY(0)";
  });
});

// Button ripple effect
document.querySelectorAll(".btn, .small-btn").forEach(button => {
  button.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    setTimeout(() => ripple.remove(), 600);
  });
});

// Smooth fade-in thank-you message without redirect
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYou");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.reset();
          thankYou.style.display = "block";
          thankYou.classList.add("fade-in");
        } else {
          thankYou.textContent = "Hmm… something went wrong. Please try again.";
          thankYou.style.display = "block";
        }
      } catch (err) {
        thankYou.textContent = "Network error — please check your connection.";
        thankYou.style.display = "block";
      }
    });
  }
});
