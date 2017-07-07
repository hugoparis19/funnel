import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessionalSituationStepComponent } from './steps/professional-situation-step/professional-situation-step.component';
import { EmailStepComponent } from './steps/email-step/email-step.component';
import { FinalStepComponent } from './steps/final-step/final-step.component';
import { BaseStepComponent } from './steps/base-step/base-step.component';
import { FunnelManager } from 'app/services/funnel-manager.service';
import { StartStepComponent } from './steps/start-step/start-step.component';
import { StoreModule } from '@ngrx/store';
import tunnelState from './store/states/tunnel.state';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalSituationStepComponent,
    EmailStepComponent,
    FinalStepComponent,
    StartStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(tunnelState),
    AppRoutingModule
  ],
  providers: [FunnelManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
