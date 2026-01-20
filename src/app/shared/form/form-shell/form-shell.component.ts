import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-shell',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <ng-content></ng-content>

    <div class="mt-3 text-end">
      <button mat-raised-button color="primary" type="submit">
        Submit
      </button>
      <button mat-button type="button" (click)="reset.emit()">
        Reset
      </button>
    </div>
  `,
})
export class FormShellComponent {
  @Output() reset = new EventEmitter<void>();
}


// import { Component, Input, Output, EventEmitter, afterNextRender } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-form-shell',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
//   template: `
//     <form [formGroup]="form" (ngSubmit)="submit.emit()">
//       <ng-content></ng-content>

//       <div class="mt-3 text-end">
//         <button mat-raised-button color="primary" type="submit">
//           Submit
//         </button>
//         <button mat-button type="button" (click)="reset.emit()">
//           Reset
//         </button>
//       </div>
//     </form>
//   `,
// })
// export class FormShellComponent {
//   @Input() form!: FormGroup;
//   @Output() submit = new EventEmitter<void>();
//   @Output() reset = new EventEmitter<void>();


//   constructor() {
//     // 🔥 Forces Material to finalize layout
//     afterNextRender(() => {
//       window.dispatchEvent(new Event('resize'));
//     });
//   }
// }



// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-form-shell',
// //   imports: [],
// //   templateUrl: './form-shell.component.html',
// //   styleUrl: './form-shell.component.scss'
// // })
// // export class FormShellComponent {

// // }
