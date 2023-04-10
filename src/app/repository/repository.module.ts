import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';
import { RepositoryItemComponent } from './components/repository-item/repository-item.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [RepositoryComponent, RepositoryItemComponent],
  imports: [CommonModule, RepositoryRoutingModule, ShareModule],
})
export class RepositoryModule {}
