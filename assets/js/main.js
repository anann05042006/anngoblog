(function () {
  // Mobile menu: toggle on click, close after choosing a link or pressing Esc
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Header shadow once the page is scrolled
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Reading progress bar (article page only)
  var bar = document.querySelector('.progress');
  var article = document.querySelector('.prose');
  if (bar && article) {
    var update = function () {
      var r = article.getBoundingClientRect();
      var total = r.height - window.innerHeight * 0.6;
      var done = Math.min(Math.max(-r.top + window.innerHeight * 0.2, 0), total);
      bar.style.width = (total > 0 ? (done / total) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // Highlight the current section in the side contents list
  var links = document.querySelectorAll('.aside li a');
  if (links.length) {
    var targets = [];
    links.forEach(function (a) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (el) targets.push({ el: el, a: a });
    });
    var spy = function () {
      var line = window.innerHeight * 0.35, current = null;
      targets.forEach(function (t) { if (t.el.getBoundingClientRect().top <= line) current = t; });
      if (!current && targets.length) current = targets[0];
      links.forEach(function (a) { a.classList.toggle('on', !!current && a === current.a); });
    };
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy);
    spy();
  }

  // Gentle fade-in for blocks as they scroll into view
  var items = document.querySelectorAll('.theme, .id-card, .about-text, .takeaways, .prose figure, .author-box');
  if ('IntersectionObserver' in window) {
    items.forEach(function (el) { el.classList.add('reveal'); });
    var rv = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { rv.observe(el); });
  }
})();
