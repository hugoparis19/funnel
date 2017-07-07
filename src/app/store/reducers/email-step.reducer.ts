import { Action } from '@ngrx/store';
import { EmailStepState } from 'app/store/states/email-step.state';

export function emailStepReducer(state: EmailStepState, action: Action): EmailStepState {

    switch (action.type) {
        case 'LOAD_EMAIL': {
            return action.payload;
        }
        case 'UPDATE_EMAIL': {
            return Object.assign({}, state, action.payload);
        }
        default: return state;
    }

}