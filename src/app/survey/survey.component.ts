import { Component, ElementRef, ViewChild } from '@angular/core';
import { SURVEY, SurveyCategory } from '../survey-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  @ViewChild('googleForm') googleForm!: ElementRef<HTMLFormElement>;


  constructor(private http: HttpClient) {}

    formData: { [key: string]: string | number } = {};

  survey: SurveyCategory[] = SURVEY;
  answers: number[][] = this.survey.map(cat => Array(cat.questions.length).fill(null));
  getFlatAnswers(): number[] {
    return this.answers.flat();
    }
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
    secteur: '',
    email:''
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
    // Chapter 1 :  Vision, stratégie et alignement
    "1-1": "Formalisez une stratégie d’innovation claire alignée sur les objectifs globaux de l’organisation et engagez la direction dans sa promotion.",
    "1-2": "Mettez en place une feuille de route dédiée à l’innovation, mise à jour régulièrement, avec jalons et revues périodiques.",
    "1-3": "Rédigez et communiquez une politique d’innovation formelle, visible à tous les niveaux de l'organisation.",

    // Chapter 2 :  Gouvernance, processus et pilotage
    "2-1": "Installez des processus standards couvrant le cycle complet d’innovation : idée, validation, développement, lancement.",
    "2-2": "Définissez des critères objectifs (ROI, alignement stratégique, maturité technologique) pour évaluer et sélectionner les idées.",
    "2-3": "Établissez un comité ou une gouvernance dédiée à l’innovation pour piloter efficacement les projets et assurer leur suivi.",
    "2-4": "Encouragez la participation à des appels à projets et programmes collaboratifs afin d’étendre vos capacités et ressources d’innovation.",

    // Chapter 3 :  Culture, leadership et compétences
    "3-1": "Renforcez la culture de l’innovation à travers des valeurs partagées, des rituels internes et la reconnaissance des initiatives innovantes.",
    "3-2": "Valorisez les enseignements tirés des échecs comme opportunités d’apprentissage et intégrez-les dans les retours d’expérience.",
    "3-3": "Mettez en œuvre un plan de développement des compétences en innovation : formations, mentorat, certifications spécialisées, etc.",

    // Chapter 4 :  Exploration, méthodes et outils
    "4-1": "Organisez une veille active sur les tendances, technologies émergentes et signaux faibles, avec un partage structuré des insights.",
    "4-2": "Adoptez des méthodes agiles et centrées utilisateur (Design Thinking, Lean Startup) pour expérimenter rapidement et impliquer les parties prenantes.",
    "4-3": "Implémentez des outils numériques collaboratifs pour gérer le portefeuille d’innovation, les idées et le suivi des indicateurs.",
    "4-4": "Allouez un budget dédié à l’innovation pour financer les idées, prototypes, expérimentations et partenariats extérieurs.",

    // Chapter 5 :  Mesure, évaluation et pilotage de la performance
    "5-1": "Définissez des indicateurs clés (KPIs) pour suivre l'avancement et l’impact des projets d’innovation (ex : TRL, ROI, time-to-market).",
    "5-2": "Évaluez régulièrement l’efficacité de votre système d’innovation pour ajuster vos pratiques, processus et moyens mobilisés.",
    "5-3": "Utilisez des tableaux de bord dynamiques et des scorecards pour visualiser et piloter l’ensemble de votre portefeuille d’innovation.",

    // Chapter 6 :  Ouverture, parties prenantes et co-innovation
    "6-1": "Nouez des partenariats actifs avec des startups, laboratoires de recherche, clusters ou universités pour enrichir votre écosystème d’innovation.",
    "6-2": "Impliquez les utilisateurs finaux ou clients dès les phases amont (co-design, tests, retours) pour orienter les solutions vers leurs besoins réels.",
    "6-3": "Développez une stratégie d’innovation ouverte : hackathons, open data, plateformes collaboratives, appels à idées externes, etc."
  };

  getImprovementTips(): string[] {
    const tips: string[] = [];
    this.answers.forEach((cat, catIdx) => {
      cat.forEach((ans, qIdx) => {
        if (ans === -1 || ans === 0) {
          const key = `${catIdx + 1}-${qIdx + 1}`;
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
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.sendStatsToGoogleForm();

  }
  sendStatsToGoogleForm(): void {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSc7a9t7ozf_EHiF6KmQBzPXKySnCdlDQJRny_IQsRBLtQCRvg/formResponse';
  
    const entryIds = [
      // q1–q20
      'entry.2119067912', 'entry.1579309812', 'entry.1158252944', 'entry.1468148136', 'entry.1327265150',
      'entry.880436473', 'entry.1626461344', 'entry.609763957', 'entry.189988393', 'entry.726667056',
      'entry.272881266', 'entry.1750132956', 'entry.1732773880', 'entry.1345586694', 'entry.1637446587',
      'entry.145419613', 'entry.1865122160', 'entry.1923341165', 'entry.1090405108', 'entry.1758301203',
      
      // Stats fields (order must match what you want stored in Google Form)
      'entry.2094322027', // fonction
      'entry.1219400843', // fonctionAutre
      'entry.806004759',  // genre
      'entry.553406080',  // implication
      'entry.155918508',  // taille
      'entry.488694374',  // localisation
      'entry.1907583316', // secteur
  
      // score & maturity
      'entry.1575259241', // score
      'entry.414093662',   // maturity
      //email
      'entry.599182817'
    ];
  
    const formData = new URLSearchParams();
  
    // Flatten answers (q1–q20)
    let index = 0;
    this.answers.forEach((category: any) => {
      category.forEach((ans: any) => {
        formData.append(entryIds[index], ans ?? '');
        index++;
      });
    });
  
    formData.append(entryIds[index++], this.stats.fonction ?? '');
    formData.append(entryIds[index++], this.stats.fonctionAutre ?? '');
    formData.append(entryIds[index++], this.stats.genre ?? '');
    formData.append(entryIds[index++], this.stats.implication ?? '');
    formData.append(entryIds[index++], this.stats.taille ?? '');
    formData.append(entryIds[index++], this.stats.localisation ?? '');
    formData.append(entryIds[index++], this.stats.secteur ?? '');
    formData.append(entryIds[index++], this.stats.email ?? '');
  
    // Append score and maturity
    formData.append(entryIds[index++], String(this.getScore() ?? ''));
    formData.append(entryIds[index++], this.getMaturity() ?? '');
  
    this.http.post(url, formData.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'text' 
    }).subscribe({
      next: () => console.log('Form submitted to Google Form successfully ✅'),
      error: (err) => console.error('Error submitting form:', err)
    });
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
      secteur: '',
      email:''
    };
  }

  onStepChange() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToStatsPage() {
    this.showStatsPage = true;
    this.showResultPage = false;
    this.showIntro = false;
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }
}