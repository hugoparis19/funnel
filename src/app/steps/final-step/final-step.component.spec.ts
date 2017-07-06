import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStepComponent } from './final-step.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FunnelManager } from 'app/services/funnel-manager.service';

describe('FinalStepComponent', () => {
  let component: FinalStepComponent;
  let fixture: ComponentFixture<FinalStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ FinalStepComponent ],
      providers: [FunnelManager]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
