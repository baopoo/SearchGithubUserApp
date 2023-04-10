import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchComponent } from './search.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    SearchFormComponent,
    SearchResultComponent,
    SearchComponent,
    UserInfoComponent,
  ],
  imports: [CommonModule, SearchRoutingModule, FormsModule, ShareModule],
})
export class SearchModule {}
