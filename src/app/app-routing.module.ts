import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'new',
        component: UserFormComponent
      },
      {
        path: ':id',
        component: UserDetailComponent
      }
    ]
  },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
