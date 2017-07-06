import { Component, OnInit } from '@angular/core';
import { BaseStepComponent } from 'app/steps/base-step/base-step.component';
import { Router } from '@angular/router';
import { FunnelManager } from 'app/services/funnel-manager.service';

@Component({
  selector: 'yuc-start-step',
  templateUrl: './start-step.component.html',
  styleUrls: ['./start-step.component.scss']
})
export class StartStepComponent  implements OnInit {

  constructor(private router: Router, private funnelManager: FunnelManager) {  };

  ngOnInit() {
    const firstStepToGo = this.funnelManager.getFirstStep().path;
    this.router.navigate([firstStepToGo]);
  }

}
