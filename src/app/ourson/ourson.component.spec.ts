import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OursonComponent } from './ourson.component';

describe('OursonComponent', () => {
  let component: OursonComponent;
  let fixture: ComponentFixture<OursonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OursonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OursonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
