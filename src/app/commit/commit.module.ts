import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitRoutingModule } from './commit-routing.module';
import { CommitComponent } from './commit.component';
import { CommitItemComponent } from './components/commit-item/commit-item.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [CommitComponent, CommitItemComponent],
  imports: [CommonModule, CommitRoutingModule, ShareModule],
})
export class CommitModule {}
