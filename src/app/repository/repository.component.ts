import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from './service/repository.service';
import { IRepository } from 'src/api/user.dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
})
export class RepositoryComponent {
  userName!: string;
  page: number = 1;
  repoUserData: IRepository[] = [];
  totalData!: number;
  imgUrl!: string;
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private repoService: RepositoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.userName = data['search'];
      this.page = data['page'];
      this.imgUrl = data['imgUrl'];
      if (this.userName && this.page) {
        this.repoService.setImgUrl(this.imgUrl);
        this.getRepository();
      }
    });
  }

  getRepository() {
    this.repoService.getRepoByName(this.userName).subscribe(
      (data: any) => {
        this.repoUserData = data;
        console.log(this.repoUserData);
        this.totalData = this.repoUserData.length;
        this.isLoading = true;
      },
      (error) => {
        console.log(error.message);
        Swal.fire('Oops !', error.message, 'error').then(() => {
          this.router.navigate(['/']);
          this.isLoading = false;
        });
      }
    );
  }
  onChangePage(page: number) {
    this.page = page;
    console.log(this.page);
    this.router.navigate(['/repositories'], {
      relativeTo: this.activatedRoute,
      queryParams: { search: this.userName, page: this.page },
      queryParamsHandling: 'merge',
    });
  }
}
