import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import { BaseStepComponent } from 'app/steps/base-step/base-step.component';
import { FunnelManager } from 'app/services/funnel-manager.service';

@Component({
  selector: 'yuc-email-step',
  templateUrl: './email-step.component.html',
  styleUrls: ['./email-step.component.scss']
})
export class EmailStepComponent extends BaseStepComponent implements OnInit {

  emailForm: FormControl;
  emailMessage: string;

  validationMessages = {
    required: 'Champ obligatoire : merci de le renseigner.',
    email: 'Please enter a valid email address.'
  };

  constructor(router: Router, funnelManager: FunnelManager) {
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
  }


  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }

}
