import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiaddproductComponent } from './admiaddproduct.component';

describe('AdmiaddproductComponent', () => {
  let component: AdmiaddproductComponent;
  let fixture: ComponentFixture<AdmiaddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiaddproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
