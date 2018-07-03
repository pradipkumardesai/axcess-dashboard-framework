import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardFrameworkComponent } from "./dashboard-framework.component";

const routes: Routes = [
  {
    path: "",
    component:DashboardFrameworkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DashboardFrameworkRouteModule {}
