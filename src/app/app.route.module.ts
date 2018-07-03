import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: "app/fam/dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "dashboard-framework",
    loadChildren: "app/fam/common/dashboard-framework/dashboard-framework.module#DashboardFrameworkModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouteModule {}
