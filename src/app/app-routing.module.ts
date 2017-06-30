import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailStepComponent } from 'app/steps/email-step/email-step.component';
import { ProfessionalSituationStepComponent } from 'app/steps/professional-situation-step/professional-situation-step.component';

const routes: Routes = [
  { path: 'email', component : EmailStepComponent },
  { path: 'professionalsituation', component : ProfessionalSituationStepComponent },
  { path: '',  redirectTo: 'email', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
