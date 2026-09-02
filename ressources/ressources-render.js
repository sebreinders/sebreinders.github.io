/* =============================================================
   ressources-render.js — affiche les activités de ressources.js.
   ============================================================= */

(function () {
  'use strict';

  const slot = n => document.querySelector(`[data-slot="${n}"]`);
  const esc = s => String(s ?? '').replace(/[&<>"]/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  slot('intro').textContent = RESSOURCES.intro;

  /* Un fichier vide pointe sur l'index du dossier : c'est le cas des
     outils, qui sont des pages et non des documents à télécharger. */
  function carte(dossier, f) {
    const url = f.fichier ? `${dossier}/${f.fichier}` : `${dossier}/`;
    const page = !f.fichier;
    return `
      <li class="fichier">
        <a class="fichier__lien" href="${esc(url)}"${page ? '' : ' download'}>
          <span class="fichier__type">${esc(f.type)}</span>
          <span class="fichier__nom">${esc(f.nom)}</span>
          <span class="fichier__desc">${esc(f.description)}</span>
          <span class="fichier__action">${page ? 'Ouvrir' : 'Télécharger'}</span>
        </a>
      </li>`;
  }

  slot('activites').innerHTML = RESSOURCES.activites.map(a => `
    <section class="activite">
      <header class="activite__tete">
        <h2 class="activite__titre">${esc(a.titre)}</h2>
        <p class="activite__quand">${esc(a.date)}${a.lieu ? ' · ' + esc(a.lieu) : ''}</p>
        ${a.resume ? `<p class="activite__resume">${esc(a.resume)}</p>` : ''}
      </header>
      <ul class="fichiers">${a.fichiers.map(f => carte(a.dossier, f)).join('')}</ul>
    </section>`).join('');
})();
