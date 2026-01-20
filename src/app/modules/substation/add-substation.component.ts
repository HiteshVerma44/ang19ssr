import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextComponent } from '../../shared/ui/input-text/input-text.component';
import { SelectComponent } from '../../shared/ui/select/select.component';
import { DatePickerComponent } from '../../shared/ui/date-picker/date-picker.component';
import { FormShellComponent } from '../../shared/form/form-shell/form-shell.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-substation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    // SelectComponent,
    // DatePickerComponent,
    // FormShellComponent,
  ],
  templateUrl: './add-substation.component.html',
})
export class AddSubstationComponent {
    form!: FormGroup;

  substationTypes = [
    { label: 'SubStation Type A', value: 'A' },
    { label: 'SubStation Type B', value: 'B' },
    { label: 'SubStation Type C', value: 'C' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      substationName: ['', Validators.required],
      substationType: ['', Validators.required],
      commissionDate: ['', Validators.required],
    });
  }

  onSubmit(){
    if (this.form.valid) {
      console.log('Substation Data:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
