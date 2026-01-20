import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorBoxComponent } from '../error-box/error-box.component';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, ErrorBoxComponent],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  template: `
    <mat-form-field appearance="outline" class="w-100">ng s
      <mat-label>{{ label }}</mat-label>
      <input matInput [formControlName]="controlName" />
      <app-error-box
        [form]="form"
        [controlName]="controlName">
      </app-error-box>
    </mat-form-field>
  `,
})
export class InputTextComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() form!: FormGroup;
}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-input-text',
//   imports: [],
//   templateUrl: './input-text.component.html',
//   styleUrl: './input-text.component.scss'
// })
// export class InputTextComponent {

// }
