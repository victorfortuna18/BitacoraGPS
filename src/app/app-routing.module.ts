import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'list-car/:id',
    loadChildren: () => import('./pages/list-car/list-car.module').then(m => m.ListCarPageModule)
  },
  {
    path: 'last-position/:id',
    loadChildren: () => import('./pages/last-position/last-position.module').then(m => m.LastPositionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'last-position-car/:id',
    loadChildren: () => import('./last-position-car/last-position-car.module').then(m => m.LastPositionCarPageModule)
  },
  {
    path: 'list-car-actions/:id',
    loadChildren: () => import('./list-car-actions/list-car-actions.module').then(m => m.ListCarActionsPageModule)
  },
  {
    path: 'list-car-report/:id',
    loadChildren: () => import('./list-car-report/list-car-report.module').then(m => m.ListCarReportPageModule)
  },
  {
    path: 'car-report',
    loadChildren: () => import('./car-report/car-report.module').then(m => m.CarReportPageModule)
  },
  {
    path: 'car-report-search/:id',
    loadChildren: () => import('./car-report-search/car-report-search.module').then(m => m.CarReportSearchPageModule)
  },
  {
    path: 'list-car-actions-custom/:id',
    loadChildren: () => import('./list-car-actions-custom/list-car-actions-custom.module').then(m => m.ListCarActionsCustomPageModule)
  },
  {
    path: 'custom-message',
    loadChildren: () => import('./custom-message/custom-message.module').then( m => m.CustomMessagePageModule)
  }
];



/* const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
]; */

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
