import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NEVER } from 'rxjs';

import { UsersService } from '@common/users.service';
import { UserModel } from '@rest/users';

@Component({
  templateUrl: './users.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  items$: ReturnType<UsersService['get']> = NEVER;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit() {
    this.items$ = this.usersService.get();
  }

  save(user: UserModel) {
    this.usersService.save(user);
  }

  userById(_: number, data: { user: UserModel }) {
    return data.user.id;
  }
}
