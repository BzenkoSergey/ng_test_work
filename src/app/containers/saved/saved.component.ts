import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NEVER } from 'rxjs';

import { UsersService } from '@common/users.service';
import { UserModel } from '@rest/users';

@Component({
  templateUrl: './saved.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SavedComponent implements OnInit {
  items$: ReturnType<UsersService['getSaved']> = NEVER;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit() {
    this.items$ = this.usersService.getSaved();
  }

  userById(_: number, data: { user: UserModel }) {
    return data.user.id;
  }
}
