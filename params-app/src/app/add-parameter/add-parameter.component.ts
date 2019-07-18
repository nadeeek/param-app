import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProfileService } from "../services/profile.service";
import { Profile } from "../models/profile";
import { ParameterTypeService } from "../services/parameter-type.service";
import { ParameterType } from "../models/parameter-type";
import { ParameterService } from "../services/parameter.service";
import { Parameter } from "../models/parameter";
import { take } from "rxjs/operators";

@Component({
  selector: "app-add-parameter",
  templateUrl: "./add-parameter.component.html",
  styleUrls: ["./add-parameter.component.css"]
})
export class AddParameterComponent implements OnInit {
  profiles: Profile[] = [];
  parameterTypes: ParameterType[] = [];
  id;
  parameter = {};
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private profileService: ProfileService,
    private parameterTypeService: ParameterTypeService,
    private parameterService: ParameterService,
    private activatedRouter: ActivatedRoute
  ) {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    this.parameterService
      .getParameterById(this.id)
      .pipe(take(1))
      .subscribe(data => {
        this.parameter = data;
        // console.log(this.parameter);
      });
  }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      name: ["", Validators.required],
      profile: ["", Validators.required],
      param_type: ["", Validators.required]
    });

    this.getAllProfiles();
    this.getAllParameterTypes();
  }

  onSubmit() {
    this.submitted = true;

    if (this.addForm.valid) {
      if (this.id) {
        this.parameterService
          .updateParameter(this.addForm.value, this.id)
          .subscribe(data => {
            // console.log(data);
            this.router.navigate(["/parameter"]);
          });
      } else {
        this.parameterService
          .addParameter(this.addForm.value)
          .subscribe(data => {
            // console.log(data);
            this.router.navigate(["/parameter"]);
          });
      }
    }
  }

  // get the form short name to access the form fields
  get f() {
    return this.addForm.controls;
  }

  getAllProfiles(): void {
    this.profileService.getAllProfiles().subscribe(data => {
      this.profiles = data;
      // console.log(this.profiles);
    });
  }

  getAllParameterTypes(): void {
    this.parameterTypeService.getAllParameterType().subscribe(data => {
      this.parameterTypes = data;
      // console.log(this.parameterTypes);
    });
  }
}
