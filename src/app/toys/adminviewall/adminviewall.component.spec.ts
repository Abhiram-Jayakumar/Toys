import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewallComponent } from './adminviewall.component';

describe('AdminviewallComponent', () => {
  let component: AdminviewallComponent;
  let fixture: ComponentFixture<AdminviewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
