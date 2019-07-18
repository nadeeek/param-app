import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Measurement } from '../models/measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  baseurl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAllMeasurement(): Observable<any> {
    return this.http.get<Measurement>(this.baseurl + "measurement");
  }
}
