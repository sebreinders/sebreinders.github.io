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
  const entrees = SITE.registre
    .map((e, rang) => ({ ...e, rang }))
    .sort((a, b) => b.annee - a.annee || a.rang - b.rang);

  let filtreActif = null;   // null = tout afficher

  function ligne(e, numero) {
    const v = VERBE[e.verbe];
    const detail = e.detail || e.contexte || e.lien;

    return `
      <li class="entree" data-verbe="${esc(e.verbe)}"
          style="--fond:${v.couleur}; --encre:${v.encre}">
        <button class="entree__bande" type="button" aria-expanded="false"
                ${detail ? '' : 'disabled'}>
          <span class="entree__numero">${String(numero).padStart(2, '0')}</span>
          <span class="entree__annee">${esc(e.annee)}</span>
          <span class="entree__titre">${esc(e.titre)}</span>
          <span class="entree__meta">${esc(e.meta)}</span>
          ${detail ? '<span class="entree__plus" aria-hidden="true"></span>' : ''}
        </button>
        ${detail ? panneau(e) : ''}
      </li>`;
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

    fill('registre', visibles.map((e, i) => ligne(e, i + 1)).join(''));
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

    // Les barres prennent la couleur du verbe filtré : l'histogramme dit
    // alors « voilà quand j'ai écrit », pas seulement « voilà quand ».
    const h = slot('histogramme');
    if (h) h.style.setProperty('--couleur-barre',
      filtreActif ? VERBE[filtreActif].couleur : SITE.verbes[0].couleur);
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

  fill('formation', SITE.formation.map(f => `
    <li class="diplome">
      <span class="diplome__titre">${esc(f.titre)}</span>
      <span class="diplome__lieu">${f.precision ? esc(f.precision) + ' · ' : ''}${esc(f.lieu)}</span>
    </li>`).join(''));

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

  const secondaire = `${c.emailSecondaire.user}@${c.emailSecondaire.domaine}`;
  fill('liens',
    c.liens.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.nom)}<span aria-hidden="true"> ↗</span></a></li>`).join('') +
    `<li><a href="fichiers/bio.html">Ma bio, prête à copier</a></li>` +
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
