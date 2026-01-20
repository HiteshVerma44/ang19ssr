import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { InputTextComponent } from 'src/app/shared/ui/input-text/input-text.component';
// import { FormShellComponent } from 'src/app/shared/form/form-shell/form-shell.component';
import { InputTextComponent } from '../../shared/ui/input-text/input-text.component';
import { FormShellComponent } from '../../shared/form/form-shell/form-shell.component';
import { SolarFormLogicService } from './solar-form.logic.service';

@Component({
  selector: 'app-add-solar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    FormShellComponent,
  ],
  template: `
    <app-form-shell
      [form]="form"
      (submit)="submit()"
      (reset)="reset()">

      <app-input-text
        label="Plant Name"
        controlName="name"
        [form]="form">
      </app-input-text>

      <app-input-text
        label="Capacity (kW)"
        controlName="capacity"
        [form]="form">
      </app-input-text>

    </app-form-shell>
  `,
})
export class AddSolarComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private logic: SolarFormLogicService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      capacity: [null, Validators.required],
      inspectionRequired: [false],
      connectionType: [''],
      inverterCapacity: [''],
    });

    this.form.valueChanges.subscribe(() => {
      this.logic.applyRules(this.form);
      this.logic.applyConditionalValidation(this.form);
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Solar Form Data', this.form.value);
  }

  reset() {
    this.form.reset();
  }
}
