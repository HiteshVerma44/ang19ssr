import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class SolarFormLogicService {

  applyRules(form: FormGroup) {
    const capacity = form.get('capacity')?.value;

    if (capacity > 10) {
      form.get('inspectionRequired')?.setValue(true);
    }
  }

  applyConditionalValidation(form: FormGroup) {
    const type = form.get('connectionType')?.value;

    const inverter = form.get('inverterCapacity');
    if (type === 'HT') {
      inverter?.setValidators([Validators.required]);
    } else {
      inverter?.clearValidators();
    }
    inverter?.updateValueAndValidity();
  }
}
