import { FormControl } from '@angular/forms';

export function forbiddenValue(valueRestricted) {
    return (control: FormControl): { [key: string]: any } => {
        const value = +control.value;
        const no = valueRestricted === value;
        return no ? { 'forbiddenValue': { name } } : null;
    };
}