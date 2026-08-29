/* =============================================================
   render.js — branche les données de data.js sur le HTML.

   Chaque conteneur porte un attribut `data-slot`. Ce script le
   remplit, puis gère les deux seules interactions de la page :
   filtrer par verbe, déplier une entrée.
   ============================================================= */

(function () {
  'use strict';

  const slot = n => document.querySelector(`[data-slot="${n}"]`);
  const esc = s => String(s ?? '').replace(/[&<>"]/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function fill(nom, html) {
    const el = slot(nom);
    if (el) el.innerHTML = html;
  }

  const VERBE = Object.fromEntries(SITE.verbes.map(v => [v.cle, v]));

  /* ---------------------------------------------------------
     1. EN-TÊTE
     --------------------------------------------------------- */
  const id = SITE.identite;
  fill('enseigne', esc(id.enseigne));
  fill('periode', esc(id.periode));
  fill('lieu', esc(id.lieu));
  fill('prenom', esc(id.prenom));
  fill('nom', esc(id.nom));
  fill('statut', id.statut.map(esc).join('<br>'));
  fill('pitch', esc(id.pitch));
  fill('maj', esc(id.misAJour));

  /* ---------------------------------------------------------
     2. LE REGISTRE
     Trié par année décroissante ; l'ordre du fichier départage
     les entrées d'une même année.
     --------------------------------------------------------- */
  // Tri : année décroissante, puis date précise décroissante. Une entrée sans
  // date (un mandat « en cours », un programme) se range après celles de son
  // année qui en ont une ; l'ordre du fichier départage le reste.
  const cleDate = e => e.date || `${e.annee}-00-00`;

  const entrees = SITE.registre
    .map((e, rang) => ({ ...e, rang }))
    .sort((a, b) =>
      b.annee - a.annee ||
      cleDate(b).localeCompare(cleDate(a)) ||
      a.rang - b.rang);

  let filtreActif = null;   // null = tout afficher
  let toutAfficher = false; // false = seulement les cinq dernières années

  const ANNEE_MAX = Math.max(...entrees.map(e => e.annee));
  const SEUIL = ANNEE_MAX - 4;   // cinq années glissantes, bornes comprises

  /* Replie les entrées d'une même série sous une bande unique. La liste
     étant déjà triée, la première rencontrée est la plus récente : c'est
     elle qui donne sa date au groupe. */
  function grouper(liste) {
    const sortie = [], ouverts = new Map();
    for (const e of liste) {
      const def = e.serie && SITE.series && SITE.series[e.serie];
      if (!def) { sortie.push(e); continue; }
      if (ouverts.has(e.serie)) { ouverts.get(e.serie).membres.push(e); continue; }
      const groupe = { groupe: true, ...def, verbe: e.verbe, annee: e.annee,
                       date: e.date, membres: [e] };
      ouverts.set(e.serie, groupe);
      sortie.push(groupe);
    }
    return sortie;
  }

  function ligne(e, numero) {
    const v = VERBE[e.verbe];
    const detail = e.groupe || e.detail || e.contexte || e.lien;

    // Un groupe annonce son volume et sa période à la place de l'année seule.
    let annee = `<time class="entree__annee" datetime="${esc(e.date || e.annee)}">${esc(e.annee)}</time>`;
    let meta = esc(e.meta);
    if (e.groupe) {
      const annees = e.membres.map(m => m.annee);
      const de = Math.min(...annees), a = Math.max(...annees);
      annee = `<span class="entree__annee entree__annee--serie">${de === a ? de : de + '–' + a}</span>`;
      meta = `${esc(e.meta)} <span class="entree__compte">${e.membres.length}</span>`;
    }

    return `
      <li class="entree${e.groupe ? ' entree--serie' : ''}" data-verbe="${esc(e.verbe)}"
          style="--fond:${v.couleur}; --encre:${v.encre}">
        <button class="entree__bande" type="button" aria-expanded="false"
                ${detail ? '' : 'disabled'}>
          <span class="entree__numero">${String(numero).padStart(2, '0')}</span>
          ${annee}
          <span class="entree__titre">${esc(e.titre)}</span>
          <span class="entree__meta">${meta}</span>
          ${detail ? '<span class="entree__plus" aria-hidden="true"></span>' : ''}
        </button>
        ${detail ? (e.groupe ? panneauSerie(e) : panneau(e)) : ''}
      </li>`;
  }

  /* Panneau d'une série : le texte de cadrage, puis chaque édition datée.
     Le nom de la série chapeaute déjà la liste : inutile de le répéter
     à chaque ligne, ni de redonner un libellé identique à celui du groupe. */
  function panneauSerie(g) {
    const lignes = g.membres.map(m => {
      let titre = m.titre;
      if (titre.startsWith(g.titre)) {
        titre = titre.slice(g.titre.length).replace(/^\s*[—–-]\s*/, '') || m.titre;
        titre = titre.charAt(0).toUpperCase() + titre.slice(1);
      }
      const meta = (m.meta && m.meta !== g.meta) ? m.meta : '';
      return `
      <li class="edition">
        <time class="edition__date" datetime="${esc(m.date)}">${esc(m.contexte || m.annee)}</time>
        <span class="edition__titre">${m.lien
          ? `<a href="${esc(m.lien)}" target="_blank" rel="noopener">${esc(titre)}</a>`
          : esc(titre)}${meta ? ` <span class="edition__meta">${esc(meta)}</span>` : ''}</span>
      </li>`;
    }).join('');

    return `
      <div class="panneau" hidden>
        <div class="panneau__interieur panneau__interieur--serie">
          ${g.detail ? `<p class="panneau__detail">${esc(g.detail)}</p>` : ''}
          <ol class="editions">${lignes}</ol>
        </div>
      </div>`;
  }

  function panneau(e) {
    const cote = [
      e.contexte
        ? `<p class="panneau__contexte">
             <span class="panneau__label">${esc(e.contexteLabel || 'Contexte')}</span>
             ${esc(e.contexte)}
           </p>` : '',
      e.lien
        ? `<a class="panneau__lien" href="${esc(e.lien)}" target="_blank" rel="noopener">
             ${esc(e.lienLabel || 'Voir')}<span aria-hidden="true"> ↗</span>
           </a>` : ''
    ].join('');

    return `
      <div class="panneau" hidden>
        <div class="panneau__interieur">
          ${e.detail ? `<p class="panneau__detail">${esc(e.detail)}</p>` : '<p></p>'}
          <div class="panneau__cote">${cote}</div>
        </div>
      </div>`;
  }

  /** Redessine la liste selon le filtre courant, et renumérote. */
  function dessinerRegistre() {
    const visibles = filtreActif
      ? entrees.filter(e => e.verbe === filtreActif)
      : entrees;

    // On groupe d'abord, on filtre par date ensuite : une série repliée
    // garde ainsi toutes ses éditions, même celles d'avant la fenêtre.
    const bandes = grouper(visibles);
    const recentes = bandes.filter(b => b.annee >= SEUIL);
    const anciennes = bandes.filter(b => b.annee < SEUIL);
    const affichees = toutAfficher ? bandes : recentes;

    let html = affichees.map((e, i) => ligne(e, i + 1)).join('');

    if (!toutAfficher && anciennes.length) {
      // Le décompte annoncé porte sur les entrées réelles, pas sur les bandes.
      const cachees = anciennes.reduce((n, b) => n + (b.membres ? b.membres.length : 1), 0);
      const de = Math.min(...anciennes.map(b => b.annee));
      html += `
        <li class="entree entree--plus">
          <button class="deplier" type="button" data-slot="deplier">
            Voir les années antérieures
            <span class="deplier__compte">${cachees} entrées, ${de} à ${SEUIL - 1}</span>
          </button>
        </li>`;
    }

    fill('registre', html);
    fill('compte', `${visibles.length} sur ${entrees.length}`);
    dessinerHistogramme(visibles);

    const reset = slot('reset');
    if (reset) reset.hidden = !filtreActif;
  }

  /* ---------------------------------------------------------
     3. TUILES DE COMPTAGE — elles font aussi office de filtres
     --------------------------------------------------------- */
  function dessinerTuiles() {
    fill('tuiles', SITE.verbes.map(v => {
      const n = entrees.filter(e => e.verbe === v.cle).length;
      const actif = filtreActif === v.cle;
      const eteint = filtreActif && !actif;
      return `
        <button class="tuile${actif ? ' tuile--active' : ''}${eteint ? ' tuile--eteinte' : ''}"
                type="button" data-verbe="${esc(v.cle)}" aria-pressed="${actif}"
                style="--fond:${v.couleur}; --encre:${v.encre}">
          <span class="tuile__nombre">${n}</span>
          <span class="tuile__label">${esc(v.label)}</span>
          <span class="tuile__action">${actif ? 'Tout afficher' : 'Filtrer'}</span>
        </button>`;
    }).join(''));
  }

  /* ---------------------------------------------------------
     4. HISTOGRAMME — une barre par année, de la plus ancienne
        à la plus récente, y compris les années vides.
     --------------------------------------------------------- */
  function dessinerHistogramme(visibles) {
    const annees = entrees.map(e => e.annee);
    const debut = Math.min(...annees), fin = Math.max(...annees);

    const comptes = {};
    visibles.forEach(e => { comptes[e.annee] = (comptes[e.annee] || 0) + 1; });
    const max = Math.max(1, ...Object.values(comptes));

    let barres = '';
    for (let a = debut; a <= fin; a++) {
      const n = comptes[a] || 0;
      // Une année à une seule entrée doit rester lisible face à une année
      // très chargée : on réserve 16 % de hauteur au simple fait d'exister.
      const h = n ? 16 + Math.round(n / max * 84) : 0;
      barres += `
        <span class="barre" title="${a} : ${n} ${n > 1 ? 'entrées' : 'entrée'}">
          <span class="barre__corps${n ? '' : ' barre__corps--vide'}" style="height:${h}%"></span>
          <span class="barre__annee">'${String(a).slice(2)}</span>
        </span>`;
    }
    fill('histogramme', barres);

    // Sous filtre, les barres prennent la couleur du verbe : l'histogramme
    // dit alors « voilà quand j'ai écrit ». Sans filtre elles comptent les
    // trois verbes à la fois, donc aucune des trois couleurs ne conviendrait :
    // on passe à l'encre, qui n'appartient à aucun d'eux.
    const h = slot('histogramme');
    if (h) h.style.setProperty('--couleur-barre',
      filtreActif ? VERBE[filtreActif].couleur : 'var(--encre)');
  }

  /* ---------------------------------------------------------
     5. PARCOURS
     --------------------------------------------------------- */
  fill('parcours', SITE.parcours.map(p => `
    <li class="poste">
      <span class="poste__periode">${esc(p.periode)}</span>
      <span class="poste__intitule">${esc(p.poste)}</span>
      <span class="poste__structure">${esc(p.structure)}</span>
    </li>`).join(''));

  // `SITE.formation` n'est plus rendu sur cette page — il alimentera la vue CV.
  // `fill` retire de lui-même un conteneur absent, rien d'autre à faire ici.

  /* ---------------------------------------------------------
     6. PIED DE PAGE
     --------------------------------------------------------- */
  const c = SITE.contact;
  fill('appel', c.appel.map(esc).join('<br>'));

  const adresse = `${c.emailPrincipal.user}@${c.emailPrincipal.domaine}`;
  const boutonMail = slot('mail');
  if (boutonMail) {
    boutonMail.textContent = adresse;
    boutonMail.href = 'mailto:' + adresse;
  }

  // Le même contact, repris en haut de page à hauteur du nom : on ne
  // devrait pas avoir à dérouler tout le registre pour trouver l'adresse.
  const lienDoc = d => {
    const externe = /^https?:/.test(d.url);
    return `<li><a href="${esc(d.url)}"${externe ? ' target="_blank" rel="noopener"' : ''}>${esc(d.nom)}</a></li>`;
  };

  fill('contact-haut', `
    <a class="contact-haut__mail" href="mailto:${esc(adresse)}">${esc(adresse)}</a>
    <ul class="contact-haut__liens">
      ${c.liens.map(l =>
        `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.nom)}</a></li>`).join('')}
    </ul>
    <ul class="contact-haut__docs">
      ${(c.documents || []).map(lienDoc).join('')}
    </ul>`);

  const secondaire = `${c.emailSecondaire.user}@${c.emailSecondaire.domaine}`;
  const tel = c.telephone;
  const telLisible = tel ? `${tel.indicatif} ${tel.reste.join(' ')}` : '';
  const telBrut = tel ? tel.indicatif + tel.reste.join('') : '';

  fill('liens',
    (tel ? `<li><a href="tel:${esc(telBrut)}">${esc(telLisible)}</a></li>` : '') +
    c.liens.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.nom)}<span aria-hidden="true"> ↗</span></a></li>`).join('') +
    (c.documents || []).map(d => {
      const externe = /^https?:/.test(d.url);
      return `<li><a href="${esc(d.url)}"${externe ? ' target="_blank" rel="noopener"' : ''}>${esc(d.nom)}${externe ? '<span aria-hidden="true"> ↗</span>' : ''}</a></li>`;
    }).join('') +
    `<li><a href="mailto:${esc(secondaire)}">${esc(secondaire)}</a></li>`);

  fill('mentions', esc(c.mentions));

  /* ---------------------------------------------------------
     7. INTERACTIONS
     --------------------------------------------------------- */
  document.addEventListener('click', e => {

    // Filtrer via une tuile — un second clic sur la tuile active désactive.
    const tuile = e.target.closest('.tuile');
    if (tuile) {
      const v = tuile.dataset.verbe;
      filtreActif = (filtreActif === v) ? null : v;
      dessinerTuiles();
      dessinerRegistre();
      return;
    }

    // Réinitialiser le filtre.
    if (e.target.closest('[data-slot="reset"]')) {
      filtreActif = null;
      dessinerTuiles();
      dessinerRegistre();
      return;
    }

    // Sortir de la fenêtre des cinq dernières années.
    if (e.target.closest('[data-slot="deplier"]')) {
      toutAfficher = true;
      dessinerRegistre();
      return;
    }

    // Déplier / replier une entrée.
    const bande = e.target.closest('.entree__bande');
    if (bande && !bande.disabled) {
      const ouvert = bande.getAttribute('aria-expanded') === 'true';
      bande.setAttribute('aria-expanded', String(!ouvert));
      bande.closest('.entree').classList.toggle('entree--ouverte', !ouvert);
      const p = bande.parentElement.querySelector('.panneau');
      if (p) p.hidden = ouvert;
    }
  });

  /* --- premier rendu --- */
  dessinerTuiles();
  dessinerRegistre();
})();
