import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommitService } from './service/commit.service';
import { ICommit } from 'src/api/user.dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css'],
})
export class CommitComponent {
  owner!: string;
  repo!: string;
  commitsData: ICommit[] = [];
  imgUrl!: string;
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commitService: CommitService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.owner = data['owner'];
      this.repo = data['repo'];
      if (this.owner && this.repo) {
        this.getCommits();
        this.getUser();
        this.isLoading = true;
      }
    });
  }

  getUser() {
    this.commitService.getUser(this.owner).subscribe((data: any) => {
      this.imgUrl = data['avatar_url'];
      console.log(this.imgUrl);
    });
  }

  getCommits() {
    this.commitService.getCommits(this.owner, this.repo).subscribe(
      (data: any) => {
        this.commitsData = data;
        console.log(this.commitsData);
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
}
