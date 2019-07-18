import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Parameter } from "../models/parameter";

@Injectable({
  providedIn: "root"
})
export class ParameterService {
  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000/";

  getAllParameters(): Observable<any> {
    return this.http.get<Parameter[]>(this.baseurl + "parameter");
  }

  addParameter(parameter: Parameter) {
    return this.http.post(this.baseurl + "parameter", parameter);
  }

  deleteParameter(id: Number) {
    return this.http.delete(this.baseurl + "parameter" + "/" + id);
  }

  getParameterById(id: string) {
    return this.http.get<Parameter>(this.baseurl + "parameter" + "/" + id);
  }

  updateParameter(parameter: Parameter, id) {
    return this.http.put(this.baseurl + "parameter" + "/" + id, parameter);
  }
}
