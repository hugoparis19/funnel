import { Injectable } from '@angular/core';
import { ProfessionalSituationStepComponent } from 'app/steps/professional-situation-step/professional-situation-step.component';
import { EmailStepComponent } from 'app/steps/email-step/email-step.component';
import { FinalStepComponent } from 'app/steps/final-step/final-step.component';
import { Step } from 'app/services/step.model';



@Injectable()
export class FunnelManager {

  steps: Step[];

  emailStep: Step = new Step(1, 'email');
  professionalSituationStep: Step = new Step(2, 'professionalsituation');
  finalStepComponent: Step = new Step(3, 'final');

  constructor() { this.computeSteps(); }

  getFirstStep(): Step {
    this.computeSteps();
    return this.steps[0];
  }

  getNextStep(step: Step): Step {
    this.computeSteps();
    const indexOfCurrentStep = this.steps.map(s => s.path).indexOf(step.path);
    return this.steps[indexOfCurrentStep + 1];
  }

  private computeSteps(): void {

    this.steps = [
      this.emailStep,
      this.professionalSituationStep,
      this.finalStepComponent];

  }



}
