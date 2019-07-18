import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ParameterService } from "../services/parameter.service";
import { Parameter } from "../models/parameter";

@Component({
  selector: "app-parameter",
  templateUrl: "./parameter.component.html",
  styleUrls: ["./parameter.component.css"]
})
export class ParameterComponent implements OnInit {
  parameters: Parameter[] = [];
  constructor(
    private router: Router,
    private parameterService: ParameterService
  ) {}

  ngOnInit() {
    this.getAllParameters();
  }

  addParameter(): void {
    this.router.navigate(["add-parameter"]);
  }

  getAllParameters(): void {
    this.parameterService.getAllParameters().subscribe(data => {
      this.parameters = data;
      console.log(this.parameters);
    });
  }

  deleteParameter(parameter: Parameter) {
    if (!confirm("Are you sure delete this Parameter?")) return;
    this.parameterService.deleteParameter(parameter.id).subscribe(data => {
      console.log(data);
      this.router.navigate(["/"]);
    });
  }

  updateParameter(parameter: Parameter) {
    this.router.navigate(["parameter/" + parameter.id]);
  }
}
