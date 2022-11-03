import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewproComponent } from './adminviewpro.component';

describe('AdminviewproComponent', () => {
  let component: AdminviewproComponent;
  let fixture: ComponentFixture<AdminviewproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
