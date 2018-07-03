import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFrameworkComponent } from './dashboard-framework.component';
import { DashboardFrameworkRouteModule } from './dashboard-framework.route.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardFrameworkRouteModule
  ],
  declarations: [DashboardFrameworkComponent],
  bootstrap:[DashboardFrameworkComponent]
})
export class DashboardFrameworkModule { }
