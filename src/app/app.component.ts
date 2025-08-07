import { Component } from '@angular/core';
import { SurveyModule } from './survey/survey.module'; // or import { SurveyComponent } from './survey/survey.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SurveyModule,HttpClientModule], // or [SurveyComponent]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }