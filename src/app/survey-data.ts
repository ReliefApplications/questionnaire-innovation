export interface SurveyQuestion {
  text: string;
  reference: string;
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
        text: "Votre organisation a-t-elle formalisé une stratégie d’innovation alignée sur sa stratégie globale ?",
        reference: "ISO 56002 §5.1.4 – “Innovation strategy shall be aligned with the strategic direction.”"
      },
      {
        text: "Disposez-vous d’une feuille de route innovation mise à jour régulièrement ?",
        reference: "ISO 56002 §6.2.2 – Planning to achieve innovation objectives"
      },
      {
        text: "L’innovation fait-elle l’objet d’une politique formelle et communiquée ?",
        reference: "ISO 56002 §5.2.2 – Communication of innovation policy"
      }
    ]
  },
  {
    title: 'Gouvernance, processus et pilotage',
    questions: [
      {
        text: "Avez-vous un processus structuré couvrant l’ensemble du cycle : idée → concept → solution ?",
        reference: "ISO 56002 §8.3.2 à §8.3.6 – Processus d’innovation"
      },
      {
        text: "Les projets sont-ils évalués via des critères de sélection clairs ?",
        reference: "ISO 56007 §6.4 – Validation, testing and selection"
      },
      {
        text: "Disposez-vous d’un comité ou d’une gouvernance dédiée à l’innovation ?",
        reference: "AFNOR XP X50-275 – Évaluation du dispositif de gouvernance"
      },
      {
        text: "Participez-vous à des appels à projets ou des programmes collaboratifs ?",
        reference: "ISO 56003 – Innovation partnerships"
      }
    ]
  },
  {
    title: 'Culture, leadership et compétences',
    questions: [
      {
        text: "L’innovation est-elle intégrée à la culture de votre organisation ?",
        reference: "ISO 56002 §4.4.2 et §7.2 – Culture and competence"
      },
      {
        text: "L’échec est-il considéré comme un apprentissage dans vos projets ?",
        reference: "ISO 56007 §4.6 – Apprentissage par itération"
      },
      {
        text: "Avez-vous un plan de formation ou de montée en compétences lié à l’innovation ?",
        reference: "ISO 56002 §7.2 – Development of innovation competencies"
      }
    ]
  },
  {
    title: 'Exploration, méthodes et outils',
    questions: [
      {
        text: "Intégrez-vous l’exploration (veille, tendances, signaux faibles) dans vos pratiques ?",
        reference: "ISO 56007 §6.2.3 – Inspiring opportunities and ideas"
      },
      {
        text: "Utilisez-vous des méthodes agiles ou centrées utilisateur (design thinking, lean startup) ?",
        reference: "ISO 56007 §6.3.3 – Concept generation"
      },
      {
        text: "Utilisez-vous des outils numériques de gestion de l’innovation (plateformes, tableaux de bord, etc.) ?",
        reference: "ISO 56002 §7.6 – Tools and methods"
      },
      {
        text: "Disposez-vous d’un budget spécifiquement alloué à l’innovation ?",
        reference: "ISO 56002 §7.1.5 – Financial resources"
      }
    ]
  },
  {
    title: 'Mesure, évaluation et pilotage de la performance',
    questions: [
      {
        text: "Avez-vous des indicateurs pour suivre les projets d’innovation (ROI, TRL, time-to-market) ?",
        reference: "ISO 56008 §6.4.1 – Innovation concept validation metrics"
      },
      {
        text: "Évaluez-vous régulièrement la performance globale du système d’innovation ?",
        reference: "ISO 56008 §9.3 – Improving the measurement framework"
      },
      {
        text: "Utilisez-vous des tableaux de bord ou scorecards pour piloter le portefeuille de projets ?",
        reference: "ISO 56008 §8.3 – Innovation Portfolio Scorecards"
      }
    ]
  },
  {
    title: 'Ouverture, parties prenantes et co-innovation',
    questions: [
      {
        text: "Travaillez-vous avec des startups, universités ou centres de recherche ?",
        reference: "ISO 56002 §4.4.3 – Collaboration with external parties"
      },
      {
        text: "Intégrez-vous des utilisateurs ou clients dans vos processus d’innovation ?",
        reference: "Manuel d’Oslo §6.2.3 – User innovation and co-creation"
      },
      {
        text: "Avez-vous une approche d’innovation ouverte (ex : hackathons, plateformes externes, open data) ?",
        reference: "ISO 56003 + Oslo §6.2.4 – Open innovation practices"
      }
    ]
  }
];