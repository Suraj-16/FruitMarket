import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartDetail } from '../Models/cartDetail';

@Injectable({
  providedIn: 'root'
})
export class CartdetailsService {

  baseUrl = "https://localhost:44330/api/cartDetails/";

  constructor(private http: HttpClient) { }

  addFruitToCart(cartItem : cartDetail) : Observable <any>{
    return this.http.post<cartDetail>(this.baseUrl + "addtocart", cartItem);
  }

  displayCartItems(userid : number) : Observable <any>{
    return this.http.get<any>(this.baseUrl + "displayitems/" + userid);
  }

  removeCartItem(cartid : number) : Observable <any>{
    return this.http.delete<cartDetail>(this.baseUrl + cartid);
  }

  getCartItem(cartid : number){
    return this.http.get<cartDetail>(this.baseUrl + "getitem/" + cartid);
  }
}
