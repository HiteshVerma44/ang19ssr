import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-error-box',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  template: `
    <mat-error *ngIf="control && control.touched && control.errors">
      <span *ngIf="control.errors['required']">
        This field is required
      </span>
      <span *ngIf="control.errors['min']">
        Value is too small
      </span>
    </mat-error>
  `,
})
export class ErrorBoxComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) controlName!: string;

  get control(): AbstractControl | null {
    return this.form.get(this.controlName);
  }
}
