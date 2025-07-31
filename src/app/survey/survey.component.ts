import { Component } from '@angular/core';
import { SURVEY, SurveyCategory } from '../survey-data';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  survey: SurveyCategory[] = SURVEY;
  answers: number[][] = this.survey.map(cat => Array(cat.questions.length).fill(null));
  showIntro = true;
  showResultPage = false;
  showStatsPage = false;
  animatedScore = 0;

  stats = {
    fonction: '',
    fonctionAutre: '',
    genre: '',
    implication: '',
    taille: '',
    localisation: '',
    secteur: ''
  };

  secteurs = [
    'A — Agriculture, sylviculture et pêche',
    'B — Industries extractives',
    'C — Industrie manufacturière',
    'D — Production et distribution d\'électricité, de gaz, de vapeur et d\'air conditionné',
    'E — Production et distribution d\'eau ; assainissement, gestion des déchets et dépollution',
    'F — Construction',
    'G — Commerce ; réparation d\'automobiles et de motocycles',
    'H — Transports et entreposage',
    'I — Hébergement et restauration',
    'J — Information et communication',
    'K — Activités financières et d\'assurance',
    'L — Activités immobilières',
    'M — Activités spécialisées, scientifiques et techniques',
    'N — Activités de services administratifs et de soutien',
    'O — Administration publique',
    'P — Enseignement',
    'Q — Santé humaine et action sociale',
    'R — Arts, spectacles et activités récréatives',
    'S — Autres activités de services',
    'T — Activités des ménages en tant qu\'employeurs ; activités indifférenciées des ménages',
    'U — Activités extra-territoriales'
  ];

  improvementTips: { [key: string]: string } = {
    // Vision, stratégie et alignement
    "0-0": "Formalisez une stratégie d’innovation claire alignée sur les objectifs globaux de l’organisation et engagez la direction dans sa promotion.",
    "0-1": "Mettez en place une feuille de route dédiée à l’innovation, mise à jour régulièrement, avec jalons et revues périodiques.",
    "0-2": "Rédigez et communiquez une politique d’innovation formelle, visible à tous les niveaux de l'organisation.",
  
    // Gouvernance, processus et pilotage
    "1-0": "Installez des processus standards couvrant le cycle complet d’innovation : idée, validation, développement, lancement.",
    "1-1": "Définissez des critères objectifs (ROI, alignement stratégique, maturité technologique) pour évaluer et sélectionner les idées.",
    "1-2": "Établissez un comité ou une gouvernance dédiée à l’innovation pour piloter efficacement les projets et assurer leur suivi.",
    "1-3": "Encouragez la participation à des appels à projets et programmes collaboratifs afin d’étendre vos capacités et ressources d’innovation.",
  
    // Culture, leadership et compétences
    "2-0": "Renforcez la culture de l’innovation à travers des valeurs partagées, des rituels internes et la reconnaissance des initiatives innovantes.",
    "2-1": "Valorisez les enseignements tirés des échecs comme opportunités d’apprentissage et intégrez-les dans les retours d’expérience.",
    "2-2": "Mettez en œuvre un plan de développement des compétences en innovation : formations, mentorat, certifications spécialisées, etc.",
  
    // Exploration, méthodes et outils
    "3-0": "Organisez une veille active sur les tendances, technologies émergentes et signaux faibles, avec un partage structuré des insights.",
    "3-1": "Adoptez des méthodes agiles et centrées utilisateur (Design Thinking, Lean Startup) pour expérimenter rapidement et impliquer les parties prenantes.",
    "3-2": "Implémentez des outils numériques collaboratifs pour gérer le portefeuille d’innovation, les idées et le suivi des indicateurs.",
    "3-3": "Allouez un budget dédié à l’innovation pour financer les idées, prototypes, expérimentations et partenariats extérieurs.",
  
    // Mesure, évaluation et pilotage de la performance
    "4-0": "Définissez des indicateurs clés (KPIs) pour suivre l'avancement et l’impact des projets d’innovation (ex : TRL, ROI, time-to-market).",
    "4-1": "Évaluez régulièrement l’efficacité de votre système d’innovation pour ajuster vos pratiques, processus et moyens mobilisés.",
    "4-2": "Utilisez des tableaux de bord dynamiques et des scorecards pour visualiser et piloter l’ensemble de votre portefeuille d’innovation.",
  
    // Ouverture, parties prenantes et co-innovation
    "5-0": "Nouez des partenariats actifs avec des startups, laboratoires de recherche, clusters ou universités pour enrichir votre écosystème d’innovation.",
    "5-1": "Impliquez les utilisateurs finaux ou clients dès les phases amont (co-design, tests, retours) pour orienter les solutions vers leurs besoins réels.",
    "5-2": "Développez une stratégie d’innovation ouverte : hackathons, open data, plateformes collaboratives, appels à idées externes, etc."
  };

  getImprovementTips(): string[] {
    const tips: string[] = [];
    this.answers.forEach((cat, catIdx) => {
      cat.forEach((ans, qIdx) => {
        if (ans === -1 || ans === 0) {
          const key = `${catIdx}-${qIdx}`;
          if (this.improvementTips[key]) {
            tips.push(this.improvementTips[key]);
          }
        }
      });
    });
    return tips;
  }

  startSurvey() {
    this.showIntro = false;
    this.showResultPage = false;
    this.showStatsPage = false;
    this.animatedScore = 0;
  }

  showScorePage() {
    this.showStatsPage = false;
    this.showResultPage = true;
    this.animatedScore = 0;
    const finalScore = this.getScore();
    let current = 0;
    const step = finalScore > 0 ? 1 : -1;
    const interval = setInterval(() => {
      if (current !== finalScore) {
        current += step;
        this.animatedScore = current;
      } else {
        clearInterval(interval);
      }
    }, 40);
  }

  submitStats() {
    this.showStatsPage = false;
    this.showResultPage = true;
    this.animatedScore = 0;
    const finalScore = this.getScore();
    let current = 0;
    const step = finalScore > 0 ? 1 : -1;
    const interval = setInterval(() => {
      if (current !== finalScore) {
        current += step;
        this.animatedScore = current;
      } else {
        clearInterval(interval);
      }
    }, 40);
  }

  getScore(): number {
    return this.answers.flat().reduce((acc, val) => acc + (val ?? 0), 0);
  }

  getMaturity(): string {
    const score = this.getScore();
    if (score >= 15) return 'Avancé';
    if (score >= 5) return 'Intermédiaire';
    return 'Débutant';
  }

  allAnsweredForStep(i: number): boolean {
    return this.answers[i].every(a => a !== null);
  }

  reset() {
    this.answers = this.survey.map(cat => Array(cat.questions.length).fill(null));
    this.showIntro = true;
    this.showResultPage = false;
    this.showStatsPage = false;
    this.animatedScore = 0;
    this.stats = {
      fonction: '',
      fonctionAutre: '',
      genre: '',
      implication: '',
      taille: '',
      localisation: '',
      secteur: ''
    };
  }
}