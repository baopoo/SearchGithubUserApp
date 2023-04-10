import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  @Output() onClickSearchUser = new EventEmitter<string>();
  @Input() userName: string = '';
  @Input() checkSearch: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  onClickSearch() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { search: this.userName },
      queryParamsHandling: 'merge',
    });
    this.checkSearch = true;
    this.onClickSearchUser.emit(this.userName);
  }
}
