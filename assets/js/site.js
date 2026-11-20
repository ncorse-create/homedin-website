/* HomedIn site · vanilla JS, no build step */
(function(){
  document.documentElement.classList.remove('no-js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sticky nav shadow
  var nav = document.querySelector('.nav');
  function onScroll(){ if(nav) nav.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // Mobile menu
  var btn = document.querySelector('.menu-btn'), links = document.querySelector('.nav-links');
  if(btn && links){
    btn.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function(e){ if(e.target.tagName === 'A'){ links.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }});
  }

  // Scroll reveal (skipped entirely when the user prefers reduced motion)
  var els = document.querySelectorAll('.reveal');
  if(reduce || !('IntersectionObserver' in window)){
    els.forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
    els.forEach(function(el){ io.observe(el); });
  }

  // Pricing toggle: monthly / yearly for HomedIn+ AI.
  // Prices live in data-* attributes on #ai-price in index.html (easy to edit).
  var toggle = document.querySelectorAll('.bill-toggle button');
  var price = document.getElementById('ai-price');
  if(toggle.length && price){
    toggle.forEach(function(b){
      b.addEventListener('click', function(){
        toggle.forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        var yearly = b.dataset.bill === 'yearly';
        price.querySelector('.amt').textContent = yearly ? price.dataset.yearly : price.dataset.monthly;
        price.querySelector('.per').textContent = yearly ? '/year' : '/month';
        var note = document.getElementById('ai-price-note');
        if(note) note.textContent = yearly ? note.dataset.yearly : note.dataset.monthly;
      });
    });
  }

  // Privacy TOC: highlight the section in view
  var tocLinks = document.querySelectorAll('.toc a');
  if(tocLinks.length && 'IntersectionObserver' in window){
    var map = {};
    tocLinks.forEach(function(a){ map[a.getAttribute('href').slice(1)] = a; });
    var tio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          tocLinks.forEach(function(a){ a.classList.remove('active'); });
          var a = map[en.target.id]; if(a) a.classList.add('active');
        }
      });
    }, {rootMargin:'-20% 0px -70% 0px'});
    Object.keys(map).forEach(function(id){ var s = document.getElementById(id); if(s) tio.observe(s); });
  }

  // Support form: composes an email in the visitor's mail app (no backend).
  var form = document.getElementById('support-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var to = form.dataset.to;
      var topic = form.topic.value, name = form.name.value, from = form.email.value, msg = form.message.value;
      var body = msg + '\n\n— ' + name + (from ? ' (' + from + ')' : '') + '\nDevice / iOS version: ';
      window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent('[HomedIn] ' + topic) + '&body=' + encodeURIComponent(body);
    });
  }

  var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
})();
