import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SURVEY, SurveyCategory } from '../survey-data';

const COLOR_STOPS = [
  { p: 0, c: [239, 68, 68] },   // Red (0%) - Start
  { p: 50, c: [245, 158, 11] }, // Yellow (50%) - End of R->Y transition
  { p: 75, c: [16, 185, 129] }, // Green (75%) - End of Y->G transition
  { p: 100, c: [59, 130, 246] },// Blue (100%) - End of G->B transition
];

/**
 * Converts a hex color string (e.g., #RRGGBB) to an RGB array [R, G, B].
 * @param hex The hex color string.
 */
function hexToRgb(hex: string): number[] {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

/**
 * Converts an RGB array to a hex color string.
 * @param r Red component (0-255).
 * @param g Green component (0-255).
 * @param b Blue component (0-255).
 */
function rgbToHex(r: number, g: number, b: number): string {
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

/**
 * Creates a slightly lighter/darker version of a hex color for the vertical gradient effect.
 * @param hex The base hex color.
 * @param amount The amount to adjust (e.g., 20 for lighter, -20 for darker).
 * @returns A new hex color string.
 */
function adjustColor(hex: string, amount: number): string {
  const [r, g, b] = hexToRgb(hex);
  const newR = Math.max(0, Math.min(255, r + amount));
  const newG = Math.max(0, Math.min(255, g + amount));
  const newB = Math.max(0, Math.min(255, b + amount));
  return rgbToHex(newR, newG, newB);
}

/**
 * Gets a single, interpolated color (in Hex format) based on the progress percentage.
 * The interpolation happens smoothly across the defined stops (R -> Y -> G -> B).
 * @param percent The progress percentage (0-100).
 * @returns The dynamically calculated hex color string.
 */
function getDynamicColor(percent: number): string {
  // Clamp the percentage to 0-100
  percent = Math.max(0, Math.min(100, percent));

  let startStop = COLOR_STOPS[0];
  let endStop = COLOR_STOPS[COLOR_STOPS.length - 1]; 

  // Find the segment the percentage belongs to
  for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
    if (percent >= COLOR_STOPS[i].p && percent <= COLOR_STOPS[i + 1].p) {
      startStop = COLOR_STOPS[i];
      endStop = COLOR_STOPS[i + 1];
      break;
    }
  }
  
  // If the percentage matches a stop point exactly, return its color
  if (percent === startStop.p) {
      return rgbToHex(startStop.c[0], startStop.c[1], startStop.c[2]);
  }
  if (percent === endStop.p) {
       return rgbToHex(endStop.c[0], endStop.c[1], endStop.c[2]);
  }

  // Calculate normalized position within the segment (0 to 1)
  const segmentRange = endStop.p - startStop.p;
  // Handle segmentRange of 0 defensively (shouldn't happen with the new stops)
  if (segmentRange <= 0) { return rgbToHex(startStop.c[0], startStop.c[1], startStop.c[2]); }

  const normalizedPosition = (percent - startStop.p) / segmentRange;

  // Interpolate R, G, B components
  const r = startStop.c[0] + (endStop.c[0] - startStop.c[0]) * normalizedPosition;
  const g = startStop.c[1] + (endStop.c[1] - startStop.c[1]) * normalizedPosition;
  const b = startStop.c[2] + (endStop.c[2] - startStop.c[2]) * normalizedPosition;

  return rgbToHex(r, g, b);
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
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
    secteur: '',
    email: ''
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

  expandedTips: Set<number> = new Set();

  getImprovementTips(): Array<{tip: string, details?: string, index: number}> {
    const tips: Array<{tip: string, details?: string, index: number}> = [];
    let tipIndex = 0;
    
    this.answers.forEach((cat, catIdx) => {
      cat.forEach((ans, qIdx) => {
        const question = this.survey[catIdx]?.questions[qIdx];
        if (!question) return;
        
        if (ans === -1 && question.tipNo) {
          tips.push({
            tip: question.tipNo,
            details: question.tipNo_details,
            index: tipIndex++
          });
        } else if (ans === 0 && question.tipPartial) {
          tips.push({
            tip: question.tipPartial,
            details: question.tipPartial_details,
            index: tipIndex++
          });
        }
      });
    });
    return tips;
  }

  toggleTipDetails(index: number): void {
    if (this.expandedTips.has(index)) {
      this.expandedTips.delete(index);
    } else {
      this.expandedTips.add(index);
    }
  }

  isTipExpanded(index: number): boolean {
    return this.expandedTips.has(index);
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
    // Send data to Google Forms
    this.sendStatsToGoogleForm();
    
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

  getCategoryScores(): Array<{title: string, score: number, maxScore: number, percentage: number, gradient: string}> {
    return this.survey.map((category, idx) => {
      const categoryAnswers = this.answers[idx];
      const score = categoryAnswers.reduce((acc, val) => acc + (val ?? 0), 0);
      const maxScore = category.questions.length;
      const percentage = ((score + maxScore) / (maxScore * 2)) * 100;
      const roundedPercentage = Math.round(percentage);
      
      // Calculate dynamic gradient for this percentage
      const baseColor = getDynamicColor(roundedPercentage);
      const lighterColor = adjustColor(baseColor, 20);
      const gradient = `linear-gradient(to bottom, ${lighterColor} 0%, ${baseColor} 100%)`;
      
      return {
        title: category.title,
        score: score,
        maxScore: maxScore,
        percentage: roundedPercentage,
        gradient: gradient
      };
    });
  }

  getStrongPoints(): string[] {
    const scores = this.getCategoryScores();
    return scores
      .filter(cat => cat.percentage >= 70)
      .map(cat => cat.title);
  }

  getWeakPoints(): string[] {
    const scores = this.getCategoryScores();
    return scores
      .filter(cat => cat.percentage < 50)
      .map(cat => cat.title);
  }

  allAnsweredForStep(i: number): boolean {
    return this.answers[i].every(a => a !== null);
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

    // Flatten answers array (q1-q20)
    const flatAnswers = this.answers.flat();
    
    // Prepare form data
    const formData = new FormData();
    
    // Add question answers (q1-q20)
    for (let i = 0; i < 20; i++) {
      formData.append(entryIds[i], flatAnswers[i]?.toString() || '');
    }
    
    // Add stats
    formData.append(entryIds[20], this.stats.fonction || '');
    formData.append(entryIds[21], this.stats.fonctionAutre || '');
    formData.append(entryIds[22], this.stats.genre || '');
    formData.append(entryIds[23], this.stats.implication || '');
    formData.append(entryIds[24], this.stats.taille || '');
    formData.append(entryIds[25], this.stats.localisation || '');
    formData.append(entryIds[26], this.stats.secteur || '');
    
    // Add score and maturity
    formData.append(entryIds[27], this.getScore().toString());
    formData.append(entryIds[28], this.getMaturity());
    formData.append(entryIds[29], this.stats.email || ''); // email
    
    // Submit to Google Forms
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    }).then(() => {
      console.log('Data sent to Google Forms successfully');
    }).catch((error) => {
      console.error('Error sending data to Google Forms:', error);
    });
  }

  reset() {
    this.answers = this.survey.map(cat => Array(cat.questions.length).fill(null));
    this.showIntro = true;
    this.showResultPage = false;
    this.showStatsPage = false;
    this.animatedScore = 0;
    this.expandedTips.clear();
    this.stats = {
      fonction: '',
      fonctionAutre: '',
      genre: '',
      implication: '',
      taille: '',
      localisation: '',
      secteur: '',
      email: ''
    };
  }
}