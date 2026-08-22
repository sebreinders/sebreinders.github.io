/* =============================================================
   data.js — source unique de vérité du site.

   Le site est un REGISTRE : une seule liste, datée, antichronologique,
   où se mêlent trois natures d'activité — ce que j'ai dit, ce que j'ai
   écrit, ce que j'ai fait. Pas de hiérarchie entre elles.

   Pour ajouter quelque chose : une entrée de plus dans `registre`.
   Rien d'autre à toucher.

   Chargé en <script> classique (pas de fetch/JSON) pour que la page
   fonctionne aussi en ouverture locale (file://), sans serveur.
   ============================================================= */

const SITE = {

  /* ---------------------------------------------------------
     1. IDENTITÉ
     Le nom est scindé : le prénom s'affiche en encre, le nom
     de famille dans la couleur d'accent.
     --------------------------------------------------------- */
  identite: {
    prenom: "Sébastien",
    nom: "Reinders",
    // Ligne d'en-tête, en petites capitales espacées.
    enseigne: "Registre public",
    periode: "2010 — 2026",
    lieu: "Wallonie",

    // Colonne de gauche, sous le nom. Une ligne par élément.
    statut: [
      "Expert senior en éducation numérique.",
      "Agence du Numérique, Wallonie.",
      "Disponible pour interventions et conférences."
    ],

    // Colonne de droite : ce que le site est.
    pitch: "Tout ce que j'ai dit, écrit et fait publiquement autour du numérique en éducation. Une seule liste, datée, sans tri favorable.",

    misAJour: "Août 2026"
  },

  /* ---------------------------------------------------------
     2. LES TROIS VERBES
     Ils pilotent les couleurs, les compteurs et les filtres.
     `encre` est la couleur du texte posé sur la couleur de fond.
     --------------------------------------------------------- */
  verbes: [
    { cle: "parlé", label: "J'ai parlé", couleur: "#0E8B4B", encre: "#FFFFFF" },
    { cle: "écrit", label: "J'ai écrit", couleur: "#E4572E", encre: "#FFFFFF" },
    { cle: "fait",  label: "J'ai fait",  couleur: "#F2C400", encre: "#0B0B0F" }
  ],

  /* ---------------------------------------------------------
     3. LE REGISTRE
     Ordre antichronologique. Une entrée =

       annee    : nombre, sert au tri et à l'histogramme
       verbe    : "parlé" | "écrit" | "fait"
       titre    : la ligne visible, en gras
       meta     : la mention discrète à droite (type · lieu · volume)
       detail   : le texte qui apparaît au dépliage
       contexteLabel / contexte : la précision en colonne de droite
       lien / lienLabel : facultatif, affiché au dépliage
     --------------------------------------------------------- */
  registre: [

    /* ----- 2026 ----- */
    { annee: 2026, verbe: "parlé",
      titre: "Politiques publiques du numérique éducatif",
      meta: "Cours · ULiège · Master Sc. Éduc.",
      detail: "Intervention annuelle dans le cours « Introduction aux Usages du Numérique en Éducation » de Jean-François Céci, en binôme sur le volet Pix. Une heure : ce que l'État peut et ne peut pas faire pour outiller une école.",
      contexteLabel: "Date", contexte: "23 septembre 2026" },

    { annee: 2026, verbe: "parlé",
      titre: "L'IA au travail : comprendre avant de décider",
      meta: "Conférence · Trivières · 20 pers.",
      detail: "Sensibilisation de l'équipe du Centre Régional d'Intégration Centre & Wallonie picarde. Objectif assumé : construire une culture commune de l'IA avant d'écrire une charte d'usage, pas l'inverse.",
      contexteLabel: "Date", contexte: "14 septembre 2026" },

    { annee: 2026, verbe: "parlé",
      titre: "Du plan d'équipement au pilotage pédagogique",
      meta: "Atelier · Louvain-la-Neuve",
      detail: "Penser le numérique à l'échelle de l'établissement : passer de l'achat de matériel à une stratégie de pilotage. Université d'été du SeGEC, journée « De la craie au cloud, l'école en mutation ».",
      contexteLabel: "Lieu", contexte: "Aula Magna, 19 août 2026",
      lien: "https://sebreinders.github.io/ressources/", lienLabel: "Ressources et inventaire de l'atelier" },

    { annee: 2026, verbe: "parlé",
      titre: "Intelligences artificielles : comprendre les impacts pour agir avec discernement",
      meta: "Atelier · Louvain-la-Neuve",
      detail: "Second atelier de la même journée, destiné aux directions et aux cadres de l'enseignement catholique.",
      contexteLabel: "Lieu", contexte: "Aula Magna, 19 août 2026" },

    { annee: 2026, verbe: "fait",
      titre: "Ressources publiques d'intervention",
      meta: "Site · en ligne",
      detail: "Un dépôt ouvert où sont déposés les supports, les mémos et les outils utilisés en atelier — dont un inventaire du parc numérique que les écoles peuvent reprendre tel quel.",
      contexteLabel: "Statut", contexte: "En ligne, mis à jour au fil des interventions",
      lien: "https://sebreinders.github.io/ressources/", lienLabel: "Voir le dépôt" },

    { annee: 2026, verbe: "parlé",
      titre: "ValoRec 240 — valoriser la recherche en 240 secondes",
      meta: "Table ronde · ULiège",
      detail: "Festival de médiation et de communication visuelle de la recherche, Faculté de Psychologie, Logopédie et Sciences de l'Éducation.",
      contexteLabel: "Date", contexte: "13 mai 2026" },

    { annee: 2026, verbe: "parlé",
      titre: "LUDOVIA#CH",
      meta: "Colloque · Suisse",
      detail: "Édition suisse du colloque, sur le thème « Repenser l'apprentissage à l'ère de l'IA et de l'innovation ».",
      contexteLabel: "Date", contexte: "21–22 avril 2026" },

    { annee: 2026, verbe: "fait",
      titre: "Jury du Fonds Digital for Youth",
      meta: "Mandat · Fondation Roi Baudouin",
      detail: "Évaluation des dossiers de l'appel annuel et participation aux délibérations. Le fonds soutient les initiatives numériques destinées aux enfants et aux jeunes.",
      contexteLabel: "Rôle", contexte: "Membre du jury" },

    { annee: 2026, verbe: "parlé",
      titre: "IA4Sup — #Meeting21",
      meta: "Rencontre · en ligne",
      detail: "Échange sur l'IA dans l'enseignement supérieur.",
      contexteLabel: "Date", contexte: "Janvier 2026" },

    { annee: 2026, verbe: "écrit",
      titre: "Faut-il financer toutes les écoles de la même manière ?",
      meta: "Article · Medium",
      detail: "L'égalité de traitement budgétaire produit-elle de l'équité ? Le cas de l'encadrement différencié en Fédération Wallonie-Bruxelles.",
      contexteLabel: "Publié", contexte: "17 août 2026",
      lien: "https://medium.com/@sebastienreinders/faut-il-financer-toutes-les-%C3%A9coles-de-la-m%C3%AAme-mani%C3%A8re-49086b0a98a2", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit",
      titre: "Le cartable et le Cloud Act",
      meta: "Article · Medium",
      detail: "Qui possède l'infrastructure numérique de l'école, et ce que cela change pour les données des élèves.",
      contexteLabel: "Publié", contexte: "6 août 2026",
      lien: "https://medium.com/@sebastienreinders/le-cartable-et-le-cloud-act-a26959011cca", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit",
      titre: "L'école n'a pas besoin de Canadair, mais de stores",
      meta: "Article · Medium",
      detail: "Le bâtiment scolaire, angle mort de l'école face au dérèglement climatique.",
      contexteLabel: "Publié", contexte: "27 juillet 2026",
      lien: "https://medium.com/@sebastienreinders/l%C3%A9cole-n-a-pas-besoin-de-canadair-mais-de-stores-b877170418bd", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit",
      titre: "On a rangé le téléphone, et le débat avec",
      meta: "Article · Medium",
      detail: "Interdire le smartphone à l'école sans poser la question de l'éducation aux usages.",
      contexteLabel: "Publié", contexte: "22 juillet 2026",
      lien: "https://medium.com/@sebastienreinders/on-a-rang%C3%A9-le-t%C3%A9l%C3%A9phone-et-le-d%C3%A9bat-avec-dc2aab9a3583", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit",
      titre: "Et si l'école faisait comme Buurtzorg ?",
      meta: "Article · Medium",
      detail: "Ce que le modèle néerlandais de soins à domicile en équipes autonomes suggère à la gouvernance scolaire.",
      contexteLabel: "Publié", contexte: "12 juillet 2026",
      lien: "https://medium.com/@sebastienreinders/et-si-l%C3%A9cole-faisait-comme-buurtzorg-a21f0074b00b", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit",
      titre: "Le jour où les humains n'écrivent plus : Moltbook, ou l'Internet des agents",
      meta: "Article · Medium",
      detail: "Quand les agents conversationnels deviennent les principaux producteurs de texte en ligne.",
      contexteLabel: "Publié", contexte: "1er février 2026",
      lien: "https://medium.com/@sebastienreinders/le-jour-o%C3%B9-les-humains-n%C3%A9crivent-plus-moltbook-ou-l-internet-des-agents-6b11dfb6bce9", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "fait",
      titre: "Attestation des compétences numériques des citoyens",
      meta: "Programme · référentiel DigComp",
      detail: "Mise en place d'une attestation des compétences de base fondée sur le référentiel européen DigComp — pour que ce qu'une personne sait faire du numérique puisse enfin être reconnu ailleurs que sur parole.",
      contexteLabel: "Statut", contexte: "En cours" },

    { annee: 2026, verbe: "fait",
      titre: "Cadastres INCOR",
      meta: "Dispositif · Wallonie",
      detail: "Cadastres de l'équipement et des usages numériques dans les écoles et les opérateurs de formation. Savoir ce qui est là avant de décider quoi financer.",
      contexteLabel: "Statut", contexte: "En cours" },

    /* ----- 2025 ----- */
    { annee: 2025, verbe: "parlé",
      titre: "LUDOVIA#BE",
      meta: "Colloque · Spa",
      detail: "Colloque annuel du numérique éducatif en Belgique francophone.",
      contexteLabel: "Date", contexte: "Octobre 2025" },

    { annee: 2025, verbe: "parlé",
      titre: "Les IA au cœur de mon métier de direction et de mon management",
      meta: "Keynote · SeGEC · 100 directions",
      detail: "L'IA vue depuis le poste de direction : ce qu'elle change dans la gestion quotidienne, les garde-fous à poser, les décisions qui ne se délèguent pas.",
      contexteLabel: "Public", contexte: "Directions d'écoles" },

    { annee: 2025, verbe: "fait",
      titre: "Monitoring IT des écoles",
      meta: "Projet · accord RW-FWB",
      detail: "Construction d'un dispositif de suivi de l'équipement et de la connectivité des établissements, mené conjointement par la Région wallonne et la Fédération Wallonie-Bruxelles.",
      contexteLabel: "Statut", contexte: "En cours" },

    { annee: 2025, verbe: "écrit",
      titre: "L'école au cœur du brasier : éduquer dans un monde qui vacille",
      meta: "Article · Medium",
      detail: "Enseigner dans la polycrise : ce que l'école peut encore tenir.",
      contexteLabel: "Publié", contexte: "25 novembre 2025",
      lien: "https://medium.com/@sebastienreinders/l%C3%A9cole-au-c%C5%93ur-du-brasier-%C3%A9duquer-dans-un-monde-qui-vacille-f0c853e9ea44", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit",
      titre: "Un directeur, une IA et un café froid : mieux gérer pour mieux diriger",
      meta: "Article · Medium",
      detail: "Une journée de direction d'école, revisitée avec l'IA comme outil de gestion.",
      contexteLabel: "Publié", contexte: "4 novembre 2025",
      lien: "https://medium.com/@sebastienreinders/un-directeur-une-ia-et-un-caf%C3%A9-froid-mieux-g%C3%A9rer-pour-mieux-diriger-855bba7d91f8", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit",
      titre: "Jianwei Xun ou la tentation de l'auteur sans corps",
      meta: "Article · Medium",
      detail: "Sur le philosophe qui n'existait pas, et ce que la supercherie révèle de notre rapport aux textes.",
      contexteLabel: "Publié", contexte: "2 novembre 2025",
      lien: "https://medium.com/@sebastienreinders/jianwei-xun-ou-la-tentation-de-lauteur-sans-corps-a3e566bc88c3", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit",
      titre: "Mémoires sous IA : place à l'oral et à la promptographie",
      meta: "Article · Medium",
      detail: "Évaluer un travail de fin d'études quand l'IA rédige : déplacer la preuve vers le processus.",
      contexteLabel: "Publié", contexte: "26 juin 2025",
      lien: "https://medium.com/@sebastienreinders/m%C3%A9moires-sous-ia-place-%C3%A0-loral-et-%C3%A0-la-promptographie-b7f0e4304815", lienLabel: "Lire l'article" },

    /* ----- 2024 et avant ----- */
    { annee: 2024, verbe: "parlé",
      titre: "L'enjeu des compétences numériques",
      meta: "Présentation · Agence du Numérique",
      detail: "Présentation externe sur l'état des compétences numériques en Wallonie et les leviers publics disponibles.",
      contexteLabel: "Date", contexte: "Mars 2024" },

    { annee: 2023, verbe: "parlé",
      titre: "Pecha Kucha — DW4Edu",
      meta: "Format court · LUDOVIA#BE, Spa",
      detail: "Vingt images, vingt secondes chacune, pour présenter le programme régional d'éducation numérique.",
      contexteLabel: "Format", contexte: "Pecha Kucha" },

    { annee: 2021, verbe: "parlé",
      titre: "L'école post-Covid, plus smart qu'avant ?",
      meta: "Table ronde · Smart City Wallonia",
      detail: "Ce que la fermeture des écoles a réellement appris au système éducatif — et ce qu'il en a retenu.",
      contexteLabel: "Format", contexte: "En ligne" },

    { annee: 2019, verbe: "fait",
      titre: "LUDOVIA#BE — copilotage",
      meta: "Organisation · depuis 2019",
      detail: "Copilotage du colloque belge du numérique éducatif : programme, intervenants, formats. Une semaine par an à Spa, et le reste de l'année à la préparer.",
      contexteLabel: "Statut", contexte: "En cours depuis 2019" },

    { annee: 2018, verbe: "parlé",
      titre: "Hacking pédagogique",
      meta: "Webinaire · IFIC",
      detail: "Détourner, bricoler et remixer les outils numériques au service de la pédagogie.",
      contexteLabel: "Format", contexte: "Webinaire" },

    { annee: 2016, verbe: "parlé",
      titre: "Cycle TICE : BYOD, EdTech, escape games, robotique",
      meta: "Formations · 2016 — 2019",
      detail: "Une série d'interventions et de formations sur l'intégration des usages numériques en classe, menées pour Technofutur TIC, EvoluTIC, l'EFP Bruxelles et la Haute École Condorcet.",
      contexteLabel: "Période", contexte: "2016 — 2019" },

    { annee: 2015, verbe: "fait",
      titre: "DW4Edu — École Numérique",
      meta: "Programme · depuis 2015",
      detail: "Coordination du programme régional d'éducation numérique : appels à projets pour l'équipement des écoles, infrastructure réseau, outillage des équipes éducatives.",
      contexteLabel: "Statut", contexte: "En cours depuis 2015",
      lien: "https://digitalwallonia.be/education/", lienLabel: "La stratégie wallonne" },

    { annee: 2010, verbe: "fait",
      titre: "Enseignement et présidence de jury — Haute École Condorcet",
      meta: "Mandat · depuis 2010",
      detail: "Chargé de cours en écriture multimédia dans le bachelier du même nom, et président du jury de la section pédagogique.",
      contexteLabel: "Statut", contexte: "En cours depuis 2010" }
  ],

  /* ---------------------------------------------------------
     4. PARCOURS
     Affiché en bas de page, sobrement : le registre dit ce que
     j'ai fait, le parcours dit d'où je le fais.
     --------------------------------------------------------- */
  parcours: [
    { periode: "depuis 2015", poste: "Expert senior — Éducation numérique",
      structure: "Agence du Numérique (AdN), Wallonie" },
    { periode: "depuis 2010", poste: "Chargé de cours — écriture multimédia",
      structure: "Haute École Condorcet, Marcinelle" },
    { periode: "2014 – 2015", poste: "Conseiller expert « École Numérique »",
      structure: "Service public de Wallonie — DGO6" },
    { periode: "2008 – 2013", poste: "Responsable de projet formation",
      structure: "Technofutur TIC" },
    { periode: "2006 – 2008", poste: "Responsable informatique",
      structure: "Administration communale de Malmedy" },
    { periode: "2002 – 2009", poste: "Enseignant",
      structure: "Saint-Laurent (Liège) · Don Bosco (Verviers) · Reine Astrid (Montegnée)" }
  ],

  formation: [
    { titre: "Master en Sciences de l'Éducation et de la Formation des Adultes",
      precision: "Ingénierie pédagogique multimédia", lieu: "Université de Lille 1" },
    { titre: "Graduat en informatique de gestion",
      precision: null, lieu: "IPEPS Technique, Verviers" }
  ],

  /* ---------------------------------------------------------
     BIO — n'apparaît pas sur la page d'accueil, seulement sur
     fichiers/bio.html, que j'envoie aux organisateurs qui
     réclament « quelques lignes de présentation ».
     --------------------------------------------------------- */
  bio: {
    courte: "Sébastien Reinders est expert senior à l'Agence du Numérique en Wallonie. Il y coordonne des projets liés aux compétences numériques dans l'éducation et la formation, parmi lesquels DW4Edu (École Numérique) et les cadastres INCOR. Il œuvre également à la mise en place d'une attestation des compétences de base des citoyens fondée sur le référentiel DigComp. Depuis 2010, il enseigne l'écriture multimédia à la Haute École Condorcet.",

    longue: [
      "Expert senior à l'Agence du Numérique en Wallonie, j'y coordonne des projets liés aux compétences numériques dans l'éducation et la formation, parmi lesquels DW4Edu (École Numérique) et les cadastres INCOR. J'œuvre également à la mise en place d'une attestation des compétences de base des citoyens fondée sur le référentiel DigComp. Mon rôle consiste à aider les écoles, les opérateurs de formation et les administrations à déployer des usages numériques qui répondent à leurs besoins concrets.",

      "Avant de rejoindre l'Agence du Numérique, j'ai exercé plusieurs fonctions dans le domaine des technologies éducatives : expert EdTech, chef de projet TICE et responsable du suivi pédagogique du programme « Écoles Numériques ». Ces expériences successives m'ont donné une vision précise des pratiques de terrain et des conditions nécessaires pour intégrer le numérique dans les apprentissages.",

      "Depuis 2010, j'enseigne l'écriture multimédia à la Haute École Condorcet, où je préside également le jury de la section pédagogique. J'y développe une approche qui relie pédagogie et compréhension des usages des outils numériques. Cet ancrage dans l'enseignement enrichit mes travaux sur les politiques publiques et nourrit mon intérêt pour l'intelligence artificielle appliquée à l'éducation et à la formation."
    ]
  },

  /* ---------------------------------------------------------
     5. PIED DE PAGE
     --------------------------------------------------------- */
  contact: {
    // Le grand titre du bloc noir, ligne par ligne.
    appel: [
      "Une conférence, un atelier,",
      "une question sur le numérique",
      "à l'école."
    ],
    // Adresse mise en avant dans le bouton. Assemblée en JS.
    emailPrincipal: { user: "sebastien.reinders", domaine: "adn.be" },
    emailSecondaire: { user: "sebastienreinders", domaine: "gmail.com" },
    liens: [
      { nom: "LinkedIn", url: "https://be.linkedin.com/in/sebastienreinders/" },
      { nom: "Bluesky",  url: "https://bsky.app/profile/sebreinders.bsky.social" },
      { nom: "Medium",   url: "https://medium.com/@sebastienreinders" },
      { nom: "Ressources d'intervention", url: "https://sebreinders.github.io/ressources/" }
    ],
    mentions: "Page personnelle. Les propos qui y figurent n'engagent que moi."
  }
};
