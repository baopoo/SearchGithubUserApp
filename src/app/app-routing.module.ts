import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'repositories',
    loadChildren: () =>
      import('../app/repository/repository.module').then(
        (m) => m.RepositoryModule
      ),
  },
  {
    path: 'commits',
    loadChildren: () =>
      import('../app/commit/commit.module').then((m) => m.CommitModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
