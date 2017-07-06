import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSituationStepComponent } from './professional-situation-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FunnelManager } from 'app/services/funnel-manager.service';

describe('ProfessionalSituationStepComponent', () => {
  let component: ProfessionalSituationStepComponent;
  let fixture: ComponentFixture<ProfessionalSituationStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ ProfessionalSituationStepComponent ],
      providers: [FunnelManager]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSituationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
