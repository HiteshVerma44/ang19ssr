import { Routes } from '@angular/router';
import { AddFeederComponent } from './modules/feeder/add-feeder.component';
import { AddSubstationComponent } from './modules/substation/add-substation.component';

export const routes: Routes = [
  {
    path: 'feeder/add',
    // component: AddFeederComponent
    component: AddSubstationComponent
  },
  {
    path: '',
    redirectTo: 'feeder/add',
    pathMatch: 'full'
  }
];


// import { Routes } from '@angular/router';

// export const routes: Routes = [];
