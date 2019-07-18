import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ParameterType } from "../models/parameter-type";

@Injectable({
  providedIn: "root"
})
export class ParameterTypeService {
  baseurl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAllParameterType(): Observable<any> {
    return this.http.get<ParameterType[]>(this.baseurl + "parameter_type");
  }

  addParameterType(parameter_type: ParameterType) {
    return this.http.post(this.baseurl + "parameter_type", parameter_type);
  }

  getParameterTypeById(id: string) {
    return this.http.get<ParameterType>(
      this.baseurl + "parameter_type" + "/" + id
    );
  }

  updateParameterType(parameter_type: ParameterType, id) {
    return this.http.put(
      this.baseurl + "parameter_type" + "/" + id,
      parameter_type
    );
  }

  deleteParameterType(id: Number) {
    return this.http.delete(this.baseurl + "parameter_type" + "/" + id);
  }
}
