# sebreinders.github.io

Site personnel de Sébastien Reinders. Un **registre public** : une seule liste,
datée, antichronologique, où se mêlent trois natures d'activité — ce que j'ai
dit, ce que j'ai écrit, ce que j'ai fait. Pas de hiérarchie entre elles.

En ligne (une fois publié) : <https://sebreinders.github.io/>

## Comment mettre le site à jour

**Tout le contenu est dans `data.js`. C'est le seul fichier à éditer.**

Pour ajouter quelque chose : une entrée de plus dans le tableau `registre`.
Les compteurs, l'histogramme, les filtres et la numérotation se recalculent seuls.

```js
{ annee: 2026, verbe: "parlé",
  titre: "Le titre affiché sur la bande",
  meta: "Type · Lieu · Volume",          // la mention discrète à droite
  detail: "Le texte qui apparaît au dépliage.",
  contexteLabel: "Date", contexte: "12 novembre 2026",
  lien: "https://…", lienLabel: "Voir le support" },   // les deux sont facultatifs
```

`verbe` vaut **`"parlé"`**, **`"écrit"`** ou **`"fait"`** — rien d'autre. C'est lui
qui donne sa couleur à la bande :

| verbe | couleur | pour quoi |
|---|---|---|
| `parlé` | vert `#0E8B4B` | conférences, ateliers, cours, tables rondes |
| `écrit` | orange `#E4572E` | articles, tribunes, publications |
| `fait` | jaune `#F2C400` | programmes, dispositifs, mandats, outils publiés |

L'ordre dans le fichier n'a pas d'importance : le tri se fait sur `annee`
(décroissante), et l'ordre du fichier ne sert qu'à départager une même année.

### Ajouter un fichier à télécharger

1. Déposer le fichier dans `fichiers/`.
2. Le référencer depuis l'entrée concernée : `lien: "fichiers/mon-support.pdf"`.

### Les articles Medium

Ils se retrouvent tous dans le flux <https://medium.com/feed/@sebastienreinders> —
pratique pour vérifier titres, dates et URL exactes avant de les recopier.

## Organisation des fichiers

| Fichier | Rôle |
|---|---|
| `data.js` | **Tout le contenu.** Source unique de vérité. |
| `index.html` | La structure. Aucun contenu en dur. |
| `render.js` | Branche les données sur la structure, gère filtre et dépliage. |
| `style.css` | L'habillage, d'après le mockup « Portfolio v3 ». |
| `fichiers/bio.html` | Bio courte / longue avec bouton « copier », pour les organisateurs. |

## Le design

D'après le mockup Claude Design « Portfolio v3 ».

- **Typographie** — Archivo (Google Fonts), 400 à 900. Le nom en 900, très serré.
- **Palette** — vert `#0E8B4B`, orange-brique `#E4572E`, jaune `#F2C400`.
  Neutres : encre `#0B0B0F`, crème `#F5F2EA`, gris `#8A8A96`.
- Les trois couleurs ne sont pas décoratives : **elles portent l'information**.
  Elles arrivent par les variables `--fond` et `--encre` posées sur chaque élément
  par `render.js`, à partir du tableau `verbes` de `data.js`. Changer une couleur
  là-bas la change partout — tuiles, bandes, histogramme.

## ⚠️ Le dossier `/ressources/`

L'adresse <https://sebreinders.github.io/ressources/> est servie par un **autre
dépôt** : [`sebreinders/ressources`](https://github.com/sebreinders/ressources).

Il ne faut donc **pas** créer de dossier `ressources/` ici : il serait masqué par
l'autre dépôt et resterait inaccessible en ligne. Les fichiers propres à ce
site-ci vont dans `fichiers/`.

## Tester en local

Ouvrir `index.html` directement dans le navigateur fonctionne. Pour être au plus
près du rendu en ligne :

```bash
python3 -m http.server 8765
```

puis <http://localhost:8765/>.
