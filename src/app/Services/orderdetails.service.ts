import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderDetail } from '../Models/orderDetail';
import { Observable } from 'rxjs';
import { cartDetail } from '../Models/cartDetail';
import { orderItem } from '../Models/orderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {
  baseUrl = "https://localhost:44330/api/order/";
  constructor(private http : HttpClient) { }

  addOrderItem(orderitem : orderDetail) : Observable <any> {
    return this.http.post<orderDetail>(this.baseUrl, orderitem);
  }

  displayOrederItem(userid : number) : Observable <any>{
    return this.http.get<orderItem>(this.baseUrl + userid);
  }

  cancelOrder(orderid : number){
    return this.http.delete(this.baseUrl + orderid);
  }
}
