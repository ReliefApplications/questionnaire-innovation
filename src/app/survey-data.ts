export interface SurveyQuestion {
  text: string;
  reference: string;
  tipNo?: string;
  tipPartial?: string;
  questionNumber?: string;
}

export interface SurveyCategory {
  title: string;
  questions: SurveyQuestion[];
}

let qNum = 1;
export const SURVEY: SurveyCategory[] = [
  
    {
      "title": "Vision, stratégie et alignement",
      "questions": [
        { "questionNumber": 'Q01',
          "text": "Votre organisation a-t-elle formalisé une stratégie d’innovation alignée sur sa stratégie globale ?",
          "reference": "ISO 56002 §5.1.4 – “Innovation strategy shall be aligned with the strategic direction.”",
          "tipNo": "Formalisez une stratégie d’innovation claire alignée sur les objectifs globaux de l’organisation et engagez la direction dans sa promotion.",
          "tipPartial": "Co-construisez la stratégie d’innovation avec les parties prenantes internes afin d’assurer une meilleure appropriation organisationnelle.",
          
        },
        { "questionNumber": 'Q02',
          "text": "Disposez-vous d’une feuille de route innovation mise à jour régulièrement ?",
          "reference": "ISO 56002 §6.2.2 – Planning to achieve innovation objectives",
          "tipNo": "Mettez en place une feuille de route dédiée à l’innovation, mise à jour régulièrement, avec jalons et revues périodiques.",
          "tipPartial": "Faites évoluer votre feuille de route en fonction des résultats des expérimentations, des signaux du marché et de l'évolution technologique.",
        },
        { "questionNumber": 'Q03',
          "text": "L’innovation fait-elle l’objet d’une politique formelle et communiquée ?",
          "reference": "ISO 56002 §5.2.2 – Communication of innovation policy",
          "tipNo": "Rédigez et communiquez une politique d’innovation formelle, visible à tous les niveaux de l'organisation.",
          "tipPartial": "Renforcez la diffusion de la politique d’innovation à travers des outils interactifs comme des vidéos explicatives ou des séminaires dédiés.",
        }
      ]
    },
    {
      "title": "Gouvernance, processus et pilotage",
      "questions": [
        { "questionNumber": 'Q04',
          "text": "Avez-vous un processus structuré couvrant l’ensemble du cycle : idée → concept → solution ?",
          "reference": "ISO 56002 §8.3.2 à §8.3.6 – Processus d’innovation",
          "tipNo": "Installez des processus standards couvrant le cycle complet d’innovation : idée, validation, développement, lancement.",
          "tipPartial": "Structurez votre processus d’innovation avec des points de passage obligatoires et une documentation partagée pour chaque phase.",
        },
        { "questionNumber": 'Q05',
          "text": "Les projets sont-ils évalués via des critères de sélection clairs ?",
          "reference": "ISO 56007 §6.4 – Validation, testing and selection",
          "tipNo": "Définissez des critères objectifs (ROI, alignement stratégique, maturité technologique) pour évaluer et sélectionner les idées.",
          "tipPartial": "Mettez en place un système de scoring multicritères intégré à un outil numérique pour faciliter la priorisation des projets.",
        },
        {  "questionNumber": 'Q06',

          "text": "Disposez-vous d’un comité ou d’une gouvernance dédiée à l’innovation ?",
          "reference": "AFNOR XP X50-275 – Évaluation du dispositif de gouvernance",
          "tipNo": "Établissez un comité ou une gouvernance dédiée à l’innovation pour piloter efficacement les projets et assurer leur suivi.",
          "tipPartial": "Intégrez à la gouvernance des profils variés issus de différents départements pour enrichir la prise de décision.",
        },
        {          "questionNumber": 'Q07',

          "text": "Participez-vous à des appels à projets ou des programmes collaboratifs ?",
          "reference": "ISO 56003 – Innovation partnerships",
          "tipNo": "Encouragez la participation à des appels à projets et programmes collaboratifs afin d’étendre vos capacités et ressources d’innovation.",
          "tipPartial": "Identifiez des appels à projets en lien avec vos domaines stratégiques et créez une veille structurée dédiée aux opportunités externes.",
        }
      ]
    },
    {
      "title": "Culture, leadership et compétences",
      "questions": [
        {
          "questionNumber": 'Q08',

          "text": "L’innovation est-elle intégrée à la culture de votre organisation ?",
          "reference": "ISO 56002 §4.4.2 et §7.2 – Culture and competence",
          "tipNo": "Renforcez la culture de l’innovation à travers des valeurs partagées, des rituels internes et la reconnaissance des initiatives innovantes.",
          "tipPartial": "Diffusez des récits inspirants d’initiatives internes pour incarner concrètement la culture d’innovation au quotidien.",
        },
        {          "questionNumber": 'Q09',

          "text": "L’échec est-il considéré comme un apprentissage dans vos projets ?",
          "reference": "ISO 56007 §4.6 – Apprentissage par itération",
          "tipNo": "Valorisez les enseignements tirés des échecs comme opportunités d’apprentissage et intégrez-les dans les retours d’expérience.",
          "tipPartial": "Organisez des revues post-mortem de projets afin de capitaliser sur les apprentissages et partager les retours d’expérience.",
        },
        {
          "text": "Avez-vous un plan de formation ou de montée en compétences lié à l’innovation ?",
          "reference": "ISO 56002 §7.2 – Development of innovation competencies",
          "tipNo": "Mettez en œuvre un plan de développement des compétences en innovation : formations, mentorat, certifications spécialisées, etc.",
          "tipPartial": "Intégrez l’innovation dans les plans de développement individuel via des modules spécifiques, des parcours internes ou des immersions.",
          "questionNumber": 'Q10'
        }
      ]
    },
    {
      "title": "Exploration, méthodes et outils",
      "questions": [
        {   "questionNumber": 'Q11',

          "text": "Intégrez-vous l’exploration (veille, tendances, signaux faibles) dans vos pratiques ?",
          "reference": "ISO 56007 §6.2.3 – Inspiring opportunities and ideas",
          "tipNo": "Organisez une veille active sur les tendances, technologies émergentes et signaux faibles, avec un partage structuré des insights.",
          "tipPartial": "Impliquez différents métiers dans l’exploration pour capter des signaux variés et enrichir la détection d’opportunités.",
        },
        {          "questionNumber": 'Q12',

          "text": "Utilisez-vous des méthodes agiles ou centrées utilisateur (design thinking, lean startup) ?",
          "reference": "ISO 56007 §6.3.3 – Concept generation",
          "tipNo": "Adoptez des méthodes agiles et centrées utilisateur (Design Thinking, Lean Startup) pour expérimenter rapidement et impliquer les parties prenantes.",
          "tipPartial": "Formez vos équipes aux méthodes agiles par la pratique à travers des ateliers, sprints ou labs internes réguliers.",
        },
        {          "questionNumber": 'Q13',

          "text": "Utilisez-vous des outils numériques de gestion de l’innovation (plateformes, tableaux de bord, etc.) ?",
          "reference": "ISO 56002 §7.6 – Tools and methods",
          "tipNo": "Implémentez des outils numériques collaboratifs pour gérer le portefeuille d’innovation, les idées et le suivi des indicateurs.",
          "tipPartial": "Choisissez des outils adaptés à votre taille et votre maturité en innovation pour favoriser l’adoption et l’impact.",
        },
        {          "questionNumber": 'Q14',

          "text": "Disposez-vous d’un budget spécifiquement alloué à l’innovation ?",
          "reference": "ISO 56002 §7.1.5 – Financial resources",
          "tipNo": "Allouez un budget dédié à l’innovation pour financer les idées, prototypes, expérimentations et partenariats extérieurs.",
          "tipPartial": "Prévoyez un budget flexible pour soutenir les phases d’expérimentation rapide et favoriser les prises d’initiative.",
        }
      ]
    },
    {
      "title": "Mesure, évaluation et pilotage de la performance",
      "questions": [
        {          "questionNumber": 'Q15',

          "text": "Avez-vous des indicateurs pour suivre les projets d’innovation (ROI, TRL, time-to-market) ?",
          "reference": "ISO 56008 §6.4.1 – Innovation concept validation metrics",
          "tipNo": "Définissez des indicateurs clés (KPIs) pour suivre l'avancement et l’impact des projets d’innovation (ex : TRL, ROI, time-to-market).",
          "tipPartial": "Adaptez vos indicateurs à la nature des projets (exploration, rupture, incrémental) pour évaluer la performance de manière pertinente.",
        },
        {          "questionNumber": 'Q16',

          "text": "Évaluez-vous régulièrement la performance globale du système d’innovation ?",
          "reference": "ISO 56008 §9.3 – Improving the measurement framework",
          "tipNo": "Évaluez régulièrement l’efficacité de votre système d’innovation pour ajuster vos pratiques, processus et moyens mobilisés.",
          "tipPartial": "Appuyez-vous sur des audits croisés ou revues externes pour objectiver l’évaluation et faire progresser le système d’innovation.",
        },
        {          "questionNumber": 'Q17',

          "text": "Utilisez-vous des tableaux de bord ou scorecards pour piloter le portefeuille de projets ?",
          "reference": "ISO 56008 §8.3 – Innovation Portfolio Scorecards",
          "tipNo": "Utilisez des tableaux de bord dynamiques et des scorecards pour visualiser et piloter l’ensemble de votre portefeuille d’innovation.",
          "tipPartial": "Créez des visualisations claires et évolutives pour aider à la priorisation stratégique et au suivi opérationnel du portefeuille.",
        }
      ]
    },
    {
      "title": "Ouverture, parties prenantes et co-innovation",
      "questions": [
        {          "questionNumber": 'Q18',

          "text": "Travaillez-vous avec des startups, universités ou centres de recherche ?",
          "reference": "ISO 56002 §4.4.3 – Collaboration with external parties",
          "tipNo": "Nouez des partenariats actifs avec des startups, laboratoires de recherche, clusters ou universités pour enrichir votre écosystème d’innovation.",
          "tipPartial": "Cartographiez les acteurs clés de votre écosystème pour identifier les partenariats les plus pertinents à court et moyen terme.",
        },
        {          "questionNumber": 'Q19',

          "text": "Intégrez-vous des utilisateurs ou clients dans vos processus d’innovation ?",
          "reference": "Manuel d’Oslo §6.2.3 – User innovation and co-creation",
          "tipNo": "Impliquez les utilisateurs finaux ou clients dès les phases amont (co-design, tests, retours) pour orienter les solutions vers leurs besoins réels.",
          "tipPartial": "Animez des communautés d’utilisateurs pilotes pour tester vos innovations et recueillir des retours itératifs concrets.",
        },
        {          "questionNumber": 'Q20',

          "text": "Avez-vous une approche d’innovation ouverte (ex : hackathons, plateformes externes, open data) ?",
          "reference": "ISO 56003 + Oslo §6.2.4 – Open innovation practices",
          "tipNo": "Développez une stratégie d’innovation ouverte : hackathons, open data, plateformes collaboratives, appels à idées externes, etc.",
          "tipPartial": "Organisez des challenges d’innovation ouverts pour stimuler l’émergence d’idées externes et enrichir vos projets internes.",
        }
      ]
    }
  
];