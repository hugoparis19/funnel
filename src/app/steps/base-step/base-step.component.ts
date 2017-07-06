import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FunnelManager } from 'app/services/funnel-manager.service';
import { Step } from 'app/services/step.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseStepComponent {
  stepGroup: FormGroup;
  validationMessages = {};
  step: Step;

  constructor( private router: Router, private funnelManager: FunnelManager) { //
  }

  next(formValues) {
    this.router.navigate([this.funnelManager.getNextStep(this.step).path]);
  }

}
