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
      detail: "Une journée de direction d'école, revisitée avec l'IA comme outil de gestion.",
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

    { annee: 2023, verbe: "parlé", date: "2023-10-31",
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

    { annee: 2023, verbe: "fait", date: "2023-10-31",
      titre: "LUDOVIA#BE — 4e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Fin octobre 2023" },

    { annee: 2022, verbe: "fait", date: "2022-11-02",
      titre: "LUDOVIA#BE — 3e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Novembre 2022" },

    { annee: 2021, verbe: "fait", date: "2021-11-03",
      titre: "LUDOVIA#BE — 2e édition",
      meta: "Colloque · Spa",
      detail: "Colloque du numérique éducatif en Belgique francophone, au Centre culturel de Spa. Je copilote l'organisation de l'événement pour l'Agence du Numérique.",
      contexteLabel: "Dates", contexte: "Du 3 au 5 novembre 2021" },

    { annee: 2019, verbe: "fait", date: "2019-10-29",
      titre: "LUDOVIA#BE — 1re édition",
      meta: "Colloque · Spa",
      detail: "Première édition du colloque belge, au Centre culturel de Spa — ouverture avec Benoit Hucq (Agence du Numérique) et une conférence inaugurale de Margarida Romero.",
      contexteLabel: "Dates", contexte: "À partir du mardi 29 octobre 2019" },


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
