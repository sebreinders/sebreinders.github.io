/* =============================================================
   cv.js — la vue CV, alimentée par les mêmes données que le registre.

   Rien n'est ressaisi ici : identité, bio, parcours, formation et
   registre viennent tous de data.js. Le CV n'en fait qu'une lecture
   synthétique — les séries en une ligne, puis les trois dernières
   années en détail.
   ============================================================= */

(function () {
  'use strict';

  const slot = n => document.querySelector(`[data-slot="${n}"]`);
  const esc = s => String(s ?? '').replace(/[&<>"]/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fill = (n, html) => { const el = slot(n); if (el) el.innerHTML = html; };

  const id = SITE.identite;
  const c = SITE.contact;

  /* ---------- identité ---------- */
  fill('nom', `${esc(id.prenom)} ${esc(id.nom)}`);
  // `statut` porte la fonction et l'employeur, une ligne chacun ; la
  // troisième ligne (la disponibilité) n'a pas sa place sous le nom.
  fill('fonction', id.statut.slice(0, 2).map(l => esc(l.replace(/\.$/, ''))).join(' · '));
  fill('maj', esc(id.misAJour));
  fill('mentions', esc(c.mentions));

  const adresse = `${c.emailPrincipal.user}@${c.emailPrincipal.domaine}`;
  fill('contact',
    `<li><a href="mailto:${esc(adresse)}">${esc(adresse)}</a></li>` +
    c.liens.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.nom)}</a></li>`).join(''));

  /* ---------- bio et formation ---------- */
  fill('bio', SITE.bio.longue.map(p => `<p>${esc(p)}</p>`).join(''));

  fill('formation', SITE.formation.map(f => `
    <li class="cv__item">
      <span class="cv__quand">${esc(f.lieu)}</span>
      <span class="cv__quoi">
        <strong>${esc(f.titre)}</strong>
        ${f.precision ? `<span class="cv__precision">${esc(f.precision)}</span>` : ''}
      </span>
    </li>`).join(''));

  fill('parcours', SITE.parcours.map(p => `
    <li class="cv__item${p.actuel ? ' cv__item--actuel' : ''}">
      <span class="cv__quand">${esc(p.periode)}</span>
      <span class="cv__quoi">
        <strong>${esc(p.poste)}</strong>
        <span class="cv__precision">${esc(p.structure)}</span>
        ${p.detail ? `<span class="cv__detail">${esc(p.detail)}</span>` : ''}
      </span>
    </li>`).join(''));

  /* ---------- lecture du registre ---------- */
  const registre = SITE.registre;

  fill('chiffres', SITE.verbes.map(v => {
    const n = registre.filter(e => e.verbe === v.cle).length;
    return `<li class="cv__chiffre" style="--fond:${v.couleur}; --encre:${v.encre}">
      <span class="cv__nombre">${n}</span>
      <span class="cv__label">${esc(v.label)}</span>
    </li>`;
  }).join(''));

  // Les séries disent la régularité mieux qu'une liste d'éditions.
  const parSerie = {};
  registre.forEach(e => { if (e.serie) (parSerie[e.serie] = parSerie[e.serie] || []).push(e); });

  fill('series', Object.entries(parSerie)
    .map(([cle, membres]) => {
      const def = (SITE.series || {})[cle] || {};
      const annees = membres.map(m => m.annee);
      return { def, membres, de: Math.min(...annees), a: Math.max(...annees) };
    })
    .sort((x, y) => y.a - x.a || y.membres.length - x.membres.length)
    .map(s => `
      <li class="cv__item">
        <span class="cv__quand">${s.de === s.a ? s.de : s.de + ' – ' + s.a}</span>
        <span class="cv__quoi">
          <strong>${esc(s.def.titre || '')}</strong>
          <span class="cv__precision">${esc(s.def.meta || '')} · ${s.membres.length} ${s.membres.length > 1 ? 'éditions' : 'édition'}</span>
        </span>
      </li>`).join(''));

  // Détail des trois dernières années, hors séries pour éviter les doublons.
  const anneeMax = Math.max(...registre.map(e => e.annee));
  const recent = registre
    .filter(e => !e.serie && e.annee >= anneeMax - 2)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  fill('recent', recent.map(e => `
    <li class="cv__item cv__item--${esc(e.verbe)}">
      <span class="cv__quand">${esc(e.contexte || e.annee)}</span>
      <span class="cv__quoi">
        <strong>${e.lien
          ? `<a href="${esc(e.lien)}" target="_blank" rel="noopener">${esc(e.titre)}</a>`
          : esc(e.titre)}</strong>
        <span class="cv__precision">${esc(e.meta)}</span>
      </span>
    </li>`).join(''));
})();
