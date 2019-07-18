import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ParameterComponent } from "./parameter/parameter.component";
import { ParameterTypeComponent } from "./parameter-type/parameter-type.component";
import { ProfileComponent } from "./profile/profile.component";
import { MeasurementComponent } from "./measurement/measurement.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AddParameterComponent } from "./add-parameter/add-parameter.component";
import { AddParameterTypeComponent } from "./add-parameter-type/add-parameter-type.component";
import { AddProfileComponent } from "./add-profile/add-profile.component";
import { ProfileService } from "./services/profile.service";
import { ParameterService } from "./services/parameter.service";
import { MeasurementService } from "./services/measurement.service";
import { TestFormComponent } from './test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParameterComponent,
    ParameterTypeComponent,
    ProfileComponent,
    MeasurementComponent,
    NavbarComponent,
    AddParameterComponent,
    AddParameterTypeComponent,
    AddProfileComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileService, ParameterService, MeasurementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
