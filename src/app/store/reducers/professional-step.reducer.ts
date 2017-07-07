import { Action } from '@ngrx/store';
import { ProfessionalStepState } from 'app/store/states/professional-step.state';

export function professionalStepReducer(state: ProfessionalStepState, action: Action): ProfessionalStepState {
    switch (action.type) {
        case 'LOAD_SITUATION': {
            return action.payload;
        }
        case 'UPDATE_SITUATION': {
            return Object.assign({}, state, action.payload);
        }
        default: return state;
    }
}