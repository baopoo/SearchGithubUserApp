import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/api/user.dto';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  @Input() page: number = 1;
  @Input() loading = false;
  @Input() userData!: IUser[];
  @Input() userName!: string;
  @Input() totalData!: number;
  @Output() changePage = new EventEmitter<number>();
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {}
  onChangePage(page: number) {
    this.changePage.emit(page);
  }
  onSearchRepoUser(user: IUser) {
    this.router.navigate(['repositories'], {
      relativeTo: this.activatedRoute,
      queryParams: { search: user.login, page: 1, imgUrl: user.avatar_url },
      queryParamsHandling: 'merge',
    });
  }
}
