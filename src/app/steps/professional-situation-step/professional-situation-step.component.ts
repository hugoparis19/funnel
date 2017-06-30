import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'yuc-professional-situation-step',
  templateUrl: './professional-situation-step.component.html',
  styleUrls: ['./professional-situation-step.component.scss']
})
export class ProfessionalSituationStepComponent implements OnInit {

  stepFormGroup: FormGroup;
  activitySectorForm: FormControl;
  activitySectorMessage: string;

  private validationMessages = {
    required: 'Champ obligatoire : merci de le renseigner.'
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.activitySectorForm = new FormControl('', [Validators.required]);

    this.stepFormGroup = new FormGroup({
      activitySector: this.activitySectorForm
    });

    this.activitySectorForm.valueChanges.debounceTime(1000).subscribe(value =>
      this.setMessage(this.activitySectorForm));
  }

  next(formValues) {
    this.router.navigate(['professionalsituation']);
  }

  setMessage(c: AbstractControl): void {
    this.activitySectorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.activitySectorMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }

}
