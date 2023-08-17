import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardModule } from '@components/user-card';

import { SavedRoutingModule } from './saved-routing.module';
import { SavedComponent } from './saved.component';

@NgModule({
  imports: [
    CommonModule,

    SavedRoutingModule,
    UserCardModule
  ],
  declarations: [SavedComponent],
  exports: [SavedComponent]
})
export class SavedModule {}
