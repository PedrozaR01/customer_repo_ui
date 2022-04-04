import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorFormComponent } from './processor-form.component';

describe('ProcessorFormComponent', () => {
  let component: ProcessorFormComponent;
  let fixture: ComponentFixture<ProcessorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
