import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBasicoComponent } from './calc-basico.component';

describe('CalcBasicoComponent', () => {
  let component: CalcBasicoComponent;
  let fixture: ComponentFixture<CalcBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcBasicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
