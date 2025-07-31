import { Component } from '@angular/core';
import { SurveyModule } from './survey/survey.module'; // or import { SurveyComponent } from './survey/survey.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SurveyModule], // or [SurveyComponent]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }