import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.getAllProfile();
  }

  addProfile() {
    this.router.navigate(["add-profile"]);
  }

  getAllProfile(): void {
    this.profileService.getAllProfiles().subscribe(data => {
      this.profiles = data;
      console.log(this.profiles);
    });
  }

  updateProfile(profile: Profile) {
    this.router.navigate(["profile/" + profile.id]);
  }

  deleteProfile(profile: Profile) {
    if (!confirm("Are you sure delete this Profile?")) return;
    this.profileService.deleteProfile(profile.id).subscribe(data => {
      console.log(data);
      this.router.navigate(["/"]);
    });
  }

}
