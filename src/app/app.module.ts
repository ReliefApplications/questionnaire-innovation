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
  // Remove declarations array entirely or leave it empty
  bootstrap: []
})
export class AppModule { }