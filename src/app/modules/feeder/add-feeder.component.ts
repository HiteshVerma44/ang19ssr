import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { InputTextComponent } from "../../shared/ui/input-text/input-text.component";
import { SelectComponent } from "../../shared/ui/select/select.component";
import { DatePickerComponent } from "../../shared/ui/date-picker/date-picker.component";
import { FormShellComponent } from "../../shared/form/form-shell/form-shell.component";
import { Component } from "@angular/core";

@Component({
  selector: 'app-add-feeder',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    SelectComponent,
    DatePickerComponent,
    FormShellComponent
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">

      <app-form-shell>

        <app-input-text
          label="Feeder Name"
          controlName="feederName"
          [form]="form">
        </app-input-text>

        <app-select
          label="Feeder Type"
          controlName="feederType"
          [form]="form"
          [options]="feederTypes">
        </app-select>

        <app-date-picker
          label="Commission Date"
          controlName="commissionDate"
          [form]="form">
        </app-date-picker>

      </app-form-shell>

    </form>
  `,
})
export class AddFeederComponent {
  form!: FormGroup;

  feederTypes = [
    { label: 'Urban', value: 'URBAN' },
    { label: 'Rural', value: 'RURAL' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      feederName: ['', Validators.required],
      feederType: ['', Validators.required],
      commissionDate: [null, Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

// import { InputTextComponent } from '../../shared/ui/input-text/input-text.component';
// import { SelectComponent } from '../../shared/ui/select/select.component';
// import { DatePickerComponent } from '../../shared/ui/date-picker/date-picker.component';
// import { FormShellComponent } from '../../shared/form/form-shell/form-shell.component';

// @Component({
//   selector: 'app-add-feeder',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     InputTextComponent,
//     SelectComponent,
//     DatePickerComponent,
//     FormShellComponent
//   ],
//   template: `
//     <app-form-shell   *ngIf="form" [form]="form" (submit)="submit()">

//       <app-input-text
//         label="Feeder Name"
//         controlName="feederName"
//         [form]="form">
//       </app-input-text>

//       <app-select
//         label="Feeder Type"
//         controlName="feederType"
//         [form]="form"
//         [options]="feederTypes">
//       </app-select>

//       <app-date-picker
//         label="Commission Date"
//         controlName="commissionDate"
//         [form]="form">
//       </app-date-picker>

//     </app-form-shell>
//   `,
// })
// export class AddFeederComponent {
//   form!: FormGroup;

//   feederTypes = [
//     { label: 'Urban', value: 'URBAN' },
//     { label: 'Rural', value: 'RURAL' },
//   ];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       feederName: ['', Validators.required],
//       feederType: ['', Validators.required],
//       commissionDate: [null, Validators.required],
//     });
//   }
  
//   submit() {
//     if (this.form.invalid) {
//       this.form.markAllAsTouched();
//       return;
//     }
//     console.log(this.form.value);
//   }
// }
