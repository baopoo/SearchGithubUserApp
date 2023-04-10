import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRepository } from 'src/api/user.dto';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css'],
})
export class RepositoryItemComponent {
  @Input() repo!: IRepository;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onClickSearchCommit(repo: IRepository) {
    this.router.navigate(['/commits'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        owner: repo.owner.login,
        repo: repo.name,
      },
      // queryParamsHandling: 'merge',
    });
  }
}
