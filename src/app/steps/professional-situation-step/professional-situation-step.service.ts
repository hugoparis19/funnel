import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfessionalStepState } from 'app/store/states/professional-step.state';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfessionalSituationStepService {

    constructor(private store: Store<ProfessionalStepState>) { }

    loadProfessionalSituation(): Observable<any> {
        return this.store.select('professionalStep')
            .do(res => console.log(res))
            .filter(res => res !== undefined);
    };

    updateProfessionalSituation(newVal: any): void {
        return this.store.dispatch({
            type: 'UPDATE_SITUATION',
            payload: newVal
        });
    }
}