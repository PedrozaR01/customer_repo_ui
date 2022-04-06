import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorUpdateComponent } from './processor-update.component';

describe('ProcessorUpdateComponent', () => {
  let component: ProcessorUpdateComponent;
  let fixture: ComponentFixture<ProcessorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
