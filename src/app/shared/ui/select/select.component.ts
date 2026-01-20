import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ErrorBoxComponent } from '../error-box/error-box.component';

export interface SelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
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

      <mat-select [formControlName]="controlName">
        <mat-option *ngFor="let opt of options" [value]="opt.value">
          {{ opt.label }}
        </mat-option>
      </mat-select>

      <app-error-box
        [form]="form"
        [controlName]="controlName">
      </app-error-box>
    </mat-form-field>
  `,
})
export class SelectComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) form!: FormGroup;
  @Input() options: SelectOption[] = [];
}
