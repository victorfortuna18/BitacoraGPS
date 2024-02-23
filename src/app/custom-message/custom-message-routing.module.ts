import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomMessagePage } from './custom-message.page';

const routes: Routes = [
  {
    path: '',
    component: CustomMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomMessagePageRoutingModule {}
