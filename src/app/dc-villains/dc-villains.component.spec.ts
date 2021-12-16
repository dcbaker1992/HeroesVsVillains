import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcVillainsComponent } from './dc-villains.component';

describe('DcVillainsComponent', () => {
  let component: DcVillainsComponent;
  let fixture: ComponentFixture<DcVillainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcVillainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcVillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
