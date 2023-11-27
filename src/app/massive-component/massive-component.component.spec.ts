import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassiveComponentComponent } from './massive-component.component';

describe('MassiveComponentComponent', () => {
  let component: MassiveComponentComponent;
  let fixture: ComponentFixture<MassiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassiveComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
