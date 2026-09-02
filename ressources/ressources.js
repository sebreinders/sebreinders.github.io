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
      titre: "Université d'été du SeGEC",
      date: "19 août 2026",
      lieu: "Aula Magna, Louvain-la-Neuve",
      dossier: "universite-ete-segec-2026",
      resume: "Atelier « Du plan d'équipement au pilotage pédagogique », dans la journée « De la craie au cloud, l'école en mutation ».",
      lienRegistre: "../#registre",
      fichiers: [
        { nom: "Inventaire du parc numérique",
          type: "Outil",
          fichier: "",
          description: "Un tableau à remplir pour recenser matériel et logiciels de l'établissement, et voir où l'on en est avant de décider quoi acheter. Tout reste dans le navigateur, rien n'est envoyé." },

        { nom: "Du plan d'équipement au pilotage",
          type: "PDF",
          fichier: "pilotage-numerique-A4.pdf",
          description: "Le mémo d'une page qui accompagne l'atelier : les étapes, les questions à se poser, les écueils." }
      ]
    }
  ]
};
