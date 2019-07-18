import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MeasurementComponent } from "./measurement/measurement.component";
import { ParameterComponent } from "./parameter/parameter.component";
import { ParameterTypeComponent } from "./parameter-type/parameter-type.component";
import { ProfileComponent } from "./profile/profile.component";
import { AddParameterComponent } from "./add-parameter/add-parameter.component";
import { AddParameterTypeComponent } from "./add-parameter-type/add-parameter-type.component";
import { AddProfileComponent } from "./add-profile/add-profile.component";

const routes: Routes = [
  { path: "", component: MeasurementComponent },
  { path: "parameter/:id", component: AddParameterComponent },
  { path: "parameter", component: ParameterComponent },
  { path: "add-parameter", component: AddParameterComponent },
  { path: "add-param-type", component: AddParameterTypeComponent },
  { path: "add-param-type/:id", component: AddParameterTypeComponent },
  { path: "add-profile", component: AddProfileComponent },
  { path: "param/type", component: ParameterTypeComponent },
  { path: "profile/:id", component: AddProfileComponent },
  { path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
