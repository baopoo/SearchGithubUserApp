import { Component, Input } from '@angular/core';
import { IUser } from 'src/api/user.dto';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  @Input() user!: IUser;
  constructor() {}
}
