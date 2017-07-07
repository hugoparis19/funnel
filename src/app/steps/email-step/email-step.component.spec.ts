import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailStepComponent } from './email-step.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FunnelManager } from 'app/services/funnel-manager.service';
import { Store, StoreModule } from '@ngrx/store';
import { createStubInstance } from 'sinon';
import { EmailStepState } from 'app/store/states/email-step.state';
import tunnelState from '../../store/states/tunnel.state';

describe('EmailStepComponent', () => {
  let component: EmailStepComponent;
  let fixture: ComponentFixture<EmailStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.provideStore(tunnelState)
      ],
      declarations: [EmailStepComponent],
      providers: [FunnelManager]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('the form', () => {
    it('should be invalid when empty', () => {
      expect(component.stepGroup.valid).toBeFalsy();
      expect(component.emailForm.valid).toBeFalsy();

      let errors = {};
      errors = component.emailForm.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('should be valid when enter toto@gmail.com', () => {
      let errors = {};
      const email = component.emailForm;
      email.setValue('toto@gmail.com');
      errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['email']).toBeFalsy();
    });

    it('should be invalid when enter toto', () => {
      let errors = {};
      const email = component.emailForm;
      email.setValue('toto');
      errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['email']).toBeTruthy();
    });
  });
});
