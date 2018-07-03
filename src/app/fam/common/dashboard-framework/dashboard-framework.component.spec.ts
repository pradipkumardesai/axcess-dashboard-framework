import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFrameworkComponent } from './dashboard-framework.component';

describe('DashboardFrameworkComponent', () => {
  let component: DashboardFrameworkComponent;
  let fixture: ComponentFixture<DashboardFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
