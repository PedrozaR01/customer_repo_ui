import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLevelFormComponent } from './grade-level-form.component';

describe('GradeLevelFormComponent', () => {
  let component: GradeLevelFormComponent;
  let fixture: ComponentFixture<GradeLevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeLevelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
