import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BaseStepComponent } from './base-step.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FunnelManager } from 'app/services/funnel-manager.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step } from 'app/services/step.model';
import { Router } from '@angular/router';

describe('BaseStepComponent', () => {
  let component: BaseStepComponent;
  const dummyStep: Step = new Step(9865, 'dummy');
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  let FunnelManagerStub: any;

  beforeEach(() => {
    FunnelManagerStub = {
      getNextStep: jasmine.createSpy('getNextStep').and.returnValue(dummyStep)
    };
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: Router, useValue: router },
        { provide: FunnelManager, useValue: FunnelManagerStub },
        BaseStepComponent]
    });
    component = TestBed.get(BaseStepComponent);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('when call next', () => {
    beforeEach(() => {
      component.next(null);
    });

    it('should call router navigate once', () => {
      expect(router.navigate).toHaveBeenCalledWith([dummyStep.path]);
      expect(router.navigate.calls.count()).toEqual(1);
    });

    it('should call FunnelManager getNextStep once', () => {
      expect(FunnelManagerStub.getNextStep.calls.count()).toEqual(1); // !!!!!!!!
    });
  });

});

