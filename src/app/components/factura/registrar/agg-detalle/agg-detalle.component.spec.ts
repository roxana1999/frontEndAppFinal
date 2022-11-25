import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggDetalleComponent } from './agg-detalle.component';

describe('AggDetalleComponent', () => {
  let component: AggDetalleComponent;
  let fixture: ComponentFixture<AggDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
