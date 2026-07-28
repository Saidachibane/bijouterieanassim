// ======== DATA ========
const PHONE = '212680990335';

let products = [
  { id:1, name:'Bague Solitaire Diamant', cat:'Bagues', weight:'5.2g', gold:'Or Jaune 18K', price:'4 500 MAD', desc:'Élégante bague solitaire en or jaune 18 carats ornée d\'un diamant naturel de 0.5 carat. Design classique et intemporel, parfaite pour les fiançailles ou comme cadeau de luxe.', img:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', badge:'Bestseller', featured:true, available:true, ref:'BA-001' },
  { id:2, name:'Alliance Or Jaune Classique', cat:'Bagues', weight:'4.1g', gold:'Or Jaune 18K', price:'2 800 MAD', desc:'Alliance de mariage en or jaune 18 carats, finition brillante. Design épuré et intemporel pour symboliser votre union. Disponible en plusieurs tailles.', img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80', badge:'Populaire', featured:false, available:true, ref:'BA-002' },
  { id:3, name:'Collier Chaîne Dorée Maille Anglaise', cat:'Colliers', weight:'8.4g', gold:'Or Jaune 18K', price:'6 200 MAD', desc:'Magnifique collier en or jaune 18 carats à maille anglaise, longueur 45cm. Éclat et raffinement à l\'état pur. Fermoir à ressort sécurisé.', img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', badge:'Nouveau', featured:true, available:true, ref:'BA-003' },
  { id:4, name:'Pendentif Croix Or Blanc', cat:'Colliers', weight:'3.8g', gold:'Or Blanc 18K', price:'3 100 MAD', desc:'Délicat pendentif croix en or blanc 18 carats, serti de diamants. Symbole de foi et d\'élégance. Chaîne incluse 45cm.', img:'https://images.unsplash.com/photo-1573408301185-9519f94815b2?w=600&q=80', badge:'', featured:false, available:true, ref:'BA-004' },
  { id:5, name:'Bracelet Tressé Or Jaune', cat:'Bracelets', weight:'12.1g', gold:'Or Jaune 18K', price:'8 900 MAD', desc:'Superbe bracelet tressé en or jaune 18 carats, style artisanal marocain. Travail de tressage minutieux réalisé par nos artisans experts. Fermoir à boîte sécurisé.', img:'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80', badge:'Populaire', featured:true, available:true, ref:'BA-005' },
  { id:6, name:'Bracelet Jonc Lisse Or Rose', cat:'Bracelets', weight:'9.3g', gold:'Or Rose 18K', price:'6 800 MAD', desc:'Bracelet jonc en or rose 18 carats, surface lisse et brillante. Design minimaliste et élégant qui s\'adapte à toutes les occasions. Taille unique ajustable.', img:'https://images.unsplash.com/photo-1573408301185-9519f94815b2?w=600&q=80', badge:'Nouveau', featured:false, available:true, ref:'BA-006' },
  { id:7, name:'Boucles d\'Oreilles Fleur Or', cat:'Boucles', weight:'3.6g', gold:'Or Jaune 18K', price:'2 400 MAD', desc:'Boucles d\'oreilles en forme de fleur en or jaune 18 carats. Design floral délicat et romantique, parfait pour toutes les occasions. Fermoir push-back sécurisé.', img:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80', badge:'Édition Limitée', featured:true, available:true, ref:'BA-007' },
  { id:8, name:'Boucles Créoles Or Classiques', cat:'Boucles', weight:'5.2g', gold:'Or Jaune 18K', price:'3 600 MAD', desc:'Créoles classiques en or jaune 18 carats, diamètre 25mm. Design indémodable qui sublime chaque visage. Finition polie haute brillance.', img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', badge:'Bestseller', featured:false, available:true, ref:'BA-008' },
  { id:9, name:'Set Parure Mariage Complet', cat:'Sets', weight:'32.5g', gold:'Or Jaune 18K', price:'24 000 MAD', desc:'Parure complète de mariage en or jaune 18 carats: collier, bracelet, boucles d\'oreilles et bague. Sertis de zircons blancs premium. Coffret cadeau luxe inclus.', img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80', badge:'Populaire', featured:false, available:true, ref:'BA-009' },
  { id:10, name:'Set Parure Or Rose 3 Pièces', cat:'Sets', weight:'18.2g', gold:'Or Rose 18K', price:'14 500 MAD', desc:'Élégante parure 3 pièces en or rose 18 carats: collier délicat, bracelet fin et boucles d\'oreilles assorties. Design romantique et moderne.', img:'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80', badge:'Nouveau', featured:false, available:true, ref:'BA-010' },
  { id:11, name:'Bague de Mariage Or & Diamants', cat:'Mariage', weight:'6.8g', gold:'Or Blanc 18K', price:'9 800 MAD', desc:'Bague de mariage somptueuse en or blanc 18 carats pavée de diamants naturels. Symbole de votre amour éternel, façonnée avec une précision artisanale exceptionnelle.', img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80', badge:'Bestseller', featured:false, available:true, ref:'BA-011' },
  { id:12, name:'Collier Mariage Or Perles Blanches', cat:'Mariage', weight:'14.2g', gold:'Or Jaune 18K', price:'11 200 MAD', desc:'Collier de mariée en or jaune 18 carats agrémenté de perles blanches naturelles. Raffinement et élégance pour le plus beau jour de votre vie.', img:'https://images.unsplash.com/photo-1573408301185-9519f94815b2?w=600&q=80', badge:'Populaire', featured:false, available:true, ref:'BA-012' },
  { id:13, name:'Bague Chevalière Or Homme', cat:'Bagues', weight:'8.5g', gold:'Or Jaune 18K', price:'5 900 MAD', desc:'Bague chevalière en or jaune 18 carats pour homme. Design robuste et élégant avec gravure personnalisable. Symbole de prestance et de caractère.', img:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', badge:'', featured:false, available:true, ref:'BA-013' },
  { id:14, name:'Collier Femme Or Chaîne Fine', cat:'Colliers', weight:'5.1g', gold:'Or Jaune 18K', price:'3 800 MAD', desc:'Collier délicat en or jaune 18 carats, chaîne fine forçat 40-45cm. Finesse et légèreté pour un port quotidien. Fermoir à ressort doré.', img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', badge:'Nouveau', featured:false, available:true, ref:'BA-014' },
  { id:15, name:'Bracelet Gourmette Or Jaune', cat:'Bracelets', weight:'15.8g', gold:'Or Jaune 18K', price:'11 500 MAD', desc:'Gourmette classique en or jaune 18 carats, largeur 8mm. Style intemporel avec maillons plats et brillants. Longueur 19cm, fermoir à boîte.', img:'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80', badge:'Bestseller', featured:false, available:true, ref:'BA-015' },
  { id:16, name:'Boucles Pendantes Or & Rubis', cat:'Boucles', weight:'4.4g', gold:'Or Rose 18K', price:'4 200 MAD', desc:'Boucles d\'oreilles pendantes en or rose 18 carats serties de rubis naturels. Sophistication et féminité au service de votre beauté.', img:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80', badge:'Nouveau', featured:false, available:true, ref:'BA-016' },
  { id:17, name:'Lingot Or Pur 10g', cat:'Lingots', weight:'10g', gold:'Or 24K', price:'7 200 MAD', desc:'Lingot d\'or pur 24 carats (999.9‰) de 10 grammes. Certifié et poinçonné. Investissement sûr et rentable. Présenté dans son coffret de protection.', img:'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=80', badge:'', featured:false, available:true, ref:'BA-017' },
  { id:18, name:'Lingot Or Pur 20g', cat:'Lingots', weight:'20g', gold:'Or 24K', price:'14 400 MAD', desc:'Lingot d\'or pur 24 carats (999.9‰) de 20 grammes. Certifié et poinçonné par un organisme accrédité. Conditionnement sous blister sécurisé.', img:'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=80', badge:'', featured:false, available:true, ref:'BA-018' },
  { id:19, name:'Bague Triple Alliance Tricolor', cat:'Bagues', weight:'7.2g', gold:'Or Tricolor 18K', price:'5 100 MAD', desc:'Bague triple alliance en or tricolore 18 carats (or jaune, blanc et rose). Design moderne et original qui capture les regards. Disponible en toutes tailles.', img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80', badge:'Populaire', featured:false, available:true, ref:'BA-019' },
  { id:20, name:'Parure Mariage Luxe Complète', cat:'Mariage', weight:'45.6g', gold:'Or Jaune 18K', price:'38 000 MAD', desc:'Parure de mariage luxueuse 5 pièces: tiara, collier, bracelet, boucles d\'oreilles et bague. Toutes serties de diamants et zircons. La reine de votre jour J.', img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80', badge:'Édition Limitée', featured:false, available:true, ref:'BA-020' }
];

let savedProducts = localStorage.getItem('products');
if (savedProducts) {
  products = JSON.parse(savedProducts);
}

let uploadedImageBase64 = '';

let wishlist = JSON.parse(localStorage.getItem('wish') || '[]');
let recentlyViewed = JSON.parse(localStorage.getItem('recent') || '[]');
let currentFilter = 'all';
let currentSearch = '';
let currentProductIndex = null;
let adminLoggedIn = false;
let nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 21;

// ======== LOADER ========
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initReveal();
  }, 2000);
});

// ======== NAVBAR SCROLL ========
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  nb.classList.toggle('scrolled', window.scrollY > 40);
});

// ======== MOBILE MENU ========
function toggleMobile() {
  const m = document.getElementById('mobile-menu');
  const h = document.getElementById('hamburger');
  m.classList.toggle('open');
  h.classList.toggle('active');
}

// ======== PAGE INIT (multi-page site) ========
// Each real HTML page is its own file now, so we just render whatever
// widgets exist on the current page instead of toggling .page divs.
function initPage() {
  updateWishCount();
  if (document.getElementById('home-products')) renderHomeProducts();
  if (document.getElementById('products-grid')) {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat) {
      currentFilter = cat;
      const btn = document.querySelector(`.filter-btn[data-cat="${cat}"]`);
      if (btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    }
    renderProducts();
  }
  if (document.getElementById('wishlist-grid')) renderWishlist();
  setTimeout(initReveal, 100);
}

// ======== PRODUCT CARD ========
function productCard(p, mini=false) {
  const inWish = wishlist.includes(p.id);
  return `
  <div class="product-card" onclick="openProduct(${p.id})">
    <div class="product-img-wrap">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <button class="product-wish ${inWish ? 'active' : ''}" onclick="toggleWish(event,${p.id})" aria-label="Wishlist">
        ${inWish ? '♥' : '♡'}
      </button>
    </div>
    <div class="product-info">
      <div class="product-cat">${p.cat}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-weight">Poids: ${p.weight} · ${p.gold}</div>
      <div class="product-price">${p.price} <small>MAD</small></div>
    </div>
    <div class="product-footer">
      <button class="btn btn-gold" onclick="event.stopPropagation();openProduct(${p.id})">Voir Détails</button>
      <a class="btn btn-whatsapp" href="${waLink(p)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  </div>`;
}

function waLink(p) {
  const msg = encodeURIComponent(`Bonjour Bijouterie Anassim,\n\nJe suis intéressé(e) par:\n🏷️ Produit: ${p.name}\n📦 Réf: ${p.ref}\n⚖️ Poids: ${p.weight}\n💰 Prix: ${p.price}\n\nPourriez-vous me donner plus d'informations?\n\nMerci`);
  return `https://wa.me/${PHONE}?text=${msg}`;
}

// ======== HOME PRODUCTS ========
function renderHomeProducts() {
  const el = document.getElementById('home-products');
  if (!el) return;
  const featured = products.filter(p => p.featured && p.available).slice(0, 4);
  el.innerHTML = featured.map(p => productCard(p)).join('');
}

// ======== PRODUCTS PAGE ========
let page = 1;
const PER_PAGE = 8;

function renderProducts() {
  let filtered = products.filter(p => p.available);
  if (currentFilter !== 'all') filtered = filtered.filter(p => p.cat === currentFilter);
  if (currentSearch) filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
    p.cat.toLowerCase().includes(currentSearch.toLowerCase()) ||
    p.desc.toLowerCase().includes(currentSearch.toLowerCase())
  );
  const total = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const slice = filtered.slice(start, start + PER_PAGE);
  const grid = document.getElementById('products-grid');
  grid.innerHTML = slice.length ? slice.map(p => productCard(p)).join('') :
    '<div style="grid-column:1/-1;text-align:center;padding:80px;color:var(--gray)"><div style="font-size:48px;margin-bottom:16px">🔍</div><h3 style="font-family:var(--font-display);font-size:24px;color:var(--ivory);margin-bottom:8px">Aucun résultat</h3><p>Essayez une autre catégorie ou recherche</p></div>';

  const pag = document.getElementById('pagination');
  if (total <= 1) { pag.innerHTML = ''; return; }
  let html = '';
  if (page > 1) html += `<button class="page-btn" onclick="gotoPage(${page-1})">‹</button>`;
  for (let i = 1; i <= total; i++) html += `<button class="page-btn ${i===page?'active':''}" onclick="gotoPage(${i})">${i}</button>`;
  if (page < total) html += `<button class="page-btn" onclick="gotoPage(${page+1})">›</button>`;
  pag.innerHTML = html;
}

function gotoPage(p) { page = p; renderProducts(); window.scrollTo({top:200,behavior:'smooth'}); }

function filterProducts(cat, btn) {
  currentFilter = cat;
  page = 1;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
}

function searchProducts(val) {
  currentSearch = val;
  page = 1;
  renderProducts();
}

// ======== WISHLIST ========
function toggleWish(e, id) {
  e.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    showToast('♥ Ajouté à la wishlist');
  } else {
    wishlist.splice(idx, 1);
    showToast('♡ Retiré de la wishlist');
  }
  localStorage.setItem('wish', JSON.stringify(wishlist));
  updateWishCount();
  renderProducts();
  renderHomeProducts();
  if (document.getElementById('wishlist-grid')) renderWishlist();
}

function updateWishCount() {
  const badge = document.getElementById('wish-count');
  badge.textContent = wishlist.length;
  badge.style.display = wishlist.length ? 'flex' : 'none';
}

function renderWishlist() {
  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  const items = products.filter(p => wishlist.includes(p.id));
  if (!items.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  grid.innerHTML = items.map(p => productCard(p)).join('');
}

function wishFromModal() {
  if (currentProductIndex !== null) {
    const p = products.find(x => x.id === currentProductIndex);
    if (p) {
      toggleWish({ stopPropagation: ()=>{} }, p.id);
      document.getElementById('modal-wish-btn').textContent = wishlist.includes(p.id) ? '♥ Dans Wishlist' : '♡ Wishlist';
    }
  }
}

// ======== PRODUCT MODAL ========
function openProduct(id) {
  const p = products.find(x => x.id == id);
  if (!p) return;
  currentProductIndex = p.id;
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-img').alt = p.name;
  document.getElementById('modal-cat').textContent = p.cat;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-price').textContent = p.price;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-weight').textContent = p.weight;
  document.getElementById('modal-gold').textContent = p.gold;
  document.getElementById('modal-cat2').textContent = p.cat;
  document.getElementById('modal-ref').textContent = p.ref;
  document.getElementById('modal-wa-btn').href = waLink(p);
  document.getElementById('modal-wish-btn').textContent = wishlist.includes(p.id) ? '♥ Dans Wishlist' : '♡ Wishlist';
  
  const availBadge = document.getElementById('modal-avail-badge');
  const availDot = document.getElementById('modal-avail-dot');
  const availText = document.getElementById('modal-avail-text');
  if (availBadge) {
    if (p.available) {
      availBadge.style.background = 'rgba(46,204,113,0.1)';
      availBadge.style.color = 'var(--whatsapp)';
      availDot.style.background = 'var(--whatsapp)';
      availText.textContent = 'En Stock';
    } else {
      availBadge.style.background = 'rgba(231,76,60,0.1)';
      availBadge.style.color = '#e74c3c';
      availDot.style.background = '#e74c3c';
      availText.textContent = 'Rupture';
    }
  }

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  addRecent(p.id);
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-overlay') || e.target.classList.contains('modal-close')) {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ======== RECENTLY VIEWED ========
function addRecent(id) {
  recentlyViewed = recentlyViewed.filter(x => x !== id);
  recentlyViewed.unshift(id);
  if (recentlyViewed.length > 8) recentlyViewed.pop();
  localStorage.setItem('recent', JSON.stringify(recentlyViewed));
}

// ======== TOAST ========
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ======== NOTIFICATION ========
function showNotif(title, msg) {
  document.getElementById('notif-title').textContent = title;
  document.getElementById('notif-msg').textContent = msg;
  const n = document.getElementById('notif');
  n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 3500);
}

// ======== FAQ ========
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ======== CONTACT FORM ========
function submitForm() {
  showNotif('Message Envoyé ✓', 'Nous vous répondrons dans les plus brefs délais!');
}

function subscribeNewsletter() {
  showNotif('Inscription Confirmée ✓', 'Merci! Vous recevrez nos meilleures offres.');
}

// ======== SCROLL REVEAL ========
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => obs.observe(el));
}

// ======== ADMIN PANEL ========
function openAdmin() {
  const overlay = document.getElementById('admin-overlay');
  overlay.classList.add('open');
  if (adminLoggedIn) {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'flex';
    renderAdminDashboard();
  }
}

function closeAdmin() {
  document.getElementById('admin-overlay').classList.remove('open');
}

function adminLogin() {
  const user = document.getElementById('admin-user').value;
  const pass = document.getElementById('admin-pass').value;
  if (user === 'said' && pass === 'hbibiaymen') {
    adminLoggedIn = true;
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'flex';
    renderAdminDashboard();
  } else {
    showToast('❌ Identifiants incorrects');
  }
}

function adminLogout() {
  adminLoggedIn = false;
  document.getElementById('admin-panel').style.display = 'none';
  document.getElementById('admin-login').style.display = 'flex';
  document.getElementById('admin-overlay').classList.remove('open');
}

function adminTab(tab, el) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  if (el) el.classList.add('active');

  if (tab === 'dashboard') renderAdminDashboard();
  if (tab === 'products-list') renderAdminProductsList();
  if (tab === 'add-product') { resetForm(); document.getElementById('form-title').textContent = 'Ajouter un Produit'; }
  if (tab === 'categories') renderCategories();
}

function renderAdminDashboard() {
  const total = products.length;
  const avail = products.filter(p => p.available).length;
  const cats = [...new Set(products.map(p => p.cat))].length;
  const stats = document.getElementById('admin-stats');
  stats.innerHTML = `
    <div class="admin-stat"><div class="admin-stat-num">${total}</div><div class="admin-stat-label">Total Produits</div></div>
    <div class="admin-stat"><div class="admin-stat-num">${avail}</div><div class="admin-stat-label">Disponibles</div></div>
    <div class="admin-stat"><div class="admin-stat-num">${cats}</div><div class="admin-stat-label">Catégories</div></div>
    <div class="admin-stat"><div class="admin-stat-num">${wishlist.length}</div><div class="admin-stat-label">Wishlist</div></div>
  `;
  const recent = products.slice(0, 5);
  document.getElementById('admin-recent').innerHTML = adminTableHTML(recent);
}

function renderAdminProductsList() {
  document.getElementById('admin-all-products').innerHTML = adminTableHTML(products);
}

function adminTableHTML(list) {
  return `<thead><tr><th>Image</th><th>Nom</th><th>Catégorie</th><th>Poids</th><th>Prix</th><th>Disponible</th><th>Actions</th></tr></thead>
  <tbody>${list.map(p => `<tr>
    <td><img src="${p.img}" alt="${p.name}"></td>
    <td style="color:var(--ivory);font-weight:500">${p.name}</td>
    <td>${p.cat}</td>
    <td>${p.weight}</td>
    <td style="color:var(--gold)">${p.price}</td>
    <td><span class="admin-avail"><span class="admin-avail-dot ${p.available?'yes':'no'}"></span>${p.available?'Oui':'Non'}</span></td>
    <td style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-dark" style="padding:6px 14px;font-size:9px" onclick="editProduct('${p.id}')">Modifier</button>
      <button class="btn btn-dark" style="padding:6px 14px;font-size:9px;border-color:#e74c3c;color:#e74c3c" onclick="deleteProduct('${p.id}')">Supprimer</button>
      <button class="btn btn-dark" style="padding:6px 14px;font-size:9px" onclick="toggleAvail('${p.id}')">${p.available?'Désactiver':'Activer'}</button>
    </td>
  </tr>`).join('')}</tbody>`;
}

function editProduct(productId) {
  const p = products.find(x => x.id == productId);
  if (!p) return;
  document.getElementById('edit-id').value = p.id;
  document.getElementById('f-name').value = p.name;
  document.getElementById('f-cat').value = p.cat;
  document.getElementById('f-weight').value = p.weight;
  document.getElementById('f-gold').value = p.gold;
  document.getElementById('f-price').value = p.price;
  document.getElementById('f-badge').value = p.badge;
  document.getElementById('f-desc').value = p.desc;
  document.getElementById('f-img').value = '';
  uploadedImageBase64 = p.img;
  document.getElementById('f-featured').checked = p.featured;
  document.getElementById('f-avail').checked = p.available;
  document.getElementById('form-title').textContent = 'Modifier le Produit';
  adminTab('add-product', document.querySelector('.admin-nav-item:nth-child(4)'));
}

function deleteProduct(productId) {
  if (!confirm('Supprimer ce produit?')) return;
  products = products.filter(p => p.id != productId);
  localStorage.setItem('products', JSON.stringify(products));
  showToast('Produit supprimé');
  renderAdminProductsList();
  renderAdminDashboard();
  if (document.getElementById('home-products')) renderHomeProducts();
  if (document.getElementById('products-grid')) renderProducts();
}

function toggleAvail(productId) {
  const p = products.find(x => x.id == productId);
  if (p) p.available = !p.available;
  localStorage.setItem('products', JSON.stringify(products));
  renderAdminProductsList();
  showToast(`Produit ${p.available ? 'activé' : 'désactivé'}`);
  if (document.getElementById('home-products')) renderHomeProducts();
  if (document.getElementById('products-grid')) renderProducts();
}

function saveProduct() {
  const editIdVal = document.getElementById('edit-id').value;
  let editId = editIdVal ? (isNaN(editIdVal) ? editIdVal : Number(editIdVal)) : null;

  const prod = {
    id: editId || nextId++,
    name: document.getElementById('f-name').value || 'Nouveau Bijou',
    cat: document.getElementById('f-cat').value,
    weight: document.getElementById('f-weight').value || '5g',
    gold: document.getElementById('f-gold').value,
    price: document.getElementById('f-price').value || '1 000 MAD',
    badge: document.getElementById('f-badge').value,
    desc: document.getElementById('f-desc').value || 'Superbe bijou en or.',
    img: uploadedImageBase64 || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    featured: document.getElementById('f-featured').checked,
    available: document.getElementById('f-avail').checked,
    ref: 'BA-' + String(editId || nextId).padStart(3,'0')
  };
  if (editId) {
    const idx = products.findIndex(p => p.id == editId);
    if (idx > -1) {
      products[idx] = prod;
    } else {
      products.push(prod);
    }
    showToast('✓ Produit modifié');
  } else {
    products.push(prod);
    showToast('✓ Produit ajouté');
  }
  localStorage.setItem('products', JSON.stringify(products));
  resetForm();
  adminTab('products-list', document.querySelector('.admin-nav-item:nth-child(3)'));
  if (document.getElementById('home-products')) renderHomeProducts();
  if (document.getElementById('products-grid')) renderProducts();
}

function resetForm() {
  document.getElementById('edit-id').value = '';
  document.getElementById('f-name').value = '';
  document.getElementById('f-weight').value = '';
  document.getElementById('f-price').value = '';
  document.getElementById('f-badge').value = '';
  document.getElementById('f-desc').value = '';
  document.getElementById('f-img').value = '';
  uploadedImageBase64 = '';
  document.getElementById('f-featured').checked = false;
  document.getElementById('f-avail').checked = true;
  document.getElementById('form-title').textContent = 'Ajouter un Produit';
}

function renderCategories() {
  const cats = ['Bagues', 'Colliers', 'Bracelets', 'Boucles', 'Sets', 'Mariage', 'Lingots'];
  const emojis = { Bagues:'💍', Colliers:'📿', Bracelets:'✨', Boucles:'⭐', Sets:'👑', Mariage:'💒', Lingots:'🏅' };
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = cats.map(c => {
    const count = products.filter(p => p.cat === c).length;
    return `<div class="value-card" style="text-align:center">
      <div class="value-icon">${emojis[c]||'💎'}</div>
      <h3 style="font-size:18px">${c}</h3>
      <p style="margin-top:8px"><span style="font-family:var(--font-display);font-size:32px;color:var(--gold)">${count}</span><br><span style="font-size:11px;letter-spacing:1px;text-transform:uppercase">produits</span></p>
    </div>`;
  }).join('');
}

// ======== KEYBOARD CLOSE ========
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    if (document.getElementById('admin-overlay').classList.contains('open')) closeAdmin();
  }
});

// ======== INIT ========
initPage();

// Prevent modal close when clicking inside

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedImageBase64 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
