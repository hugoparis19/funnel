import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import { BaseStepComponent } from 'app/steps/base-step/base-step.component';
import { FunnelManager } from 'app/services/funnel-manager.service';
import { Observable } from 'rxjs/Observable';
import { EmailStepService } from 'app/steps/email-step/email-step.service';

@Component({
  selector: 'yuc-email-step',
  templateUrl: './email-step.component.html',
  styleUrls: ['./email-step.component.scss'],
  providers: [EmailStepService]
})
export class EmailStepComponent extends BaseStepComponent implements OnInit {

  emailForm: FormControl;
  emailMessage: string;

  validationMessages = {
    required: 'Champ obligatoire : merci de le renseigner.',
    email: 'Please enter a valid email address.'
  };

  constructor(router: Router, funnelManager: FunnelManager, private stepService: EmailStepService) {
    super(router, funnelManager);
    this.step = funnelManager.emailStep;
  };

  ngOnInit() {
    this.emailForm = new FormControl('', [Validators.required, Validators.email]);
    this.stepGroup = new FormGroup({
      email: this.emailForm
    });
    this.emailForm.valueChanges.debounceTime(1000).subscribe(value =>
      this.setMessage(this.emailForm));
    this.stepService.loadEmail().subscribe(res => this.stepGroup.patchValue(res));
  }

  goToNextStep() {
    this.stepService.updateEmail(this.stepGroup.value);
    super.next(this.stepGroup.value);
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }
}
