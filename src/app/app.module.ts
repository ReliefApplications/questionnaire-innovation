import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SurveyModule } from './survey/survey.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    SurveyModule,
    AppComponent // <-- Add here
  ],
  bootstrap: []
})
export class AppModule { }