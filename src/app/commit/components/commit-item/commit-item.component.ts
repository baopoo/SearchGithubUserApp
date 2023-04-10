import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICommit } from 'src/api/user.dto';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.css'],
})
export class CommitItemComponent {
  @Input() commit!: ICommit;
  @Input() index!: number;
  @Input() owner!: string;
  @Input() repo!: string;

  constructor(private router: Router) {}

  // onClickViewDetailCommit() {
  //   this.router.navigateByUrl(
  //     `https://github.com/${this.owner}/${this.repo}/commit/${this.commit.sha}`
  //   );
  // }
}
