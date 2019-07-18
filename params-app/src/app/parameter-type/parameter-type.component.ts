import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ParameterTypeService } from "../services/parameter-type.service";
import { ParameterType } from "../models/parameter-type";

@Component({
  selector: "app-parameter-type",
  templateUrl: "./parameter-type.component.html",
  styleUrls: ["./parameter-type.component.css"]
})
export class ParameterTypeComponent implements OnInit {
  paramTypes: ParameterType[] = [];
  constructor(
    private router: Router,
    private paramTypesService: ParameterTypeService
  ) {}

  ngOnInit() {
    this.getAllParameterTypes();
  }

  addParameterType(): void {
    this.router.navigate(["add-param-type"]);
  }

  getAllParameterTypes(): void {
    this.paramTypesService.getAllParameterType().subscribe(data => {
      this.paramTypes = data;
      console.log(this.paramTypes);
    });
  }

  updateParameterType(parameterType: ParameterType) {
    this.router.navigate(["/add-param-type/" + parameterType.id]);
  }

  deleteParameterType(parameterType: ParameterType) {
    if (!confirm("Are you sure delete this Parameter Type?")) return;
    this.paramTypesService
      .deleteParameterType(parameterType.id)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(["/"]);
      });
  }
}
