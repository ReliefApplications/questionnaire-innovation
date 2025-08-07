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

  

  getImprovementTips(): string[] {
    const tips: string[] = [];
    this.survey.forEach((cat, catIdx) => {
      cat.questions.forEach((q, qIdx) => {
        const answer = this.answers[catIdx][qIdx];
        if (answer === -1 && q.tipNo) {
          tips.push(q.tipNo);
        } else if (answer === 0 && q.tipPartial) {
          tips.push(q.tipPartial);
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
  
    // Append score and maturity
    formData.append(entryIds[index++], String(this.getScore() ?? ''));
    formData.append(entryIds[index++], this.getMaturity() ?? '');
    formData.append(entryIds[index++], this.stats.email ?? '');

  
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