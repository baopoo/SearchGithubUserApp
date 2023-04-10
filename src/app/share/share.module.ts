import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [NgxPaginationModule, LoadingComponent],
})
export class ShareModule {}
