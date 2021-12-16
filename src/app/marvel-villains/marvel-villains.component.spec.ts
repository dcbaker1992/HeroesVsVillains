import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelVillainsComponent } from './marvel-villains.component';

describe('MarvelVillainsComponent', () => {
  let component: MarvelVillainsComponent;
  let fixture: ComponentFixture<MarvelVillainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelVillainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelVillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
