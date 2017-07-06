import { Component, OnInit } from '@angular/core';
import { FunnelManager } from 'app/services/funnel-manager.service';
import { Router } from '@angular/router';
import { BaseStepComponent } from 'app/steps/base-step/base-step.component';

@Component({
  selector: 'yuc-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss']
})
export class FinalStepComponent extends BaseStepComponent implements OnInit {

  constructor(router: Router, funnelManager: FunnelManager) {
    super(router, funnelManager);
    this.step = funnelManager.finalStepComponent;
  };

  ngOnInit() {
  }

}
