import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardModule } from '@components/user-card';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,

    UsersRoutingModule,
    UserCardModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule {}
