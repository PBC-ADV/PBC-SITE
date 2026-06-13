/* ===== PBC — app logic: i18n render, nav, language, reveal ===== */
(function(){
  const LANGS = ['pt','en','fr','es','de','it'];
  const I18N = window.PBC_I18N;

  // Supplementary strings for the refined elements not present in the source i18n
  const EXTRA = {
    pt:{eyebrow:'Advocacia · João Pessoa — PB', phTitle:'Título do artigo', imgLabel:'Imagem',
        k:{about:'O escritório', practice:'O que fazemos', team:'Quem somos', insights:'Publicações', contact:'Fale conosco'},
        quotes:['Ser continuamente melhor que ontem','Firmeza e gentileza não são vocábulos antagônicos','Por trás daquilo que nos é confiado há, sempre, pessoas','Coragem gera resultados'],
        form:{sending:'Enviando...', success:'Mensagem enviada com sucesso! Em breve entraremos em contato.', error:'Não foi possível enviar sua mensagem. Tente novamente ou escreva para contato@pbc.adv.br.'}},
    en:{eyebrow:'Law Firm · João Pessoa — Brazil', phTitle:'Article title', imgLabel:'Image',
        k:{about:'The firm', practice:'What we do', team:'Who we are', insights:'Publications', contact:'Get in touch'},
        quotes:['To be continually better than yesterday','Firmness and kindness are not contradictory words','Behind everything entrusted to us, there are always people','Courage produces results'],
        form:{sending:'Sending...', success:'Message sent successfully! We will get back to you soon.', error:'We could not send your message. Please try again or email contato@pbc.adv.br.'}},
    fr:{eyebrow:'Cabinet · João Pessoa — Brésil', phTitle:"Titre de l'article", imgLabel:'Image',
        k:{about:'Le cabinet', practice:'Ce que nous faisons', team:'Qui nous sommes', insights:'Publications', contact:'Contactez-nous'},
        quotes:['Être continuellement meilleur qu’hier','Fermeté et gentillesse ne sont pas des mots contradictoires','Derrière ce qui nous est confié, il y a toujours des personnes','Le courage produit des résultats'],
        form:{sending:'Envoi en cours...', success:'Message envoyé avec succès ! Nous vous recontacterons bientôt.', error:"Impossible d'envoyer votre message. Veuillez réessayer ou écrire à contato@pbc.adv.br."}},
    es:{eyebrow:'Abogacía · João Pessoa — Brasil', phTitle:'Título del artículo', imgLabel:'Imagen',
        k:{about:'El despacho', practice:'Lo que hacemos', team:'Quiénes somos', insights:'Publicaciones', contact:'Hablemos'},
        quotes:['Ser continuamente mejor que ayer','Firmeza y gentileza no son palabras antagónicas','Detrás de todo lo que se nos confía, siempre hay personas','El coraje genera resultados'],
        form:{sending:'Enviando...', success:'¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.', error:'No se pudo enviar su mensaje. Inténtelo de nuevo o escriba a contato@pbc.adv.br.'}},
    de:{eyebrow:'Kanzlei · João Pessoa — Brasilien', phTitle:'Artikeltitel', imgLabel:'Bild',
        k:{about:'Die Kanzlei', practice:'Was wir tun', team:'Wer wir sind', insights:'Publikationen', contact:'Kontakt'},
        quotes:['Stets besser sein als gestern','Bestimmtheit und Freundlichkeit sind keine Gegensätze','Hinter allem, was uns anvertraut wird, stehen immer Menschen','Mut erzeugt Ergebnisse'],
        form:{sending:'Wird gesendet...', success:'Nachricht erfolgreich gesendet! Wir melden uns in Kürze.', error:'Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an contato@pbc.adv.br.'}},
    it:{eyebrow:'Avvocatura · João Pessoa — Brasile', phTitle:"Titolo dell'articolo", imgLabel:'Immagine',
        k:{about:'Lo studio', practice:'Cosa facciamo', team:'Chi siamo', insights:'Pubblicazioni', contact:'Contattaci'},
        quotes:['Essere sempre migliori di ieri','Fermezza e gentilezza non sono parole antagoniste','Dietro ciò che ci viene affidato ci sono sempre persone','Il coraggio genera risultati'],
        form:{sending:'Invio in corso...', success:'Messaggio inviato con successo! Ti ricontatteremo presto.', error:'Impossibile inviare il messaggio. Riprova o scrivi a contato@pbc.adv.br.'}}
  };
  // Article-page labels (não existiam no i18n original)
  const ART = {
    pt:{back:'Voltar aos artigos', by:'Por', writtenBy:'Escrito por', notFound:'Artigo não encontrado.'},
    en:{back:'Back to articles', by:'By', writtenBy:'Written by', notFound:'Article not found.'},
    fr:{back:'Retour aux articles', by:'Par', writtenBy:'Écrit par', notFound:'Article introuvable.'},
    es:{back:'Volver a los artículos', by:'Por', writtenBy:'Escrito por', notFound:'Artículo no encontrado.'},
    de:{back:'Zurück zu den Artikeln', by:'Von', writtenBy:'Geschrieben von', notFound:'Artikel nicht gefunden.'},
    it:{back:'Torna agli articoli', by:'Di', writtenBy:'Scritto da', notFound:'Articolo non trovato.'}
  };
  // graft extras into the dicts so the generic [data-i18n] pass can pick them up
  LANGS.forEach(l=>{
    const d = I18N[l]; if(!d) return;
    d.hero = d.hero || {}; d.about = d.about || {};
    d.practiceAreas = d.practiceAreas || {}; d.team = d.team || {};
    d.insights = d.insights || {}; d.contact = d.contact || {};
    d.hero.eyebrow = EXTRA[l].eyebrow;
    d.about.kicker = EXTRA[l].k.about;
    d.practiceAreas.kicker = EXTRA[l].k.practice;
    d.team.kicker = EXTRA[l].k.team;
    d.insights.kicker = EXTRA[l].k.insights;
    d.contact.kicker = EXTRA[l].k.contact;
    d.contact.form_sending = EXTRA[l].form.sending;
    d.contact.form_success = EXTRA[l].form.success;
    d.contact.form_error = EXTRA[l].form.error;
    d.insights.back = ART[l].back;
    d.insights.by = ART[l].by;
    d.insights.written_by = ART[l].writtenBy;
    d.insights.not_found = ART[l].notFound;
  });

  const NAV = [
    ['nav.home','#home'],['nav.about','#sobre'],['nav.practiceAreas','#atuacao'],
    ['nav.team','#equipe'],['nav.insights','#insights'],['nav.contact','#contato']
  ];

  const FLAGS = {
    pt:'<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#2e8b57"/><path d="M10 1.8 18 7 10 12.2 2 7Z" fill="#ffcf3f"/><circle cx="10" cy="7" r="2.5" fill="#1e3a8a"/></svg>',
    en:'<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#fff"/><rect width="20" height="2" fill="#b22234"/><rect y="4" width="20" height="2" fill="#b22234"/><rect y="8" width="20" height="2" fill="#b22234"/><rect y="12" width="20" height="2" fill="#b22234"/><rect width="8" height="8" fill="#3c3b6e"/></svg>',
    fr:'<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#fff"/><rect width="6.7" height="14" fill="#0055a4"/><rect x="13.3" width="6.7" height="14" fill="#ef4135"/></svg>',
    es:'<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#ffc400"/><rect width="20" height="3.6" fill="#c60b1e"/><rect y="10.4" width="20" height="3.6" fill="#c60b1e"/></svg>',
    de:'<svg viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#111"/><rect y="4.67" width="20" height="4.67" fill="#d00"/><rect y="9.34" width="20" height="4.66" fill="#ffce00"/></svg>',
    it:'<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#fff"/><rect width="6.7" height="14" fill="#009246"/><rect x="13.3" width="6.7" height="14" fill="#ce2b37"/></svg>'
  };

  let lang = localStorage.getItem('pbc_lang');
  if(!LANGS.includes(lang)) lang = 'pt';

  const A = window.PBC_ASSETS;
  const dict = () => I18N[lang] || I18N.pt;
  function t(key){
    const path = key.split('.');
    let v = path.reduce((o,k)=> (o==null?undefined:o[k]), dict());
    if(v==null) v = path.reduce((o,k)=> (o==null?undefined:o[k]), I18N.pt);
    return v;
  }

  /* ---------- static assets ---------- */
  const vid = document.getElementById('heroVid');
  vid.poster = A.heroPoster;
  vid.innerHTML = '<source src="'+A.heroVideo+'" type="video/mp4">';
  vid.load();
  document.querySelectorAll('.band').forEach(b=>{
    const o = A.office[+b.dataset.band];
    if(o){ b.style.backgroundImage = "url('"+o.url+"')"; b.style.backgroundPosition = o.pos; }
  });

  /* ---------- nav + language UI ---------- */
  function buildNav(){
    const main = document.getElementById('navMain');
    const fn = document.getElementById('footNav');
    const mob = document.getElementById('navMobile');
    const linksHTML = NAV.map(([k,h])=>'<a class="nav-link" href="'+h+'" data-i18n="'+k+'"></a>').join('');
    main.innerHTML = linksHTML + '<div class="langs" id="langDesk"></div>';
    fn.innerHTML = NAV.map(([k,h])=>'<a href="'+h+'" data-i18n="'+k+'"></a>').join('');
    mob.innerHTML = linksHTML;
    const langHTML = LANGS.map(l=>'<button class="lang" data-lang="'+l+'" aria-label="'+l.toUpperCase()+'"><span class="flag">'+FLAGS[l]+'</span></button>').join('');
    document.getElementById('langDesk').innerHTML = langHTML;
    document.getElementById('langMobile').innerHTML = langHTML;
    document.querySelectorAll('.lang').forEach(btn=>{
      btn.addEventListener('click',()=>setLang(btn.dataset.lang));
    });
    // mobile menu close on link click
    mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  }
  function markLang(){
    document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  }

  /* ---------- i18n apply ---------- */
  function applyStatic(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const v = t(el.getAttribute('data-i18n'));
      if(v!=null && v!=='') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const v = t(el.getAttribute('data-i18n-html'));
      if(v!=null && v!=='') el.innerHTML = v;
    });
    document.getElementById('heroTitle').textContent = t('hero.title');
    document.querySelectorAll('.bq').forEach(el=>{ el.textContent = (EXTRA[lang]||EXTRA.pt).quotes[+el.dataset.q] || ''; });
    document.getElementById('footCopy').textContent = '© ' + new Date().getFullYear() + ' ' + t('footer.copyright');
  }

  function renderPractice(){
    const arr = dict().practice_areas || [];
    document.getElementById('paGrid').innerHTML = arr.map((a,i)=>(
      '<article class="pa-card reveal">'+
        '<span class="pa-num">'+String(i+1).padStart(2,'0')+'</span>'+
        '<h3 class="pa-title">'+a.title+'</h3>'+
        '<p class="pa-desc">'+a.description+'</p>'+
      '</article>'
    )).join('');
  }

  function renderTeam(){
    const d = dict();
    const members = (d.team && d.team.members) || [];
    const roles = (d.team && d.team.roles) || {};
    let html = '';
    window.PBC_ROLE_ORDER.forEach(role=>{
      const items = window.PBC_TEAM.map((m,i)=>({m,i})).filter(x=>x.m.role===role);
      if(!items.length) return;
      html += '<div class="team-group reveal">'+
        '<div class="role-head"><h3>'+(roles[role]||'')+'</h3><span class="ln"></span></div>'+
        '<div class="team-grid">'+
        items.map(({m,i})=>{
          const mem = members[i] || {name:'',bio:''};
          return '<div class="member">'+
            '<div class="ph"><img loading="lazy" src="'+m.img+'" alt=""></div>'+
            '<div class="nm">'+mem.name+'</div>'+
            '<p class="bio">'+mem.bio+'</p>'+
          '</div>';
        }).join('')+
        '</div></div>';
    });
    document.getElementById('teamWrap').innerHTML = html;
  }

  /* ---------- articles (local list from data.js) ---------- */
  const articles = () => Array.isArray(window.PBC_ARTICLES) ? window.PBC_ARTICLES : [];
  const findArticle = slug => articles().find(a => a && a.slug === slug);
  const cover = a => a.coverUrl || a.imageUrl || '';
  const teamMember = key => (Array.isArray(window.PBC_TEAM) ? window.PBC_TEAM : []).find(m => m && m.key === key) || null;

  // escape user/author content before injecting as HTML
  function esc(s){
    return String(s==null?'':s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
  }
  // inline micro-markdown: **bold**, *italic*, [text](url|#anchor)
  function inlineMd(s){
    return esc(s)
      .replace(/\[([^\]]+)\]\((#[^)\s]*|https?:\/\/[^)\s]+)\)/g, (_,txt,url)=>{
        const ext = /^https?:/i.test(url);
        return '<a href="'+url+'"'+(ext?' target="_blank" rel="noopener"':'')+'>'+txt+'</a>';
      })
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  }
  // block-level: blank line = paragraph; "## " heading; "> " quote; "- " list
  function renderContent(text){
    return String(text==null?'':text).replace(/\r/g,'').trim().split(/\n\s*\n/).map(b=>{
      const lines = b.split('\n');
      if(/^#{1,2}\s+/.test(b)) return '<h2>'+inlineMd(b.replace(/^#{1,2}\s+/,''))+'</h2>';
      if(lines.every(l=>/^>\s?/.test(l)))
        return '<blockquote>'+inlineMd(lines.map(l=>l.replace(/^>\s?/,'')).join(' '))+'</blockquote>';
      if(lines.every(l=>/^[-*]\s+/.test(l)))
        return '<ul>'+lines.map(l=>'<li>'+inlineMd(l.replace(/^[-*]\s+/,''))+'</li>').join('')+'</ul>';
      return '<p>'+inlineMd(lines.join(' '))+'</p>';
    }).join('');
  }
  // format 'AAAA-MM-DD' by extenso, localized to current language
  function fmtDate(iso){
    const p = String(iso||'').split('-');
    if(p.length!==3) return iso || '';
    const d = new Date(+p[0], +p[1]-1, +p[2]);
    if(isNaN(d)) return iso;
    try{ return d.toLocaleDateString(lang==='pt'?'pt-BR':lang, {day:'numeric',month:'long',year:'numeric'}); }
    catch(e){ return iso; }
  }

  function renderArticles(){
    const wrap = document.getElementById('insWrap');
    const data = articles().slice(0, 3); // vitrine da home: no máximo 3 artigos
    if(data.length){
      wrap.innerHTML = '<div class="ins-grid is-'+data.length+'">'+data.map(a=>{
        const internal = !!a.slug;
        const href = internal ? '#artigo/'+encodeURIComponent(a.slug) : (a.url||'#');
        const tgt = internal ? '' : ' target="_blank" rel="noopener"';
        const img = cover(a);
        const am = a.author ? teamMember(a.author) : null;
        const amDate = a.date ? esc(fmtDate(a.date)) : '';
        const authorHTML = am ? '<span class="art-author">'+
          (am.img?'<img class="aa-photo" loading="lazy" src="'+esc(am.img)+'" alt="">':'')+
          '<span class="aa-info">'+
            '<span class="aa-by">'+t('insights.written_by')+'</span>'+
            '<span class="aa-name">'+esc(am.name)+'</span>'+
            (amDate?'<span class="aa-date">'+amDate+'</span>':'')+
          '</span>'+
        '</span>' : '';
        return '<a class="art" href="'+href+'"'+tgt+'>'+
          '<div class="im">'+(img?'<img loading="lazy" src="'+esc(img)+'" alt="">':'')+'</div>'+
          '<div class="bd"><h4>'+esc(a.title)+'</h4>'+
          (a.excerpt?'<p class="pa-desc" style="margin-top:.6rem">'+esc(a.excerpt)+'</p>':'')+
          authorHTML+
          '<span class="more">'+t('insights.read_more')+' <span class="arr">→</span></span></div>'+
        '</a>';
      }).join('')+'</div>';
    } else {
      wrap.innerHTML = '<p class="ins-msg">'+t('insights.no_articles')+'</p>';
    }
    observeReveals();
  }

  /* ---------- article reading view ---------- */
  function renderArticleView(a){
    const view = document.getElementById('articleView');
    if(!a){
      view.innerHTML = '<div class="post"><p class="ins-msg">'+t('insights.not_found')+'</p>'+
        '<a class="post-back" href="#insights">← '+t('insights.back')+'</a></div>';
      return;
    }
    const img = cover(a);
    const dateStr = a.date ? esc(fmtDate(a.date)) : '';
    const member = a.author ? teamMember(a.author) : null;
    let bylineHTML = '';
    if(member){
      const sub = dateStr;
      bylineHTML = '<div class="post-byline">'+
        (member.img?'<a class="pb-photo-link" href="#equipe" aria-label="'+esc(member.name)+'"><img class="pb-photo" loading="lazy" src="'+esc(member.img)+'" alt=""></a>':'')+
        '<div class="pb-info">'+
          '<span class="pb-by">'+t('insights.written_by')+'</span>'+
          '<a class="pb-name" href="#equipe">'+esc(member.name)+'</a>'+
          (sub?'<span class="pb-role">'+sub+'</span>':'')+
        '</div>'+
      '</div>';
    } else {
      const meta = [];
      if(dateStr) meta.push(dateStr);
      if(a.author) meta.push(t('insights.by')+' '+esc(a.author));
      if(meta.length) bylineHTML = '<p class="post-meta">'+meta.join('  ·  ')+'</p>';
    }
    view.innerHTML = '<div class="post">'+
      '<span class="eyebrow">'+t('insights.kicker')+'</span>'+
      '<h1 class="post-title">'+esc(a.title)+'</h1>'+
      bylineHTML+
      (a.excerpt?'<p class="post-excerpt">'+esc(a.excerpt)+'</p>':'')+
      (img?'<div class="post-cover"><img src="'+esc(img)+'" alt=""></div>':'')+
      '<div class="post-body" lang="pt">'+renderContent(a.content)+'</div>'+
    '</div>';
  }

  /* ---------- hash router: home  <->  #artigo/<slug> ---------- */
  const DEFAULT_TITLE = 'Pessoa, Braz & Carneiro Advocacia';
  function currentSlug(){
    const m = (location.hash||'').match(/^#artigo\/(.+)$/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function router(){
    const slug = currentSlug();
    const home = document.getElementById('homeView');
    const view = document.getElementById('articleView');
    if(slug){
      const a = findArticle(slug);
      renderArticleView(a);
      home.hidden = true; view.hidden = false;
      document.body.classList.add('reading');
      document.title = (a ? a.title+' — ' : '') + DEFAULT_TITLE;
      window.scrollTo(0,0);
    } else {
      view.hidden = true; home.hidden = false;
      document.body.classList.remove('reading');
      document.title = DEFAULT_TITLE;
      const id = (location.hash||'').slice(1);
      if(id){ const el = document.getElementById(id); if(el) el.scrollIntoView(); }
      observeReveals();
    }
  }
  window.addEventListener('hashchange', router);

  /* ---------- reveal on scroll (robust, scroll-driven) ---------- */
  function observeReveals(){
    const vh = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
      if(el.getBoundingClientRect().top < vh*0.92) el.classList.add('in');
    });
  }
  window.addEventListener('scroll', observeReveals, {passive:true});
  window.addEventListener('resize', observeReveals);
  window.addEventListener('load', ()=>{ observeReveals(); setTimeout(observeReveals,400); });

  /* ---------- language switch ---------- */
  function setLang(l){
    if(!LANGS.includes(l)) return;
    lang = l; localStorage.setItem('pbc_lang', l);
    document.documentElement.lang = (l==='pt'?'pt-BR':l);
    applyStatic(); renderPractice(); renderTeam(); renderArticles(); markLang();
    const slug = currentSlug();
    if(slug){ renderArticleView(findArticle(slug)); document.title = DEFAULT_TITLE; }
    observeReveals();
  }

  /* ---------- header + menu ---------- */
  const hdr = document.getElementById('hdr');
  window.addEventListener('scroll',()=>{ hdr.classList.toggle('scrolled', window.scrollY>10); },{passive:true});
  const mmenu = document.getElementById('mmenu');
  function openMenu(){ mmenu.classList.add('open'); document.body.style.overflow='hidden'; }
  function closeMenu(){ mmenu.classList.remove('open'); document.body.style.overflow=''; }
  document.getElementById('burger').addEventListener('click',openMenu);
  document.getElementById('burgerClose').addEventListener('click',closeMenu);

  /* ---------- contact form (Formspree + mailto fallback) ---------- */
  const cform = document.getElementById('contactForm');
  if(cform){
    const fstatus = document.getElementById('formStatus');
    const fbtn = cform.querySelector('button[type="submit"]');
    const flbl = cform.querySelector('[data-i18n="contact.form_submit"]');
    const setStatus = (type,key)=>{
      if(!fstatus) return;
      fstatus.className = 'cform-status show ' + type;
      fstatus.textContent = t('contact.'+key);
    };
    cform.addEventListener('submit', e=>{
      e.preventDefault();
      const fd = new FormData(cform);
      if(fd.get('_gotcha')) return; // honeypot: provável bot
      if(fstatus){ fstatus.className = 'cform-status'; fstatus.textContent = ''; }

      const id = window.PBC_FORMSPREE_ID;
      if(!id){
        // Fallback: abre o cliente de e-mail com a mensagem preenchida.
        const subject = 'Contato pelo site — ' + (fd.get('name')||'');
        const body = [
          'Nome: '    + (fd.get('name')||''),
          'Email: '   + (fd.get('email')||''),
          'Telefone: '+ (fd.get('phone')||''),
          'Empresa: ' + (fd.get('company')||''),
          '', (fd.get('message')||'')
        ].join('\n');
        window.location.href = 'mailto:contato@pbc.adv.br?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
        return;
      }

      if(fbtn) fbtn.disabled = true;
      if(flbl) flbl.textContent = t('contact.form_sending');
      fetch('https://formspree.io/f/'+id, { method:'POST', body:fd, headers:{Accept:'application/json'} })
        .then(r=>{ if(!r.ok) throw new Error('fail'); cform.reset(); setStatus('ok','form_success'); })
        .catch(()=>{ setStatus('err','form_error'); })
        .finally(()=>{ if(fbtn) fbtn.disabled = false; if(flbl) flbl.textContent = t('contact.form_submit'); });
    });
  }

  /* ---------- init ---------- */
  buildNav();
  applyStatic();
  renderPractice();
  renderTeam();
  renderArticles();
  markLang();
  document.documentElement.lang = (lang==='pt'?'pt-BR':lang);
  observeReveals();
  router();
})();
