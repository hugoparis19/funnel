import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import { forbiddenValue } from 'app/validators/forbidden-value.validator';
import { BaseStepComponent } from 'app/steps/base-step/base-step.component';
import { FunnelManager } from 'app/services/funnel-manager.service';


@Component({
  selector: 'yuc-professional-situation-step',
  templateUrl: './professional-situation-step.component.html',
  styleUrls: ['./professional-situation-step.component.scss']
})
export class ProfessionalSituationStepComponent extends BaseStepComponent implements OnInit {

  activitySectorForm: FormControl;
  professionForm: FormControl;
  activitySectorMessage: string;
  professionMessage: string;
  professionsList: any;

  activitySectors = [
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

  professions = [
    {
      id: 0,
      label: 'choose ...',
      sectors: []
    },
    {
      id: 1,
      label: 'job1 - public & private',
      sectors: [1, 2]
    },
    {
      id: 2,
      label: 'job2 - public',
      sectors: [1]
    },
    {
      id: 3,
      label: 'job3 - private',
      sectors: [2]
    }
  ];

  validationMessages = {
    forbiddenValue: 'Champ obligatoire : merci de le renseigner.'
  };

  constructor(router: Router, funnelManager: FunnelManager) {
    super(router, funnelManager);
    this.step = funnelManager.professionalSituationStep;
  };

  ngOnInit() {
    this.activitySectorForm = new FormControl('0', [Validators.required, forbiddenValue(0)]);
    this.professionForm = new FormControl('0', [Validators.required, forbiddenValue(0)]);

    this.stepGroup = new FormGroup({
      activitySector: this.activitySectorForm,
      profession: this.professionForm
    });

    this.activitySectorForm.valueChanges.debounceTime(1000).subscribe(value =>
      this.setMessage(this.activitySectorForm));

    this.professionsList = this.professions.slice(0);
    this.activitySectorForm.valueChanges.subscribe(value =>
      this.updateProfessionsList());
  }

  displayProfession() {
    if (this.activitySectorForm.value !== '0') {
      return true;
    }
    return false;
  }

  updateProfessionsList() {
    if (this.activitySectorForm.value === '0') {
      return;
    }
    this.professionsList = this.professions.filter(p => {
      const sector = +this.activitySectorForm.value;
      return p.sectors.includes(sector);
    });

    this.stepGroup.patchValue({
      profession: this.professionsList[0].id
    });
  }

  setMessage(c: AbstractControl): void {
    this.activitySectorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.activitySectorMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }

}
