import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotadetalleComponent } from './mascotadetalle.component';

describe('MascotadetalleComponent', () => {
  let component: MascotadetalleComponent;
  let fixture: ComponentFixture<MascotadetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotadetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotadetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
