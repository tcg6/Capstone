import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentBoxComponent } from './vent-box.component';

describe('VentBoxComponent', () => {
  let component: VentBoxComponent;
  let fixture: ComponentFixture<VentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
