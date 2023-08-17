import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./containers/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'saved',
    loadChildren: () => import('./containers/saved/saved.module').then(m => m.SavedModule)
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
