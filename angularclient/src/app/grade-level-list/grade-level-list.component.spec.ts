import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLevelListComponent } from './grade-level-list.component';

describe('GradeLevelListComponent', () => {
  let component: GradeLevelListComponent;
  let fixture: ComponentFixture<GradeLevelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeLevelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
