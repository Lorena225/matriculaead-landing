/* ===================================================
   MATRÍCULA EAD — LANDING PAGE JAVASCRIPT
   =================================================== */

const WA_LINK = "https://api.whatsapp.com/send/?phone=5561991354767&text=Ol%C3%A1%2C+venho+do+site+Matr%C3%ADcula+EaD+e+quero+mais+informa%C3%A7%C3%B5es+sobre+os+Cursos+EaD.&type=phone_number&app_absent=0";

// ===== COURSES DATA =====
const courses = [
  {
    name: "Técnico em Açúcar e Álcool",
    desc: "Para quem quer atuar em um setor estratégico da agroindústria brasileira, com forte presença no interior do país.",
    icon: "🌾",
    img: "images/curso_acucar_alcool.jpg"
  },
  {
    name: "Técnico em Administração",
    desc: "Para quem quer atuar com organização, processos e suporte a empresas de todos os portes.",
    icon: "📊",
    img: "images/curso_administracao.jpg"
  },
  {
    name: "Técnico em Agricultura",
    desc: "Para quem quer trabalhar com produção agrícola, manejo e gestão no campo.",
    icon: "🌱",
    img: "images/curso_agricultura.jpg"
  },
  {
    name: "Técnico em Agrimensura",
    desc: "Para quem quer atuar com medição, mapeamento e demarcação de terrenos e propriedades.",
    icon: "📐",
    img: "images/curso_agrimensura.jpg"
  },
  {
    name: "Técnico em Agropecuária",
    desc: "Para quem quer trabalhar com criação animal, produção rural e gestão do agronegócio.",
    icon: "🐄",
    img: "images/curso_agropecuaria.jpg"
  },
  {
    name: "Técnico em Contabilidade",
    desc: "Para quem quer atuar com números, organização financeira e apoio à gestão de empresas.",
    icon: "💼",
    img: "images/curso_contabilidade.jpg"
  },
  {
    name: "Técnico em Edificações",
    desc: "Para quem quer entrar no universo da construção civil com uma formação prática e valorizada.",
    icon: "🏗️",
    img: "images/curso_edificacoes.jpg"
  },
  {
    name: "Técnico em Eletroeletrônica",
    desc: "Para quem quer trabalhar com equipamentos elétricos e eletrônicos em indústrias e empresas de tecnologia.",
    icon: "⚡",
    img: "images/curso_eletroeletronica.jpg"
  },
  {
    name: "Técnico em Eletromecânica",
    desc: "Para quem quer atuar na manutenção e operação de sistemas que unem eletricidade e mecânica.",
    icon: "⚙️",
    img: "images/curso_eletromecânica.jpg"
  },
  {
    name: "Técnico em Eletrônica",
    desc: "Para quem quer trabalhar com circuitos, componentes e sistemas eletrônicos em um setor em constante crescimento.",
    icon: "🔌",
    img: "images/curso_eletronica.jpg"
  },
  {
    name: "Técnico em Eletrotécnica",
    desc: "Para quem quer trabalhar com energia, instalações e manutenção em um setor essencial para a economia.",
    icon: "🔋",
    img: "images/curso_eletrotecnica.jpg"
  },
  {
    name: "Técnico em Georreferenciamento",
    desc: "Para quem quer atuar com mapeamento, georeferenciamento de propriedades e tecnologias de localização.",
    icon: "🗺️",
    img: "images/curso_georreferenciamento.jpg"
  },
  {
    name: "Técnico em Mecânica",
    desc: "Para quem quer trabalhar com manutenção, fabricação e operação de máquinas e equipamentos industriais.",
    icon: "🔧",
    img: "images/curso_mecanica.jpg"
  },
  {
    name: "Técnico em Meio Ambiente",
    desc: "Para quem quer trabalhar com sustentabilidade, controle ambiental e projetos com impacto real.",
    icon: "🌿",
    img: "images/curso_meio_ambiente.jpg"
  },
  {
    name: "Técnico em Mineração",
    desc: "Para quem quer entrar em um dos setores mais relevantes da economia brasileira, com atuação em campo e gestão.",
    icon: "⛏️",
    img: "images/curso_mineracao.jpg"
  },
  {
    name: "Técnico em Petróleo e Gás",
    desc: "Para quem quer trabalhar em um setor estratégico, com alta demanda e boas perspectivas de carreira.",
    icon: "🛢️",
    img: "images/curso_petroleo_gas.jpg"
  },
  {
    name: "Técnico em Química",
    desc: "Para quem quer atuar em laboratórios, indústrias e processos de produção que exigem conhecimento técnico específico.",
    icon: "🧪",
    img: "images/curso_quimica.jpg"
  },
  {
    name: "Técnico em Secretária Escolar",
    desc: "Para quem quer trabalhar em instituições de ensino com foco em organização, documentação e atendimento.",
    icon: "📚",
    img: "images/curso_secretaria_escolar.jpg"
  },
  {
    name: "Técnico em Segurança do Trabalho",
    desc: "Para quem busca uma carreira com forte demanda e atuação em diferentes setores, com mercado aquecido em várias regiões.",
    icon: "🦺",
    img: "images/curso_seguranca_trabalho.jpg"
  },
  {
    name: "Técnico em Telecomunicações",
    desc: "Para quem quer trabalhar com redes, sistemas de comunicação e infraestrutura tecnológica.",
    icon: "📡",
    img: "images/curso_telecomunicacoes.jpg"
  },
  {
    name: "Técnico em Transações Imobiliárias",
    desc: "Para quem quer atuar no mercado imobiliário com foco em negociação, atendimento e vendas.",
    icon: "🏠",
    img: "images/curso_transacoes_imobiliarias.jpg"
  }
];

// ===== RENDER COURSES =====
function renderCourses() {
  const track = document.getElementById('courses-track');
  if (!track) return;
  track.innerHTML = courses.map(course => `
    <div class="course-card">
      <div class="course-card-image">
        <img src="${course.img}" alt="${course.name}" loading="lazy" />
        <div class="course-card-badge">
          <span>${course.icon}</span> EAD
        </div>
      </div>
      <div class="course-card-body">
        <h3>${course.name}</h3>
        <p>${course.desc}</p>
        <div class="course-tags">
          <span class="course-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Reconhecido pelo MEC
          </span>
          <span class="course-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Tutoria individual e plantões semanais
          </span>
          <span class="course-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Modalidade EAD
          </span>
        </div>
        <a href="${WA_LINK}" target="_blank" rel="noopener" class="course-cta">
          Saiba mais
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>
  `).join('');
}
// ===== COURSES CAROUSEL =====
function initCoursesCarousel() {
  const track = document.getElementById('courses-track');
  const dotsContainer = document.getElementById('courses-dots');
  const prevBtn = document.getElementById('courses-prev');
  const nextBtn = document.getElementById('courses-next');
  if (!track || !prevBtn || !nextBtn) return;
  const cards = track.querySelectorAll('.course-card');
  let currentIndex = 0;
  let autoplayTimer;
  function getCardsVisible() {
    const vw = window.innerWidth;
    if (vw >= 1200) return 3;
    if (vw >= 768) return 2;
    return 1;
  }
  function getTotalSlides() {
    return Math.ceil(cards.length / getCardsVisible());
  }
  function renderDots() {
    if (!dotsContainer) return;
    const total = getTotalSlides();
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'courses-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => { stopAutoplay(); goTo(i); startAutoplay(); });
      dotsContainer.appendChild(dot);
    }
  }
  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.courses-dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }
  function goTo(index) {
    const cv = getCardsVisible();
    const total = getTotalSlides();
    currentIndex = Math.max(0, Math.min(index, total - 1));
    const cardEl = cards[0];
    const cardWidth = cardEl.offsetWidth + parseInt(getComputedStyle(track).gap || 24);
    track.style.transform = `translateX(-${currentIndex * cv * cardWidth}px)`;
    updateDots();
  }
  function next() {
    const total = getTotalSlides();
    goTo(currentIndex >= total - 1 ? 0 : currentIndex + 1);
  }
  function prev() {
    const total = getTotalSlides();
    goTo(currentIndex <= 0 ? total - 1 : currentIndex - 1);
  }
  function startAutoplay() { autoplayTimer = setInterval(next, 5000); }
  function stopAutoplay() { clearInterval(autoplayTimer); }
  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { stopAutoplay(); diff > 0 ? next() : prev(); startAutoplay(); }
  });
  prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); startAutoplay(); });
  nextBtn.addEventListener('click', () => { stopAutoplay(); next(); startAutoplay(); });
  window.addEventListener('resize', () => { renderDots(); goTo(0); });
  renderDots();
  startAutoplay();
}


// ===== TESTIMONIALS CAROUSEL =====
function initCarousel() {
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!track || !dotsContainer) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;
  let currentIndex = 0;
  let cardsVisible = getCardsVisible();
  let autoplayTimer;

  function getCardsVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getTotalSlides() {
    return Math.ceil(totalCards / getCardsVisible());
  }

  function renderDots() {
    const total = getTotalSlides();
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function goTo(index) {
    const cv = getCardsVisible();
    const total = getTotalSlides();
    currentIndex = Math.max(0, Math.min(index, total - 1));
    const cardWidth = cards[0].offsetWidth + 24; // gap
    track.style.transform = `translateX(-${currentIndex * cv * cardWidth}px)`;
    updateDots();
  }

  function next() {
    const total = getTotalSlides();
    goTo(currentIndex >= total - 1 ? 0 : currentIndex + 1);
  }

  function prev() {
    const total = getTotalSlides();
    goTo(currentIndex <= 0 ? total - 1 : currentIndex - 1);
  }

  function startAutoplay() {
    autoplayTimer = setInterval(next, 4500);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); startAutoplay(); });
  nextBtn.addEventListener('click', () => { stopAutoplay(); next(); startAutoplay(); });

  window.addEventListener('resize', () => {
    cardsVisible = getCardsVisible();
    renderDots();
    goTo(0);
  });

  renderDots();
  startAutoplay();
}

// ===== STICKY HEADER =====
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const match = text.match(/[\d,.]+/);
        if (!match) return;
        const target = parseInt(match[0].replace(/[,.]/g, ''));
        const prefix = text.includes('+') ? '+' : '';
        const suffix = text.includes('.000') ? '.000' : '';
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          if (suffix === '.000') {
            el.textContent = prefix + Math.floor(current / 1000) + '.000';
          } else {
            el.textContent = prefix + Math.floor(current);
          }
          if (current >= target) clearInterval(timer);
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// ===== SMOOTH SCROLL FOR ANCHORS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = document.getElementById('site-header').offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
  initHeader();
  initMobileMenu();
  initSmoothScroll();

  // Delay reveal init to let courses render
  setTimeout(() => {
    initScrollReveal();
    initCarousel();
    initCoursesCarousel();
    animateCounters();
  }, 100);
});
