import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSubmissionModalComponent } from './data-submission-modal.component';

describe('DataSubmissionModalComponent', () => {
  let component: DataSubmissionModalComponent;
  let fixture: ComponentFixture<DataSubmissionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSubmissionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataSubmissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
