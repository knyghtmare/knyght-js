import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData() {
    return [
      {
        name: "Ishty",
        online: true
      },
      {
        name: "ABC",
        online: true
      },
      {
        name: "DEF",
        online: true
      },
    ]
  }
}
