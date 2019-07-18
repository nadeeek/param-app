import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Profile } from "../models/profile";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000/";

  getAllProfiles(): Observable<any> {
    return this.http.get<Profile[]>(this.baseurl + "profile");
  }

  addProfile(profile: Profile) {
    return this.http.post(this.baseurl + "profile", profile);
  }

  getProfileById(id: string) {
    return this.http.get<Profile>(this.baseurl + "profile" + "/" + id);
  }

  updateProfile(profile: Profile, id) {
    return this.http.put(this.baseurl + "profile" + "/" + id, profile);
  }

  deleteProfile(id: Number) {
    return this.http.delete(this.baseurl + "profile" + "/" + id);
  }
}
