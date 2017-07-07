import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { emailStepReducer } from 'app/store/reducers/email-step.reducer';
import { professionalStepReducer } from 'app/store/reducers/professional-step.reducer';

export default compose(combineReducers)({
    emailStep: emailStepReducer,
    professionalStep: professionalStepReducer
});