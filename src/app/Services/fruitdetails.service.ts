import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fruitDetail } from '../Models/fruitDetail';

@Injectable({
  providedIn: 'root'
})
export class FruitdetailsService {

  constructor(private http : HttpClient) { }

  baseUrl = "https://localhost:44330/api/fruitdetails";

  getFruitDetails() : Observable <any>{
    return this.http.get<any>(this.baseUrl);
  }

  addFruitDetals(fruitdetails : fruitDetail) : Observable <any>{
    return this.http.post<fruitDetail>(this.baseUrl, fruitdetails);
  }
}
