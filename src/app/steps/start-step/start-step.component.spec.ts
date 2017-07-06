import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStepComponent } from './start-step.component';
import { FunnelManager } from 'app/services/funnel-manager.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('StartStepComponent', () => {
  let component: StartStepComponent;
  let fixture: ComponentFixture<StartStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ StartStepComponent ],
      providers: [FunnelManager]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
