import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearduenioComponent } from './crearduenio.component';

describe('CrearduenioComponent', () => {
  let component: CrearduenioComponent;
  let fixture: ComponentFixture<CrearduenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearduenioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearduenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
