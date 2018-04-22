import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AraLogoComponent } from './ara-logo.component';

describe('AraLogoComponent', () => {
  let component: AraLogoComponent;
  let fixture: ComponentFixture<AraLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AraLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AraLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
