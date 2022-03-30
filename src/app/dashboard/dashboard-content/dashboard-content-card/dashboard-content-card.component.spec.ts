import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentCardComponent } from './dashboard-content-card.component';

describe('DashboardContentCardComponent', () => {
  let component: DashboardContentCardComponent;
  let fixture: ComponentFixture<DashboardContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardContentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
