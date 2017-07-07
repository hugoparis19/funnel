import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailStepState } from 'app/store/states/email-step.state';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class EmailStepService {
    constructor(private store: Store<EmailStepState>) { }

    loadEmail(): Observable<any> {
        return this.store.select('emailStep')
            .do(res => console.log(res))
            .filter(res => res !== undefined);
    }

    updateEmail(newVal: any) {
        this.store.dispatch({
            type: 'UPDATE_EMAIL',
            payload: newVal
        });
    }
}