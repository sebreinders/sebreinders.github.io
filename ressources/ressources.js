/* =============================================================
   ressources.js — ce qui est mis à disposition, activité par activité.

   Une activité = un dossier ici, portant son nom. On y dépose les
   fichiers, on ajoute l'entrée ci-dessous, et la page se met à jour.

   Chargé en <script> classique, comme data.js, pour que la page
   fonctionne aussi en ouverture locale.
   ============================================================= */

const RESSOURCES = {

  intro: "Les supports, outils et documents partagés lors de mes interventions. Rangés par activité, libres d'usage.",

  /* ---------------------------------------------------------
     Ordre antichronologique : la dernière activité en tête.

       titre / date / lieu : ce qui identifie l'intervention
       dossier             : le répertoire qui porte les fichiers
       resume              : une phrase de cadrage
       lienRegistre        : facultatif, l'entrée correspondante
       fichiers[]          : nom, type, fichier (vide = index du dossier),
                             description
     --------------------------------------------------------- */
  activites: [
    {
      titre: "Scénario multimédia — Séance 1",
      date: "Année académique 2026-2027",
      lieu: "IPSMA, bachelier en communication",
      dossier: "IPSMA/S1",
      resume: "Le pacte passé avec le lecteur, les cinq leviers du récit et le schéma quinaire. Les ressources de l'atelier d'écriture : un jeu de cartes narratif, en ligne et à imprimer.",
      fichiers: [
        { nom: "Le récit tiré aux cartes",
          type: "Outil",
          fichier: "",
          description: "Le tirage en ligne : une carte dans chacun des cinq paquets, puis un carnet pour rédiger les cinq étapes du récit, désigner le levier confié au lecteur et formuler le pacte. Tout reste dans le navigateur, rien n'est envoyé." },

        { nom: "Le jeu complet à imprimer",
          type: "Jeu de cartes",
          fichier: "cartes-narratives-jeu-complet.pdf",
          description: "38 cartes au format 63 × 88 mm, cinq dos différents, traits de coupe. Dix planches A4 à imprimer en recto-verso avec retournement sur le bord long, sur un papier de 250 à 300 g. Un jeu couvre quatre groupes." },

        { nom: "Planche de complément",
          type: "Jeu de cartes",
          fichier: "cartes-narratives-complement.pdf",
          description: "Les cinq temps du récit et les quatre points de vue, les deux paquets les moins fournis. À imprimer autant de fois que nécessaire : deux exemplaires suffisent pour neuf groupes." }
      ]
    },
    {
      titre: "Université d'été du SeGEC",
      date: "19 août 2026",
      lieu: "Aula Magna, Louvain-la-Neuve",
      dossier: "universite-ete-segec-2026",
      resume: "Atelier « Du plan d'équipement au pilotage pédagogique », dans la journée « De la craie au cloud, l'école en mutation ».",
      lienRegistre: "../#registre",
      fichiers: [
        { nom: "Du plan d'équipement au pilotage pédagogique",
          type: "Présentation",
          fichier: "atelier-segec-du-plan-dequipement-au-pilotage.pdf",
          description: "Le support de l'atelier, 23 pages. Son fil rouge : un plan d'équipement n'est pas un plan d'achat, mais la traduction matérielle d'un projet pédagogique — donc un objet de pilotage. Avec les cinq angles morts les plus fréquents." },

        { nom: "Inventaire du parc numérique",
          type: "Outil",
          fichier: "",
          description: "Un tableau à remplir pour recenser matériel et logiciels de l'établissement, et voir où l'on en est avant de décider quoi acheter. Tout reste dans le navigateur, rien n'est envoyé." },

        { nom: "Le pilotage numérique en une page",
          type: "Mémo",
          fichier: "pilotage-numerique-A4.pdf",
          description: "L'essentiel de l'atelier ramené à un A4 : les étapes, les questions à se poser, les écueils. À afficher ou à faire circuler en salle des profs." }
      ]
    }
  ]
};
