export interface SurveyQuestion {
  text: string;
  reference: string;
  tipYes?: string;
  tipNo?: string;
  tipPartial?: string;
  tipNo_details?: string;
  tipPartial_details?: string;
  questionNumber?: string;
}

export interface SurveyCategory {
  title: string;
  questions: SurveyQuestion[];
}

export const SURVEY: SurveyCategory[] = [
  {
    title: 'Vision, stratégie et alignement',
    questions: [
      {
        questionNumber: 'Q01',
        text: "Votre organisation a-t-elle formalisé une stratégie d'innovation alignée sur sa stratégie globale ?",
        reference: "ISO 56002 §5.1.4 – Innovation strategy shall be aligned with the strategic direction.",
        tipYes: "Une stratégie d'innovation robuste repose sur l'ensemble de ces dimensions interagissent pour créer un avantage durable.",
        tipNo: "Formalisez une stratégie d'innovation claire alignée sur les objectifs globaux de l'organisation et engagez la direction dans sa promotion.",
        tipNo_details: "Une stratégie d'innovation alignée transforme les idées en leviers de croissance, de résilience et de compétitivité, tout en reliant l'avenir de l'entreprise à ses priorités actuelles. Elle canalise l'énergie créative, donne du sens aux initiatives internes, donne un cap clair et évite la dispersion des efforts. Co-construisez la stratégie d'innovation avec les parties prenantes internes afin d'assurer une meilleure appropriation organisationnelle.\n\nVotre stratégie d'innovation ne doit pas seulement définir quels produits ou services développer. Elle doit être complète et équilibrée. Elle doit :\n• Définir clairement la valeur apportée (qu'apporte l'innovation au client et en quoi se différencie-t-elle).\n• Créer les capacités internes (compétences, ressources, partenariats) pour soutenir l'innovation.\n• Préciser comment cette valeur sera délivrée (segments de marché, canaux de distribution, partenariats opérationnels).\n• Prévoir le modèle économique associé (sources de revenus, structure de coûts, allocation des bénéfices).\n• Soutenir tout cela par une communication cohérente (messages, storytelling, canaux internes et externes).\n\nActions :\n• Organisez un atelier de direction pour définir la place de l'innovation.\n• Rédigez une charte d'innovation validée par le board.\n• Créez immédiatement un premier portefeuille de projets pilotes.\n• Outil : mettez en place un tableau de suivi stratégique comprenant : Objectif stratégique (ex. croissance internationale), Projet associé (ex. plateforme digitale export), Responsable (directeur innovation), Budget (montant ou % du CA), KPI (ex. +15 % CA export d'ici 2 ans), Horizon (court, moyen, long terme).",
        tipPartial: "Co-construisez la stratégie d'innovation avec les parties prenantes internes afin d'assurer une meilleure appropriation organisationnelle.",
        tipPartial_details: "Une stratégie d'innovation alignée transforme les idées en leviers de croissance, de résilience et de compétitivité, tout en reliant l'avenir de l'entreprise à ses priorités actuelles. Elle canalise l'énergie créative, donne du sens aux initiatives internes, donne un cap clair et évite la dispersion des efforts.\n\nActions :\n• Rédigez un document cadre d'innovation reliant chaque objectif stratégique à des projets précis.\n• Organisez une revue annuelle pour ajuster les initiatives.\n• Outil : tableau de suivi stratégique avec colonnes : Objectif stratégique, Projet associé, Responsable, Budget, KPI."
      },
      {
        questionNumber: 'Q02',
        text: "Disposez-vous d'une feuille de route innovation mise à jour régulièrement ?",
        reference: "ISO 56002 §6.2.2 – Planning to achieve innovation objectives",
        tipYes: "La roadmap est un outil vivant qui hiérarchise les projets, évite les doublons et garantit la pertinence face aux évolutions du marché.",
        tipNo: "Mettez en place une feuille de route dédiée à l'innovation, mise à jour régulièrement, avec jalons et revues périodiques.",
        tipNo_details: "Une roadmap bien pilotée permet d'allouer efficacement les moyens, de prendre des décisions rapides et d'inscrire l'innovation dans un mouvement continu. Sans mise à jour régulière, les projets peuvent perdre leur pertinence, se chevaucher ou manquer de ressources.\n\nActions :\n• Inventoriez tous vos projets, même informels.\n• Classez-les en horizons (0-12 mois, 2-3 ans, >3 ans).\n• Construisez une première roadmap stratégique et diffusez-la.\n• Outil : feuille de route structurée avec colonnes : Horizon (court, moyen, long terme), Nom du projet, Technologie clé, Objectif stratégique associé, Budget prévu, KPI attendu, Statut actuel (idée, concept, prototype, pilote, déployé), Responsable.",
        tipPartial: "Faites évoluer votre feuille de route en fonction des résultats des expérimentations, des signaux du marché et de l'évolution technologique.",
        tipPartial_details: "Une roadmap bien pilotée permet d'allouer efficacement les moyens, de prendre des décisions rapides et d'inscrire l'innovation dans un mouvement continu.\n\nActions :\n• Ajoutez un cycle de révision trimestriel (stop/go/pivot).\n• Reliez chaque projet aux tendances du secteur.\n• Outil : feuille de route structurée avec colonnes : Horizon (court, moyen, long terme), Nom du projet, Technologie clé, Objectif stratégique associé, Budget prévu, KPI attendu, Statut actuel, Responsable."
      },
      {
        questionNumber: 'Q03',
        text: "L'innovation fait-elle l'objet d'une politique formelle et communiquée ?",
        reference: "ISO 56002 §5.2.2 – Communication of innovation policy",
        tipYes: "Une politique claire agit comme une boussole : elle définit les règles du jeu et donne confiance aux équipes pour expérimenter.",
        tipNo: "Rédigez et communiquez une politique d'innovation formelle, visible à tous les niveaux de l'organisation.",
        tipNo_details: "Une politique claire permet d'ancrer l'innovation comme une valeur partagée. Communiquer cette politique en interne et en externe envoie un signal fort : l'innovation est reconnue, encouragée et soutenue par la direction.\n\nActions :\n• Rédigez une première politique simple (vision, principes, gouvernance).\n• Faites valider le document au plus haut niveau et désignez un sponsor.\n• Déployez un plan de communication interne.\n• Outil : formalisez une charte d'innovation contenant : Vision et ambitions, Principes directeurs, Domaines prioritaires (technologies, marchés cibles), Gouvernance (composition du comité, fréquence des réunions), Règles budgétaires (part de budget, processus de demande), KPIs (CA issus de nouveaux produits, nombre de projets scalés).",
        tipPartial: "Renforcez la diffusion de la politique d'innovation à travers des outils interactifs comme des vidéos explicatives ou des séminaires dédiés.",
        tipPartial_details: "Une politique claire permet d'ancrer l'innovation comme une valeur partagée.\n\nActions :\n• Centralisez vos règles actuelles dans un document unique.\n• Communiquez via intranet, newsletters, événements internes.\n• Outil : charte d'innovation avec : Vision et ambitions, Principes directeurs, Domaines prioritaires, Gouvernance, Règles budgétaires, KPIs."
      }
    ]
  },
  {
    title: 'Gouvernance, processus et pilotage',
    questions: [
      {
        questionNumber: 'Q04',
        text: "Avez-vous un processus structuré couvrant l'ensemble du cycle : idée → concept → solution ?",
        reference: "ISO 56002 §8.3.2 à §8.3.6 – Processus d'innovation",
        tipYes: "Une idée, même brillante, reste fragile si elle ne suit pas un chemin clair vers le marché.",
        tipNo: "Installez des processus standards couvrant le cycle complet d'innovation : idée, validation, développement, lancement.",
        tipNo_details: "Sans processus clair, beaucoup d'idées s'arrêtent au stade du prototype et ne créent pas de valeur. Un pipeline structuré permet de fluidifier le passage de l'idée au marché. Les leaders en innovation parviennent à réduire de 8 à 10 fois le temps de passage du POC à la production, simplement en ayant standardisé et industrialisé leurs processus.\n\nActions :\n• Créez un pipeline simple pour vos projets pilotes.\n• Testez-le sur 3 à 5 initiatives pour ajuster.\n• Outil : pipeline d'innovation avec colonnes : Phase (idée, concept, prototype, pilote, solution), Critères de validation, Responsable, Décision (Go / No Go / Adapter).",
        tipPartial: "Structurez votre processus d'innovation avec des points de passage obligatoires et une documentation partagée pour chaque phase.",
        tipPartial_details: "Sans processus clair, beaucoup d'idées s'arrêtent au stade du prototype. Un pipeline structuré permet de fluidifier le passage de l'idée au marché.\n\nActions :\n• Standardisez vos étapes (idée → concept → prototype → pilote → solution).\n• Ajoutez des critères de passage clairs à chaque étape.\n• Outil : pipeline d'innovation avec colonnes : Phase, Critères de validation, Responsable, Décision."
      },
      {
        questionNumber: 'Q05',
        text: "Les projets sont-ils évalués via des critères de sélection clairs ?",
        reference: "ISO 56007 §6.4 – Validation, testing and selection",
        tipYes: "Des critères partagés apportent transparence et légitimité.",
        tipNo: "Définissez des critères objectifs (ROI, alignement stratégique, maturité technologique) pour évaluer et sélectionner les idées.",
        tipNo_details: "Des critères transparents permettent de choisir objectivement les projets qui méritent d'avancer et d'arrêter rapidement ceux qui ne créent pas de valeur. Ils permettent de concentrer les ressources sur les projets qui répondent vraiment aux objectifs stratégiques, réduisent les biais et évitent le gaspillage.\n\nActions :\n• Créez une première grille de sélection avec 3 critères simples : valeur potentielle, faisabilité, risques.\n• Testez-la sur quelques projets pilotes.\n• Outil : établissez une matrice de sélection comprenant : Critère (ex. impact business, faisabilité technique, risque), Pondération (poids relatif, ex. 40%, 30%, 30%), Note (échelle de 1 à 5), Score total (somme pondérée), Décision (Go / No Go).",
        tipPartial: "Mettez en place un système de scoring multicritères intégré à un outil numérique pour faciliter la priorisation des projets.",
        tipPartial_details: "Des critères transparents permettent de choisir objectivement les projets qui méritent d'avancer.\n\nActions :\n• Ajoutez un scoring multicritère (impact, faisabilité, risques, alignement stratégie).\n• Documentez vos critères et appliquez-les systématiquement.\n• Outil : matrice de sélection avec : Critère, Pondération, Note, Score total, Décision."
      },
      {
        questionNumber: 'Q06',
        text: "Disposez-vous d'un comité ou d'une gouvernance dédiée à l'innovation ?",
        reference: "AFNOR XP X50-275 – Évaluation du dispositif de gouvernance",
        tipYes: "Un comité d'innovation assure la cohérence, légitime les décisions et permet de suivre les projets de manière structurée.",
        tipNo: "Établissez un comité ou une gouvernance dédiée à l'innovation pour piloter efficacement les projets et assurer leur suivi.",
        tipNo_details: "Sans gouvernance claire, les initiatives se multiplient sans priorisation, et les ressources se dispersent. Un comité dédié devient aussi un symbole culturel fort : il montre que l'innovation n'est pas une affaire secondaire, mais une priorité portée au plus haut niveau.\n\nActions :\n• Créez un comité innovation de 5-7 membres (direction, finance, R&D, métiers).\n• Donnez-lui l'autorité d'arbitrer les projets et budgets.\n• Outil : mettez en place un ordre du jour type comprenant : Revue des projets en cours avec leurs statuts, Arbitrage (Go / Stop / Adapter), Décisions d'allocation de ressources, Suivi des KPIs d'innovation, Identification et validation de nouvelles idées.",
        tipPartial: "Intégrez à la gouvernance des profils variés issus de différents départements pour enrichir la prise de décision.",
        tipPartial_details: "Sans gouvernance claire, les initiatives se multiplient sans priorisation.\n\nActions :\n• Élargissez votre comité existant aux métiers clés et au financier.\n• Donnez-lui un mandat clair (sélection, financement, suivi des projets).\n• Outil : ordre du jour type avec : Revue des projets, Décisions, Allocation des ressources, Suivi des indicateurs, Propositions de nouveaux projets."
      },
      {
        questionNumber: 'Q07',
        text: "Participez-vous à des appels à projets ou des programmes collaboratifs ?",
        reference: "ISO 56003 – Innovation partnerships",
        tipYes: "L'innovation collaborative permet de partager les risques, d'accéder à de nouvelles compétences et d'accélérer le développement.",
        tipNo: "Encouragez la participation à des appels à projets et programmes collaboratifs afin d'étendre vos capacités et ressources d'innovation.",
        tipNo_details: "Les collaborations sont essentielles pour accéder à des écosystèmes élargis. Ne pas y participer, c'est se priver de financements et de synergies. Innover seul, c'est avancer lentement.\n\nActions :\n• Identifiez un premier programme accessible (ex. Bpifrance, Horizon Europe).\n• Lancez une candidature simple avec un partenaire local.\n• Outil : créez un registre des partenariats comprenant : Programme (ex. Horizon Europe – Green Deal), Partenaire(s) associé(s) (startup, labo, grand groupe), Votre rôle (chef de file, contributeur, testeur), Budget alloué et financements obtenus, Résultats attendus (technologiques, commerciaux, compétences).",
        tipPartial: "Identifiez des appels à projets en lien avec vos domaines stratégiques et créez une veille structurée dédiée aux opportunités externes.",
        tipPartial_details: "Les collaborations sont essentielles pour accéder à des écosystèmes élargis.\n\nActions :\n• Cartographiez les programmes disponibles (nationaux, européens, sectoriels).\n• Ajoutez chaque année 1-2 collaborations structurées.\n• Outil : registre des partenariats avec : Nom du programme, Partenaire(s), Rôle de l'entreprise, Budget engagé, Résultats attendus."
      }
    ]
  },
  {
    title: 'Culture, leadership et compétences',
    questions: [
      {
        questionNumber: 'Q08',
        text: "L'innovation est-elle intégrée à la culture de votre organisation ?",
        reference: "ISO 56002 §4.4.2 et §7.2 – Culture and competence",
        tipYes: "L'innovation n'est pas seulement une affaire de processus, c'est une question de culture.",
        tipNo: "Renforcez la culture de l'innovation à travers des valeurs partagées, des rituels internes et la reconnaissance des initiatives innovantes.",
        tipNo_details: "Lorsqu'elle est intégrée dans les valeurs, les symboles et les comportements quotidiens, elle devient une force collective. Une culture innovante donne le droit d'expérimenter, encourage la créativité et aligne les comportements. Sans cela, l'innovation reste cantonnée à un service isolé.\n\nActions :\n• Faites de l'innovation une valeur centrale portée par la direction.\n• Lancez un programme autour de l'innovation (communication, formation, reconnaissance).\n• Outil : élaborez une charte culturelle comprenant : Les valeurs de l'entreprise intégrant l'innovation, Les pratiques concrètes (ex. hackathons annuels, Friday innovation time), Les symboles visibles (espace innovation, trophées internes), Les histoires et cas de réussite à diffuser.",
        tipPartial: "Diffusez des récits inspirants d'initiatives internes pour incarner concrètement la culture d'innovation au quotidien.",
        tipPartial_details: "L'innovation devient une force collective quand elle est intégrée dans les valeurs et comportements quotidiens.\n\nActions :\n• Ajoutez explicitement l'innovation dans vos valeurs d'entreprise.\n• Renforcez les rituels : hackathons, trophées, journées innovation.\n• Outil : charte culturelle avec : Valeurs associées, Rituels réguliers, Symboles, Histoires inspirantes."
      },
      {
        questionNumber: 'Q09',
        text: "L'échec est-il considéré comme un apprentissage dans vos projets ?",
        reference: "ISO 56007 §4.6 – Apprentissage par itération",
        tipYes: "Chaque tentative manquée est une source d'apprentissage qui, bien exploitée, accélère la réussite future.",
        tipNo: "Valorisez les enseignements tirés des échecs comme opportunités d'apprentissage et intégrez-les dans les retours d'expérience.",
        tipNo_details: "L'échec fait partie intégrante du processus d'innovation. Lorsqu'il est traité comme une faute, les équipes n'osent plus expérimenter. Les entreprises qui savent transformer les échecs en enseignements créent une dynamique de confiance et d'amélioration continue.\n\nActions :\n• Mettez en place systématiquement une session de post-mortem après chaque projet.\n• Faites de l'apprentissage une partie intégrante du reporting.\n• Outil : créez une fiche post-mortem comprenant : Objectif du projet, Résultats atteints vs attendus, Causes des écarts et échecs, Enseignements principaux, Décisions et ajustements futurs.",
        tipPartial: "Organisez des revues post-mortem de projets afin de capitaliser sur les apprentissages et partager les retours d'expérience.",
        tipPartial_details: "L'échec fait partie intégrante du processus d'innovation. Les entreprises qui transforment les échecs en enseignements créent une dynamique de confiance.\n\nActions :\n• Formalisez un rituel de retour d'expérience après chaque projet.\n• Partagez publiquement les leçons apprises.\n• Outil : fiche post-mortem avec : Objectif initial, Résultats obtenus, Points d'échec identifiés, Leçons tirées, Actions correctives."
      },
      {
        questionNumber: 'Q10',
        text: "Avez-vous un plan de formation ou de montée en compétences lié à l'innovation ?",
        reference: "ISO 56002 §7.2 – Development of innovation competencies",
        tipYes: "Former et développer les talents, c'est garantir la capacité à transformer les idées en résultats.",
        tipNo: "Mettez en œuvre un plan de développement des compétences en innovation : formations, mentorat, certifications spécialisées, etc.",
        tipNo_details: "L'innovation n'est possible que si les collaborateurs ont les compétences nécessaires. Les organisations qui forment régulièrement leurs collaborateurs aux nouvelles méthodes (design thinking, agilité, IA, data) renforcent leur capacité d'adaptation et attirent les talents. À l'inverse, un déficit de compétences freine l'exécution des projets et creuse le fossé avec les concurrents.\n\nActions :\n• Réalisez un diagnostic initial des compétences (audit simple).\n• Construisez un plan de formation de base : design thinking, agilité, digitalisation.\n• Outil : établissez un plan de compétences comprenant : Liste des compétences clés attendues pour innover, Évaluation actuelle (auto-évaluation ou test), Niveau cible à atteindre, Programme de formation associé, Responsable de mise en œuvre.",
        tipPartial: "Intégrez l'innovation dans les plans de développement individuel via des modules spécifiques, des parcours internes ou des immersions.",
        tipPartial_details: "L'innovation n'est possible que si les collaborateurs ont les compétences nécessaires.\n\nActions :\n• Intégrez des modules innovation dans vos formations existantes.\n• Construisez des parcours de formation différenciés selon les métiers.\n• Outil : plan de développement avec : Compétence cible, Niveau actuel, Niveau visé, Formation prévue, Responsable."
      }
    ]
  },
  {
    title: 'Exploration, méthodes et outils',
    questions: [
      {
        questionNumber: 'Q11',
        text: "Intégrez-vous l'exploration (veille, tendances, signaux faibles) dans vos pratiques ?",
        reference: "ISO 56007 §6.2.3 – Inspiring opportunities and ideas",
        tipYes: "Explorer au-delà de son secteur immédiat permet d'anticiper les disruptions et de transformer les signaux faibles en opportunités.",
        tipNo: "Organisez une veille active sur les tendances, technologies émergentes et signaux faibles, avec un partage structuré des insights.",
        tipNo_details: "Les entreprises qui structurent leur veille sont celles qui repèrent les nouvelles opportunités avant les autres et savent transformer des changements perçus comme menaces en avantages compétitifs. Sans veille structurée, l'entreprise risque d'être surprise par des évolutions rapides du marché ou de la technologie.\n\nActions :\n• Commencez par une veille ciblée sur 2-3 thématiques prioritaires (ex. IA, cybersécurité, durabilité).\n• Nommez un responsable veille et tendances chargé de centraliser l'information.\n• Outil : créez un tableau de veille avec colonnes : Source (revue spécialisée, concurrent, startup, université), Signal repéré (ex. nouveau business model, technologie émergente), Impact attendu sur l'entreprise, Décision associée (informer, approfondir, initier un POC).",
        tipPartial: "Impliquez différents métiers dans l'exploration pour capter des signaux variés et enrichir la détection d'opportunités.",
        tipPartial_details: "Les entreprises qui structurent leur veille repèrent les nouvelles opportunités avant les autres.\n\nActions :\n• Mettez en place une cellule de veille structurée.\n• Reliez les résultats de veille aux décisions de votre comité innovation.\n• Outil : tableau de veille avec : Source, Signal identifié, Impact potentiel, Action proposée."
      },
      {
        questionNumber: 'Q12',
        text: "Utilisez-vous des méthodes agiles ou centrées utilisateur (design thinking, lean startup) ?",
        reference: "ISO 56007 §6.3.3 – Concept generation",
        tipYes: "Les méthodes agiles et centrées utilisateur transforment la manière d'innover.",
        tipNo: "Adoptez des méthodes agiles et centrées utilisateur (Design Thinking, Lean Startup) pour expérimenter rapidement et impliquer les parties prenantes.",
        tipNo_details: "Elles remplacent les cycles longs et risqués par des boucles rapides de test des hypothèses avec de vrais usagers. Design thinking, lean startup, agilité : toutes ces approches ont en commun de remettre l'utilisateur au centre et de réduire l'incertitude. Elles permettent d'économiser du temps, du budget et d'augmenter les chances de succès au marché.\n\nActions :\n• Formez une première équipe au design thinking.\n• Lancez un projet pilote en mode agile.\n• Outil : canevas d'expérimentation avec : Hypothèse (ce que vous pensez vrai), Prototype (ce que vous testez), Test utilisateur (méthode de validation), Résultat (retour client, métriques), Décision (poursuivre, adapter, abandonner).",
        tipPartial: "Formez vos équipes aux méthodes agiles par la pratique à travers des ateliers, sprints ou labs internes réguliers.",
        tipPartial_details: "Les méthodes agiles remplacent les cycles longs par des boucles rapides de test.\n\nActions :\n• Utilisez le design thinking pour vos projets les plus stratégiques.\n• Introduisez des sprints agiles dans vos cycles actuels.\n• Outil : canevas d'expérimentation avec : Hypothèse, Prototype, Test utilisateur, Résultat, Décision."
      },
      {
        questionNumber: 'Q13',
        text: "Utilisez-vous des outils numériques de gestion de l'innovation (plateformes, tableaux de bord, etc.) ?",
        reference: "ISO 56002 §7.6 – Tools and methods",
        tipYes: "Les outils numériques apportent visibilité, collaboration et pilotage en temps réel.",
        tipNo: "Implémentez des outils numériques collaboratifs pour gérer le portefeuille d'innovation, les idées et le suivi des indicateurs.",
        tipNo_details: "Sans ces outils, le suivi dépend de fichiers dispersés et le pilotage devient opaque et la gouvernance devient lourde.\n\nActions :\n• Commencez simplement avec un tableau partagé (Excel, Notion, Trello).\n• Listez toutes les initiatives en cours et mettez-les à jour mensuellement.\n• Outil : créez un tableau de bord innovation comprenant : Projet (ex. chatbot IA), Responsable désigné, Statut actuel (idée, en cours, finalisé), Budget consommé et prévu, KPI clés (ex. réduction des coûts, satisfaction client), Prochaine décision attendue.",
        tipPartial: "Choisissez des outils adaptés à votre taille et votre maturité en innovation pour favoriser l'adoption et l'impact.",
        tipPartial_details: "Les outils numériques apportent visibilité et pilotage en temps réel.\n\nActions :\n• Étendez vos outils actuels avec une plateforme de suivi d'innovation.\n• Connectez-la à vos outils existants (ERP, CRM, reporting financier).\n• Outil : tableau de bord avec : Projet, Responsable, Statut, Budget consommé, KPI principaux, Prochaine étape."
      },
      {
        questionNumber: 'Q14',
        text: "Disposez-vous d'un budget spécifiquement alloué à l'innovation ?",
        reference: "ISO 56002 §7.1.5 – Financial resources",
        tipYes: "Sans budget dédié, l'innovation reste opportuniste.",
        tipNo: "Allouez un budget dédié à l'innovation pour financer les idées, prototypes, expérimentations et partenariats extérieurs.",
        tipNo_details: "La présence d'une ligne budgétaire claire permet de donner de la crédibilité et d'assurer la pérennité des projets. Allouer un budget clair donne un signal fort, sécurise l'exécution et permet d'expérimenter sans compromettre les activités courantes. C'est aussi une manière d'ancrer l'innovation dans la planification financière classique de l'entreprise.\n\nActions :\n• Fixez une enveloppe initiale (ex. 1-5% du CA).\n• Créez un mini-fonds interne accessible sur demande.\n• Outil : établissez un plan budgétaire innovation comprenant : Projet identifié (ex. prototype nouvelle offre digitale), Montant du budget accordé, Pourcentage de l'enveloppe totale alloué, Catégorie (innovation incrémentale, adjacente, radicale), Statut (prévisionnel, engagé, consommé).",
        tipPartial: "Prévoyez un budget flexible pour soutenir les phases d'expérimentation rapide et favoriser les prises d'initiative.",
        tipPartial_details: "Un budget clair donne un signal fort et sécurise l'exécution.\n\nActions :\n• Créez une ligne budgétaire spécifique dans vos comptes.\n• Suivez l'allocation par catégorie : cœur (core), adjacent, disruptif.\n• Outil : plan budgétaire avec : Projet, Montant alloué, % du budget total, Catégorie, Statut."
      }
    ]
  },
  {
    title: 'Mesure, évaluation et pilotage de la performance',
    questions: [
      {
        questionNumber: 'Q15',
        text: "Avez-vous des indicateurs pour suivre les projets d'innovation (ROI, TRL, time-to-market) ?",
        reference: "ISO 56008 §6.4.1 – Innovation concept validation metrics",
        tipYes: "Ce qui ne se mesure pas ne se pilote pas.",
        tipNo: "Définissez des indicateurs clés (KPIs) pour suivre l'avancement et l'impact des projets d'innovation (ex : TRL, ROI, time-to-market).",
        tipNo_details: "Les indicateurs (ROI, TRL, time-to-market) permettent de vérifier que les projets avancent et créent réellement de la valeur. Ils aident aussi à prendre des décisions éclairées : continuer, adapter ou arrêter un projet. Sans indicateurs clairs, l'innovation reste perçue comme un coût, jamais comme un investissement.\n\nActions :\n• Définissez un premier set de 3 KPIs de base (ROI, TRL, time-to-market).\n• Appliquez-les immédiatement sur vos projets pilotes.\n• Outil : mettez en place une scorecard projet comprenant : KPI choisi (ex. retour sur investissement), Valeur cible (ex. +20% en 2 ans), Valeur actuelle mesurée, Écart constaté, Action à prendre (poursuivre, ajuster, arrêter).",
        tipPartial: "Adaptez vos indicateurs à la nature des projets (exploration, rupture, incrémental) pour évaluer la performance de manière pertinente.",
        tipPartial_details: "Les indicateurs permettent de vérifier que les projets avancent et créent de la valeur.\n\nActions :\n• Complétez vos indicateurs actuels avec des mesures business.\n• Intégrez-les dans vos reportings réguliers.\n• Outil : scorecard projet avec : KPI, Cible définie, Réalisé actuel, Écart, Action corrective prévue."
      },
      {
        questionNumber: 'Q16',
        text: "Évaluez-vous régulièrement la performance globale du système d'innovation ?",
        reference: "ISO 56008 §9.3 – Improving the measurement framework",
        tipYes: "L'innovation n'est pas qu'une suite de projets, c'est un système : stratégie, gouvernance, culture, processus.",
        tipNo: "Évaluez régulièrement l'efficacité de votre système d'innovation pour ajuster vos pratiques, processus et moyens mobilisés.",
        tipNo_details: "Évaluer régulièrement ce système permet de comprendre ses forces et ses faiblesses. C'est ce qui distingue les organisations capables d'innover durablement de celles qui ne réussissent qu'occasionnellement.\n\nActions :\n• Réalisez une première évaluation globale simple de votre système (budget, nombre de projets, résultats obtenus).\n• Identifiez les écarts et priorisez les améliorations.\n• Outil : créez un tableau d'évaluation globale comprenant : Dimension clé (ex. gouvernance), Indicateurs de suivi (ex. fréquence des comités, % projets évalués), Résultat constaté, Objectif cible, Plan d'action correctif.",
        tipPartial: "Appuyez-vous sur des audits croisés ou revues externes pour objectiver l'évaluation et faire progresser le système d'innovation.",
        tipPartial_details: "Évaluer le système permet de comprendre ses forces et faiblesses.\n\nActions :\n• Ajoutez une évaluation annuelle de la performance globale.\n• Comparez vos résultats à des benchmarks sectoriels.\n• Outil : tableau d'évaluation avec : Dimension évaluée, Indicateurs associés, Résultat actuel, Objectif visé, Plan d'amélioration."
      },
      {
        questionNumber: 'Q17',
        text: "Utilisez-vous des tableaux de bord ou scorecards pour piloter le portefeuille de projets ?",
        reference: "ISO 56008 §8.3 – Innovation Portfolio Scorecards",
        tipYes: "Un portefeuille équilibré permet d'avoir une vision d'ensemble, d'allouer les ressources intelligemment et de piloter les risques.",
        tipNo: "Utilisez des tableaux de bord dynamiques et des scorecards pour visualiser et piloter l'ensemble de votre portefeuille d'innovation.",
        tipNo_details: "Un portefeuille équilibré permet d'avoir une vision d'ensemble, d'allouer les ressources intelligemment et de piloter les risques. Allouer un budget clair donne un signal fort, sécurise l'exécution et permet d'expérimenter sans compromettre les activités courantes.\n\nActions :\n• Construisez un premier tableau recensant l'ensemble de vos projets d'innovation.\n• Classez-les par typologie (core, adjacent, disruptif).\n• Outil : créez un tableau portefeuille de projets comprenant : Nom du projet, Typologie (incrémental, adjacent, radical), Budget associé, Indicateur principal (ex. ROI attendu, délai de mise sur le marché), Risque (faible, moyen, élevé), Statut actuel.",
        tipPartial: "Créez des visualisations claires et évolutives pour aider à la priorisation stratégique et au suivi opérationnel du portefeuille.",
        tipPartial_details: "Un portefeuille équilibré permet une vision d'ensemble.\n\nActions :\n• Étendez vos outils actuels pour couvrir l'ensemble du portefeuille.\n• Ajoutez des indicateurs de risque et de synergie.\n• Outil : tableau portefeuille avec : Projet, Catégorie, Budget alloué, KPI principal, Risque associé, Statut."
      }
    ]
  },
  {
    title: 'Ouverture, parties prenantes et co-innovation',
    questions: [
      {
        questionNumber: 'Q18',
        text: "Travaillez-vous avec des startups, universités ou centres de recherche ?",
        reference: "ISO 56002 §4.4.3 – Collaboration with external parties",
        tipYes: "S'ouvrir à des partenaires externes permet d'accéder à de nouvelles idées, technologies et talents.",
        tipNo: "Nouez des partenariats actifs avec des startups, laboratoires de recherche, clusters ou universités pour enrichir votre écosystème d'innovation.",
        tipNo_details: "Startups, laboratoires, universités : chacun apporte des compétences ou des idées que l'entreprise seule n'aurait pas. Les collaborations renforcent l'écosystème et accélèrent la capacité à innover et à industrialiser de nouvelles solutions.\n\nActions :\n• Identifiez un premier partenaire accessible (incubateur local, labo universitaire, startup innovante).\n• Lancez une collaboration pilote.\n• Outil : établissez un registre partenariats comprenant : Nom du partenaire, Type de collaboration, Objectif visé (ex. test d'une technologie, validation marché), Budget ou ressources allouées, Résultats attendus.",
        tipPartial: "Cartographiez les acteurs clés de votre écosystème pour identifier les partenariats les plus pertinents à court et moyen terme.",
        tipPartial_details: "Les collaborations renforcent l'écosystème et accélèrent la capacité à innover.\n\nActions :\n• Cartographiez vos partenariats actuels et formalisez-les (accords, contrats).\n• Ajoutez chaque année 1 ou 2 nouvelles collaborations ciblées.\n• Outil : registre partenariats avec : Partenaire, Type de collaboration, Objectif, Budget engagé, Résultats attendus."
      },
      {
        questionNumber: 'Q19',
        text: "Intégrez-vous des utilisateurs ou clients dans vos processus d'innovation ?",
        reference: "Manuel d'Oslo §6.2.3 – User innovation and co-creation",
        tipYes: "Les clients sont souvent la meilleure source d'innovation.",
        tipNo: "Impliquez les utilisateurs finaux ou clients dès les phases amont (co-design, tests, retours) pour orienter les solutions vers leurs besoins réels.",
        tipNo_details: "En les intégrant tôt dans le processus, on réduit les risques d'échec et on augmente l'adoption des solutions. Sans eux, les entreprises risquent de développer des solutions déconnectées des besoins réels.\n\nActions :\n• Organisez une première session de co-création avec quelques clients volontaires.\n• Recueillez leurs retours pour ajuster votre concept.\n• Outil : créez un canevas de co-création comprenant : Description de l'idée ou prototype, Retour détaillé des utilisateurs, Enseignements tirés, Modifications appliquées, Nouvelle itération.",
        tipPartial: "Animez des communautés d'utilisateurs pilotes pour tester vos innovations et recueillir des retours itératifs concrets.",
        tipPartial_details: "En intégrant les clients tôt, on réduit les risques d'échec et augmente l'adoption.\n\nActions :\n• Organisez des tests réguliers (focus groups, beta tests).\n• Intégrez vos clients clés dans vos prototypes.\n• Outil : canevas de co-création avec : Idée ou prototype testé, Feedback client recueilli, Ajustement apporté, Nouvelle version produite."
      },
      {
        questionNumber: 'Q20',
        text: "Avez-vous une approche d'innovation ouverte (ex : hackathons, plateformes externes, open data) ?",
        reference: "ISO 56003 + Oslo §6.2.4 – Open innovation practices",
        tipYes: "L'innovation ouverte multiplie les sources d'idées et d'expérimentation.",
        tipNo: "Développez une stratégie d'innovation ouverte : hackathons, open data, plateformes collaboratives, appels à idées externes, etc.",
        tipNo_details: "Hackathons, plateformes collaboratives, open data : ces formats permettent d'explorer rapidement, à faible coût, et de s'inspirer de l'extérieur. Les organisations qui pratiquent l'innovation ouverte captent souvent les ruptures avant les autres. C'est une manière d'impliquer un écosystème plus large et de renforcer votre visibilité.\n\nActions :\n• Lancez un premier hackathon ou une expérimentation avec une plateforme ouverte.\n• Définissez un cadre simple de collaboration.\n• Outil : élaborez un plan innovation ouverte comprenant : Type d'ouverture choisi, Partenaires associés (ex. école, incubateur, association sectorielle), Objectif visé (nouveaux concepts, test marché, collecte de données), Résultats attendus et mesure de succès.",
        tipPartial: "Organisez des challenges d'innovation ouverts pour stimuler l'émergence d'idées externes et enrichir vos projets internes.",
        tipPartial_details: "L'innovation ouverte permet d'explorer rapidement et à faible coût.\n\nActions :\n• Ajoutez des initiatives d'ouverture ponctuelles (hackathon annuel, challenge étudiants).\n• Formalisez vos règles de propriété intellectuelle et de confidentialité.\n• Outil : plan innovation ouverte avec : Type d'ouverture, Partenaires impliqués, Objectif recherché, Résultats attendus."
      }
    ]
  }
];
