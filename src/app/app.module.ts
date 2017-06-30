import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessionalSituationStepComponent } from './steps/professional-situation-step/professional-situation-step.component';
import { EmailStepComponent } from './steps/email-step/email-step.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalSituationStepComponent,
    EmailStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
