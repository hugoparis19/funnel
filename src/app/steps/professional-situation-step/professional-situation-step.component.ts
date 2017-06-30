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

  stepGroup: FormGroup;
  activitySectorForm: FormControl;
  professionForm: FormControl;
  activitySectorMessage: string;
  professionMessage: string;

  private validationMessages = {
    required: 'Champ obligatoire : merci de le renseigner.'
  };

  activitySectors: any; // to type
  professions: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.activitySectorForm = new FormControl('0', [Validators.required]);
    this.professionForm = new FormControl('0', [Validators.required]);

    this.stepGroup = new FormGroup({
      activitySector: this.activitySectorForm,
      profession: this.professionForm
    });

    // this.activitySectorForm.valueChanges.debounceTime(1000).subscribe(value =>
    //   this.setMessage(this.activitySectorForm));

    this.activitySectors = [
      {
        id: 0,
        label: 'choose ...'
      },
      {
        id: 1,
        label: 'public'
      },
      {
        id: 2,
        label: 'private'
      }
    ];

    this.professions = [
      {
        id: 0,
        label: 'choose ...'
      },
      {
        id: 1,
        label: 'job1'
      },
      {
        id: 2,
        label: 'job2'
      }
    ];
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
