import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardComponent } from './user-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserCardComponent],
  exports: [UserCardComponent]
})
export class UserCardModule {}
