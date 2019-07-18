import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProfileService } from '../services/profile.service';
import { take } from "rxjs/operators";

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  id;
  profile = {};
  constructor
    (private formBuilder: FormBuilder,
      private profileService: ProfileService,
      private router: Router,
      private activatedRouter: ActivatedRoute) {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    this.profileService
      .getProfileById(this.id)
      .pipe(take(1))
      .subscribe(data => {
        this.profile = data;
        // console.log(this.parameter);
      });
  }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ["", Validators.required],
      logical_id: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.addForm.valid) {
      if (this.id) {
        this.profileService
          .updateProfile(this.addForm.value, this.id)
          .subscribe(data => {
            // console.log(data);
            this.router.navigate(["/profile"]);
          });
      } else {
        this.profileService
          .addProfile(this.addForm.value)
          .subscribe(data => {
            // console.log(data);
            this.router.navigate(["/profile"]);
          });
      }
    }
  }

  // get the form short name to access the form fields
  get f() {
    return this.addForm.controls;
  }

}
