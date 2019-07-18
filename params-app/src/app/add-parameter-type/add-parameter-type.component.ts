import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ParameterTypeService } from "../services/parameter-type.service";
import { take } from "rxjs/operators";

@Component({
  selector: "app-add-parameter-type",
  templateUrl: "./add-parameter-type.component.html",
  styleUrls: ["./add-parameter-type.component.css"]
})
export class AddParameterTypeComponent implements OnInit {
  id;
  parameterType = {};
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private paramTypeService: ParameterTypeService,
    private activatedRouter: ActivatedRoute
  ) {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    this.paramTypeService
      .getParameterTypeById(this.id)
      .pipe(take(1))
      .subscribe(data => {
        this.parameterType = data;
        // console.log(this.parameter);
      });
  }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ["", Validators.required],
      converter: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.addForm.valid) {
      if (this.id) {
        this.paramTypeService
          .updateParameterType(this.addForm.value, this.id)
          .subscribe(data => {
            // console.log(data);
            this.router.navigate(["/param/type"]);
          });
      } else {
        this.paramTypeService
          .addParameterType(this.addForm.value)
          .subscribe(data => {
            // console.log(data);
            this.router.navigate(["/param/type"]);
          });
      }
    }
  }

  // get the form short name to access the form fields
  get f() {
    return this.addForm.controls;
  }
}
