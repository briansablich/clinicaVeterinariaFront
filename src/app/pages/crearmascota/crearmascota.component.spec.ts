import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmascotaComponent } from './crearmascota.component';

describe('CrearmascotaComponent', () => {
  let component: CrearmascotaComponent;
  let fixture: ComponentFixture<CrearmascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearmascotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
