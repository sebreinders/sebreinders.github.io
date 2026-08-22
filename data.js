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
    lieu: "Wallonie - Belgique",

    // Colonne de gauche, sous le nom. Une ligne par élément.
    statut: [
      "Expert senior en éducation numérique.",
      "Agence du Numérique, Wallonie.",
      "Disponible pour interventions et conférences."
    ],

    // Colonne de droite : ce que le site est.
    pitch: "Tout ce que j'ai dit, écrit et fait publiquement autour du numérique en éducation.",

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
       date     : "AAAA-MM-JJ" — c'est elle qui ordonne le registre.
                  Convention quand la date exacte manque : mois connu, on
                  prend le 1er du mois ; année seule, le 1er janvier.
       verbe    : "parlé" | "écrit" | "fait"
       titre    : la ligne visible, en gras
       meta     : la mention discrète à droite (type · lieu · volume)
       detail   : le texte qui apparaît au dépliage
       contexteLabel / contexte : la précision en colonne de droite
       lien / lienLabel : facultatif, affiché au dépliage
     --------------------------------------------------------- */
  registre: [

    /* ----- 2026 ----- */
    { annee: 2026, verbe: "parlé", date: "2026-09-23",
      titre: "Politiques publiques du numérique éducatif",
      meta: "Cours · ULiège · Master Sc. Éduc.",
      detail: "Intervention annuelle dans le cours « Introduction aux Usages du Numérique en Éducation » de Jean-François Céci, en binôme sur le volet Pix. Une heure : ce que l'État peut et ne peut pas faire pour outiller une école.",
      contexteLabel: "Date", contexte: "23 septembre 2026" },

    { annee: 2026, verbe: "parlé", date: "2026-09-14",
      titre: "L'IA au travail : comprendre avant de décider",
      meta: "Conférence · Trivières · 20 pers.",
      detail: "Sensibilisation de l'équipe du Centre Régional d'Intégration Centre & Wallonie picarde. Objectif assumé : construire une culture commune de l'IA avant d'écrire une charte d'usage, pas l'inverse.",
      contexteLabel: "Date", contexte: "14 septembre 2026" },

    { annee: 2026, verbe: "parlé", date: "2026-08-19",
      titre: "Du plan d'équipement au pilotage pédagogique",
      meta: "Atelier · Louvain-la-Neuve",
      detail: "Penser le numérique à l'échelle de l'établissement : passer de l'achat de matériel à une stratégie de pilotage. Université d'été du SeGEC, journée « De la craie au cloud, l'école en mutation ».",
      contexteLabel: "Lieu", contexte: "Aula Magna, 19 août 2026",
      lien: "https://sebreinders.github.io/ressources/", lienLabel: "Ressources et inventaire de l'atelier" },

    { annee: 2026, verbe: "parlé", date: "2026-04-21",
      titre: "LUDOVIA#CH",
      meta: "Colloque · Suisse",
      detail: "Édition suisse du colloque, sur le thème « Repenser l'apprentissage à l'ère de l'IA et de l'innovation ».",
      contexteLabel: "Date", contexte: "21–22 avril 2026" },

    { annee: 2026, verbe: "fait", date: "2026-01-01",
      titre: "Jury du Fonds Digital for Youth",
      meta: "Mandat · Fondation Roi Baudouin",
      detail: "Évaluation des dossiers de l'appel annuel et participation aux délibérations. Le fonds soutient les initiatives numériques destinées aux enfants et aux jeunes.",
      contexteLabel: "Rôle", contexte: "Membre du jury" },
     
      { annee: 2026, verbe: "écrit", date: "2026-08-17",
      titre: "Faut-il financer toutes les écoles de la même manière ?",
      meta: "Article · Medium",
      detail: "L'égalité de traitement budgétaire produit-elle de l'équité ? Le cas de l'encadrement différencié en Fédération Wallonie-Bruxelles.",
      contexteLabel: "Publié", contexte: "17 août 2026",
      lien: "https://medium.com/@sebastienreinders/faut-il-financer-toutes-les-%C3%A9coles-de-la-m%C3%AAme-mani%C3%A8re-49086b0a98a2", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit", date: "2026-08-06",
      titre: "Le cartable et le Cloud Act",
      meta: "Article · Medium",
      detail: "Qui possède l'infrastructure numérique de l'école, et ce que cela change pour les données des élèves.",
      contexteLabel: "Publié", contexte: "6 août 2026",
      lien: "https://medium.com/@sebastienreinders/le-cartable-et-le-cloud-act-a26959011cca", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit", date: "2026-07-27",
      titre: "L'école n'a pas besoin de Canadair, mais de stores",
      meta: "Article · Medium",
      detail: "Le bâtiment scolaire, angle mort de l'école face au dérèglement climatique.",
      contexteLabel: "Publié", contexte: "27 juillet 2026",
      lien: "https://medium.com/@sebastienreinders/l%C3%A9cole-n-a-pas-besoin-de-canadair-mais-de-stores-b877170418bd", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "parlé", date: "2026-01-01",
      titre: "IA4Sup — #Meeting21",
      meta: "Rencontre · en ligne",
      detail: "Échange sur l'IA dans l'enseignement supérieur.",
      contexteLabel: "Date", contexte: "Janvier 2026" },

    { annee: 2026, verbe: "parlé", date: "2026-01-22",
      titre: "L'impact de l'IA sur l'enseignement et la formation",
      meta: "Conférence · IBEFE Hainaut-Centre",
      detail: "Conférence organisée par l'Instance Bassin Enseignement qualifiant — Formation — Emploi du Hainaut-Centre, devant les acteurs de l'enseignement qualifiant et de la formation professionnelle.",
      contexteLabel: "Date", contexte: "Jeudi 22 janvier 2026" },

    /* La même conférence donnée quatre fois, une par territoire du SeGEC.
       Quatre entrées plutôt qu'une : ce sont quatre interventions. */
    { annee: 2026, verbe: "parlé", date: "2026-02-02",
      titre: "Les IA au cœur de mon métier de direction et de mon management",
      meta: "Conférence · SeGEC Liège",
      detail: "L'IA vue depuis le poste de direction : ce qu'elle change dans la gestion quotidienne, les garde-fous à poser, les décisions qui ne se délèguent pas.",
      contexteLabel: "Date et lieu",
      contexte: "Lundi 2 février 2026, 8h30 — 13h00. Rue Hors-Château 61, 4000 Liège." },

    { annee: 2026, verbe: "parlé", date: "2026-01-26",
      titre: "Les IA au cœur de mon métier de direction et de mon management",
      meta: "Conférence · SeGEC Hainaut",
      detail: "L'IA vue depuis le poste de direction : ce qu'elle change dans la gestion quotidienne, les garde-fous à poser, les décisions qui ne se délèguent pas.",
      contexteLabel: "Date et lieu",
      contexte: "Lundi 26 janvier 2026, 8h30 — 13h00. Chaussée de Binche 151, 7000 Mons." },

    { annee: 2026, verbe: "parlé", date: "2026-01-19",
      titre: "Les IA au cœur de mon métier de direction et de mon management",
      meta: "Conférence · SeGEC Namur-Luxembourg",
      detail: "L'IA vue depuis le poste de direction : ce qu'elle change dans la gestion quotidienne, les garde-fous à poser, les décisions qui ne se délèguent pas.",
      contexteLabel: "Date et lieu",
      contexte: "Lundi 19 janvier 2026, 8h30 — 13h00. Rue Bâtis de Corère 6, 5336 Assesse." },

    { annee: 2026, verbe: "parlé", date: "2026-01-14",
      titre: "Les IA au cœur de mon métier de direction et de mon management",
      meta: "Conférence · SeGEC Bruxelles-Brabant",
      detail: "L'IA vue depuis le poste de direction : ce qu'elle change dans la gestion quotidienne, les garde-fous à poser, les décisions qui ne se délèguent pas.",
      contexteLabel: "Date et lieu",
      contexte: "Mercredi 14 janvier 2026, 8h30 — 13h00. Avenue de l'Église Saint-Julien 15, 1160 Auderghem." },

    { annee: 2026, verbe: "écrit", date: "2026-07-22",
      titre: "On a rangé le téléphone, et le débat avec",
      meta: "Article · Medium",
      detail: "Interdire le smartphone à l'école sans poser la question de l'éducation aux usages.",
      contexteLabel: "Publié", contexte: "22 juillet 2026",
      lien: "https://medium.com/@sebastienreinders/on-a-rang%C3%A9-le-t%C3%A9l%C3%A9phone-et-le-d%C3%A9bat-avec-dc2aab9a3583", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit", date: "2026-07-12",
      titre: "Et si l'école faisait comme Buurtzorg ?",
      meta: "Article · Medium",
      detail: "Ce que le modèle néerlandais de soins à domicile en équipes autonomes suggère à la gouvernance scolaire.",
      contexteLabel: "Publié", contexte: "12 juillet 2026",
      lien: "https://medium.com/@sebastienreinders/et-si-l%C3%A9cole-faisait-comme-buurtzorg-a21f0074b00b", lienLabel: "Lire l'article" },

    { annee: 2026, verbe: "écrit", date: "2026-02-01",
      titre: "Le jour où les humains n'écrivent plus : Moltbook, ou l'Internet des agents",
      meta: "Article · Medium",
      detail: "Quand les agents conversationnels deviennent les principaux producteurs de texte en ligne.",
      contexteLabel: "Publié", contexte: "1er février 2026",
      lien: "https://medium.com/@sebastienreinders/le-jour-o%C3%B9-les-humains-n%C3%A9crivent-plus-moltbook-ou-l-internet-des-agents-6b11dfb6bce9", lienLabel: "Lire l'article" },

    /* Le cadastre INCOR est relevé tous les deux ans : INCOR22, INCOR24,
       et INCOR26 en octobre prochain. */
    { annee: 2026, verbe: "fait", date: "2026-10-01",
      titre: "Cadastre INCOR26",
      meta: "Dispositif · Wallonie",
      detail: "Troisième relevé de l'équipement et des usages numériques dans les écoles et chez les opérateurs de formation. Savoir ce qui est là avant de décider quoi financer.",
      contexteLabel: "Statut", contexte: "Octobre 2026, à venir" },

    /* ----- 2025 ----- */
        { annee: 2025, verbe: "parlé", date: "2025-09-24",
      titre: "Politiques publiques du numérique éducatif",
      meta: "Cours · ULiège · Master Sc. Éduc.",
      detail: "Intervention de rentrée dans le cours « Introduction aux Usages du Numérique en Éducation » de Jean-François Céci, en binôme sur le volet Pix.",
      contexteLabel: "Date", contexte: "Mercredi 24 septembre 2025" },

        { annee: 2025, verbe: "parlé", date: "2025-04-17",
      titre: "Technominds",
      meta: "Émission · Boukè",
      detail: "Passage dans l'émission Technominds de la télévision locale Boukè, consacrée au numérique.",
      contexteLabel: "Diffusion", contexte: "Jeudi 17 avril 2025",
      lien: "https://youtu.be/uGAkNXGlBE0", lienLabel: "Voir l'émission" },

    { annee: 2025, verbe: "parlé", date: "2025-03-14",
      titre: "Lancement du WiFi dans les écoles wallonnes",
      meta: "Conférence de presse · Chênée",
      detail: "Présentation du volet connectivité de DW4Edu aux côtés du ministre Pierre-Yves Jeholet, à l'Institut Sainte-Thérèse d'Avila : 60 millions d'euros pour équiper les écoles wallonnes, 500 établissements raccordés par an. Reprise par la RTBF, RTL-TVI et les télévisions locales.",
      contexteLabel: "Date", contexte: "Vendredi 14 mars 2025",
      lien: "https://www.digitalwallonia.be/fr/publications/digital-wallonia-4-edu-60-millions-connectivite-ecoles-wallonie/",
      lienLabel: "Le communiqué Digital Wallonia" },

    { annee: 2025, verbe: "fait", date: "2025-01-01",
      titre: "Monitoring IT des écoles",
      meta: "Projet · accord RW-FWB",
      detail: "Construction d'un dispositif de suivi de l'équipement et de la connectivité des établissements, mené conjointement par la Région wallonne et la Fédération Wallonie-Bruxelles.",
      contexteLabel: "Statut", contexte: "En cours" },

    { annee: 2025, verbe: "écrit", date: "2025-11-25",
      titre: "L'école au cœur du brasier : éduquer dans un monde qui vacille",
      meta: "Article · Medium",
      detail: "Enseigner dans la polycrise : ce que l'école peut encore tenir.",
      contexteLabel: "Publié", contexte: "25 novembre 2025",
      lien: "https://medium.com/@sebastienreinders/l%C3%A9cole-au-c%C5%93ur-du-brasier-%C3%A9duquer-dans-un-monde-qui-vacille-f0c853e9ea44", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit", date: "2025-11-04",
      titre: "Un directeur, une IA et un café froid : mieux gérer pour mieux diriger",
      meta: "Article · Medium",
      detail: "Une journée de direction d'école, revisitée avec l'IA comme outil de gestion. Reprise sur Medium de l'article paru en mars sur Digital Wallonia.",
      contexteLabel: "Publié", contexte: "4 novembre 2025",
      lien: "https://medium.com/@sebastienreinders/un-directeur-une-ia-et-un-caf%C3%A9-froid-mieux-g%C3%A9rer-pour-mieux-diriger-855bba7d91f8", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit", date: "2025-11-02",
      titre: "Jianwei Xun ou la tentation de l'auteur sans corps",
      meta: "Article · Medium",
      detail: "Sur le philosophe qui n'existait pas, et ce que la supercherie révèle de notre rapport aux textes.",
      contexteLabel: "Publié", contexte: "2 novembre 2025",
      lien: "https://medium.com/@sebastienreinders/jianwei-xun-ou-la-tentation-de-lauteur-sans-corps-a3e566bc88c3", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit", date: "2025-06-26",
      titre: "Mémoires sous IA : place à l'oral et à la promptographie",
      meta: "Article · Medium",
      detail: "Évaluer un travail de fin d'études quand l'IA rédige : déplacer la preuve vers le processus.",
      contexteLabel: "Publié", contexte: "26 juin 2025",
      lien: "https://medium.com/@sebastienreinders/m%C3%A9moires-sous-ia-place-%C3%A0-loral-et-%C3%A0-la-promptographie-b7f0e4304815", lienLabel: "Lire l'article" },

    /* ----- 2024 et avant ----- */
    { annee: 2024, verbe: "parlé", date: "2024-09-25",
      titre: "Politiques publiques du numérique éducatif",
      meta: "Cours · ULiège · Master Sc. Éduc.",
      detail: "Intervention de rentrée dans le cours « Introduction aux Usages du Numérique en Éducation » de Jean-François Céci, en binôme sur le volet Pix.",
      contexteLabel: "Date", contexte: "Mercredi 25 septembre 2024" },

    { annee: 2024, verbe: "parlé", date: "2024-03-01",
      titre: "L'enjeu des compétences numériques",
      meta: "Présentation · Agence du Numérique",
      detail: "Présentation externe sur l'état des compétences numériques en Wallonie et les leviers publics disponibles.",
      contexteLabel: "Date", contexte: "Mars 2024" },

    { annee: 2023, verbe: "parlé", date: "2023-11-01",
      titre: "Pecha Kucha — DW4Edu",
      meta: "Format court · LUDOVIA#BE, Spa",
      detail: "Vingt images, vingt secondes chacune, pour présenter le programme régional d'éducation numérique.",
      contexteLabel: "Format", contexte: "Pecha Kucha, LUDOVIA#BE 2023" },

    { annee: 2021, verbe: "parlé", date: "2021-01-01",
      titre: "L'école post-Covid, plus smart qu'avant ?",
      meta: "Table ronde · Smart City Wallonia",
      detail: "Ce que la fermeture des écoles a réellement appris au système éducatif — et ce qu'il en a retenu.",
      contexteLabel: "Format", contexte: "En ligne" },

        { annee: 2018, verbe: "parlé", date: "2018-01-01",
      titre: "Hacking pédagogique",
      meta: "Webinaire · IFIC",
      detail: "Détourner, bricoler et remixer les outils numériques au service de la pédagogie.",
      contexteLabel: "Format", contexte: "Webinaire" },

    { annee: 2016, verbe: "parlé", date: "2016-01-01",
      titre: "Cycle TICE : BYOD, EdTech, escape games, robotique",
      meta: "Formations · 2016 — 2019",
      detail: "Une série d'interventions et de formations sur l'intégration des usages numériques en classe, menées pour Technofutur TIC, EvoluTIC, l'EFP Bruxelles et la Haute École Condorcet.",
      contexteLabel: "Période", contexte: "2016 — 2019" },

    { annee: 2015, verbe: "fait", date: "2015-01-01",
      titre: "DW4Edu — École Numérique",
      meta: "Programme · depuis 2015",
      detail: "Coordination du programme régional d'éducation numérique : appels à projets pour l'équipement des écoles, infrastructure réseau, outillage des équipes éducatives.",
      contexteLabel: "Statut", contexte: "En cours depuis 2015",
      lien: "https://digitalwallonia.be/education/", lienLabel: "La stratégie wallonne" },

    { annee: 2010, verbe: "fait", date: "2010-01-01",
      titre: "Enseignement et présidence de jury — Haute École Condorcet",
      meta: "Mandat · depuis 2010",
      detail: "Chargé de cours en écriture multimédia dans le bachelier du même nom, et président du jury de la section pédagogique.",
      contexteLabel: "Statut", contexte: "En cours depuis 2010" },

    /* ---------------------------------------------------------
       LUDOVIA — toutes les éditions, France et Belgique.
       Verbe « fait » : c'est une présence et un travail
       d'organisation, pas une prise de parole. Les interventions
       qui s'y sont tenues ont leur propre entrée en « parlé ».
       --------------------------------------------------------- */

    { annee: 2026, verbe: "fait", date: "2026-08-24",
      titre: "LUDOVIA#FR — 23e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège).",
      contexteLabel: "Dates", contexte: "Du lundi 24 au jeudi 27 août 2026" },

    { annee: 2025, verbe: "fait", date: "2025-08-25",
      titre: "LUDOVIA#FR — 22e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège). Thème de l'édition : « Attention, participation et numérique ».",
      contexteLabel: "Dates", contexte: "Du 25 au 28 août 2025" },

    { annee: 2024, verbe: "fait", date: "2024-08-26",
      titre: "LUDOVIA#FR — 21e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège). Thème de l'édition : « Quotidienneté et numérique ».",
      contexteLabel: "Dates", contexte: "Du 26 au 28 août 2024" },

    { annee: 2023, verbe: "fait", date: "2023-08-22",
      titre: "LUDOVIA#FR — 20e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège). Thème de l'édition : « Bien-être et numérique ».",
      contexteLabel: "Dates", contexte: "Du 22 au 25 août 2023" },

    { annee: 2022, verbe: "fait", date: "2022-08-22",
      titre: "LUDOVIA#FR — 19e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège). Thème de l'édition : « Éthique et numérique ».",
      contexteLabel: "Dates", contexte: "Du 22 au 25 août 2022" },

    { annee: 2021, verbe: "fait", date: "2021-08-23",
      titre: "LUDOVIA#FR — 18e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège). Thème de l'édition : « Numérique et social ».",
      contexteLabel: "Dates", contexte: "Du 23 au 26 août 2021" },

    { annee: 2020, verbe: "fait", date: "2020-08-24",
      titre: "LUDOVIA#FR — 17e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège). Thème de l'édition : « Injonction(s) du numérique ».",
      contexteLabel: "Dates", contexte: "Du 24 au 27 août 2020" },

    { annee: 2019, verbe: "fait", date: "2019-08-20",
      titre: "LUDOVIA#FR — 16e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège). Thème de l'édition : « Numérique et représentations ».",
      contexteLabel: "Dates", contexte: "Du 20 au 23 août 2019" },

    { annee: 2018, verbe: "fait", date: "2018-08-20",
      titre: "LUDOVIA#FR — 15e édition",
      meta: "Université d'été · Ax-les-Thermes",
      detail: "Université d'été du numérique éducatif, à Ax-les-Thermes (Ariège). Thème de l'édition : « Innovation(s) et institution(s) du numérique ».",
      contexteLabel: "Dates", contexte: "Du 20 au 23 août 2018" },

                                    { annee: 2026, verbe: "fait", date: "2026-10-20",
      titre: "LUDOVIA#BE — 7e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Octobre 2026" },

    { annee: 2025, verbe: "fait", date: "2025-10-21",
      titre: "LUDOVIA#BE — 6e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Du mardi 21 au vendredi 24 octobre 2025" },

    { annee: 2024, verbe: "fait", date: "2024-10-22",
      titre: "LUDOVIA#BE — 5e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Du 22 au 24 octobre 2024" },

    { annee: 2023, verbe: "fait", date: "2023-11-01",
      titre: "LUDOVIA#BE — 4e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Du 1er au 3 novembre 2023, 616 participants" },

    { annee: 2022, verbe: "fait", date: "2022-11-02",
      titre: "LUDOVIA#BE — 3e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Du 2 au 4 novembre 2022, 450 participants" },

    { annee: 2021, verbe: "fait", date: "2021-11-03",
      titre: "LUDOVIA#BE — 2e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Du 3 au 5 novembre 2021, 400 participants" },

    { annee: 2019, verbe: "fait", date: "2019-10-29",
      titre: "LUDOVIA#BE — 1re édition",
      meta: "Colloque · Spa",
      detail: "Première édition du colloque belge, au Centre culturel de Spa — ouverture avec Benoit Hucq (Agence du Numérique) et une conférence inaugurale de Margarida Romero.",
      contexteLabel: "Dates", contexte: "Du 29 au 31 octobre 2019, 650 participants" },


    /* Jury du Fonds Digital for Youth : un mandat reconduit chaque année. */
    { annee: 2025, verbe: "fait", date: "2025-01-01",
      titre: "Jury du Fonds Digital for Youth",
      meta: "Mandat · Fondation Roi Baudouin",
      detail: "Évaluation des dossiers de l'appel annuel et participation aux délibérations. Le fonds soutient les initiatives numériques destinées aux enfants et aux jeunes.",
      contexteLabel: "Rôle", contexte: "Membre du jury" },

    { annee: 2024, verbe: "fait", date: "2024-01-01",
      titre: "Jury du Fonds Digital for Youth",
      meta: "Mandat · Fondation Roi Baudouin",
      detail: "Évaluation des dossiers de l'appel annuel et participation aux délibérations. Le fonds soutient les initiatives numériques destinées aux enfants et aux jeunes.",
      contexteLabel: "Rôle", contexte: "Membre du jury" },

    { annee: 2023, verbe: "fait", date: "2023-01-01",
      titre: "Jury du Fonds Digital for Youth",
      meta: "Mandat · Fondation Roi Baudouin",
      detail: "Évaluation des dossiers de l'appel annuel et participation aux délibérations. Le fonds soutient les initiatives numériques destinées aux enfants et aux jeunes.",
      contexteLabel: "Rôle", contexte: "Membre du jury" },

    { annee: 2022, verbe: "fait", date: "2022-01-01",
      titre: "Jury du Fonds Digital for Youth",
      meta: "Mandat · Fondation Roi Baudouin",
      detail: "Évaluation des dossiers de l'appel annuel et participation aux délibérations. Le fonds soutient les initiatives numériques destinées aux enfants et aux jeunes.",
      contexteLabel: "Rôle", contexte: "Membre du jury" },

    { annee: 2021, verbe: "fait", date: "2021-01-01",
      titre: "Jury du Fonds Digital for Youth",
      meta: "Mandat · Fondation Roi Baudouin",
      detail: "Évaluation des dossiers de l'appel annuel et participation aux délibérations. Le fonds soutient les initiatives numériques destinées aux enfants et aux jeunes.",
      contexteLabel: "Rôle", contexte: "Membre du jury" },


    { annee: 2024, verbe: "fait", date: "2024-01-01",
      titre: "Cadastre INCOR24",
      meta: "Dispositif · Wallonie",
      detail: "Deuxième relevé de l'équipement et des usages numériques dans les écoles et chez les opérateurs de formation, deux ans après INCOR22.",
      contexteLabel: "Statut", contexte: "Réalisé" },

    { annee: 2022, verbe: "fait", date: "2022-01-01",
      titre: "Cadastre INCOR22",
      meta: "Dispositif · Wallonie",
      detail: "Premier relevé de l'équipement et des usages numériques dans les écoles et chez les opérateurs de formation — l'état des lieux qui sert de base aux décisions d'équipement.",
      contexteLabel: "Statut", contexte: "Réalisé" },


    /* ---------------------------------------------------------
       Articles signés sur digitalwallonia.be.
       --------------------------------------------------------- */

    { annee: 2025, verbe: "écrit", date: "2025-03-21",
      titre: "Éducation et citoyenneté numérique. Regards croisés lors de la Journée internationale de la Francophonie",
      meta: "Article · Digital Wallonia",
      detail: "Le 20 mars 2025, l’Organisation internationale de la Francophonie (OIF) célébrait son anniversaire autour d’un thème aussi essentiel qu’actuel : \"Je m’éduque, donc j’agis\". À l’occasion de cette journée internationale de la Francophonie, une conversation-débat intergénérationnelle s’est tenue au…",
      contexteLabel: "Publié", contexte: "2025-03-21",
      lien: "https://www.digitalwallonia.be/fr/publications/education-citoyennete-numerique-journee-internationale-francophonie/", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit", date: "2025-03-14",
      titre: "Digital Wallonia École Numérique 2019-2021. Une dynamique de transformation réussie",
      meta: "Article · Digital Wallonia",
      detail: "L'Agence du Numérique a mené une étude approfondie de l'impact de l'action \"école numérique 2019-2021\" de la stratégie Digital Wallonia. Elle met en lumière les avancées réalisées et les axes à renforcer pour assurer une intégration cohérente et pérenne du numérique dans l’éducation en Wallonie.",
      contexteLabel: "Publié", contexte: "2025-03-14",
      lien: "https://www.digitalwallonia.be/fr/publications/digital-wallonia-ecole-numerique-2019-2021-dynamique-reussie/", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit", date: "2025-03-14",
      titre: "Digital Wallonia 4 Edu : 60 millions d'euros pour une connectivité complète dans les écoles de Wallonie",
      meta: "Article · Digital Wallonia",
      detail: "Le 14 mars 2025, le Vice-Président et Ministre wallon du Numérique a officiellement lancé l'action d’équipement en connectivité Wi-Fi des écoles en Wallonie. Pilotée conjointement par le SPW EER et l'AdN, cette action s’inscrit dans la dynamique \"école numérique\" 2022-2026 de la stratégie…",
      contexteLabel: "Publié", contexte: "2025-03-14",
      lien: "https://www.digitalwallonia.be/fr/publications/digital-wallonia-4-edu-60-millions-connectivite-ecoles-wallonie/", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit", date: "2025-03-10",
      titre: "Un directeur, une IA et un café froid : mieux gérer pour mieux diriger",
      meta: "Article · Digital Wallonia",
      detail: "L'Agence du Numérique vous propose une immersion dans la journée \"augmentée par l'intelligence artificielle\" d'un directeur d'école ... ou comment utiliser l'IA comme un outil d’aide à la décision, mais pas comme comme un substitut à l'humain qui pourrait prendre des mesures automatiques…",
      contexteLabel: "Publié", contexte: "2025-03-10",
      lien: "https://www.digitalwallonia.be/fr/publications/mieux-gerer-pour-mieux-diriger/", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit", date: "2025-02-20",
      titre: "Personnalisation et accessibilité. L’IA au service des élèves en difficulté",
      meta: "Article · Digital Wallonia",
      detail: "Face aux défis des élèves en difficulté dans leur parcours scolaire, l'intelligence artificielle peut être une aide précieuse pour les enseignants en leur offrant l'opportunité d'élaborer un enseignement sur mesure. Décryptage de l'Agence du Numérique.",
      contexteLabel: "Publié", contexte: "2025-02-20",
      lien: "https://www.digitalwallonia.be/fr/publications/ia-eleves-difficulte/", lienLabel: "Lire l'article" },

    { annee: 2025, verbe: "écrit", date: "2025-02-12",
      titre: "IA et éducation. Référentiel clé de l'UNESCO pour les enseignants",
      meta: "Article · Digital Wallonia",
      detail: "L’intégration de l'intelligence artificielle dans les pratiques pédagogiques redéfinit le rôle des enseignants. L'UNESCO a publié son référentiel de compétences en IA pour les enseignants. Découverte de cette ressource clé et et décodage des enjeux pour nos enseignants par l'Agence du Numérique.…",
      contexteLabel: "Publié", contexte: "2025-02-12",
      lien: "https://www.digitalwallonia.be/fr/publications/ia-education-referentiel-unesco-enseignants/", lienLabel: "Lire l'article" },

    { annee: 2024, verbe: "écrit", date: "2024-11-15",
      titre: "Enquête ICILS 2023. Les élèves belges (en Flandre) maîtrisent-ils le numérique ?",
      meta: "Article · Digital Wallonia",
      detail: "L’International Computer and Information Literacy Study (ICILS) est une enquête internationale dont l'objectif est de répondre à cette question centrale : les systèmes éducatifs préparent-ils efficacement les jeunes à naviguer dans un monde numérique ? L'Agence du Numérique a analysé les…",
      contexteLabel: "Publié", contexte: "2024-11-15",
      lien: "https://www.digitalwallonia.be/fr/publications/enquete-icils-2023/", lienLabel: "Lire l'article" },

    { annee: 2023, verbe: "écrit", date: "2023-10-25",
      titre: "Digital Wallonia 4 Edu : le plan Ecole Numérique 2022-2026",
      meta: "Article · Digital Wallonia",
      detail: "Le plan \"École numérique\" permet aux écoles éligibles de Wallonie de bénéficier d’équipement numérique éducatif et/ou de connectivité. Les actions développées dans le cadre de ce plan s’inscrivent dans le cadre du programme Digital Wallonia 4 Education de la stratégie numérique de la Wallonie.",
      contexteLabel: "Publié", contexte: "2023-10-25",
      lien: "https://www.digitalwallonia.be/fr/publications/ecole-numerique-2022-2026-actions/", lienLabel: "Lire l'article" },

    { annee: 2023, verbe: "écrit", date: "2023-07-14",
      titre: "DigitalWallonia 4 Edu. Équipement des écoles wallonnes en WiFi",
      meta: "Article · Digital Wallonia",
      detail: "Dans le cadre du programme Digital Wallonia 4 Edu de la stratégie numérique de la Wallonie, le Gouvernement wallon, sous l’impulsion du Ministre du Numérique, dynamise le déploiement du WiFi dans toutes les écoles de Wallonie qui souhaitent en être équipées. Il s’agit d’un investissement majeur.",
      contexteLabel: "Publié", contexte: "2023-07-14",
      lien: "https://www.digitalwallonia.be/fr/publications/wifi-ecoles-wallonnes/", lienLabel: "Lire l'article" },

    { annee: 2022, verbe: "écrit", date: "2022-11-03",
      titre: "Digital Wallonia 4 Edu. Lancement d’Ecole Numérique 2022-2026",
      meta: "Article · Digital Wallonia",
      detail: "Le projet Ecole Numérique 2022 s’inscrit dans le cadre du programme Digital Wallonia 4 Edu. Bénéficiant des moyens du Plan de Relance de la Wallonie (PRW) et du Plan National pour la Reprise et la Résilience (PNRR), Ecole Numérique 2022 va permettre d’investir 122 millions d’euros entre 2022 et…",
      contexteLabel: "Publié", contexte: "2022-11-03",
      lien: "https://www.digitalwallonia.be/fr/publications/ecole-numerique-2022-2026/", lienLabel: "Lire l'article" },

    { annee: 2022, verbe: "écrit", date: "2022-07-19",
      titre: "Digital Wallonia 4 Education. Nouveaux moyens au travers du Plan de Relance de la Wallonie",
      meta: "Article · Digital Wallonia",
      detail: "Dans le cadre du Plan de Relance de la Wallonie (PRW), le programme Digital Wallonia 4 Education (DW4Edu) bénéficie en 2022 d'un budget de plus de 7,3 millions d'euros pour amplifier les actions à destination des établissements scolaires.",
      contexteLabel: "Publié", contexte: "2022-07-19",
      lien: "https://www.digitalwallonia.be/fr/publications/prw-programme-dw4edu/", lienLabel: "Lire l'article" },

    { annee: 2021, verbe: "écrit", date: "2021-10-01",
      titre: "Appel à projets Ecole Numérique EN 2021",
      meta: "Article · Digital Wallonia",
      detail: "Le programme Digital Wallonia Ecole Numérique a permis d’investir 8,7 millions d’euros au travers de l’appel à projets 2020. La Wallonie met en place un appel à projets EN 2021 avec une méthode d’accompagnement et un processus plus inclusif. Ceux-ci visent à faciliter le montage en amont et…",
      contexteLabel: "Publié", contexte: "2021-10-01",
      lien: "https://www.digitalwallonia.be/fr/publications/ecole-numerique-2021/", lienLabel: "Lire l'article" },

    { annee: 2021, verbe: "écrit", date: "2021-09-16",
      titre: "Bilan 2011-2020 d'école numérique et du programme Digital Wallonia 4 Edu",
      meta: "Article · Digital Wallonia",
      detail: "Depuis 2011, différentes actions d'équipement des écoles en matériel numérique ont été mises en place. Depuis 2016, ces actions s'intègrent dans la stratégie numérique de la Wallonie : Digital Wallonia. C'est le programme structurant \"Digital Wallonia 4 Edu\" qui assure la vision et la cohérence…",
      contexteLabel: "Publié", contexte: "2021-09-16",
      lien: "https://www.digitalwallonia.be/fr/publications/bilan-du-programme-dw4edu/", lienLabel: "Lire l'article" },

    { annee: 2020, verbe: "écrit", date: "2020-06-11",
      titre: "Découvrez les 679 lauréats de l’appel Ecole Numérique 2020",
      meta: "Article · Digital Wallonia",
      detail: "Avec l’appel à projets \"Digital Wallonia Ecole Numérique 2020\", la Wallonie investit près de 9 millions d’euros dans 679 projets lauréats qui vont ainsi pouvoir mettre en oeuvre une dynamique pédagogique directement liée au numérique.",
      contexteLabel: "Publié", contexte: "2020-06-11",
      lien: "https://www.digitalwallonia.be/fr/publications/ecole-numerique-2020/", lienLabel: "Lire l'article" },

    { annee: 2020, verbe: "écrit", date: "2020-04-10",
      titre: "Ludoviales 2020. Relever les défis de l’enseignement pendant le confinement",
      meta: "Article · Digital Wallonia",
      detail: "Du 27 au 30 avril prochain, les communautés LUDOVIA de par le monde proposent un événement inédit et 100% en ligne pour évoquer l’expérience de continuité pédagogique dans le cadre du confinement lié au COVID-19",
      contexteLabel: "Publié", contexte: "2020-04-10",
      lien: "https://www.digitalwallonia.be/fr/publications/ludoviales2020/", lienLabel: "Lire l'article" },

    { annee: 2020, verbe: "écrit", date: "2020-01-10",
      titre: "Retour sur les actions Ecole Numérique de 2011 à 2020",
      meta: "Article · Digital Wallonia",
      detail: "Le projet Ecole numérique vise à fournir aux établissements scolaires du fondamental et du secondaire des équipements et des connexions de qualité pour promouvoir les usages du numérique, pour l’acquisition des compétences spécifiques du numérique et pour soutenir tous les autres apprentissages.…",
      contexteLabel: "Publié", contexte: "2020-01-10",
      lien: "https://www.digitalwallonia.be/fr/publications/ecole-numerique-2011-2020/", lienLabel: "Lire l'article" },

    { annee: 2019, verbe: "écrit", date: "2019-10-28",
      titre: "Ludovia#BE 2019, le “Learning village” wallon",
      meta: "Article · Digital Wallonia",
      detail: "Après la France et la Suisse, la ville de Spa accueillera la version wallonne de l’Université consacrée aux usages du numérique à l’école du 29 au 31 octobre 2019. LUDOVIA#BE s’inscrit dans la dynamique du thème « compétences numériques » de Digital Wallonia.",
      contexteLabel: "Publié", contexte: "2019-10-28",
      lien: "https://www.digitalwallonia.be/fr/publications/ludoviabe2019/", lienLabel: "Lire l'article" },

    { annee: 2018, verbe: "écrit", date: "2018-06-05",
      titre: "325 projets \"Ecole Numérique\" pour la session 2018",
      meta: "Article · Digital Wallonia",
      detail: "L’engagement massif des enseignants et des directions d’écoles pour les projets « Ecole numérique » vient à nouveau d’être récompensé puisque 325 des 781 projets introduits seront dotés d’équipements numériques par Digital Wallonia pour une valeur moyenne par projet de plus de 23.400 euros.",
      contexteLabel: "Publié", contexte: "2018-06-05",
      lien: "https://www.digitalwallonia.be/fr/publications/325-projets-ecole-numeriques-2018/", lienLabel: "Lire l'article" },


    /* ---------------------------------------------------------
       Retombées presse : interviews et citations.
       --------------------------------------------------------- */

    { annee: 2025, verbe: "parlé", date: "2025-03-18",
      titre: "La Wallonie investit 60 millions d’euros pour une connectivité complète dans les établissements scolaires",
      meta: "Presse · {'title': {'de': 'Le Soir', 'en': 'Le Soir', 'fr': 'Le Soir', 'nl': 'Le Soir'}, 'slug': {'de': 'le-soir', 'en': 'le-soir', 'fr': 'le-soir', 'nl': 'le-soir'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo Le Soir', 'fr': 'Logo Le Soir'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/1teHrQDKwJrB4tVZy44TXP/7996f3048283940229830e4b860c2f37/le-soir.png', 'details': {'size': 22044, 'image': {'width': 360, 'height': 180}}, 'fileName': 'le-soir.png', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/1teHrQDKwJrB4tVZy44TXP/7996f3048283940229830e4b860c2f37/le-soir.png', 'details': {'size': 22044, 'image': {'width': 360, 'height': 180}}, 'fileName': 'le-soir.png', 'contentType': 'image/jpeg'}}, 'id': '1teHrQDKwJrB4tVZy44TXP'}}, 'id': '3GJ6nlOQAMaaMspwkJPOBn'}",
      detail: "La Wallonie a annoncé un investissement de 60 millions d’euros pour développer une couverture Wi-Fi dans les établissements scolaires wallons. Par ailleurs, un autre investissement de 60 millions d’euros est destiné à fournir des outils numériques…",
      contexteLabel: "Paru le", contexte: "2025-03-18" },

    { annee: 2025, verbe: "parlé", date: "2025-03-14",
      titre: "Interview de Sébastien Reinders dans le cadre du projet \"Ecole Numérique 2022-2026\"",
      meta: "Presse · {'title': {'de': 'La Première', 'en': 'La Première', 'fr': 'La Première', 'nl': 'La Première'}, 'slug': {'de': 'la-premiere', 'en': 'la-premiere', 'fr': 'la-premiere', 'nl': 'la-premiere'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo La Première', 'fr': 'Logo La Première'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/56zFmtU26Dea0UowpM5fRp/63d1372ddb3841d3b83ea3bf618ba01d/lapremiere.jpg', 'details': {'size': 7696, 'image': {'width': 225, 'height': 225}}, 'fileName': 'lapremiere.jpg', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/56zFmtU26Dea0UowpM5fRp/63d1372ddb3841d3b83ea3bf618ba01d/lapremiere.jpg', 'details': {'size': 7696, 'image': {'width': 225, 'height': 225}}, 'fileName': 'lapremiere.jpg', 'contentType': 'image/jpeg'}}, 'id': '56zFmtU26Dea0UowpM5fRp'}}, 'id': '5QsLhtfOIhvxZHGN9GYbOU'}",
      detail: "Interview de Sébastien Reinders dans le cadre de l’action “École numérique 2022-2026” du programme Digital Wallonia for Education (DW4Edu).",
      contexteLabel: "Paru le", contexte: "2025-03-14" },

    { annee: 2025, verbe: "parlé", date: "2025-03-14",
      titre: "La Région wallonne investit 60 millions € pour mieux connecter les écoles au Wifi",
      meta: "Presse · {'title': {'de': 'RTL', 'en': 'RTL', 'fr': 'RTL', 'nl': 'RTL'}, 'slug': {'de': 'rtl', 'en': 'rtl', 'fr': 'rtl', 'nl': 'rtl'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo RTL', 'fr': 'Logo RTL'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/3dbEchgZ1wzge3F06gmcDj/7d9a0a8f2505800e011a3fc68312e04f/rtl.png', 'details': {'size': 881, 'image': {'width': 151, 'height': 101}}, 'fileName': 'rtl.png', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/3dbEchgZ1wzge3F06gmcDj/7d9a0a8f2505800e011a3fc68312e04f/rtl.png', 'details': {'size': 881, 'image': {'width': 151, 'height': 101}}, 'fileName': 'rtl.png', 'contentType': 'image/jpeg'}}, 'id': '3dbEchgZ1wzge3F06gmcDj'}}, 'clientSites': {'fr': [{'name': {'fr': 'Digital Wallonia'}, 'url': {'fr': 'https://www.digitalwallonia.be'}, 'id': '1xUQG6cbrvPtra8UoeDqCp'}]}, 'clientSitesList': {'fr': ['Digital-Wallonia']}, 'id': 'tGzPAQGogat8aVhjNEFk1'}",
      detail: "La région wallonne a décidé d’investir 60 millions pour mieux connecter les écoles au réseau de communication. La région wallonne va équiper 500 écoles par années. Prochaine étape : accentuer la formation des enseignants à ces projets numériques d’ici 4 ans.",
      contexteLabel: "Paru le", contexte: "2025-03-14" },

    { annee: 2025, verbe: "parlé", date: "2025-03-14",
      titre: "Du wifi à l'école. 60 millions € débloqués pour une meilleure connectivité",
      meta: "Presse · {'title': {'de': 'Radio-télévision belge de la Communauté culturelle française', 'en': 'Radio-télévision belge de la Communauté culturelle française', 'fr': 'Radio-télévision belge de la Communauté culturelle française', 'nl': 'Radio-télévision belge de la Communauté culturelle française'}, 'slug': {'de': 'rtbf', 'en': 'rtbf', 'fr': 'rtbf', 'nl': 'rtbf'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo RTBF', 'fr': 'Logo RTBF'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/4jKD9houWXuJe1TuPZ426m/01719f147e46434e7c472e92aaf30aa7/logo-RTBF.png', 'details': {'size': 76932, 'image': {'width': 2560, 'height': 699}}, 'fileName': 'logo-RTBF.png', 'contentType': 'image/png'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/4jKD9houWXuJe1TuPZ426m/1b19041d5a4989797fddacaf400db458/logo-RTBF.png', 'details': {'size': 76932, 'image': {'width': 2560, 'height': 699}}, 'fileName': 'logo-RTBF.png', 'contentType': 'image/png'}}, 'id': '4jKD9houWXuJe1TuPZ426m'}}, 'clientSites': {'fr': [{'name': {'fr': 'CETIC'}, 'url': {'fr': 'http://cetic.be/'}, 'id': '4HSq3lF3GuUrCiCzF1nJld'}, {'name': {'fr': 'Digital Wallonia'}, 'url': {'fr': 'https://www.digitalwallonia.be'}, 'id': '1xUQG6cbrvPtra8UoeDqCp'}, {'name': {'fr': 'Stratégie S3'}, 'url': {'fr': 'https://strategies3.be'}, 'id': '5aAr0zj66L0UX6hrkcgsf2'}]}, 'clientSitesList': {'fr': ['CETIC', 'Digital-Wallonia', 'Strategie-S3']}, 'id': '73D6HVpts1fXb1efglnN9Y'}",
      detail: "Les écoles wallonnes seront bientôt mieux connectées. Le gouvernement wallon débloque 60 millions d'euros pour activer le plan wifi. Quelques 3000 écoles sont éligibles. Cela devrait booster le développement des compétences numériques des élèves. La région…",
      contexteLabel: "Paru le", contexte: "2025-03-14" },

    { annee: 2023, verbe: "parlé", date: "2023-09-26",
      titre: "On saura tout sur la digitalisation. Sébastien Reinders parmi les experts",
      meta: "Presse · {'title': {'de': 'LN24', 'en': 'LN24', 'fr': 'LN24', 'nl': 'LN24'}, 'slug': {'de': 'ln24', 'en': 'ln24', 'fr': 'ln24', 'nl': 'ln24'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo LN24', 'fr': 'Logo LN24'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/3cK1pyqW2KAJR4DGo5DJRj/2730ead17e5888d27f29cc2ed017fb50/ln24.png', 'details': {'size': 19446, 'image': {'width': 200, 'height': 200}}, 'fileName': 'ln24.png', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/3cK1pyqW2KAJR4DGo5DJRj/2730ead17e5888d27f29cc2ed017fb50/ln24.png', 'details': {'size': 19446, 'image': {'width': 200, 'height': 200}}, 'fileName': 'ln24.png', 'contentType': 'image/jpeg'}}, 'id': '3cK1pyqW2KAJR4DGo5DJRj'}}, 'id': '5bFiG0qhMlC3kmXDnX0HUo'}",
      detail: "Sommes-nous prêts à un quotidien ultra digitalisé ? Est-ce une réalité bien établie ou encore en devenir? Exploite-t-on toutes les formes de la digitalisation dans notre quotidien? Participants : Sébastien Reinders, Digital Education Ambassador à l’ADN,…",
      contexteLabel: "Paru le", contexte: "2023-09-26" },

    { annee: 2022, verbe: "parlé", date: "2022-11-09",
      titre: "Scolaire: l’aide à l’équipement numérique change de boussole",
      meta: "Presse · {'title': {'de': 'Regional-IT', 'en': 'Regional-IT', 'fr': 'Regional-IT', 'nl': 'Regional-IT'}, 'slug': {'de': 'regional-it', 'en': 'regional-it', 'fr': 'regional-it', 'nl': 'regional-it'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo Regional-IT', 'fr': 'Logo Regional-IT'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/1gMxeCSNsWdN6a8zDvFmXk/88e7e0e19544630182baab39d6753116/regional-it.jpg', 'details': {'size': 13814, 'image': {'width': 409, 'height': 123}}, 'fileName': 'regional-it.jpg', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/1gMxeCSNsWdN6a8zDvFmXk/88e7e0e19544630182baab39d6753116/regional-it.jpg', 'details': {'size': 13814, 'image': {'width': 409, 'height': 123}}, 'fileName': 'regional-it.jpg', 'contentType': 'image/jpeg'}}, 'id': '1gMxeCSNsWdN6a8zDvFmXk'}}, 'clientSites': {'fr': [{'name': {'fr': 'Digital Wallonia'}, 'url': {'fr': 'https://www.digitalwallonia.be'}, 'id': '1xUQG6cbrvPtra8UoeDqCp'}]}, 'clientSitesList': {'fr': ['Digital-Wallonia']}, 'id': '67lDPfLhl3PMBUlildR6jx'}",
      detail: "Le programme \"Ecole Numérique\" de Digital Wallonia fait peau neuve : une enveloppe revue à la hausse et l’abandon du principe de l’appel à projets pour passer à une formule davantage structurelle et \"lissée\" notamment en termes de sélection. Toutefois, il…",
      contexteLabel: "Paru le", contexte: "2022-11-09" },

    { annee: 2021, verbe: "parlé", date: "2021-07-05",
      titre: "Le numérique à l'école, un essai à transformer",
      meta: "Presse · {'title': {'de': \"L'Echo\", 'en': \"L'Echo\", 'fr': \"L'Echo\", 'nl': \"L'Echo\"}, 'slug': {'de': 'lecho', 'en': 'lecho', 'fr': 'lecho', 'nl': 'lecho'}, 'logoAssetImage': {'fr': {'title': {'en': \"Logo L'Echo\", 'fr': \"Logo L'Echo\"}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/2v4eHyhLSDsH0MVTiacutk/1be4017480b11a32ed25b19804ff66dd/lecho.jpg', 'details': {'size': 12302, 'image': {'width': 512, 'height': 512}}, 'fileName': 'lecho.jpg', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/2v4eHyhLSDsH0MVTiacutk/1be4017480b11a32ed25b19804ff66dd/lecho.jpg', 'details': {'size': 12302, 'image': {'width': 512, 'height': 512}}, 'fileName': 'lecho.jpg', 'contentType': 'image/jpeg'}}, 'id': '2v4eHyhLSDsH0MVTiacutk'}}, 'id': '6SbgUuUUGCVdkTL1627qyT'}",
      detail: "La crise pandémique a \"fait gagner 20 ans\" au numérique à l'école. Certains mettent toutefois en garde en rappelant que l'épisode du covid a été long, à tel point qu'une lassitude s'est installée. Il faudra agir dès la rentrée pour s'assurer que cela…",
      contexteLabel: "Paru le", contexte: "2021-07-05" },

    { annee: 2021, verbe: "parlé", date: "2021-02-15",
      titre: "Sébastien Reinders (AdN): “un grand plan d’accompagnement est nécessaire pour le numérique éducatif”",
      meta: "Presse · {'title': {'de': 'Regional-IT', 'en': 'Regional-IT', 'fr': 'Regional-IT', 'nl': 'Regional-IT'}, 'slug': {'de': 'regional-it', 'en': 'regional-it', 'fr': 'regional-it', 'nl': 'regional-it'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo Regional-IT', 'fr': 'Logo Regional-IT'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/1gMxeCSNsWdN6a8zDvFmXk/88e7e0e19544630182baab39d6753116/regional-it.jpg', 'details': {'size': 13814, 'image': {'width': 409, 'height': 123}}, 'fileName': 'regional-it.jpg', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/1gMxeCSNsWdN6a8zDvFmXk/88e7e0e19544630182baab39d6753116/regional-it.jpg', 'details': {'size': 13814, 'image': {'width': 409, 'height': 123}}, 'fileName': 'regional-it.jpg', 'contentType': 'image/jpeg'}}, 'id': '1gMxeCSNsWdN6a8zDvFmXk'}}, 'clientSites': {'fr': [{'name': {'fr': 'Digital Wallonia'}, 'url': {'fr': 'https://www.digitalwallonia.be'}, 'id': '1xUQG6cbrvPtra8UoeDqCp'}]}, 'clientSitesList': {'fr': ['Digital-Wallonia']}, 'id': '67lDPfLhl3PMBUlildR6jx'}",
      detail: "En filigrane, le propos que l’on retrouvait notamment dans la bouche de Sébastien Reinders, spécialiste \"ed tech \" - école numérique à l’AdN, était le reflet fidèle des demandes de la FICT (association de personnes-ressource) qui étaient redites et…",
      contexteLabel: "Paru le", contexte: "2021-02-15" },

    { annee: 2020, verbe: "parlé", date: "2020-08-24",
      titre: "Enseignement numérique à la traîne côté francophone : il faut tripler les moyens",
      meta: "Presse · {'title': {'de': 'La Meuse', 'en': 'La Meuse', 'fr': 'La Meuse', 'nl': 'La Meuse'}, 'slug': {'de': 'la-meuse', 'en': 'la-meuse', 'fr': 'la-meuse', 'nl': 'la-meuse'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo La Meuse', 'fr': 'Logo La Meuse'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/dzVp3Fc7TWwFrjY3uHqlk/25751db824bde31392d410981d605cbd/lameuse.jpg', 'details': {'size': 6822, 'image': {'width': 259, 'height': 194}}, 'fileName': 'lameuse.jpg', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/dzVp3Fc7TWwFrjY3uHqlk/25751db824bde31392d410981d605cbd/lameuse.jpg', 'details': {'size': 6822, 'image': {'width': 259, 'height': 194}}, 'fileName': 'lameuse.jpg', 'contentType': 'image/jpeg'}}, 'id': 'dzVp3Fc7TWwFrjY3uHqlk'}}, 'clientSites': {'fr': [{'name': {'fr': 'Digital Wallonia'}, 'url': {'fr': 'https://www.digitalwallonia.be'}, 'id': '1xUQG6cbrvPtra8UoeDqCp'}]}, 'clientSitesList': {'fr': ['Digital-Wallonia']}, 'id': '50QaAuSNisTspG1eiUvlws'}",
      detail: "La crise du coronavirus a boosté l’enseignement numérique partout en Europe. Mais du côté de la FWB, il faut encore progresser. Selon Sébastien Reinders, ambassadeur du numérique éducatif pour l’Agence du Numérique, les enseignants sont motivés. Il faut…",
      contexteLabel: "Paru le", contexte: "2020-08-24" },

    { annee: 2018, verbe: "parlé", date: "2018-08-27",
      titre: "Le numérique à la traîne dans l'enseignement",
      meta: "Presse · {'title': {'de': \"Vers l'Avenir\", 'en': \"Vers l'Avenir\", 'fr': \"Vers l'Avenir\", 'nl': \"Vers l'Avenir\"}, 'slug': {'de': 'vers-lavenir', 'en': 'vers-lavenir', 'fr': 'vers-lavenir', 'nl': 'vers-lavenir'}, 'logoAssetImage': {'fr': {'title': {'en': \"Logo Vers l'Avenir\", 'fr': \"Logo Vers l'Avenir\"}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/3PJZSvRmNhHhKM5HyoOTTK/1df5e13c439d5a87b152fb38c168b093/vers-lavenir.jpg', 'details': {'size': 10860, 'image': {'width': 391, 'height': 129}}, 'fileName': 'vers-lavenir.jpg', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/3PJZSvRmNhHhKM5HyoOTTK/1df5e13c439d5a87b152fb38c168b093/vers-lavenir.jpg', 'details': {'size': 10860, 'image': {'width': 391, 'height': 129}}, 'fileName': 'vers-lavenir.jpg', 'contentType': 'image/jpeg'}}, 'id': '3PJZSvRmNhHhKM5HyoOTTK'}}, 'clientSites': {'fr': [{'name': {'fr': 'Digital Wallonia'}, 'url': {'fr': 'https://www.digitalwallonia.be'}, 'id': '1xUQG6cbrvPtra8UoeDqCp'}]}, 'clientSitesList': {'fr': ['Digital-Wallonia']}, 'id': '3EdvQqCmFZkqsKGnz5trTZ'}",
      detail: "Les établissements scolaires n'ont pas suivi le virage du numérique. Résultat: des cours de numérique sont enseignés de manière transversale.",
      contexteLabel: "Paru le", contexte: "2018-08-27" },

    { annee: 2018, verbe: "parlé", date: "2018-08-22",
      titre: "L'école fait sa mise à jour",
      meta: "Presse · {'title': {'de': \"Le Vif/L'Express\", 'en': \"Le Vif/L'Express\", 'fr': \"Le Vif/L'Express\", 'nl': \"Le Vif/L'Express\"}, 'slug': {'de': 'le-vif-lexpress', 'en': 'le-vif-lexpress', 'fr': 'le-vif-lexpress', 'nl': 'le-vif-lexpress'}, 'id': '1WaOOKlhOvl0qTg2b4cFXm'}",
      detail: "Même si le matériel et la formation font toujours défaut, les nouvelles technologies se font enfin une (petite) place dans le quotidien des enseignants et des élèves en Fédération Wallonie-Bruxelles. Même le smartphone revient en odeur de sainteté, avec…",
      contexteLabel: "Paru le", contexte: "2018-08-22" },

    { annee: 2018, verbe: "parlé", date: "2018-04-19",
      titre: "Salon EvoluTIC: comment être citoyen (wallon) à l’heure du numérique",
      meta: "Presse · {'title': {'de': 'Regional-IT', 'en': 'Regional-IT', 'fr': 'Regional-IT', 'nl': 'Regional-IT'}, 'slug': {'de': 'regional-it', 'en': 'regional-it', 'fr': 'regional-it', 'nl': 'regional-it'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo Regional-IT', 'fr': 'Logo Regional-IT'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/1gMxeCSNsWdN6a8zDvFmXk/88e7e0e19544630182baab39d6753116/regional-it.jpg', 'details': {'size': 13814, 'image': {'width': 409, 'height': 123}}, 'fileName': 'regional-it.jpg', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/1gMxeCSNsWdN6a8zDvFmXk/88e7e0e19544630182baab39d6753116/regional-it.jpg', 'details': {'size': 13814, 'image': {'width': 409, 'height': 123}}, 'fileName': 'regional-it.jpg', 'contentType': 'image/jpeg'}}, 'id': '1gMxeCSNsWdN6a8zDvFmXk'}}, 'clientSites': {'fr': [{'name': {'fr': 'Digital Wallonia'}, 'url': {'fr': 'https://www.digitalwallonia.be'}, 'id': '1xUQG6cbrvPtra8UoeDqCp'}]}, 'clientSitesList': {'fr': ['Digital-Wallonia']}, 'id': '67lDPfLhl3PMBUlildR6jx'}",
      detail: "Actif ou passif, le visiteur aura le choix entre naviguer parmi des stands, assister à des conférences ou participer à des ateliers. Un espace Agora a par ailleurs été prévu. Le but: susciter échanges, dialogues, questions. Sur différents thèmes: dialogue…",
      contexteLabel: "Paru le", contexte: "2018-04-19" },

    { annee: 2016, verbe: "parlé", date: "2016-03-02",
      titre: "Petit à petit, les smartphones viennent défier les cahiers",
      meta: "Presse · {'title': {'de': 'La Libre Belgique', 'en': 'La Libre Belgique', 'fr': 'La Libre Belgique', 'nl': 'La Libre Belgique'}, 'slug': {'de': 'la-libre', 'en': 'la-libre', 'fr': 'la-libre', 'nl': 'la-libre'}, 'logoAssetImage': {'fr': {'title': {'en': 'Logo La Libre', 'fr': 'Logo La Libre'}, 'file': {'en': {'url': '//images.ctfassets.net/myqv2p4gx62v/0Xs75MGUdqXW3cCYttzu4/723b1bb839e4411b79acf8fa7bdc0ed4/lalibre.png', 'details': {'size': 14048, 'image': {'width': 389, 'height': 129}}, 'fileName': 'lalibre.png', 'contentType': 'image/jpeg'}, 'fr': {'url': '//images.ctfassets.net/myqv2p4gx62v/0Xs75MGUdqXW3cCYttzu4/723b1bb839e4411b79acf8fa7bdc0ed4/lalibre.png', 'details': {'size': 14048, 'image': {'width': 389, 'height': 129}}, 'fileName': 'lalibre.png', 'contentType': 'image/jpeg'}}, 'id': '0Xs75MGUdqXW3cCYttzu4'}}, 'clientSites': {'fr': [{'name': {'fr': 'Digital Wallonia'}, 'url': {'fr': 'https://www.digitalwallonia.be'}, 'id': '1xUQG6cbrvPtra8UoeDqCp'}]}, 'clientSitesList': {'fr': ['Digital-Wallonia']}, 'id': '6VSGCT6HeuJb1TIFuE3LTo'}",
      detail: "Plutôt que de les interdire, pourquoi ne pas utiliser les smartphones ou les ordinateurs dans les classes? Peu connu, expliquait ce 2 mars l'expert en numérique Sébastien Reinders lors de la quatrième édition du EdTechForum organisé par la plateforme…",
      contexteLabel: "Paru le", contexte: "2016-03-02" },


    /* ---------------------------------------------------------
       Fiches action Digital Wallonia : les dispositifs pilotés.
       Les fiches LUDOVIA sont omises — les éditions ont déjà
       leur entrée plus haut.
       --------------------------------------------------------- */

    { annee: 2025, verbe: "fait", date: "2025-01-01",
      titre: "Équipement informatique. École numérique 2025",
      meta: "Dispositif · Digital Wallonia",
      detail: "Mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 10.7 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2025-01-01 au 2025-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/equipement-informatique-ecole-numerique-2025/", lienLabel: "La fiche action" },

    { annee: 2024, verbe: "fait", date: "2024-01-01",
      titre: "Équipement informatique. École numérique 2024",
      meta: "Dispositif · Digital Wallonia",
      detail: "Mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 10.7 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2024-01-01 au 2024-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/equipement-informatique-ecole-numerique-2024/", lienLabel: "La fiche action" },

    { annee: 2023, verbe: "fait", date: "2023-01-01",
      titre: "Équipement informatique. École numérique 2023",
      meta: "Dispositif · Digital Wallonia",
      detail: "Mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 10.7 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2023-01-01 au 2023-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/equipement-informatique-ecole-numerique-2023/", lienLabel: "La fiche action" },

    { annee: 2022, verbe: "fait", date: "2022-07-01",
      titre: "Compétences numériques. Campagne STEAM et numérique 2022-2024",
      meta: "Dispositif · Digital Wallonia",
      detail: "Promotion des filières de formation scientifiques, technologiques, ingénériques, artistiques et mathématiques ainsi que du numérique dans le but d'attirer de nouveaux profils dans ces secteurs. Budget : 16.3 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2022-07-01 au 2024-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/competences-numeriques-campagne-steam-2022-2024/", lienLabel: "La fiche action" },

    { annee: 2022, verbe: "fait", date: "2022-07-01",
      titre: "Connectivité wifi dans les écoles. Équipement de l'ensemble des établissements scolaires",
      meta: "Dispositif · Digital Wallonia",
      detail: "Implémentation de matériel afin de permettre aux établissements scolaires de se connecter en wifi pour exploiter au mieux les ressources des équipements informatiques. Budget : 72 million d'euros.",
      contexteLabel: "Période", contexte: "Depuis 2022-07-01",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/connectivite-wifi-ensemble-etablissements-scolaires/", lienLabel: "La fiche action" },

    { annee: 2022, verbe: "fait", date: "2022-01-01",
      titre: "Équipement informatique. École numérique 2022",
      meta: "Dispositif · Digital Wallonia",
      detail: "Appel à projets pour la mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 7.3 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2022-01-01 au 2022-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/equipement-informatique-ecole-numerique-2022/", lienLabel: "La fiche action" },

    { annee: 2021, verbe: "fait", date: "2021-01-01",
      titre: "Équipement informatique. École numérique 2021",
      meta: "Dispositif · Digital Wallonia",
      detail: "Appel à projets pour la mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 6.9 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2021-01-01 au 2021-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/ecole-numerique-appels-a-projet-2021/", lienLabel: "La fiche action" },

    { annee: 2020, verbe: "fait", date: "2020-02-03",
      titre: "Équipement informatique. École numérique 2020.",
      meta: "Dispositif · Digital Wallonia",
      detail: "Appel à projets pour la mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 8.9 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2020-02-03 au 2020-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/ecole-numerique-appels-a-projet-2020/", lienLabel: "La fiche action" },

    { annee: 2019, verbe: "fait", date: "2019-06-01",
      titre: "Équipement informatique BYOD. École numérique 2019-2022.",
      meta: "Dispositif · Digital Wallonia",
      detail: "Implémentation de matériel afin de permettre aux usagers des établissements scolaires de se connecter avec leurs propres équipements informatiques. Budget : 300 000 euros.",
      contexteLabel: "Période", contexte: "Du 2019-06-01 au 2022-06-01",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/ecole-numerique-byod-2019-2022/", lienLabel: "La fiche action" },

    { annee: 2019, verbe: "fait", date: "2019-02-01",
      titre: "Équipement informatique. École numérique 2019.",
      meta: "Dispositif · Digital Wallonia",
      detail: "Appel à projets pour la mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 6.8 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2019-02-01 au 2019-10-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/ecole-numerique-appels-a-projet-2019/", lienLabel: "La fiche action" },

    { annee: 2018, verbe: "fait", date: "2018-01-15",
      titre: "Équipement informatique. École numérique 2018.",
      meta: "Dispositif · Digital Wallonia",
      detail: "Appel à projets pour la mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 6.9 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2018-01-15 au 2018-02-28",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/ecole-numerique-appels-a-projets-2018/", lienLabel: "La fiche action" },

    { annee: 2018, verbe: "fait", date: "2018-01-01",
      titre: "Pédagogies numériques. Baromètre éducation et numérique 2018",
      meta: "Dispositif · Digital Wallonia",
      detail: "Outil de mesure du niveau d’équipement et d’usages numériques des établissements scolaires et des enseignants, en Wallonie et à Bruxelles.",
      contexteLabel: "Période", contexte: "Du 2018-01-01 au 2018-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/barometre-education-et-numerique-2018/", lienLabel: "La fiche action" },

    { annee: 2017, verbe: "fait", date: "2017-06-10",
      titre: "Pédagogies numériques. Étude d'impact École numérique 2017-2018",
      meta: "Dispositif · Digital Wallonia",
      detail: "Analyse de l'impact des outils numériques dans l'apprentissage scolaire.",
      contexteLabel: "Période", contexte: "Du 2017-06-10 au 2018-06-30",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/pedagogies-etude-impact-2017-2018/", lienLabel: "La fiche action" },

    { annee: 2017, verbe: "fait", date: "2017-06-01",
      titre: "Connectivité WiFi des écoles. Projet pilote.",
      meta: "Dispositif · Digital Wallonia",
      detail: "Implémentation de matériel afin de permettre aux établissements scolaires de se connecter en wifi pour exploiter au mieux les ressources des équipements informatiques. Budget : 7.1 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2017-06-01 au 2019-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/projet-pilote-equipement-wifi/", lienLabel: "La fiche action" },

    { annee: 2017, verbe: "fait", date: "2017-01-01",
      titre: "Équipement informatique. École numérique 2017.",
      meta: "Dispositif · Digital Wallonia",
      detail: "Appel à projets pour la mise à disposition d'équipements informatiques dans les établissements scolaires. Budget : 7.3 million d'euros.",
      contexteLabel: "Période", contexte: "Du 2017-01-01 au 2017-12-31",
      lien: "https://www.digitalwallonia.be/fr/fiches-action/ecole-numerique-appels-a-projets-2017/", lienLabel: "La fiche action" },


    { annee: 2025, verbe: "parlé", date: "2025-03-20",
      titre: "Éducation et citoyenneté numérique",
      meta: "Intervention · OIF, Paris",
      detail: "Intervention au siège de l'Organisation internationale de la Francophonie, à Paris, lors de la Journée internationale de la Francophonie. Propos construit en trois temps, en regard croisé avec Éléonore Saumier.",
      contexteLabel: "Date et lieu", contexte: "Jeudi 20 mars 2025, siège de l'OIF, Paris",
      lien: "https://www.digitalwallonia.be/fr/publications/education-citoyennete-numerique-journee-internationale-francophonie/", lienLabel: "Le compte rendu" },


    /* ---------------------------------------------------------
       Interventions en Afrique du Nord, avec l'IFIC (AUF, Tunis).
       --------------------------------------------------------- */
    { annee: 2015, verbe: "parlé", date: "2015-11-16",
      titre: "Bricolage pédagogique, edu'Hack'tion et open bidouille",
      meta: "TEDux · Hammamet, Tunisie",
      detail: "Intervention à TEDux, première conférence TEDx consacrée à l'éducation, organisée par l'IFIC (Agence universitaire de la Francophonie) et Sup'Com Tunis, en marge d'ICT4ALL. Thème de l'édition : les pratiques pédagogiques innovantes.",
      contexteLabel: "Date et lieu", contexte: "16 novembre 2015, hôtel Diar Lemdina, Hammamet",
      lien: "https://youtu.be/IhJhOY_LwqA", lienLabel: "Voir l'intervention" },

    { annee: 2014, verbe: "parlé", date: "2014-10-22",
      titre: "Forum e-Learning Tunisie",
      meta: "Forum · Tunis",
      detail: "Intervention au Forum e-Learning de Tunis, dans la session consacrée à l'enseignement.",
      contexteLabel: "Dates", contexte: "22 et 23 octobre 2014, Tunisie" },


    { annee: 2016, verbe: "parlé", date: "2016-05-26",
      titre: "Hacking pédagogique",
      meta: "TEDux · Le Caire, Égypte",
      detail: "Intervention au premier TEDux organisé en Égypte par l'AUF (Campus numérique francophone d'Alexandrie), l'IFIC et l'Université Senghor, en marge de la conférence eLearning Africa qui réunissait plus de mille professionnels de l'éducation venus de 72 pays.",
      contexteLabel: "Date et lieu", contexte: "26 mai 2016, Le Caire",
      lien: "https://fr.slideshare.net/Pedagotic/hacking-pedagogique-tedux-cairo-2016", lienLabel: "Le support de l'intervention" },


    { annee: 2016, verbe: "parlé", date: "2016-11-26",
      titre: "Hacking pédagogique et robots",
      meta: "TEDux · Rabat, Maroc",
      detail: "Troisième édition de TEDux, à la Faculté des Sciences de Rabat, organisée par l'IFIC avec les universités Mohammed V et Mohammed Ier, le CNAP et l'association MEARN.",
      contexteLabel: "Date et lieu", contexte: "26 novembre 2016, Rabat" },


    { annee: 2015, verbe: "parlé", date: "2015-11-11",
      titre: "Forum e-Learning Tunisie",
      meta: "Forum · Technopark El Ghazala, Tunis",
      detail: "Quatrième édition du Forum e-Learning Tunisie, organisée par le Centre pour le développement des compétences professionnelles.",
      contexteLabel: "Dates", contexte: "11 et 12 novembre 2015" },


    { annee: 2015, verbe: "parlé", date: "2015-06-25",
      titre: "Bricoler et détourner l'informatique pour innover",
      meta: "Journées du e-learning · Lyon",
      detail: "Intervention aux Journées du e-learning de l'Université Jean Moulin Lyon 3, colloque international consacré à la pédagogie numérique.",
      contexteLabel: "Date", contexte: "Juin 2015, Université Jean Moulin Lyon 3" },


    /* ---------------------------------------------------------
       UNIVERNAGE, université d'été BELC régional, Dakar 2018 :
       deux prises de parole distinctes dans la même semaine.
       --------------------------------------------------------- */
    { annee: 2018, verbe: "parlé", date: "2018-09-24",
      titre: "Les pédagogies innovantes",
      meta: "Cérémonie d'ouverture · Dakar, Sénégal",
      detail: "Communication d'ouverture de l'université d'été UNIVERNAGE — BELC régional, formation sous-régionale réunissant 80 participants d'Afrique de l'Ouest (Togo, Bénin, Mali, Mauritanie, Burkina Faso, Cap-Vert, Gambie, Guinée, Côte d'Ivoire). Organisée par l'Institut français du Sénégal avec l'IFEF.",
      contexteLabel: "Date et lieu", contexte: "Lundi 24 septembre 2018, Dakar" },

    { annee: 2018, verbe: "parlé", date: "2018-09-26",
      titre: "Pédagogies innovantes : un cas concret",
      meta: "Table ronde · Dakar, Sénégal",
      detail: "Table ronde sur la pédagogie innovante, connectée ou non, organisée en marge des journées de formation d'UNIVERNAGE avec la participation de l'IFEF.",
      contexteLabel: "Date et lieu", contexte: "Mercredi 26 septembre 2018, Dakar" },


    { annee: 2015, verbe: "parlé", date: "2015-01-01",
      titre: "Conférence de clôture du Master Ingénierie en e-formation",
      meta: "Master MFEG · Université Rennes 1",
      detail: "Conférence de clôture de l'année du parcours « Ingénierie en e-formation » du Master Métiers de la formation en économie et gestion, formation mixte qui aborde l'e-formation par la pédagogie, la technologie et l'économie des dispositifs.",
      contexteLabel: "Date", contexte: "Rennes, 2015 ou 2016 — année à confirmer" },

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
