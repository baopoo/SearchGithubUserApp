import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitItemComponent } from './commit-item.component';

describe('CommitItemComponent', () => {
  let component: CommitItemComponent;
  let fixture: ComponentFixture<CommitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
