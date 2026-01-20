import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ErrorBoxComponent } from '../error-box/error-box.component';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ErrorBoxComponent
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  template: `
    <mat-form-field appearance="outline" class="w-100">
      <mat-label>{{ label }}</mat-label>

      <input
        matInput
        [matDatepicker]="picker"
        [formControlName]="controlName" />

      <mat-datepicker-toggle
        matSuffix
        [for]="picker">
      </mat-datepicker-toggle>

      <mat-datepicker #picker></mat-datepicker>

      <app-error-box
        [form]="form"
        [controlName]="controlName">
      </app-error-box>
    </mat-form-field>
  `,
})
export class DatePickerComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) form!: FormGroup;
}
