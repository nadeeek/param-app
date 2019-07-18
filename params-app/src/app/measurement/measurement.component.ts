import { Component, OnInit } from "@angular/core";
import { MeasurementService } from "../services/measurement.service";
import { Measurement } from "../models/measurement";
import { ParameterService } from "../services/parameter.service";
import { Parameter } from "../models/parameter";
import { ProfileService } from "../services/profile.service";
import { Profile } from "../models/profile";

@Component({
  selector: "app-measurement",
  templateUrl: "./measurement.component.html",
  styleUrls: ["./measurement.component.css"]
})
export class MeasurementComponent implements OnInit {

  measurements: Measurement[] = [];
  filterResults: any[];
  parameters: Parameter[];
  profiles: Profile[];

  constructor(
    private measurementService: MeasurementService,
    private parameterService: ParameterService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getAllMeasurements();
    this.getAllParameters();
    this.getAllProfile();
  }

  getAllMeasurements(): void {
    this.measurementService.getAllMeasurement().subscribe(data => {
      this.measurements = this.filterResults = data;
    });
  }

  getAllParameters(): void {
    this.parameterService.getAllParameters().subscribe(data => {
      this.parameters = data;
      // console.log(this.profiles);
    });
  }

  getAllProfile(): void {
    this.profileService.getAllProfiles().subscribe(data => {
      this.profiles = data;
      // console.log(this.profiles);
    });
  }

  filter(query: string) {
    this.filterResults = (query) ?
      this.measurements.filter(m => m.parameter.toLowerCase().includes(query.toLowerCase())) :
      this.measurements;
  }

  onProfileChange(profile: String) {
    console.log(profile);

    this.filterResults = (profile && profile !== '0') ?
      this.measurements.filter(m => m.profile.toLowerCase().includes(profile.toLowerCase())) :
      this.measurements;

  }

  onParameterChange(parameter: String) {
    console.log(parameter);

    this.filterResults = (parameter && parameter !== '0') ?
      this.measurements.filter(m => m.parameter.toLowerCase().includes(parameter.toLowerCase())) :
      this.measurements;
  }
}
