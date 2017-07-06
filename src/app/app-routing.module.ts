import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailStepComponent } from 'app/steps/email-step/email-step.component';
import { ProfessionalSituationStepComponent } from 'app/steps/professional-situation-step/professional-situation-step.component';
import { FinalStepComponent } from 'app/steps/final-step/final-step.component';
import { StartStepComponent } from 'app/steps/start-step/start-step.component';

const routes: Routes = [
  { path: 'start', component : StartStepComponent },
  { path: 'email', component : EmailStepComponent },
  { path: 'professionalsituation', component : ProfessionalSituationStepComponent },
  { path: 'final', component : FinalStepComponent },
  { path: '',  redirectTo: 'start', pathMatch: 'full' },
  { path: '**',  component: StartStepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
