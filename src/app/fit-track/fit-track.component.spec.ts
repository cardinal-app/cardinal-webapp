import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitTrackComponent } from './fit-track.component';

// FixMe
xdescribe('FitTrackComponent', () => {
  let component: FitTrackComponent;
  let fixture: ComponentFixture<FitTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitTrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
