import { Component } from '@angular/core';
import { SearchService } from './service/search.service';
import { ISearchResponse, IUser } from 'src/api/user.dto';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  userData: IUser[] = [];
  totalData!: number;
  page: number = 1;
  userName!: string;
  loading = false;
  constructor(
    private userService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.userName = data.search;
      this.page = data.page;
      if (this.userName) {
        this.getUsers();
      } else {
        this.userData = [];
      }
    });
  }

  onClickSearchUser(userName: string) {
    this.page = 1;
    this.userName = userName;
    this.getUsers();
  }
  changePage(page: number) {
    this.page = page;
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService.getUserByName(this.userName, this.page).subscribe(
      (data: ISearchResponse) => {
        this.userData = data.items;
        this.totalData = Math.min(data.total_count, 1000);
        this.loading = false;
        console.log(this.userData);
      },
      (error) => {
        console.log(error.message);
        Swal.fire('Oops !', error.message, 'error').then(() => {
          this.router.navigate(['/']);
          this.loading = false;
        });
      }
    );
    this.onDisplayUrl();
  }

  onDisplayUrl() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { search: this.userName, page: this.page },
      queryParamsHandling: 'merge',
    });
  }
}
