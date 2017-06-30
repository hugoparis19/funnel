import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'yuc-email-step',
  templateUrl: './email-step.component.html',
  styleUrls: ['./email-step.component.scss']
})
export class EmailStepComponent implements OnInit {

  stepFormGroup: FormGroup;
  emailForm: FormControl;
  emailMessage: string;

  private validationMessages = {
    required: 'Champ obligatoire : merci de le renseigner.',
    email: 'Please enter a valid email address.'
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.emailForm = new FormControl('', [Validators.required, Validators.email]);

    this.stepFormGroup = new FormGroup({
      email: this.emailForm
    });

    this.emailForm.valueChanges.debounceTime(1000).subscribe(value =>
      this.setMessage(this.emailForm));
  }

  next(formValues) {
    this.router.navigate(['professionalsituation']);
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }

}
